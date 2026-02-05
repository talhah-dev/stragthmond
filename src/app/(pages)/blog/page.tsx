"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    CalendarDays,
    Clock,
    TrendingUp,
} from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";

type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
};

const posts: BlogPost[] = [
    {
        slug: "renting-dubai-mistakes",
        title: "7 Common Renting Mistakes in Dubai (and How to Avoid Them)",
        excerpt:
            "Renting moves fast in Dubai. Here’s how to avoid overpaying, bad contracts, and rushed decisions.",
        category: "Renting",
        date: "Jan 26, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1722858814294-99b2323856df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        slug: "off-plan-investment-explained",
        title: "Off Plan Properties Explained: Risks, Rewards & Timing",
        excerpt:
            "Off plan can unlock value—but only if chosen correctly. Learn how to evaluate projects properly.",
        category: "Off Plan",
        date: "Jan 18, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1722858814294-99b2323856df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        slug: "best-communities-dubai",
        title: "Best Communities to Live in Dubai (Lifestyle Guide)",
        excerpt:
            "Downtown, Marina, Dubai Hills, Creek Harbour—how to choose based on lifestyle and value.",
        category: "Communities",
        date: "Jan 10, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1722858814294-99b2323856df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <div data-aos="fade-up" className="group overflow-hidden rounded-2xl bg-white ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="relative aspect-[16/12] w-full bg-[#00292D]/5">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute left-5 top-5">
                    <Badge className="rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]">
                        {post.category}
                    </Badge>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-semibold text-[#00292D]">
                    {post.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#00292D]/70">
                    {post.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-[#00292D]/60">
                    <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                    </span>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#00292D] transition group-hover:translate-x-0.5">
                    Read article <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </div>
    );
}

export default function BlogPage() {
    const featured = posts.find((p) => p.featured);
    const rest = posts.filter((p) => !p.featured);

    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF]">
                {/* HERO */}
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div data-aos="fade-up" className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                                <TrendingUp className="h-4 w-4" />
                                News & Insights
                            </div>

                            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                                Market insights, without the noise.
                            </h1>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Practical guides, market context, and clear advice for buying, renting,
                                selling, and investing in Dubai property.
                            </p>
                        </div>

                        <Button
                            className="h-11 rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90"
                        >
                            Subscribe
                        </Button>
                    </div>
                </section>

                {/* GRID */}
                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {rest.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <BlogCard post={post} />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
