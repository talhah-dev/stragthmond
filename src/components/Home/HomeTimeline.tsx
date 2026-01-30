"use client";

import React from "react";
import {
    BadgeCheck,
    Building2,
    ClipboardCheck,
    Handshake,
    KeyRound,
    LineChart,
} from "lucide-react";

type Step = {
    title: string;
    desc: string;
    icon: React.ElementType;
    tag: string;
};

const steps: Step[] = [
    {
        title: "Discover your goal",
        desc: "Tell us what you want to do (buy, rent, sell, off-plan), your budget, and preferred communities.",
        icon: ClipboardCheck,
        tag: "Step 01",
    },
    {
        title: "Curated shortlist",
        desc: "We filter noise and present only high-match options with clear trade-offs and context.",
        icon: BadgeCheck,
        tag: "Step 02",
    },
    {
        title: "Viewings & comparisons",
        desc: "Evaluate options with a structured approach—lifestyle, value, and long-term fit.",
        icon: Building2,
        tag: "Step 03",
    },
    {
        title: "Negotiation & paperwork",
        desc: "Clear checkpoints for offers, contracts, deposits, timelines, and approvals.",
        icon: Handshake,
        tag: "Step 04",
    },
    {
        title: "Handover / move-in",
        desc: "A smooth finish—final checks, handover, and support through the last mile.",
        icon: KeyRound,
        tag: "Step 05",
    },
    {
        title: "Stay informed",
        desc: "Market insights and updates that keep you confident for the next move.",
        icon: LineChart,
        tag: "Step 06",
    },
];

export default function HomeTimeline() {
    return (
        <section className="bg-[#F8F8FF]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p data-aos="fade-up" className="text-sm font-medium text-[#00292D]/70">Process</p>
                        <h2 data-aos="fade-up" className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                            A timeline designed for clarity.
                        </h2>
                        <p data-aos="fade-up" className="mt-3 text-pretty text-base text-[#00292D]/70 sm:text-lg">
                            One clean path—from discovery to decision—built to reduce friction and improve outcomes.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="inline-flex items-center rounded-full bg-[#FFEEB4] px-4 py-2 text-sm font-semibold text-[#00292D]">
                        Clarity • Structure • Confidence
                    </div>
                </div>

                <div className="mt-12 relative">
                    <div className="absolute left-5 top-0 h-full w-px bg-[#00292D]/10 md:left-1/2 md:-translate-x-1/2" />
                    <div className="absolute left-5 top-0 h-24 w-px bg-gradient-to-b from-[#AFF8C8] to-transparent md:left-1/2 md:-translate-x-1/2" />

                    <ol className="space-y-8">
                        {steps.map((s, idx) => {
                            const Icon = s.icon;
                            const isRight = idx % 2 === 1;

                            return (
                                <li data-aos="fade-up"  key={s.tag} className="relative">
                                    <div className="absolute left-5 top-7 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF] shadow-sm ring-1 ring-[#00292D]/10">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <div
                                        className={[
                                            "ml-12 md:ml-0 md:flex md:items-start",
                                            isRight ? "md:justify-end" : "md:justify-start",
                                        ].join(" ")}
                                    >
                                        <div className="md:w-[calc(50%-28px)]">
                                            <div className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10 shadow-sm">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                                        {s.tag}
                                                    </div>
                                                    <span className="rounded-full bg-[#00292D]/5 px-3 py-1 text-xs font-semibold text-[#00292D]/70">
                                                        Strathmond
                                                    </span>
                                                </div>

                                                <div className="mt-3 text-xl font-semibold text-[#00292D]">
                                                    {s.title}
                                                </div>

                                                <div className="mt-2 text-sm leading-relaxed text-[#00292D]/70">
                                                    {s.desc}
                                                </div>

                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    <span className="rounded-full bg-[#AFF8C8]/35 px-3 py-1 text-xs font-semibold text-[#00292D]">
                                                        Guided
                                                    </span>
                                                    <span className="rounded-full bg-[#D2C4FB]/25 px-3 py-1 text-xs font-semibold text-[#00292D]">
                                                        Curated
                                                    </span>
                                                    <span className="rounded-full bg-[#FFEEB4]/70 px-3 py-1 text-xs font-semibold text-[#00292D]">
                                                        Premium
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
