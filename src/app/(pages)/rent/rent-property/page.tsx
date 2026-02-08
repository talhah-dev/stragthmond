"use client";

import React from "react";
import Link from "next/link";
import HeroSections from "@/components/HeroSections";
import UserWrapper from "@/app/(wrapper)/UserWrapper";
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
    MapPin,
    ShieldCheck,
    Sparkles,
    Timer,
    Users,
} from "lucide-react";

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

function CommunityCard({ name, hint }: { name: string; hint: string }) {
    return (
        <div data-aos="fade-up" className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <div className="text-base font-semibold text-[#00292D]">{name}</div>
                    <div className="mt-1 text-sm text-[#00292D]/65">{hint}</div>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D]/5 text-[#00292D]">
                    <MapPin className="h-5 w-5" />
                </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#F8F8FF] px-3 py-1 text-xs font-semibold text-[#00292D]/75 ring-1 ring-[#00292D]/10">
                    Near amenities
                </span>
                <span className="rounded-full bg-[#F8F8FF] px-3 py-1 text-xs font-semibold text-[#00292D]/75 ring-1 ring-[#00292D]/10">
                    Lifestyle fit
                </span>
            </div>
        </div>
    );
}

export default function RentPropertyInDubaiPage() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] md:px-5 px-3 rounded-xl pt-3 overflow-hidden">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Rent Property"
                    subheading="A premium renting experience—curated options, fast viewings, and clear guidance from shortlist to move-in."
                />

                <section className="mx-auto md:mt-10 mt-5 max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-7">
                            <div className="flex flex-wrap gap-2">
                                <Chip>Curated shortlists</Chip>
                                <Chip>Fast coordination</Chip>
                                <Chip>Clear paperwork</Chip>
                                <Chip>Dubai-first</Chip>
                            </div>

                            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                Rent with confidence—without the noise.
                            </h2>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Dubai moves fast. We help you move faster—with structure. Tell us your budget, preferred communities,
                                and move-in date. We’ll respond with a curated shortlist, organize viewings, guide negotiations,
                                and keep the contract process clean.
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

                        <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-5">
                            <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFEEB4] text-[#00292D]">
                                        <Sparkles className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">What you get</div>
                                        <div className="mt-2 text-sm text-[#00292D]/65">
                                            A premium renting journey built for clarity.
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6 bg-[#00292D]/10" />

                                <div className="space-y-4 text-sm text-[#00292D]/70">
                                    <div className="flex gap-3">
                                        <ShieldCheck className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Quality-first options</div>
                                            <div>High-match listings with honest context.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Timer className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Fast viewings</div>
                                            <div>Clean scheduling and quick follow-ups.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <ClipboardCheck className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Paperwork clarity</div>
                                            <div>Contracts, deposits, and timelines explained simply.</div>
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

                <section className="mx-auto md:mt-16 mt-10 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div data-aos="fade-up" className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                WHY RENT WITH STRATHMOND
                            </div>
                            <h3 className="mt-2 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                Premium service, practical outcomes.
                            </h3>
                        </div>
                        <div className="text-sm text-[#00292D]/65">Less noise • Better choices • Cleaner move-in</div>
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
                            desc="Neighborhood guidance—commute, amenities, vibe, and value."
                        />
                        <FeatureCard
                            icon={Handshake}
                            title="Negotiation support"
                            desc="We help secure fair terms and keep conversations direct and professional."
                        />
                        <FeatureCard
                            icon={ClipboardCheck}
                            title="Clean paperwork"
                            desc="Contracts, deposits, and timelines—explained simply and tracked properly."
                        />
                        <FeatureCard
                            icon={LineChart}
                            title="Market-aware context"
                            desc="Rental pricing context so you avoid overpaying and surprises."
                        />
                    </div>
                </section>

                <section className="mx-auto md:mt-16 mt-10 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div data-aos="zoom-in-up" className="rounded-[28px] bg-white p-8 ring-1 ring-[#00292D]/10 sm:p-10">
                        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                            <div className="lg:col-span-5">
                                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">OUR PROCESS</div>
                                <h3 className="mt-3 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                    A clean path—from shortlist to keys.
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[#00292D]/70">
                                    Clear checkpoints so you always know what’s next.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    <Chip>Fast viewings</Chip>
                                    <Chip>Clear steps</Chip>
                                    <Chip>Premium handling</Chip>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <StepCard step="STEP 01" title="Tell us your needs" desc="Budget, areas, move-in date, and must-haves." />
                                    <StepCard step="STEP 02" title="Receive a shortlist" desc="High-match options with context and availability." />
                                    <StepCard step="STEP 03" title="Viewings" desc="Organized schedules to reduce wasted time." />
                                    <StepCard step="STEP 04" title="Offer & paperwork" desc="Contracts, deposits, and timelines—handled cleanly." />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto md:mt-16 mt-10 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div data-aos="fade-up" className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">POPULAR AREAS</div>
                            <h3 className="mt-2 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                Communities renters love.
                            </h3>
                        </div>
                        <div className="text-sm text-[#00292D]/65">We’ll help you choose based on lifestyle + value.</div>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <CommunityCard name="Downtown Dubai" hint="Walkable, premium towers, central access." />
                        <CommunityCard name="Dubai Marina" hint="Waterfront lifestyle, vibrant, connected." />
                        <CommunityCard name="Business Bay" hint="Fast commute, modern buildings, strong value." />
                        <CommunityCard name="Dubai Hills Estate" hint="Family-friendly, green spaces, new builds." />
                        <CommunityCard name="Jumeirah Village Circle (JVC)" hint="Value rentals, growing community." />
                        <CommunityCard name="Dubai Creek Harbour" hint="New waterfront, views, long-term value." />
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 md:mt-16 mt-10">
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-5">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">FAQ</div>
                            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                Common renting questions
                            </h2>
                            <p className="mt-3 text-sm text-[#00292D]/65">
                                Quick answers about viewings, timelines, paperwork, and what to expect.
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
                                            Once we confirm your shortlist, we coordinate viewings quickly—often within 24–72 hours depending on access and availability.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-2" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Do you help negotiate rental terms?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes. We support fair terms on price, payment schedule, and move-in timing while keeping communication clean and professional.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-3" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            What documents are typically required?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Requirements vary by landlord and building. After you share your details, we’ll confirm the usual documents and guide you through each step.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-4" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Can you help me choose the right community?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Absolutely. We share lifestyle and pricing context—commute, amenities, building quality, and value—so your choice fits how you live.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-5" className="border-b-0">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Do you support move-in coordination and handover?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes. We keep the timeline clean from offer acceptance through contract signing and handover.
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
                                <div className="text-xs font-semibold tracking-widest text-[#F8F8FF]/60">RENT WITH CLARITY</div>
                                <div className="mt-2 text-balance text-2xl font-semibold sm:text-3xl">
                                    Get a curated rental shortlist today.
                                </div>
                                <div className="mt-3 text-sm text-[#F8F8FF]/70">
                                    Tell us your budget, move-in date, and preferred communities—our team will respond with options.
                                </div>
                            </div>

                            <div className="lg:col-span-4 lg:flex lg:justify-end">
                                <Button
                                    asChild
                                    className="h-12 w-full rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]/90 lg:w-auto lg:px-10"
                                >
                                    <Link href="/contact">
                                        Contact us <ArrowRight className="ml-2 h-4 w-4" />
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
