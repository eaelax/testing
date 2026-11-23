export type LanguageCode =
  | 'en'
  | 'ar'
  | 'fr'
  | 'es'
  | 'de'
  | 'ru'
  | 'zh'
  | 'pt'
  | 'he'
  | 'hi';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  native: string;
  locale: string;
  dir: 'ltr' | 'rtl';
  isDefault?: boolean;
}

export const I18N_STORAGE_KEY = 'tpv_selected_language';
export const I18N_COOKIE_NAME = 'tpv_lang';

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  {
    code: 'en',
    name: 'English',
    native: 'English',
    locale: 'en-US',
    dir: 'ltr',
    isDefault: true,
  },
  {
    code: 'ar',
    name: 'Arabic',
    native: 'العربية',
    locale: 'ar',
    dir: 'rtl',
  },
  {
    code: 'fr',
    name: 'French',
    native: 'Français',
    locale: 'fr-FR',
    dir: 'ltr',
  },
  {
    code: 'es',
    name: 'Spanish',
    native: 'Español',
    locale: 'es-ES',
    dir: 'ltr',
  },
  {
    code: 'de',
    name: 'German',
    native: 'Deutsch',
    locale: 'de-DE',
    dir: 'ltr',
  },
  {
    code: 'ru',
    name: 'Russian',
    native: 'Русский',
    locale: 'ru-RU',
    dir: 'ltr',
  },
  {
    code: 'zh',
    name: 'Chinese',
    native: '中文',
    locale: 'zh-CN',
    dir: 'ltr',
  },
  {
    code: 'pt',
    name: 'Portuguese',
    native: 'Português',
    locale: 'pt-BR',
    dir: 'ltr',
  },
  {
    code: 'he',
    name: 'Hebrew',
    native: 'עברית',
    locale: 'he-IL',
    dir: 'rtl',
  },
  {
    code: 'hi',
    name: 'Hindi',
    native: 'हिन्दी',
    locale: 'hi-IN',
    dir: 'ltr',
  },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export type TranslationMap = Record<string, string>;

export type LanguageDictionaries = Record<LanguageCode, TranslationMap>;

export function isSupportedLanguage(code: string): code is LanguageCode {
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === code);
}

export function getLanguageInfo(code: LanguageCode): LanguageInfo {
  return (
    SUPPORTED_LANGUAGES.find((lang) => lang.code === code) ||
    SUPPORTED_LANGUAGES[0]
  );
}

export function getLocaleTag(code: LanguageCode): string {
  return getLanguageInfo(code).locale;
}