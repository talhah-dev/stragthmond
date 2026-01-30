"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    BadgeCheck,
    BarChart3,
    Building2,
    ClipboardCheck,
    Handshake,
    KeyRound,
    LineChart,
    MapPinned,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

type Track = "Buy" | "Rent" | "Sell" | "Off Plan";

const tracks: Array<{
    key: Track;
    kicker: string;
    title: string;
    desc: string;
    ctaHref: string;
    ctaText: string;
    highlights: Array<{ icon: React.ElementType; title: string; desc: string }>;
    bullets: string[];
}> = [
        {
            key: "Buy",
            kicker: "For buyers",
            title: "Find the right home with clarity, not chaos.",
            desc: "Shortlist listings that actually match your criteria, backed by transparent guidance and a clean process from viewing to closing.",
            ctaHref: "/buy",
            ctaText: "Explore properties for sale",
            highlights: [
                {
                    icon: MapPinned,
                    title: "Community-led search",
                    desc: "Browse by lifestyle, commute, amenities, and long-term value.",
                },
                {
                    icon: ShieldCheck,
                    title: "Due diligence support",
                    desc: "Clear checkpoints for docs, pricing sanity, and decision-making.",
                },
                {
                    icon: LineChart,
                    title: "Market context",
                    desc: "Know what’s trending, what’s overpriced, and what’s rare.",
                },
            ],
            bullets: [
                "Curated, high-intent listings",
                "Guided viewings & shortlist strategy",
                "Negotiation and deal structuring support",
                "Closing support with clear milestones",
            ],
        },
        {
            key: "Rent",
            kicker: "For renters",
            title: "Rent with confidence—fast, simple, and verified.",
            desc: "From discovery to handover, Strathmond keeps your renting journey organized with the right options and minimal friction.",
            ctaHref: "/rent",
            ctaText: "Browse rentals",
            highlights: [
                {
                    icon: KeyRound,
                    title: "Fast matching",
                    desc: "Find options that fit your budget, furnishing, and timeline.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Checklist-based process",
                    desc: "Paperwork, payments, and key dates handled with structure.",
                },
                {
                    icon: BadgeCheck,
                    title: "Verified guidance",
                    desc: "Straight answers on pricing, deposits, and realistic availability.",
                },
            ],
            bullets: [
                "Shortlist-to-viewing pipeline",
                "Practical rental advice & expectations",
                "Support on contracts and move-in steps",
                "Optional neighborhood recommendations",
            ],
        },
        {
            key: "Sell",
            kicker: "For sellers",
            title: "Sell with premium positioning and real distribution.",
            desc: "Present your property professionally, reach qualified buyers, and manage negotiations with a strategy that protects your price.",
            ctaHref: "/sell",
            ctaText: "Sell with Strathmond",
            highlights: [
                {
                    icon: Sparkles,
                    title: "Premium listing quality",
                    desc: "A strong presentation that builds trust and demand.",
                },
                {
                    icon: Handshake,
                    title: "Buyer qualification",
                    desc: "Filter noise and focus on serious intent.",
                },
                {
                    icon: BarChart3,
                    title: "Performance tracking",
                    desc: "Understand interest, viewings, and next-best actions.",
                },
            ],
            bullets: [
                "Pricing strategy & positioning",
                "Lead qualification and follow-ups",
                "Negotiation support & closing coordination",
                "Clear, trackable sales workflow",
            ],
        },
        {
            key: "Off Plan",
            kicker: "For investors",
            title: "Off-plan decisions powered by research and timing.",
            desc: "Discover launches, compare projects, and evaluate payment plans with a focus on fundamentals—not hype.",
            ctaHref: "/off-plan",
            ctaText: "Explore off-plan projects",
            highlights: [
                {
                    icon: Building2,
                    title: "Launch discovery",
                    desc: "Keep up with new projects and high-signal opportunities.",
                },
                {
                    icon: LineChart,
                    title: "Investment lens",
                    desc: "Compare price points, location factors, and demand drivers.",
                },
                {
                    icon: ShieldCheck,
                    title: "Risk-aware guidance",
                    desc: "Understand timelines, handover, and plan suitability.",
                },
            ],
            bullets: [
                "Project comparisons and checklists",
                "Payment plan evaluation support",
                "Launch monitoring and availability",
                "Decision support based on fundamentals",
            ],
        },
    ];

const processSteps = [
    {
        title: "Tell us your goal",
        desc: "Buy, rent, sell, or off-plan—pick your path and preferences.",
    },
    {
        title: "Get a curated shortlist",
        desc: "We filter the noise and bring forward high-match options.",
    },
    {
        title: "Move through a clear process",
        desc: "Structured steps, fewer surprises, and a smoother timeline.",
    },
    {
        title: "Close with confidence",
        desc: "Decisions supported by context, guidance, and checkpoints.",
    },
];

