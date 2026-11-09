'use client';

import { useSiteSettings, AdPlacement } from '@/lib/settings-store';
import { useEffect, useRef } from 'react';

interface AdSlotProps {
  placement: AdPlacement['placement'];
  className?: string;
}

export default function AdSlot({ placement, className = '' }: AdSlotProps) {
  const [settings] = useSiteSettings();
  const containerRef = useRef<HTMLDivElement>(null);

  const ad = settings.ads?.find((a) => a.placement === placement && a.enabled);

  useEffect(() => {
    if (!ad || !ad.code || !containerRef.current) return;

    // Check if the code contains <script> tags and execute them safely
    const container = containerRef.current;
    container.innerHTML = ad.code;

    const scripts = container.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      const newScript = document.createElement('script');
      Array.from(script.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.appendChild(document.createTextNode(script.innerHTML));
      script.parentNode?.replaceChild(newScript, script);
    }
  }, [ad]);

  // Only render if ad exists, is enabled, and has real custom ad code
  if (
    !ad ||
    !ad.enabled ||
    !ad.code ||
    !ad.code.trim() ||
    ad.code.includes('ad-placeholder')
  ) {
    return null;
  }

  // Dimension sizing classes
  const dimensionClasses: Record<AdPlacement['dimension'], string> = {
    '728x90': 'w-[728px] max-w-full h-[90px]',
    '300x250': 'w-[300px] max-w-full h-[250px]',
    '336x280': 'w-[336px] max-w-full h-[280px]',
    '320x100': 'w-[320px] max-w-full h-[100px]',
    '300x600': 'w-[300px] max-w-full h-[600px]',
    responsive: 'w-full min-h-[60px]',
  };

  const dimClass = dimensionClasses[ad.dimension] || 'w-full';

  return (
    <div className={`flex flex-col items-center justify-center my-3 select-none ${className}`}>
      <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
        <span>Sponsored</span>
        <span className="text-slate-300">•</span>
        <span className="font-mono text-[9px] text-slate-400">{ad.dimension}</span>
      </div>

      <div
        className={`relative overflow-hidden rounded-xl border border-slate-200/90 bg-white/70 backdrop-blur-xs flex items-center justify-center shadow-2xs ${dimClass}`}
      >
        {ad.code ? (
          <div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center overflow-hidden"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-[11px] font-bold text-slate-700">{ad.name}</span>
            <span className="text-[10px] text-slate-400 mt-0.5">
              Configure this ad in <strong className="text-slate-600">/admintiktok</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
