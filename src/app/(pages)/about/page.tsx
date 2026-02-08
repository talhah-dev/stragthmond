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
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur">
            {children}
        </span>
    );
}

function ValueCard({
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

function Stat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-3xl bg-white p-6 ring-1 ring-[#00292D]/10">
            <div className="text-2xl font-semibold text-[#00292D]">{value}</div>
            <div className="mt-1 text-sm text-[#00292D]/65">{label}</div>
        </div>
    );
}

export default function About() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] md:px-5 px-3 rounded-xl pt-3 overflow-hidden">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="About Strathmond"
                    subheading="A premium Dubai real estate experience—curated listings, honest context, and a structured process for confident decisions."
                />

                <section className="relative  md:mt-10">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#AFF8C8]/22 blur-3xl" />
                        <div className="absolute -bottom-56 right-[-10%] h-[620px] w-[620px] rounded-full bg-[#D2C4FB]/18 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                            <div data-aos="fade-up" className="lg:col-span-7">
                                <div className="inline-flex flex-wrap gap-2">
                                    <Chip>Clarity</Chip>
                                    <Chip>Structure</Chip>
                                    <Chip>Trust</Chip>
                                </div>

                                <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                    We guide decisions, not just listings.
                                </h2>

                                <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                    In a market full of noise, Strathmond focuses on a premium, guided experience.
                                    We curate options based on your goals, provide honest context, and keep the process
                                    clean from shortlist to final decision—whether you’re buying, renting, selling, or
                                    exploring off-plan.
                                </p>

                                <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                                    <Button
                                        asChild
                                        className="h-11 rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90"
                                    >
                                        <Link href="/contact">Speak with an advisor</Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="h-11 rounded-full border-[#00292D]/15 bg-transparent"
                                    >
                                        <Link href="/buy">Browse listings</Link>
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
                                            <div className="text-sm font-semibold text-[#00292D]">The Strathmond standard</div>
                                            <div className="mt-2 text-sm text-[#00292D]/65">
                                                Premium handling, transparent advice, and a structured workflow.
                                            </div>
                                        </div>
                                    </div>

                                    <Separator className="my-6 bg-[#00292D]/10" />

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-3xl p-4 ring-1 ring-[#00292D]/10">
                                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                                FOCUS
                                            </div>
                                            <div className="mt-2 text-sm font-semibold text-[#00292D]">Dubai, UAE</div>
                                            <div className="mt-1 text-sm text-[#00292D]/65">
                                                Communities that fit lifestyle and value.
                                            </div>
                                        </div>

                                        <div className="rounded-3xl p-4 ring-1 ring-[#00292D]/10">
                                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                                APPROACH
                                            </div>
                                            <div className="mt-2 text-sm font-semibold text-[#00292D]">Decision-first</div>
                                            <div className="mt-1 text-sm text-[#00292D]/65">
                                                Context before commitment.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-3xl p-5 ring-1 ring-[#00292D]/10">
                                        <div className="text-sm font-semibold text-[#00292D]">Want a curated shortlist?</div>
                                        <div className="mt-2 text-sm text-[#00292D]/65">
                                            Share your goal, budget, and preferred areas—get options fast.
                                        </div>
                                        <div className="mt-4">
                                            <Button
                                                asChild
                                                className="h-11 w-full rounded-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90"
                                            >
                                                <Link href="/contact">Request shortlist</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl md:mt-16 mt-10 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div data-aos="fade-up">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                VALUES
                            </div>
                            <h3 className="mt-2 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                What we stand for
                            </h3>
                        </div>
                        <div className="text-sm text-[#00292D]/65">
                            Premium outcomes through a clean process.
                        </div>
                    </div>

                    <div className="mt-8 grid md:gap-5 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <ValueCard
                            icon={ShieldCheck}
                            title="Trust-led guidance"
                            desc="Honest context on pricing, availability, and realistic options—no hype."
                        />
                        <ValueCard
                            icon={ClipboardCheck}
                            title="Structured workflow"
                            desc="Clear checkpoints and a clean process from discovery to closing."
                        />
                        <ValueCard
                            icon={LineChart}
                            title="Market-aware decisions"
                            desc="Community insights and demand signals that support smarter choices."
                        />
                        <ValueCard
                            icon={Users}
                            title="Client-first service"
                            desc="We respect your time, your goals, and your long-term outcomes."
                        />
                        <ValueCard
                            icon={BadgeCheck}
                            title="Curated quality"
                            desc="Shortlists built around match-quality, not quantity."
                        />
                        <ValueCard
                            icon={Handshake}
                            title="Professional handling"
                            desc="Negotiation, paperwork, and coordination—handled with premium standards."
                        />
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div data-aos="zoom-in-up" className="rounded-[28px] bg-white p-8 ring-1 ring-[#00292D]/10 sm:p-10">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                            <div >
                                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                    THE EXPERIENCE
                                </div>
                                <h3 className="mt-2 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                    Built for clarity and confidence.
                                </h3>
                                <p className="mt-3 max-w-2xl text-sm text-[#00292D]/70">
                                    Replace these numbers later with real data—this layout is premium and ready.
                                </p>
                            </div>

                            <Button
                                asChild
                                className="h-11 rounded-full bg-[#FFEEB4] px-6 text-[#00292D] hover:bg-[#FFEEB4]/90"
                            >
                                <Link href="/contact">
                                    Contact us <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Stat value="24h" label="Typical response time (Mon–Sat)" />
                            <Stat value="Dubai" label="Focused on key communities" />
                            <Stat value="Curated" label="High-match shortlists" />
                            <Stat value="Premium" label="Professional, structured handling" />
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 md:mt-20 mt-10 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-5">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">FAQ</div>
                            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                Questions, answered
                            </h2>
                            <p className="mt-3 text-sm text-[#00292D]/65">
                                A few quick answers about how Strathmond works.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-7">
                            <div className="rounded-xl bg-white p-4 sm:p-6 ring-1 ring-[#00292D]/10">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="faq-1" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            What makes Strathmond “premium”?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            It’s a clean, guided experience—curated shortlists, verified options, honest context on pricing,
                                            and structured coordination from first call to final decision.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-2" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Do you share every available property or only curated options?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            We focus on match-quality over volume. If you want wide coverage, we can broaden the search—but our default is curated options that fit your goal, budget, and preferred areas.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-3" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Can you help with buying, renting, selling, and off-plan?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes. We support all four, with the same workflow: discovery, shortlist, viewings, negotiation, paperwork, and handover—plus off-plan comparisons and payment-plan guidance.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-4" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            How fast can I get a shortlist?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Typically within 24 hours (Mon–Sat) after we confirm your requirements. Complex criteria may take a little longer, but we’ll keep timelines clear.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-5" className="border-b-0">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Do you assist with negotiations and paperwork?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes—negotiation, document coordination, and process management are core parts of the service so your decision and transaction stay clean and stress-free.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-aos="zoom-in-up" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="rounded-[28px] bg-[#00292D] p-8 text-[#F8F8FF] sm:p-10">
                        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-8">
                                <div className="text-xs font-semibold tracking-widest text-[#F8F8FF]/60">
                                    READY TO START?
                                </div>
                                <div className="mt-2 text-balance text-2xl font-semibold sm:text-3xl">
                                    Get a curated shortlist tailored to your goal.
                                </div>
                                <div className="mt-3 text-sm text-[#F8F8FF]/70">
                                    Buying, renting, selling, or off-plan—tell us what you want, and we’ll guide the next steps.
                                </div>
                            </div>

                            <div className="lg:col-span-4 lg:flex lg:justify-end">
                                <Button
                                    asChild
                                    className="h-12 w-full rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]/90 lg:w-auto lg:px-10"
                                >
                                    <Link href="/contact">Request shortlist</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
