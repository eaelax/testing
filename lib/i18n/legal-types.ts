export type LegalPolicyId =
  | 'terms-of-service'
  | 'privacy-policy'
  | 'cookie-policy'
  | 'disclaimer'
  | 'legal-notice'
  | 'copyright-policy'
  | 'tiktok-independence-disclaimer'
  | 'public-content-policy'
  | 'content-removal-policy'
  | 'acceptable-use-policy'
  | 'security-policy'
  | 'service-availability-policy';

export interface LegalListItem {
  label?: string;
  text: string;
  linkHref?: string;
  linkText?: string;
  afterText?: string;
}

export interface LegalCalloutItem {
  label: string;
  value: string;
  isCode?: boolean;
  mailto?: string;
  href?: string;
}

export interface LegalInlineLink {
  prefix?: string;
  text: string;
  href: string;
  external?: boolean;
  suffix?: string;
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: {
    ordered?: boolean;
    items: LegalListItem[];
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: LegalCalloutItem[];
  links?: LegalInlineLink[];
  footnote?: string;
}

export interface LegalPolicyDocument {
  title: string;
  subtitle: string;
  summary: string;
  sections: LegalSection[];
}

export type LegalPackMap = Record<LegalPolicyId, LegalPolicyDocument>;