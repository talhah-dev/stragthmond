"use client";

import SiteFooter from '@/components/Footer'
import HomeAboutQuote from '@/components/Home/HomeAboutQuote'
import HomeCommunities from '@/components/Home/HomeCommunities'
import HomeFeaturedProperties from '@/components/Home/HomeFeaturedProperties'
import HomeHero from '@/components/Home/HomeHero'
import HomeNewsInsights from '@/components/Home/HomeNewsInsights'
import HomeLogoMarquee from '@/components/Home/HomePartnersLoop'
import HomeServices from '@/components/Home/HomeServices'
import HomeTimeline from '@/components/Home/HomeTimeline'
import HomeVideoFeatureSection from '@/components/Home/HomeVideoFeatureSection'
import SiteNavbar from '@/components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function HomePg() {
    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, []);
    return (
        <div>
            <SiteNavbar />
            <HomeHero />
            {/* <HomeLogoMarquee /> */}
            <HomeAboutQuote />
            {/* <section className="bg-[#F8F8FF]">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="rounded-[28px] bg-white p-8 ring-1 ring-[#00292D]/10 sm:p-10">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                            <div className="max-w-3xl">
                                <p className="text-xs font-semibold tracking-widest text-[#00292D]/60">
                                    STRATHMOND STANDARD
                                </p>

                                <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight text-[#00292D] sm:text-3xl">
                                    “A premium real estate experience is not about more listings —
                                    it’s about better decisions, backed by clarity, structure, and trust.”
                                </h2>

                                <p className="mt-4 text-sm text-[#00292D]/65 sm:text-base">
                                    We curate, verify, and guide you through every step — whether you’re buying,
                                    renting, selling, or exploring off-plan opportunities.
                                </p>
                            </div>

                            <div className="shrink-0">
                                <div className="inline-flex items-center gap-2 rounded-full bg-[#FFEEB4] px-4 py-2 text-sm font-semibold text-[#00292D]">
                                    Clarity. Structure. Confidence.
                                </div>

                                <div className="mt-4 h-1 w-full max-w-[260px] rounded-full bg-[#00292D]/10">
                                    <div className="h-full w-2/3 rounded-full bg-[#AFF8C8]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <HomeServices />
            <HomeVideoFeatureSection />
            <HomeTimeline />
            <HomeFeaturedProperties />
            <HomeCommunities />
            {/* <HomeWhyStrathmond /> */}
            <HomeNewsInsights />
            <SiteFooter />
        </div>
    )
}
