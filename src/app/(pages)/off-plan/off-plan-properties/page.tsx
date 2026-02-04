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
    CalendarClock,
    ClipboardCheck,
    HandCoins,
    Landmark,
    LineChart,
    ShieldCheck,
    Sparkles,
    Target,
    TrendingUp,
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
        <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md">
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

export default function OffPlanPropertiesInDubaiPage() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] md:px-5 px-3 rounded-xl pt-3 overflow-hidden">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Off Plan Properties in Dubai"
                    subheading="Explore new launches with clarity—payment plans, project comparisons, and risk-aware recommendations."
                />

                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 md:mt-10 mt-5">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-7">
                            <div className="flex flex-wrap gap-2">
                                <Chip>New launches</Chip>
                                <Chip>Payment plans</Chip>
                                <Chip>Investor guidance</Chip>
                                <Chip>Risk-aware</Chip>
                            </div>

                            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                Why choose off plan? Timing + structure can unlock value.
                            </h2>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Off plan can be powerful when you choose the right project. The best outcomes come from fundamentals:
                                developer quality, community trajectory, unit selection, payment plan structure, and realistic delivery
                                timelines. We help you compare projects cleanly and invest with clarity.
                            </p>

                            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                                <Button
                                    asChild
                                    className="h-11 rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90"
                                >
                                    <Link href="/contact">Request off plan shortlist</Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-11 rounded-full border-[#00292D]/15 bg-transparent"
                                >
                                    <Link href="/off-plan">Browse projects</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFEEB4] text-[#00292D]">
                                        <Sparkles className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">Off plan, simplified</div>
                                        <div className="mt-2 text-sm text-[#00292D]/65">
                                            Clean comparisons and fundamentals-first guidance.
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6 bg-[#00292D]/10" />

                                <div className="space-y-4 text-sm text-[#00292D]/70">
                                    <div className="flex gap-3">
                                        <ShieldCheck className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Developer credibility</div>
                                            <div>Track record, delivery quality, and handover consistency.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CalendarClock className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Timeline clarity</div>
                                            <div>Realistic expectations and milestone checkpoints.</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <HandCoins className="mt-0.5 h-5 w-5 text-[#00292D]" />
                                        <div>
                                            <div className="font-semibold text-[#00292D]">Payment plan structure</div>
                                            <div>We compare plans and show total costs clearly.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-3xl bg-[#F8F8FF] p-5 ring-1 ring-[#00292D]/10">
                                    <div className="text-sm font-semibold text-[#00292D]">Best for</div>
                                    <div className="mt-1 text-sm text-[#00292D]/65">
                                        Investors • Long-term buyers • New launches • Flexible payment plans
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto md:mt-16 mt-10 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">WHY OFF PLAN</div>
                            <h3 className="mt-2 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                Benefits when chosen correctly.
                            </h3>
                        </div>
                        <div className="text-sm text-[#00292D]/65">Structure • Timing • Unit selection</div>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={TrendingUp}
                            title="Value trajectory"
                            desc="Some projects capture upside as communities mature and infrastructure completes."
                        />
                        <FeatureCard
                            icon={HandCoins}
                            title="Flexible payment plans"
                            desc="Spread payments across milestones—often better for cashflow planning."
                        />
                        <FeatureCard
                            icon={Building2}
                            title="New inventory"
                            desc="Modern layouts, amenities, and building quality—aligned with current demand."
                        />
                        <FeatureCard
                            icon={Target}
                            title="Unit selection advantage"
                            desc="Choose better stacks, views, and layouts early—small details matter long term."
                        />
                        <FeatureCard
                            icon={Landmark}
                            title="Investor positioning"
                            desc="Entry timing can matter—especially in launch phases and limited-release units."
                        />
                        <FeatureCard
                            icon={BadgeCheck}
                            title="Developer-backed confidence"
                            desc="We prioritize credible developers and projects with strong fundamentals."
                        />
                    </div>
                </section>

                <section className="mx-auto md:mt-16 mt-10 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
                    <div className="rounded-[28px] bg-white p-8 ring-1 ring-[#00292D]/10 sm:p-10">
                        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                            <div className="lg:col-span-5">
                                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">HOW WE HELP</div>
                                <h3 className="mt-3 text-balance text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                    A structured, risk-aware process.
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[#00292D]/70">
                                    We compare projects cleanly and focus on fundamentals—not hype.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    <Chip>Developer checks</Chip>
                                    <Chip>Project comparison</Chip>
                                    <Chip>Payment plan clarity</Chip>
                                    <Chip>Unit strategy</Chip>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <StepCard
                                        step="STEP 01"
                                        title="Define your goal"
                                        desc="Investment vs end-use, timeline, budget, preferred communities."
                                    />
                                    <StepCard
                                        step="STEP 02"
                                        title="Curated shortlist"
                                        desc="Projects with strong fundamentals + clean comparisons."
                                    />
                                    <StepCard
                                        step="STEP 03"
                                        title="Unit selection"
                                        desc="Stacks, layouts, views, and pricing strategy—details matter."
                                    />
                                    <StepCard
                                        step="STEP 04"
                                        title="Payment plan + paperwork"
                                        desc="Milestones, fees, and steps explained simply and tracked."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto md:mt-16 mt-10 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-5">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">FAQ</div>
                            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                Off plan questions, answered
                            </h2>
                            <p className="mt-3 text-sm text-[#00292D]/65">
                                Clear answers about payment plans, timelines, and how to pick the right project.
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

                        <div className="lg:col-span-7">
                            <div className="rounded-xl bg-white p-4 sm:p-6 ring-1 ring-[#00292D]/10">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="faq-1" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Is off plan good for investors?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            It can be—especially when the developer is strong, the project is in the right phase, and the
                                            payment plan matches your strategy.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-2" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            How do I choose the right project?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Focus on fundamentals: developer record, community trajectory, unit selection, pricing, and
                                            realistic delivery timelines.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-3" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            What about delivery risks?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            We prioritize credible developers and explain risks clearly—milestones, timelines, and what to
                                            watch through the build.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-4" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Can you help compare payment plans?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes. We compare milestones, fees, and total cost so you understand what you’re committing to.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="faq-5" className="border-b-0">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            What is the booking and buying process like?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            We guide you through reservation, payment milestones, documentation, and developer timelines—kept
                                            clean and simple.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="rounded-[28px] bg-[#00292D] p-8 text-[#F8F8FF] sm:p-10">
                        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-8">
                                <div className="text-xs font-semibold tracking-widest text-[#F8F8FF]/60">OFF PLAN, DONE RIGHT</div>
                                <div className="mt-2 text-balance text-2xl font-semibold sm:text-3xl">
                                    Compare projects with clarity.
                                </div>
                                <div className="mt-3 text-sm text-[#F8F8FF]/70">
                                    Launches move fast—get a shortlist, payment plan comparisons, and a unit strategy.
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
