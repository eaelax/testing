import type { LanguageCode } from './types';
import type { LegalPolicyId, LegalPolicyDocument, LegalPackMap } from './legal-types';
import {
  LEGAL_PACK_EN,
  LEGAL_PACK_FR,
  LEGAL_PACK_ES,
  LEGAL_PACK_DE,
} from './legal-pack-en-eu';
import {
  LEGAL_PACK_AR,
  LEGAL_PACK_HE,
  LEGAL_PACK_RU,
} from './legal-pack-rtl-ru';
import {
  LEGAL_PACK_ZH,
  LEGAL_PACK_PT,
  LEGAL_PACK_HI,
} from './legal-pack-asia-pt';

const LEGAL_PACKS: Record<LanguageCode, LegalPackMap> = {
  en: LEGAL_PACK_EN,
  ar: LEGAL_PACK_AR,
  fr: LEGAL_PACK_FR,
  es: LEGAL_PACK_ES,
  de: LEGAL_PACK_DE,
  ru: LEGAL_PACK_RU,
  zh: LEGAL_PACK_ZH,
  pt: LEGAL_PACK_PT,
  he: LEGAL_PACK_HE,
  hi: LEGAL_PACK_HI,
};

export function getLocalizedLegalPolicy(
  id: LegalPolicyId,
  lang: LanguageCode
): LegalPolicyDocument {
  const pack = LEGAL_PACKS[lang] ?? LEGAL_PACKS.en;
  const doc = pack[id] ?? LEGAL_PACKS.en[id];
  return doc;
}