function Segmented({
    value,
    onChange,
}: {
    value: Track;
    onChange: (v: Track) => void;
}) {
    const options: Track[] = ["Buy", "Rent", "Sell", "Off Plan"];
    return (
        <div className="inline-flex flex-wrap rounded-2xl bg-white p-1 ring-1 ring-[#00292D]/10">
            {options.map((o) => {
                const active = value === o;
                return (
                    <button
                        key={o}
                        type="button"
                        onClick={() => onChange(o)}
                        className={[
                            "rounded-xl px-4 py-2 text-sm font-semibold transition",
                            active
                                ? "bg-[#00292D] text-[#F8F8FF]"
                                : "text-[#00292D]/70 hover:bg-[#00292D]/5",
                        ].join(" ")}
                    >
                        {o}
                    </button>
                );
            })}
        </div>
    );
}

export default function HomeWhyStrathmond() {
    const [active, setActive] = React.useState<Track>("Buy");
    const data = tracks.find((t) => t.key === active)!;

    return (
        <section className="relative overflow-hidden bg-[#F8F8FF]">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-48 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#AFF8C8]/25 blur-3xl" />
                <div className="absolute -bottom-56 right-[-10%] h-[620px] w-[620px] rounded-full bg-[#D2C4FB]/22 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,41,45,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,238,180,0.35),transparent_40%)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium text-[#00292D]/70">Why Strathmond</p>
                        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                            A premium experience built around a clean process.
                        </h2>
                        <p className="mt-3 text-pretty text-base text-[#00292D]/70 sm:text-lg">
                            Not just listings—structure, guidance, and confidence across every step of your real estate journey.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline" className="border-[#00292D]/15 bg-transparent">
                            <Link href="/news">News & Insights</Link>
                        </Button>
                        <Button asChild className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                            <Link href="/contact">Speak to an advisor</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-[#00292D]/10 backdrop-blur">
                        <div className="text-xs font-semibold text-[#00292D]/60">Response time</div>
                        <div className="mt-2 flex items-end justify-between gap-3">
                            <div className="text-3xl font-semibold text-[#00292D]">Fast</div>
                            <div className="text-sm text-[#00292D]/60">Same-day shortlist</div>
                        </div>
                        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#00292D]/10">
                            <div className="h-full w-[78%] rounded-full bg-[#AFF8C8]" />
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-[#00292D]/10 backdrop-blur">
                        <div className="text-xs font-semibold text-[#00292D]/60">Quality filter</div>
                        <div className="mt-2 flex items-end justify-between gap-3">
                            <div className="text-3xl font-semibold text-[#00292D]">Curated</div>
                            <div className="text-sm text-[#00292D]/60">Less noise</div>
                        </div>
                        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#00292D]/10">
                            <div className="h-full w-[86%] rounded-full bg-[#D2C4FB]" />
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-[#00292D]/10 backdrop-blur">
                        <div className="text-xs font-semibold text-[#00292D]/60">Process clarity</div>
                        <div className="mt-2 flex items-end justify-between gap-3">
                            <div className="text-3xl font-semibold text-[#00292D]">Structured</div>
                            <div className="text-sm text-[#00292D]/60">Clear steps</div>
                        </div>
                        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#00292D]/10">
                            <div className="h-full w-[72%] rounded-full bg-[#FFEEB4]" />
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF]">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold text-[#00292D]/60">{data.kicker}</div>
                                        <div className="text-lg font-semibold text-[#00292D]">{data.title}</div>
                                    </div>
                                </div>

                                <Segmented value={active} onChange={setActive} />
                            </div>

                            <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-[#00292D]/10 backdrop-blur">
                                <p className="text-sm leading-relaxed text-[#00292D]/70">{data.desc}</p>

                                <div className="mt-6 grid gap-5 sm:grid-cols-3">
                                    {data.highlights.map((h) => {
                                        const Icon = h.icon;
                                        return (
                                            <div key={h.title} className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#00292D]/5 text-[#00292D]">
                                                        <Icon className="h-4.5 w-4.5" />
                                                    </span>
                                                    <div className="truncate text-sm font-semibold text-[#00292D]">
                                                        {h.title}
                                                    </div>
                                                </div>
                                                <div className="mt-2 text-sm leading-relaxed text-[#00292D]/65">
                                                    {h.desc}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                                    {data.bullets.map((b) => (
                                        <div key={b} className="flex items-start gap-2 rounded-2xl bg-[#00292D]/5 px-4 py-3">
                                            <BadgeCheck className="mt-0.5 h-4 w-4 text-[#00292D]" />
                                            <div className="text-sm font-medium text-[#00292D]/80">{b}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                                    <Button asChild className="bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]/90">
                                        <Link href={data.ctaHref}>{data.ctaText}</Link>
                                    </Button>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#00292D] hover:opacity-80"
                                    >
                                        Get a recommendation <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                <div className="rounded-3xl bg-[#00292D] p-6 text-[#F8F8FF] shadow-sm">
                                    <div className="text-xs font-semibold text-[#F8F8FF]/70">What you get</div>
                                    <div className="mt-2 text-xl font-semibold">Guidance + structure</div>
                                    <div className="mt-2 text-sm text-[#F8F8FF]/70">
                                        A clean process designed for confident decisions.
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-[#00292D]/10 backdrop-blur">
                                    <div className="text-xs font-semibold text-[#00292D]/60">Trusted signals</div>
                                    <div className="mt-3 space-y-2">
                                        <div className="flex items-center gap-2 text-sm font-medium text-[#00292D]/80">
                                            <ShieldCheck className="h-4 w-4" /> Verified guidance
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-[#00292D]/80">
                                            <ClipboardCheck className="h-4 w-4" /> Clear checkpoints
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-[#00292D]/80">
                                            <Handshake className="h-4 w-4" /> Professional handling
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-[#00292D]/10 backdrop-blur">
                                    <div className="text-xs font-semibold text-[#00292D]/60">Focus areas</div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {["Dubai Hills", "Business Bay", "Creek Harbour", "Dubai Harbour", "Bluewaters", "Dubai South"].map(
                                            (x) => (
                                                <span
                                                    key={x}
                                                    className="rounded-full bg-[#00292D]/5 px-3 py-1 text-xs font-semibold text-[#00292D]/70"
                                                >
                                                    {x}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-[#00292D]/10 backdrop-blur">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <div className="text-xs font-semibold text-[#00292D]/60">How it works</div>
                                    <div className="mt-1 text-lg font-semibold text-[#00292D]">
                                        A simple, premium workflow.
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-[#AFF8C8]/40 px-3 py-1 text-xs font-semibold text-[#00292D]">
                                    <BarChart3 className="h-4 w-4" /> Process-first
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                {processSteps.map((s, idx) => (
                                    <div key={s.title} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D] text-sm font-semibold text-[#F8F8FF]">
                                                {idx + 1}
                                            </div>
                                            {idx !== processSteps.length - 1 && (
                                                <div className="mt-2 h-10 w-px bg-[#00292D]/15" />
                                            )}
                                        </div>

                                        <div className="min-w-0">
                                            <div className="text-sm font-semibold text-[#00292D]">{s.title}</div>
                                            <div className="mt-1 text-sm leading-relaxed text-[#00292D]/65">{s.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-3xl bg-gradient-to-br from-[#FFEEB4]/35 via-white to-white p-5 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs font-semibold text-[#00292D]/60">Want a shortlist today?</div>
                                        <div className="mt-1 text-base font-semibold text-[#00292D]">
                                            Tell us your budget + location.
                                        </div>
                                        <div className="mt-2 text-sm text-[#00292D]/65">
                                            We’ll respond with options aligned to your goals and timeline.
                                        </div>
                                    </div>
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF]">
                                        <Building2 className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <Button asChild className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                                        <Link href="/contact">Get shortlist</Link>
                                    </Button>
                                    <Button asChild variant="outline" className="border-[#00292D]/15 bg-transparent">
                                        <Link href="/news">Read insights</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-6 rounded-3xl bg-[#00292D] p-6 text-[#F8F8FF] shadow-sm"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <div className="text-xs font-semibold text-[#F8F8FF]/70">Strathmond standard</div>
                                    <div className="mt-1 text-lg font-semibold">Built for premium outcomes.</div>
                                </div>
                                <span className="rounded-full bg-[#F8F8FF]/10 px-3 py-1 text-xs font-semibold text-[#F8F8FF]/80">
                                    Quality-first
                                </span>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {[
                                    { icon: ShieldCheck, label: "Trust-led handling" },
                                    { icon: ClipboardCheck, label: "Clear process steps" },
                                    { icon: Handshake, label: "Professional negotiation" },
                                    { icon: BarChart3, label: "Market-aware decisions" },
                                ].map((x) => {
                                    const Icon = x.icon;
                                    return (
                                        <div
                                            key={x.label}
                                            className="flex items-center gap-3 rounded-2xl bg-[#F8F8FF]/5 px-4 py-3"
                                        >
                                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#AFF8C8]/20 text-[#AFF8C8]">
                                                <Icon className="h-4.5 w-4.5" />
                                            </span>
                                            <div className="text-sm font-semibold text-[#F8F8FF]/90">{x.label}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                                <div className="text-sm text-[#F8F8FF]/70">
                                    Ready to start? Choose a track and move forward.
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8F8FF] hover:opacity-80"
                                >
                                    Contact <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
