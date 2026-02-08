"use client";

import React from "react";
import Link from "next/link";
import HeroSections from "@/components/HeroSections";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    ArrowRight,
    BadgeCheck,
    ClipboardCheck,
    Handshake,
    LineChart,
    Megaphone,
    ShieldCheck,
    Sparkles,
    Target,
    Timer,
    TrendingUp,
    Users,
} from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#00292D]/75 ring-1 ring-[#00292D]/10">
            {children}
        </span>
    );
}

function FeatureCard({
    icon: Icon,
    title,
    desc,
}: {
    icon: React.ElementType;
    title: string;
    desc: string;
}) {
    return (
        <div data-aos="fade-up" className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start gap-3">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF]">
                    <Icon className="h-6 w-6" />
                </span>
                <div>
                    <div className="text-base font-semibold text-[#00292D]">{title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-[#00292D]/70">{desc}</div>
                </div>
            </div>
        </div>
    );
}

function StepCard({
    step,
    title,
    desc,
}: {
    step: string;
    title: string;
    desc: string;
}) {
    return (
        <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10">
            <div className="flex items-start justify-between gap-4">
                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">{step}</div>
                <span className="rounded-full bg-[#FFEEB4] px-3 py-1 text-xs font-semibold text-[#00292D]">
                    Strathmond
                </span>
            </div>
            <div className="mt-3 text-lg font-semibold text-[#00292D]">{title}</div>
            <div className="mt-2 text-sm leading-relaxed text-[#00292D]/70">{desc}</div>
        </div>
    );
}

function FAQ({ q, a }: { q: string; a: string }) {
    return (
        <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10">
            <div className="text-sm font-semibold text-[#00292D]">{q}</div>
            <div className="mt-2 text-sm leading-relaxed text-[#00292D]/70">{a}</div>
        </div>
    );
}

export default function WhySellPropertyDubaiPage() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] md:px-5 px-3 rounded-xl pt-3 overflow-hidden">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Sell Property"
                    subheading="A premium selling experience—positioning, pricing, marketing, and negotiation handled with clarity."
                />

                <section className="mx-auto max-w-7xl px-3 py-12 sm:px-6 lg:py-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-7">
                            <div className="flex flex-wrap gap-2">
                                <Chip>Pricing strategy</Chip>
                                <Chip>Premium marketing</Chip>
                                <Chip>Qualified buyers</Chip>
                                <Chip>Clean negotiation</Chip>
                            </div>

                            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                Why sell with Strathmond? Because pricing + positioning decide the outcome.
                            </h2>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Dubai is fast—but the best sales are not rushed. We help you sell with a structured
                                process that protects value: correct pricing, premium presentation, targeted
                                distribution, and professional negotiation. Clear communication, minimal noise, and a
                                premium result.
                            </p>

                            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                                <Button
                                    asChild
                                    className="h-11 rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90"
                                >
                                    <Link href="/contact">Get a free valuation</Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-11 rounded-full border-[#00292D]/15 bg-transparent"
                                >
                                    <Link href="/sell">Submit your property</Link>
                                </Button>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-5">
                            <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFEEB4] text-[#00292D]">
                                        <Sparkles className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">What you get</div>
                                        <div className="mt-2 text-sm text-[#00292D]/65">
                                            A premium selling process built for clarity and strong outcomes.
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6 bg-[#00292D]/10" />

                                <div className="space-y-4 text-sm text-[#00292D]/70">
                                    <div className="flex gap-3">
                                        <Target className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Pricing strategy</div>
                                            <div>Positioned for demand—no underpricing, no unrealistic listing.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Megaphone className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Premium marketing</div>
                                            <div>Presentation that attracts qualified buyers and supports value.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Handshake className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Negotiation & closing</div>
                                            <div>Professional handling from offer to final steps.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-3xl bg-[#F8F8FF] p-5 ring-1 ring-[#00292D]/10">
                                    <div className="text-sm font-semibold text-[#00292D]">Typical response time</div>
                                    <div className="mt-1 text-sm text-[#00292D]/65">
                                        Within <span className="font-semibold text-[#00292D]">24 hours</span> (Mon–Sat).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div data-aos="fade-up" className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                WHY SELL WITH US
                            </div>
                            <h3 className="mt-2 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                Premium service, real results.
                            </h3>
                        </div>
                        <div className="text-sm text-[#00292D]/65">
                            Better positioning • Cleaner process • Strong negotiation
                        </div>
                    </div>

                    <div className="mt-8 grid md:gap-6 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={Target}
                            title="Pricing + positioning"
                            desc="We set a strategy based on demand, comps, and buyer psychology."
                        />
                        <FeatureCard
                            icon={BadgeCheck}
                            title="Qualified buyer focus"
                            desc="We prioritize quality leads and reduce time-wasters."
                        />
                        <FeatureCard
                            icon={Megaphone}
                            title="Premium presentation"
                            desc="Images, copy, and listing quality that supports stronger offers."
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Demand-focused marketing"
                            desc="Targeted distribution across channels to attract the right buyers."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Clean communication"
                            desc="Clear updates, structured timelines, and fewer surprises."
                        />
                        <FeatureCard
                            icon={Handshake}
                            title="Negotiation + closing"
                            desc="Professional handling from first offer to final agreement."
                        />
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div data-aos="zoom-in-up" className="rounded-[28px] bg-white md:p-8 p-4 py-8 ring-1 ring-[#00292D]/10 sm:p-10">
                        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                            <div className="lg:col-span-5">
                                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                    OUR SELLING PROCESS
                                </div>
                                <h3 className="mt-3 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                    Structured steps, premium outcome.
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[#00292D]/70">
                                    We reduce noise and keep the process clean—so you can sell with confidence.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    <Chip>Valuation</Chip>
                                    <Chip>Marketing</Chip>
                                    <Chip>Viewings</Chip>
                                    <Chip>Negotiation</Chip>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <StepCard
                                        step="STEP 01"
                                        title="Valuation + strategy"
                                        desc="We review comps, demand, and set pricing + positioning."
                                    />
                                    <StepCard
                                        step="STEP 02"
                                        title="Premium marketing"
                                        desc="Presentation and distribution built to attract qualified buyers."
                                    />
                                    <StepCard
                                        step="STEP 03"
                                        title="Viewings + offers"
                                        desc="We coordinate viewings efficiently and qualify interest."
                                    />
                                    <StepCard
                                        step="STEP 04"
                                        title="Negotiation + closing"
                                        desc="We handle offers, timelines, and closing steps cleanly."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-aos="zoom-in-up" className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="rounded-[28px] bg-white md:p-8 p-4 py-8 ring-1 ring-[#00292D]/10 sm:p-10">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">FAQ</div>
                                <h3 className="mt-2 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                    Selling questions, answered
                                </h3>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <FAQ
                                q="How do you decide the right listing price?"
                                a="We use comps, current demand, condition, view/layout, and buyer intent to set a pricing strategy—then adjust based on market response."
                            />
                            <FAQ
                                q="How do you market my property?"
                                a="We focus on premium presentation and targeted distribution that brings qualified buyers—not just clicks."
                            />
                            <FAQ
                                q="Do you handle negotiation and paperwork?"
                                a="Yes. We manage offers, negotiation, timelines, and closing steps with clear communication throughout."
                            />
                            <FAQ
                                q="How quickly can you start?"
                                a="Typically within 24 hours (Mon–Sat) once we receive your property details."
                            />
                            <FAQ
                                q="What do you need from me to begin?"
                                a="Basic details like location, property type, size, condition, and your target timeline. We’ll guide the rest."
                            />
                            <FAQ
                                q="Can you help if I’m not sure whether to sell now?"
                                a="Yes. We’ll share comps and demand context so you can decide with clarity—not pressure."
                            />
                        </div>

                        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div className="text-sm text-[#00292D]/70">
                                Ready to sell? Get a free valuation and a clear strategy.
                            </div>

                            <Button
                                asChild
                                className="h-12 rounded-full bg-[#00292D] px-8 text-[#F8F8FF] hover:bg-[#00292D]/90"
                            >
                                <Link href="/contact">
                                    Get valuation <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="rounded-[28px] bg-[#00292D] p-8 text-[#F8F8FF] sm:p-10">
                        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-8">
                                <div className="text-xs font-semibold tracking-widest text-[#F8F8FF]/60">
                                    SELL WITH CLARITY
                                </div>
                                <div className="mt-2 text-balance text-2xl font-semibold sm:text-3xl">
                                    Get a strategy built for strong outcomes.
                                </div>
                                <div className="mt-3 text-sm text-[#F8F8FF]/70">
                                    Tell us your property type and community—our team will respond with valuation + next steps.
                                </div>
                            </div>

                            <div className="lg:col-span-4 lg:flex lg:justify-end">
                                <Button
                                    asChild
                                    className="h-12 w-full rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]/90 lg:w-auto lg:px-10"
                                >
                                    <Link href="/contact">
                                        Talk to an advisor <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
