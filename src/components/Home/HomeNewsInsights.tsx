"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    image: string;
    date: string;
};

const posts: Post[] = [
    {
        slug: "dubai-property-market-2026",
        title: "Dubai property market: what to watch in 2026",
        excerpt:
            "Key indicators, demand shifts, and pricing signals that can help you make smarter buy, rent, and investment decisions.",
        category: "Market",
        readTime: "6 min read",
        image:"https://images.unsplash.com/photo-1733413788848-6f9e0c1c414c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        date: "Jan 2026",
    },
    {
        slug: "off-plan-payment-plans-explained",
        title: "Off-plan payment plans explained: how to compare properly",
        excerpt:
            "A simple framework to evaluate payment plans, handover timelines, and risk—without getting lost in marketing.",
        category: "Off Plan",
        readTime: "5 min read",
        image:"https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        date: "Jan 2026",
    },
    {
        slug: "renting-checklist-dubai",
        title: "Renting checklist in Dubai: contracts, deposits, and timelines",
        excerpt:
            "A clean checklist to reduce surprises—what to verify before you sign, and how to plan your move-in smoothly.",
        category: "Rent",
        readTime: "7 min read",
        image:"https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 2026",
    },
];

const insights = [
    {
        icon: TrendingUp,
        label: "Price signals",
        value: "Trend-led",
        desc: "Understand what drives movement in key areas.",
    },
    {
        icon: Clock,
        label: "Launch timing",
        value: "Opportunity",
        desc: "Track off-plan releases and availability changes.",
    },
    {
        icon: CalendarDays,
        label: "Weekly updates",
        value: "Consistent",
        desc: "Fresh market reads and practical guides.",
    },
];

function PostCard({ post }: { post: Post }) {
    return (
        <Link
        data-aos="fade-up"
            href={`/news/${post.slug}`}
            className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="relative h-70 overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-[#FFEEB4] px-3 py-1 text-xs font-semibold text-[#00292D]">
                    {post.category}
                </div>
            </div>

            <div className="p-6">
                <div className="text-xs font-semibold text-[#00292D]/60">
                    {post.date} · {post.readTime}
                </div>
                <div className="mt-2 text-lg font-semibold text-[#00292D] transition group-hover:opacity-90">
                    {post.title}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-[#00292D]/65">
                    {post.excerpt}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#00292D] transition group-hover:translate-x-0.5">
                    Read article <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </Link>
    );
}

export default function HomeNewsInsights() {
    return (
        <section className="relative overflow-hidden bg-[#00292D]">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-44 left-[-8%] h-[520px] w-[520px] rounded-full bg-[#AFF8C8]/10 blur-3xl" />
                <div className="absolute -bottom-56 right-[-10%] h-[620px] w-[620px] rounded-full bg-[#D2C4FB]/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,248,255,0.10),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,238,180,0.12),transparent_42%)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p data-aos="fade-up" className="text-sm font-medium text-[#F8F8FF]/75">News & Insights</p>
                        <h2 data-aos="fade-up" className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#F8F8FF] sm:text-4xl">
                            Market context, practical guides, and off-plan updates.
                        </h2>
                        <p data-aos="fade-up" className="mt-3 text-pretty text-base text-[#F8F8FF]/70 sm:text-lg">
                            Read what matters—clear, concise, and designed to support better decisions.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="flex flex-wrap gap-2">
                        <Button
                            asChild
                            variant="outline"
                            className="border-[#F8F8FF]/25 bg-transparent text-[#F8F8FF] hover:bg-[#F8F8FF]/10 hover:text-[#F8F8FF]"
                        >
                            <Link href="/blog">View all articles</Link>
                        </Button>
                        <Button asChild className="bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]/90">
                            <Link href="/contact">Get a shortlist</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <div className="grid gap-6 sm:grid-cols-2">
                            {posts.slice(0, 2).map((p) => (
                                <PostCard key={p.slug} post={p} />
                            ))}
                        </div>

                        <div className="mt-6">
                            <PostCard post={posts[2]} />
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div data-aos="fade-up" className="rounded-3xl border border-[#F8F8FF]/15 bg-[#F8F8FF]/5 p-6 backdrop-blur">
                            <div className="text-sm font-semibold text-[#F8F8FF]">What you’ll get</div>
                            <div className="mt-2 text-sm text-[#F8F8FF]/70">
                                A premium, decision-first reading experience.
                            </div>

                            <div className="mt-6 space-y-4">
                                {insights.map((x) => {
                                    const Icon = x.icon;
                                    return (
                                        <div
                                            key={x.label}
                                            className="flex items-start gap-3 rounded-2xl bg-[#F8F8FF]/5 p-4"
                                        >
                                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#AFF8C8]/15 text-[#AFF8C8]">
                                                <Icon className="h-5 w-5" />
                                            </span>
                                            <div className="min-w-0">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="text-sm font-semibold text-[#F8F8FF]">{x.label}</div>
                                                    <div className="rounded-full bg-[#FFEEB4] px-3 py-1 text-xs font-semibold text-[#00292D]">
                                                        {x.value}
                                                    </div>
                                                </div>
                                                <div className="mt-1 text-sm leading-relaxed text-[#F8F8FF]/70">
                                                    {x.desc}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="mt-6 rounded-3xl bg-gradient-to-br from-[#FFEEB4]/25 via-[#F8F8FF]/5 to-[#D2C4FB]/15 p-5 ring-1 ring-[#F8F8FF]/10"
                            >
                                <div className="text-sm font-semibold text-[#F8F8FF]">Want insights tailored to you?</div>
                                <div className="mt-2 text-sm text-[#F8F8FF]/70">
                                    Tell us your budget and preferred communities—get a curated shortlist.
                                </div>
                                <div className="mt-4">
                                    <Button asChild className="w-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]/90">
                                        <Link href="/contact">Request shortlist</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
