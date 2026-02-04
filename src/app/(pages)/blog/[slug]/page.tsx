"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeft,
    CalendarDays,
    Clock,
    Share2,
    Bookmark,
    CheckCircle2,
} from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";

export default function BlogDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const article = {
        category: "Insights",
        title: "Buying Property in Dubai: A Clear 2026 Guide",
        excerpt:
            "From communities and budgets to fees and timelines—everything you need to know before buying property in Dubai.",
        date: "Feb 02, 2026",
        readTime: "6 min read",
        cover: "https://images.unsplash.com/photo-1722858814294-99b2323856df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "Strathmond Insights",
            role: "Market & Research",
            avatar: "/images/team/amelia.jpg",
        },
    };

    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] mt-5">
                <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00292D]/75 hover:text-[#00292D]"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to blog
                        </Link>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                className="h-10 rounded-full border-[#00292D]/15 bg-white"
                            >
                                <Share2 className="mr-2 h-4 w-4" />
                                Share
                            </Button>
                            <Button
                                variant="outline"
                                className="h-10 rounded-full border-[#00292D]/15 bg-white"
                            >
                                <Bookmark className="mr-2 h-4 w-4" />
                                Save
                            </Button>
                        </div>
                    </div>
                </div>

                <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="">
                            <div className="overflow-hidden ">
                                <div className="relative aspect-[16/9] w-full bg-[#00292D]/5">
                                    <Image
                                        src={article.cover}
                                        alt={article.title}
                                        fill
                                        priority
                                        className="object-cover rounded-2xl"
                                        sizes="(max-width: 1024px) 100vw, 70vw"
                                    />
                                    <div className="absolute left-5 top-5">
                                        <Badge className="rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]">
                                            {article.category}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="py-6 sm:py-8">
                                    <h1 className="text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                        {article.title}
                                    </h1>

                                    <p className="mt-3 text-sm leading-relaxed text-[#00292D]/70 sm:text-base">
                                        {article.excerpt}
                                    </p>

                                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#00292D]/60">
                                        <span className="inline-flex items-center gap-1.5">
                                            <CalendarDays className="h-3.5 w-3.5" />
                                            {article.date}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <Clock className="h-3.5 w-3.5" />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <Separator className="my-6 bg-[#00292D]/10" />

                                    <div className="flex items-center gap-3">
                                        <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-[#00292D]/10">
                                            <Image
                                                src={"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"}
                                                alt={article.author.name}
                                                fill
                                                className="object-cover"
                                                sizes="40px"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-[#00292D]">
                                                {article.author.name}
                                            </div>
                                            <div className="text-xs text-[#00292D]/60">
                                                {article.author.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 space-y-8 md:mb-20 mb-10">
                                {[
                                    {
                                        h: "What this guide covers",
                                        p: "Dubai property decisions move fast. This guide keeps it simple: what to check, what matters, and how to avoid common mistakes.",
                                    },
                                    {
                                        h: "Pick the right community (not just the building)",
                                        p: "Your lifestyle, commute, and long-term value usually depend more on the community than the listing itself.",
                                    },
                                    {
                                        h: "Know the real costs",
                                        p: "Look beyond the headline price—factor in fees and admin costs, service charges, and mortgage or payment planning so there are no surprises later.",
                                    },
                                    {
                                        h: "Use a clean shortlist approach",
                                        p: "A structured shortlist saves time and helps you compare options fairly—especially when inventory changes quickly.",
                                    },
                                    {
                                        h: "Final checks before commitment",
                                        p: "Confirm availability and timeline, verify view and layout, and make sure contract steps and milestones are clear before you commit.",
                                    },
                                    {
                                        h: "Work with a process, not pressure",
                                        p: "Move fast when you need to, but decide with clarity. A simple process keeps decisions confident—even in a competitive market.",
                                    },
                                ].map((x) => (
                                    <div key={x.h} className="">
                                        <h2 className="font-semibold text-[#00292D] text-2xl">{x.h}</h2>
                                        <p className="mt-2 leading-relaxed text-[#00292D]/75">{x.p}</p>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
