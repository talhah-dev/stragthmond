"use client";

import React from "react";
import Link from "next/link";
import HeroSections from "@/components/HeroSections";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Briefcase,
    Clock,
    MapPin,
    Sparkles,
    Users,
    ArrowRight,
    Search,
    Building2,
    ShieldCheck,
} from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

type Job = {
    id: string;
    title: string;
    team: string;
    location: string;
    type: "Full-time" | "Part-time" | "Contract";
    level: "Junior" | "Mid" | "Senior";
    short: string;
    tags: string[];
};

const jobs: Job[] = [
    {
        id: "sales-advisor",
        title: "Real Estate Sales Advisor",
        team: "Sales",
        location: "Dubai, UAE",
        type: "Full-time",
        level: "Mid",
        short:
            "Own client journeys end-to-end with a premium, consultative approach and strong market awareness.",
        tags: ["Buy", "Sell", "Negotiation", "Client advisory"],
    },
    {
        id: "leasing-specialist",
        title: "Leasing Specialist",
        team: "Leasing",
        location: "Dubai, UAE",
        type: "Full-time",
        level: "Junior",
        short:
            "Help renters find the right home with structure, speed, and clear coordination from viewing to handover.",
        tags: ["Rent", "Coordination", "Contracts", "Client service"],
    },
    {
        id: "content-marketing",
        title: "Content & Insights Associate",
        team: "Marketing",
        location: "Dubai, UAE",
        type: "Full-time",
        level: "Mid",
        short:
            "Create market insights, guides, and content that supports better decisions for buyers and investors.",
        tags: ["Writing", "Research", "SEO", "Market insights"],
    },
    {
        id: "offplan-advisor",
        title: "Off Plan Investment Advisor",
        team: "Off Plan",
        location: "Dubai, UAE",
        type: "Full-time",
        level: "Senior",
        short:
            "Guide investors through launches and payment plans with fundamentals-first recommendations and risk clarity.",
        tags: ["Off Plan", "Investment", "Developers", "Payment plans"],
    },
];

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full bg-[#F8F8FF] px-3 py-1 text-xs font-semibold text-[#00292D]/75 ring-1 ring-[#00292D]/10">
            {children}
        </span>
    );
}

function JobCard({ job }: { job: Job }) {
    return (
        <div data-aos="fade-up" className="rounded-[28px] bg-white p-6 ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <div className="text-lg font-semibold text-[#00292D]">{job.title}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#00292D]/65">
                        <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4" /> {job.team}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-4 w-4" /> {job.type}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Badge className="rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]">
                        {job.level}
                    </Badge>
                </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#00292D]/70">{job.short}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <Link
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00292D] hover:opacity-80"
                >
                    View role <ArrowRight className="h-4 w-4" />
                </Link>

                <Button asChild className="h-10 rounded-full bg-[#00292D] px-5 text-[#F8F8FF] hover:bg-[#00292D]/90">
                    <Link href={`/careers/${job.id}`}>Apply</Link>
                </Button>
            </div>
        </div>
    );
}

export default function Career() {
    const [query, setQuery] = React.useState("");
    const [team, setTeam] = React.useState<"All" | "Sales" | "Leasing" | "Marketing" | "Off Plan">("All");

    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        return jobs.filter((j) => {
            const matchTeam = team === "All" ? true : j.team === team;
            const matchQuery =
                !q ||
                j.title.toLowerCase().includes(q) ||
                j.team.toLowerCase().includes(q) ||
                j.tags.some((t) => t.toLowerCase().includes(q));
            return matchTeam && matchQuery;
        });
    }, [query, team]);

    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] md:px-5 px-3 rounded-xl pt-3 overflow-hidden">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Careers at Strathmond"
                    subheading="Build premium real estate experiences with a team that values clarity, structure, and trust."
                />

                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-center items-start">
                        <div data-aos="fade-up" className="lg:col-span-6">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                WHY STRATHMOND
                            </div>
                            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                Do work you’re proud of—where quality is the standard.
                            </h2>
                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                We’re building a premium advisory experience across buying, renting, selling, and off-plan.
                                If you care about doing things properly—with structure and respect for clients—you’ll fit in.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                <Pill>Dubai-first</Pill>
                                <Pill>Premium client journeys</Pill>
                                <Pill>High-signal listings</Pill>
                                <Pill>Market insights</Pill>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="lg:col-span-6">
                            <div className="">
                                <Image src={"https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"} alt="img" width={500} height={500} className="object-cover w-full md:h-[30rem] rounded-xl" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-16 md:mt-20 mt-10 sm:px-6 lg:px-8 lg:pb-24">
                    <div data-aos="fade-up" className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                OPEN ROLES
                            </div>
                            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                Explore opportunities
                            </h2>
                            <p className="mt-2 text-sm text-[#00292D]/65">
                                Filter roles by team or search by keyword.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative w-full sm:w-[320px]">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00292D]/45" />
                                <Input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search roles…"
                                    className="h-11 rounded-2xl border-[#00292D]/15 bg-white pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </div>

                            <div className="inline-flex rounded-2xl bg-white p-1 ring-1 ring-[#00292D]/10">
                                {(["All", "Sales", "Leasing", "Marketing", "Off Plan"] as const).map((t) => {
                                    const active = team === t;
                                    return (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setTeam(t)}
                                            className={[
                                                "rounded-xl md:px-4 px-1.5 md:py-2 py-1.5 text-sm font-semibold transition",
                                                active ? "bg-[#00292D] text-[#F8F8FF]" : "text-[#00292D]/70 hover:bg-[#00292D]/5",
                                            ].join(" ")}
                                        >
                                            {t}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        {filtered.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="mt-8 rounded-[28px] bg-white p-8 text-center ring-1 ring-[#00292D]/10">
                            <div className="text-lg font-semibold text-[#00292D]">No roles found</div>
                            <div className="mt-2 text-sm text-[#00292D]/65">
                                Try a different keyword or switch teams.
                            </div>
                        </div>
                    )}
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 md:mt-20 mt-10">
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-5">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">FAQ</div>
                            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                Hiring questions, answered
                            </h2>
                            <p className="mt-3 text-sm text-[#00292D]/65">
                                Everything you need to know about applying and what happens next.
                            </p>
                        </div>

                        <div className="lg:col-span-7">
                            <div data-aos="fade-up" data-aos-delay="200" className="rounded-2xl bg-white p-4 sm:p-6 ring-1 ring-[#00292D]/10">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            What’s the hiring process like?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Apply online, then we’ll review your profile. If it’s a match, you’ll have a short screening call,
                                            followed by a role-focused interview. Some roles include a practical task. We’ll keep communication clear at every step.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Do you offer remote or hybrid roles?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Most roles are Dubai-based due to the nature of client work and market coordination. Some positions may allow limited flexibility depending on the team and responsibilities.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            Can I apply for more than one role?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Yes. Apply to the roles that best match your experience. If you’re a fit for a different opening, we may recommend an alternative during the process.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4" className="border-b border-[#00292D]/10">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            What should I include in my application?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            A clear CV and a short note about what you’ve done and what you want to grow into. For sales and leasing roles, include performance highlights. For marketing roles, share links or samples if available.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-5" className="border-b-0">
                                        <AccordionTrigger className="text-left text-[#00292D] hover:no-underline">
                                            How quickly will I hear back?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-[#00292D]/70">
                                            Timelines vary by role volume, but we aim to respond as quickly as possible. If you don’t hear back immediately, it doesn’t mean no—your application may still be under review.
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
