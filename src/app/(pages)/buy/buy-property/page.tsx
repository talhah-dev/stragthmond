"use client";

import React from "react";
import Link from "next/link";
import HeroSections from "@/components/HeroSections";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    ClipboardCheck,
    Handshake,
    LineChart,
    ShieldCheck,
    Sparkles,
    Timer,
    Users,
} from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";

function Pill({ children }: { children: React.ReactNode }) {
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

function StepRow({
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

export default function WhyRentWithUsPage() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] md:px-5 px-3 rounded-xl pt-3 overflow-hidden">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Why Rent with Strathmond"
                    subheading="A premium renting experience in Dubai—curated options, fast coordination, and clear guidance from viewing to move-in."
                />

                <section className="mx-auto mt-5 md:mt-10 max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-7">
                            <div className="flex flex-wrap gap-2">
                                <Pill>Curated shortlists</Pill>
                                <Pill>Fast viewings</Pill>
                                <Pill>Clear paperwork</Pill>
                                <Pill>Premium handling</Pill>
                            </div>

                            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                Renting should feel simple—organized, transparent, and on time.
                            </h2>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                In Dubai, speed matters. But quality matters more. We help you rent with confidence:
                                verified options, honest context, structured viewings, and a clean contract process.
                                No endless scrolling, no unnecessary back-and-forth—just a premium experience.
                            </p>

                            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                                <Button
                                    asChild
                                    className="h-11 rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90"
                                >
                                    <Link href="/contact">Request rental shortlist</Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-11 rounded-full border-[#00292D]/15 bg-transparent"
                                >
                                    <Link href="/rent">Browse rentals</Link>
                                </Button>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-5 md:mt-16 mt-10">
                            <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFEEB4] text-[#00292D]">
                                        <Sparkles className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">What you get</div>
                                        <div className="mt-2 text-sm text-[#00292D]/65">
                                            A clean, guided renting journey built for clarity.
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6 bg-[#00292D]/10" />

                                <div className="space-y-4 text-sm text-[#00292D]/70">
                                    <div className="flex gap-3">
                                        <ShieldCheck className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Verified options</div>
                                            <div>We prioritize quality listings and clear context.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Timer className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Faster coordination</div>
                                            <div>Viewings, follow-ups, and timelines kept tight.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <ClipboardCheck className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Paperwork clarity</div>
                                            <div>Contracts, deposits, and steps explained simply.</div>
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

                <section className="mx-auto max-w-7xl md:mt-16 mt-10 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div data-aos="fade-up" className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                WHY RENT WITH US
                            </div>
                            <h3 className="mt-2 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                Premium service, practical outcomes.
                            </h3>
                        </div>
                        <div className="text-sm text-[#00292D]/65">
                            Less noise • Better choices • Cleaner move-in
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={BadgeCheck}
                            title="Curated shortlists"
                            desc="We filter listings to match your budget, lifestyle, and location—fast."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Client-first guidance"
                            desc="Clear advice on trade-offs, pricing, and what matters most for your needs."
                        />
                        <FeatureCard
                            icon={Building2}
                            title="Community fit"
                            desc="Neighborhood guidance with context—commute, amenities, lifestyle, and value."
                        />
                        <FeatureCard
                            icon={Handshake}
                            title="Negotiation support"
                            desc="We help secure fair terms and keep conversations direct and professional."
                        />
                        <FeatureCard
                            icon={ClipboardCheck}
                            title="Clean paperwork"
                            desc="Contracts, deposits, timelines—explained simply and tracked properly."
                        />
                        <FeatureCard
                            icon={LineChart}
                            title="Market-aware decisions"
                            desc="We share rental pricing context so you avoid overpaying and surprises."
                        />
                    </div>
                </section>

                <section className="mx-auto max-w-7xl md:mt-16 mt-10 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div data-aos="zoom-in-up" className="rounded-[28px] bg-white p-8 ring-1 ring-[#00292D]/10 sm:p-10">
                        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                            <div  className="lg:col-span-5">
                                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                    OUR RENTING PROCESS
                                </div>
                                <h3 className="mt-3 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                    From shortlist to move-in—clean and structured.
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[#00292D]/70">
                                    We keep the journey simple with clear checkpoints so you always know what’s next.
                                </p>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <StepRow
                                        step="STEP 01"
                                        title="Tell us your needs"
                                        desc="Budget, preferred areas, move-in date, and must-haves."
                                    />
                                    <StepRow
                                        step="STEP 02"
                                        title="Receive a shortlist"
                                        desc="High-match options with context and realistic availability."
                                    />
                                    <StepRow
                                        step="STEP 03"
                                        title="Viewings"
                                        desc="Organized viewing schedule to reduce wasted time."
                                    />
                                    <StepRow
                                        step="STEP 04"
                                        title="Offer & paperwork"
                                        desc="Contract, deposit, timelines—explained and handled cleanly."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl md:mt-16 mt-10 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-5">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">FAQ</div>
                            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                Renting questions, answered
                            </h2>
                            <p className="mt-3 text-sm text-[#00292D]/65">
                                Quick answers about the process, timelines, and what to expect.
                            </p>

                            <div className="mt-6">
                                <Button
                                    asChild
                                    className="h-11 rounded-full bg-[#FFEEB4] px-6 text-[#00292D] hover:bg-[#FFEEB4]/90"
                                >
                                    <Link href="/contact">
                                        Request shortlist <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-7">
                            <div className="rounded-xl bg-white p-4 sm:p-6 ring-1 ring-[#00292D]/10">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="faq-1" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            How fast can I arrange viewings?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Once we confirm your requirements, we coordinate viewings quickly—often within 24–72 hours—depending on availability and access.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-2" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Do you help negotiate rental terms?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes. We help you secure fair terms on price, payment schedule, and move-in dates while keeping communication professional and clear.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-3" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            What documents will I need to rent in Dubai?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Requirements vary by landlord and building, but we’ll guide you through the typical documents and steps based on your situation.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-4" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Can you help me choose the right community?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Definitely. We share lifestyle and pricing context—commute, amenities, building quality, and value—so your choice matches how you live.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-5" className="border-b-0">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Do you support move-in coordination and handover?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes. We help keep the timeline clean and coordinated from offer acceptance through contract signing and handover.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div data-aos="zoom-in-up" className="rounded-[28px] bg-[#00292D] p-8 text-[#F8F8FF] sm:p-10">
                        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-8">
                                <div className="text-xs font-semibold tracking-widest text-[#F8F8FF]/60">
                                    READY TO RENT?
                                </div>
                                <div className="mt-2 text-balance text-2xl font-semibold sm:text-3xl">
                                    Get a curated rental shortlist today.
                                </div>
                                <div className="mt-3 text-sm text-[#F8F8FF]/70">
                                    Share your budget and preferred communities—we’ll respond with options and next steps.
                                </div>
                            </div>

                            <div className="lg:col-span-4 lg:flex lg:justify-end">
                                <Button
                                    asChild
                                    className="h-12 w-full rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]/90 lg:w-auto lg:px-10"
                                >
                                    <Link href="/contact">
                                        Request shortlist <ArrowRight className="ml-2 h-4 w-4" />
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
