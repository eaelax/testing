'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import {
  DEFAULT_LANGUAGE,
  I18N_COOKIE_NAME,
  I18N_STORAGE_KEY,
  LanguageCode,
  LanguageInfo,
  SUPPORTED_LANGUAGES,
  getLanguageInfo,
  isSupportedLanguage,
} from './types';
import { UI_DICTIONARIES } from './dictionaries-ui';
import { PAGE_DICTIONARIES, PHRASE_TRANSLATIONS } from './dictionaries-pages';
import { TOOL_DICTIONARIES } from './dictionaries-tools';

const LANG_CHANGE_EVENT = 'tpv:language-changed';

type InterpolationVars = Record<string, string | number>;

interface I18nContextValue {
  lang: LanguageCode;
  languageInfo: LanguageInfo;
  locale: string;
  dir: 'ltr' | 'rtl';
  languages: LanguageInfo[];
  setLanguage: (code: LanguageCode) => void;
  t: (key: string, vars?: InterpolationVars) => string;
  translateText: (text: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const EN_VALUE_TO_KEY = new Map<string, string>();
for (const [k, v] of Object.entries(UI_DICTIONARIES.en)) {
  if (!EN_VALUE_TO_KEY.has(v)) {
    EN_VALUE_TO_KEY.set(v, k);
  }
}
for (const [k, v] of Object.entries(PAGE_DICTIONARIES.en)) {
  if (!EN_VALUE_TO_KEY.has(v)) {
    EN_VALUE_TO_KEY.set(v, k);
  }
}
for (const [k, v] of Object.entries(TOOL_DICTIONARIES.en)) {
  if (!EN_VALUE_TO_KEY.has(v)) {
    EN_VALUE_TO_KEY.set(v, k);
  }
}

function interpolate(template: string, vars?: InterpolationVars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, token: string) => {
    const val = vars[token];
    return val !== undefined && val !== null ? String(val) : `{${token}}`;
  });
}

function lookupKey(lang: LanguageCode, key: string): string | undefined {
  return (
    UI_DICTIONARIES[lang]?.[key] ??
    PAGE_DICTIONARIES[lang]?.[key] ??
    TOOL_DICTIONARIES[lang]?.[key] ??
    UI_DICTIONARIES.en[key] ??
    PAGE_DICTIONARIES.en[key] ??
    TOOL_DICTIONARIES.en[key]
  );
}

function lookupPhrase(lang: LanguageCode, rawText: string): string | undefined {
  if (lang === 'en') return undefined;
  const trimmed = rawText.trim();
  if (!trimmed) return undefined;

  const phraseMap = PHRASE_TRANSLATIONS[lang];
  if (phraseMap && phraseMap[trimmed]) {
    return phraseMap[trimmed];
  }

  const matchedKey = EN_VALUE_TO_KEY.get(trimmed);
  if (matchedKey) {
    return (
      UI_DICTIONARIES[lang]?.[matchedKey] ??
      PAGE_DICTIONARIES[lang]?.[matchedKey] ??
      TOOL_DICTIONARIES[lang]?.[matchedKey]
    );
  }

  return undefined;
}

