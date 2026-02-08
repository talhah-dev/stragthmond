"use client";

import React from "react";
import Link from "next/link";
import HeroSections from "@/components/HeroSections";
import UserWrapper from "@/app/(wrapper)/UserWrapper";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { Badge } from "@/components/ui/badge";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    ArrowRight,
    BadgeCheck,
    ClipboardCheck,
    Handshake,
    LineChart,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import SellYourPropertyForm from "@/components/sellProperty/SellYourPropertyForm";

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
        <div data-aos="fade-up" className="rounded-2xl bg-white p-6 ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start gap-3">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF]">
                    <Icon className="h-6 w-6" />
                </span>
                <div>
                    <div className="text-base font-semibold text-[#00292D]">{title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-[#00292D]/70">
                        {desc}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SellYourProperty() {

    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] md:px-5 px-3 rounded-xl pt-3 overflow-hidden">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Sell Property"
                    subheading="A premium selling experience—pricing clarity, curated buyer targeting, and structured handling from valuation to closing."
                />

                <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-24">
                    <div data-aos="fade-up" className="grid gap-6 lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-5">
                            <div className="inline-flex flex-wrap gap-2">
                                <Chip>Clarity</Chip>
                                <Chip>Structure</Chip>
                                <Chip>Trust</Chip>
                            </div>

                            <h2 className="mt-6 text-balance text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                Share your property details. We’ll guide the next steps.
                            </h2>

                            <p className="mt-3 text-sm leading-relaxed text-[#00292D]/70 sm:text-base">
                                Tell us what you’re selling and your preferred timeline. We’ll respond with a
                                clear plan: positioning, pricing guidance, marketing, and buyer outreach.
                            </p>

                            <div className="mt-6 rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFEEB4] text-[#00292D]">
                                        <Sparkles className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">What happens after you submit?</div>
                                        <div className="mt-2 text-sm text-[#00292D]/65">
                                            We confirm details, ask a few quick questions, and propose the best strategy for your goal—fast.
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6 bg-[#00292D]/10" />

                                <div className="flex flex-wrap gap-2">
                                    <Badge className="rounded-full bg-[#F8F8FF] text-[#00292D] ring-1 ring-[#00292D]/10 hover:bg-[#F8F8FF]">
                                        Transparent pricing guidance
                                    </Badge>
                                    <Badge className="rounded-full bg-[#F8F8FF] text-[#00292D] ring-1 ring-[#00292D]/10 hover:bg-[#F8F8FF]">
                                        High-quality marketing
                                    </Badge>
                                    <Badge className="rounded-full bg-[#F8F8FF] text-[#00292D] ring-1 ring-[#00292D]/10 hover:bg-[#F8F8FF]">
                                        Qualified buyer outreach
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-7">
                            <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10 sm:p-8">
                                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                    SELLING REQUEST
                                </div>
                                <div className="mt-2 text-balance text-xl font-semibold text-[#00292D]">
                                    Tell us about your property
                                </div>
                                <div className="mt-2 text-sm text-[#00292D]/65">
                                    Fill in what you know—if you’re unsure, that’s fine.
                                </div>

                                <SellYourPropertyForm />
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
                                Premium handling, end-to-end
                            </h3>
                        </div>
                        <div className="text-sm text-[#00292D]/65">
                            Strategy, marketing, buyers, negotiation—kept clean.
                        </div>
                    </div>

                    <div className="mt-8 grid md:gap-6 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <ValueCard
                            icon={LineChart}
                            title="Pricing clarity"
                            desc="We position your property with realistic market context and a strategy aligned to your goal."
                        />
                        <ValueCard
                            icon={BadgeCheck}
                            title="Curated buyer outreach"
                            desc="Qualified buyers first—less noise, better conversations, stronger outcomes."
                        />
                        <ValueCard
                            icon={ClipboardCheck}
                            title="Structured workflow"
                            desc="Clear checkpoints, updates, and coordination from listing to closing."
                        />
                        <ValueCard
                            icon={ShieldCheck}
                            title="Trust-led advice"
                            desc="Honest guidance on offers, timelines, and negotiation—no pressure tactics."
                        />
                        <ValueCard
                            icon={Handshake}
                            title="Negotiation & paperwork"
                            desc="We handle negotiation, documents, and coordination with premium standards."
                        />
                        <ValueCard
                            icon={Sparkles}
                            title="Presentation that sells"
                            desc="Clean listing presentation, strong media, and messaging that highlights the right value."
                        />
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 md:mt-16 mt-10">
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-5">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">FAQ</div>
                            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                Selling questions, answered
                            </h2>
                            <p className="mt-3 text-sm text-[#00292D]/65">
                                A few quick answers about timelines, pricing, and the process.
                            </p>

                            <div className="mt-6">
                                <Button
                                    asChild
                                    className="h-11 rounded-full bg-[#FFEEB4] px-6 text-[#00292D] hover:bg-[#FFEEB4]/90"
                                >
                                    <Link href="/contact">
                                        Speak with an advisor <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div data-aos="fade-up" data-aos-delay="200" className="rounded-2xl bg-white p-4 sm:p-6 ring-1 ring-[#00292D]/10">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="faq-1" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            How do you determine the right selling price?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            We combine live market signals, comparable listings, recent transactions (when available),
                                            and property-specific factors like condition, view, layout, and building demand to recommend
                                            a realistic range and a positioning strategy.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-2" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            How long does it usually take to sell?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Timelines depend on pricing, presentation, and demand in your community. After we review your details,
                                            we’ll give an honest expectation and the best next steps to improve speed and outcome.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-3" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Do you handle viewings and buyer screening?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes. We coordinate viewings, qualify interest, and keep feedback structured so you’re not dealing with noise.
                                            We focus on quality conversations that lead to offers.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-4" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            What marketing do you provide?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Clean listing presentation, strong visuals where needed, and targeted distribution. We also leverage direct
                                            buyer outreach and network channels based on your property type and price bracket.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-5" className="border-b-0">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Can you help with negotiation and paperwork?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes—negotiation, offer evaluation, document coordination, and the handover process are all part of a premium,
                                            structured experience.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
