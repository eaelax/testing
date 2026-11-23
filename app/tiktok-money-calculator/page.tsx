'use client';

import { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  Sparkles,
  PieChart,
  HelpCircle,
  Award,
  Video,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { useI18n } from '@/lib/i18n/context';

export default function MoneyCalculatorPage() {
  const { t } = useI18n();
  const [followers, setFollowers] = useState<number>(50000);
  const [avgViews, setAvgViews] = useState<number>(25000);
  const [nicheCpm, setNicheCpm] = useState<number>(2.5);
  const [monthlyPosts, setMonthlyPosts] = useState<number>(12);

  const qualifiedViewsPerPost = avgViews * 0.6;
  const rewardsMonthly = Math.round(
    ((qualifiedViewsPerPost * monthlyPosts) / 1000) * (nicheCpm * 0.35)
  );

  const sponsorPerPostLow = Math.max(
    25,
    Math.round((followers / 1000) * 1.5 + (avgViews / 1000) * 2)
  );
  const sponsorPerPostHigh = Math.max(
    50,
    Math.round((followers / 1000) * 4.0 + (avgViews / 1000) * 5)
  );

  const liveAffiliateMonthly = Math.round(
    (followers / 1000) * 8 + (avgViews / 1000) * 3
  );

  const totalMonthlyLow =
    rewardsMonthly + sponsorPerPostLow * 2 + liveAffiliateMonthly;
  const totalMonthlyHigh =
    rewardsMonthly + sponsorPerPostHigh * 4 + liveAffiliateMonthly * 2;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{`${t('page.money.title')} - Tik Profiles Viewer`}</title>
      <meta name="description" content={t('page.money.subtitle')} />
      <link
        rel="canonical"
        href="https://tikprofilesviewer.com/tiktok-money-calculator"
      />

      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
        <Breadcrumbs
          items={[
            {
              label: 'TikTok Money Calculator',
              translationKey: 'page.money.crumb',
            },
          ]}
        />
        <AdSlot placement="header" />

        {/* Hero Header */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            {t('page.money.title')}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            {t('page.money.subtitle')}
          </p>
        </div>

        {/* Interactive Calculator Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-4 shadow-[var(--shadow-card)]">
            <h2 className="text-sm font-bold text-[var(--ink-primary)] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent-cyan-text)]" />
              <span>{t('page.money.inputTitle')}</span>
            </h2>

            {/* Followers Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[var(--ink-primary)]">
                  {t('page.money.totalFollowers')}
                </span>
                <span
                  data-no-translate="true"
                  className="font-mono text-[var(--accent-cyan-text)] tabular-nums"
                >
                  {followers.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="2000000"
                step="5000"
                aria-label="Total followers"
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full h-2 bg-[var(--surface-sunken)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-cyan)]"
              />
              <div className="flex justify-between text-[10px] text-[var(--ink-muted)] mt-1 tabular-nums">
                <span>1K</span>
                <span>500K</span>
                <span>1M</span>
                <span>2M+</span>
              </div>
            </div>

            {/* Average Views Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[var(--ink-primary)]">
                  {t('page.money.avgViews')}
                </span>
                <span
                  data-no-translate="true"
                  className="font-mono text-[var(--accent-primary-text)] tabular-nums"
                >
                  {avgViews.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="1000000"
                step="2500"
                aria-label="Average views per video"
                value={avgViews}
                onChange={(e) => setAvgViews(Number(e.target.value))}
                className="w-full h-2 bg-[var(--surface-sunken)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-primary)]"
              />
              <div className="flex justify-between text-[10px] text-[var(--ink-muted)] mt-1 tabular-nums">
                <span>500</span>
                <span>100K</span>
                <span>500K</span>
                <span>1M+</span>
              </div>
            </div>

            {/* Monthly Posts Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[var(--ink-primary)]">
                  {t('page.money.monthlyUploads')}
                </span>
                <span className="font-mono text-[var(--ink-primary)] tabular-nums">
                  {t('page.money.videosUnit', { count: monthlyPosts })}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                step="1"
                aria-label="Monthly video uploads"
                value={monthlyPosts}
                onChange={(e) => setMonthlyPosts(Number(e.target.value))}
                className="w-full h-2 bg-[var(--surface-sunken)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-dark)]"
              />
            </div>

            {/* Content Category Niche */}
            <div>
              <label
                htmlFor="niche-selector"
                className="block text-xs font-bold text-[var(--ink-primary)] mb-1"
              >
                {t('page.money.nicheLabel')}
              </label>
              <select
                id="niche-selector"
                value={nicheCpm}
                onChange={(e) => setNicheCpm(Number(e.target.value))}
                className="w-full h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-xs font-medium text-[var(--ink-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
              >
                <option value={4.5}>
                  Finance, Investing &amp; Real Estate (High RPM)
                </option>
                <option value={3.5}>
                  Tech, Gadgets &amp; Software (Medium-High RPM)
                </option>
                <option value={2.8}>Fitness, Health &amp; Wellness</option>
                <option value={2.2}>Beauty, Fashion &amp; Lifestyle</option>
                <option value={1.5}>
                  Gaming, Entertainment &amp; Comedy (Standard RPM)
                </option>
              </select>
            </div>
          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between shadow-[var(--shadow-card)]">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-muted)] mb-1">
                {t('page.money.projectedTitle')}
              </div>
              <div
                data-no-translate="true"
                className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight tabular-nums"
              >
                ${totalMonthlyLow.toLocaleString()} - $
                {totalMonthlyHigh.toLocaleString()}
              </div>
              <p className="text-xs text-[var(--ink-secondary)] mt-1">
                {t('page.money.projectedDesc')}
              </p>

              {/* Breakdown List */}
              <div className="mt-4 pt-3.5 border-t border-[var(--border-subtle)] space-y-2.5 text-xs tabular-nums">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[var(--ink-secondary)]">
                    <Award className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
                    <span>{t('page.money.sponsoredPost')}</span>
                  </span>
                  <span
                    data-no-translate="true"
                    className="font-bold text-[var(--ink-primary)]"
                  >
                    ${sponsorPerPostLow.toLocaleString()} - $
                    {sponsorPerPostHigh.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[var(--ink-secondary)]">
                    <Video className="w-3.5 h-3.5 text-[var(--accent-primary-text)]" />
                    <span>{t('page.money.rewardsProgram')}</span>
                  </span>
                  <span
                    data-no-translate="true"
                    className="font-bold text-[var(--ink-primary)]"
                  >
                    ~${rewardsMonthly.toLocaleString()}/mo
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[var(--ink-secondary)]">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
                    <span>{t('page.money.liveAffiliate')}</span>
                  </span>
                  <span
                    data-no-translate="true"
                    className="font-bold text-[var(--ink-primary)]"
                  >
                    ~${liveAffiliateMonthly.toLocaleString()}/mo
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--ink-muted)] leading-relaxed">
              {t('toolPage.money.disclaimer')}
            </div>
          </div>
        </div>

        {/* Informational Guidance */}
        <section className="mt-7 pt-7 border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
            <TrendingUp className="w-4 h-4 text-[var(--accent-cyan-text)] mb-1.5" />
            <h3 className="text-sm font-bold text-[var(--ink-primary)] mb-1">
              {t('toolPage.money.card1Title')}
            </h3>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.money.card1Desc')}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
            <PieChart className="w-4 h-4 text-[var(--accent-primary-text)] mb-1.5" />
            <h3 className="text-sm font-bold text-[var(--ink-primary)] mb-1">
              {t('toolPage.money.card2Title')}
            </h3>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.money.card2Desc')}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
            <HelpCircle className="w-4 h-4 text-[var(--accent-cyan-text)] mb-1.5" />
            <h3 className="text-sm font-bold text-[var(--ink-primary)] mb-1">
              {t('toolPage.money.card3Title')}
            </h3>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.money.card3Desc')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}