function readPersistedLanguage(): LanguageCode {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  try {
    const stored = window.localStorage.getItem(I18N_STORAGE_KEY);
    if (stored && isSupportedLanguage(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage read errors
  }

  try {
    const cookieParts = document.cookie.split(';');
    for (const part of cookieParts) {
      const [rawKey, rawVal] = part.trim().split('=');
      if (rawKey === I18N_COOKIE_NAME && rawVal) {
        const decoded = decodeURIComponent(rawVal);
        if (isSupportedLanguage(decoded)) {
          return decoded;
        }
      }
    }
  } catch {
    // Ignore cookie read errors
  }

  return DEFAULT_LANGUAGE;
}

function persistLanguage(code: LanguageCode): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(I18N_STORAGE_KEY, code);
  } catch {
    // Ignore storage write errors
  }
  try {
    document.cookie = `${I18N_COOKIE_NAME}=${encodeURIComponent(code)}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // Ignore cookie write errors
  }
}

const ORIGINAL_NODE_TEXT = new WeakMap<Text, string>();

function shouldSkipElement(el: Element | null): boolean {
  if (!el) return true;
  const tag = el.tagName;
  if (
    tag === 'SCRIPT' ||
    tag === 'STYLE' ||
    tag === 'CODE' ||
    tag === 'PRE' ||
    tag === 'TEXTAREA' ||
    tag === 'INPUT' ||
    tag === 'NOSCRIPT'
  ) {
    return true;
  }
  if (el.closest('[data-no-translate="true"]')) {
    return true;
  }
  return false;
}

function applyAutoTranslationPass(lang: LanguageCode): void {
  if (typeof document === 'undefined') return;
  const containers = document.querySelectorAll('[data-auto-translate="true"]');
  if (!containers.length) return;

  containers.forEach((container) => {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const textNode = node as Text;
      const parentEl = textNode.parentElement;
      if (!shouldSkipElement(parentEl)) {
        let original = ORIGINAL_NODE_TEXT.get(textNode);
        if (original === undefined) {
          original = textNode.nodeValue ?? '';
          ORIGINAL_NODE_TEXT.set(textNode, original);
        }

        if (lang === 'en') {
          if (textNode.nodeValue !== original) {
            textNode.nodeValue = original;
          }
        } else {
          const trimmed = original.trim();
          if (trimmed && !trimmed.startsWith('@') && !trimmed.startsWith('http')) {
            const translated = lookupPhrase(lang, trimmed);
            if (translated) {
              const leading = original.match(/^\s*/)?.[0] ?? '';
              const trailing = original.match(/\s*$/)?.[0] ?? '';
              const nextValue = `${leading}${translated}${trailing}`;
              if (textNode.nodeValue !== nextValue) {
                textNode.nodeValue = nextValue;
              }
            }
          }
        }
      }
      node = walker.nextNode();
    }
  });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const persisted = readPersistedLanguage();
    if (persisted !== DEFAULT_LANGUAGE) {
      setLang(persisted);
    }

    const handleStorage = (e: StorageEvent) => {
      if (
        e.key === I18N_STORAGE_KEY &&
        e.newValue &&
        isSupportedLanguage(e.newValue)
      ) {
        setLang(e.newValue);
      }
    };

    const handleCustom = (e: Event) => {
      const custom = e as CustomEvent<{ lang?: string }>;
      if (custom.detail?.lang && isSupportedLanguage(custom.detail.lang)) {
        setLang(custom.detail.lang);
      }
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener(LANG_CHANGE_EVENT, handleCustom);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener(LANG_CHANGE_EVENT, handleCustom);
    };
  }, []);

  const languageInfo = useMemo(() => getLanguageInfo(lang), [lang]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = languageInfo.code;
    document.documentElement.dir = languageInfo.dir;

    applyAutoTranslationPass(lang);

    if (lang === 'en') return;

    const observer = new MutationObserver(() => {
      applyAutoTranslationPass(lang);
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [lang, languageInfo]);

  const setLanguage = useCallback((code: LanguageCode) => {
    setLang(code);
    persistLanguage(code);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent(LANG_CHANGE_EVENT, { detail: { lang: code } })
      );
    }
  }, []);

  const t = useCallback(
    (key: string, vars?: InterpolationVars): string => {
      const resolved = lookupKey(lang, key) ?? key;
      return interpolate(resolved, vars);
    },
    [lang]
  );

  const translateText = useCallback(
    (text: string): string => {
      if (lang === 'en' || !text) return text;
      return lookupPhrase(lang, text) ?? text;
    },
    [lang]
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      languageInfo,
      locale: languageInfo.locale,
      dir: languageInfo.dir,
      languages: SUPPORTED_LANGUAGES,
      setLanguage,
      t,
      translateText,
    }),
    [lang, languageInfo, setLanguage, t, translateText]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (ctx) return ctx;

  return {
    lang: DEFAULT_LANGUAGE,
    languageInfo: SUPPORTED_LANGUAGES[0],
    locale: SUPPORTED_LANGUAGES[0].locale,
    dir: 'ltr',
    languages: SUPPORTED_LANGUAGES,
    setLanguage: () => {},
    t: (key: string, vars?: InterpolationVars) => {
      const resolved = lookupKey(DEFAULT_LANGUAGE, key) ?? key;
      return interpolate(resolved, vars);
    },
    translateText: (text: string) => text,
  };
}