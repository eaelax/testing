'use client';


export interface AdPlacement {
  id: string;
  name: string;
  placement: 'modal' | 'header' | 'above_grid' | 'in_grid' | 'footer' | 'sidebar';
  dimension: 'responsive' | '728x90' | '300x250' | '336x280' | '320x100' | '300x600';
  code: string;
  enabled: boolean;
  notes?: string;
}

export interface SiteSettings {
  siteName: string;
  domainName: string;
  downloadCounterSeconds: number; // e.g. 5
  downloadPreparingText: string;
  downloadSuccessText: string;
  announcementEnabled: boolean;
  announcementText: string;
  announcementLink?: string;
  customHeadCode?: string;
  ads: AdPlacement[];
}

export const DEFAULT_SETTINGS: SiteSettings = {
  siteName: 'Tik Profiles Viewer',
  domainName: 'TikProfilesViewer.com',
  downloadCounterSeconds: 5,
  downloadPreparingText: 'Preparing clean HD video stream in background...',
  downloadSuccessText: 'Your download is ready! Starting download...',
  announcementEnabled: false,
  announcementText: '🔥 New: High-speed HD Video & MP3 Audio Downloader without watermarks!',
  announcementLink: '/tiktok-video-downloader',
  customHeadCode: '',
  ads: [
    {
      id: 'ad-modal-1',
      name: 'Download Modal Sponsored Banner',
      placement: 'modal',
      dimension: '300x250',
      code: '',
      enabled: false,
      notes: 'Shown inside the countdown download modal while preparing the video.',
    },
    {
      id: 'ad-header-1',
      name: 'Header Top Leaderboard',
      placement: 'header',
      dimension: '728x90',
      code: '',
      enabled: false,
      notes: 'Displayed on top of pages under navigation.',
    },
    {
      id: 'ad-above-grid-1',
      name: 'Above Videos Grid Banner',
      placement: 'above_grid',
      dimension: 'responsive',
      code: '',
      enabled: false,
      notes: 'Placed above the TikTok videos grid for high engagement.',
    },
    {
      id: 'ad-footer-1',
      name: 'Footer Leaderboard Banner',
      placement: 'footer',
      dimension: '728x90',
      code: '',
      enabled: false,
      notes: 'Placed directly above the main footer columns.',
    },
  ],
};

const SETTINGS_KEY = 'tpv_site_settings_v1';
const SETTINGS_CHANGE_EVENT = 'tpv_settings_updated';

export function getStoredSettings(): SiteSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    const cleanedAds = Array.isArray(parsed.ads)
      ? parsed.ads.map((ad: AdPlacement) => {
          // If ad code was the previous placeholder, clean it out
          if (ad.code && ad.code.includes('ad-placeholder')) {
            return { ...ad, code: '', enabled: false };
          }
          return ad;
        })
      : DEFAULT_SETTINGS.ads;

    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      ads: cleanedAds,
    };
  } catch (err) {
    console.warn('Failed to parse stored settings:', err);
    return DEFAULT_SETTINGS;
  }
}

export function saveStoredSettings(settings: SiteSettings) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent(SETTINGS_CHANGE_EVENT, { detail: settings }));
  } catch (err) {
    console.error('Failed to save settings:', err);
  }
}

import { useSyncExternalStore } from 'react';

let memoryCache: SiteSettings | null = null;
let lastRaw: string | null = null;

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(SETTINGS_CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(SETTINGS_CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): SiteSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (raw === lastRaw && memoryCache) return memoryCache;
  lastRaw = raw;
  memoryCache = getStoredSettings();
  return memoryCache;
}

function getServerSnapshot(): SiteSettings {
  return DEFAULT_SETTINGS;
}

export function useSiteSettings(): [SiteSettings, (newSettings: SiteSettings) => void] {
  const settings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const update = (newSettings: SiteSettings) => {
    saveStoredSettings(newSettings);
  };

  return [settings, update];
}
