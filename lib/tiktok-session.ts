// Lightweight in-memory store for TikTok anonymous session cookies per profile lookup.
// Used only when TikTok CDN playback/download requires matching session cookies (e.g. tt_chain_token).

interface SessionEntry {
  cookieHeader: string;
  expiresAt: number;
}

const sessionStore = new Map<string, SessionEntry>();
const SESSION_TTL_MS = 30 * 60 * 1000; // 30 minutes

export function setUserSessionCookies(username: string, cookieHeader: string): void {
  const key = username.replace(/^@+/, '').trim().toLowerCase();
  if (!key || !cookieHeader) return;

  sessionStore.set(key, {
    cookieHeader,
    expiresAt: Date.now() + SESSION_TTL_MS,
  });

  if (sessionStore.size > 500) {
    const now = Date.now();
    for (const [k, v] of sessionStore.entries()) {
      if (v.expiresAt < now) sessionStore.delete(k);
    }
  }
}

export function getUserSessionCookies(username: string): string {
  const key = username.replace(/^@+/, '').trim().toLowerCase();
  if (!key) return '';

  const entry = sessionStore.get(key);
  if (!entry) return '';
  if (entry.expiresAt < Date.now()) {
    sessionStore.delete(key);
    return '';
  }
  return entry.cookieHeader;
}

export function mergeCookieStrings(existing: string, setCookieHeaders: string[]): string {
  const cookieMap = new Map<string, string>();

  if (existing) {
    for (const part of existing.split(';')) {
      const idx = part.indexOf('=');
      if (idx > 0) {
        const name = part.slice(0, idx).trim();
        const val = part.slice(idx + 1).trim();
        if (name) cookieMap.set(name, val);
      }
    }
  }

  for (const raw of setCookieHeaders) {
    const firstSemi = raw.indexOf(';');
    const pair = firstSemi !== -1 ? raw.slice(0, firstSemi) : raw;
    const idx = pair.indexOf('=');
    if (idx > 0) {
      const name = pair.slice(0, idx).trim();
      const val = pair.slice(idx + 1).trim();
      if (name) cookieMap.set(name, val);
    }
  }

  return Array.from(cookieMap.entries())
    .map(([k, v]) => `${k}=${v}`)
    .join('; ');
}
