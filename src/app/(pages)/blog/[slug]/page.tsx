"use client";

import React, { use } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { getBlogBySlug } from "@/lib/api/blogs";
import { Spinner } from "@/components/ui/spinner";

function estimateReadTime(content: string) {
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
}

export default function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = use(params);

    const { data: article, isLoading, isError } = useQuery({
        queryKey: ["blog", slug],
        queryFn: () => getBlogBySlug(slug),
    })


    if (isLoading) {
        return (
            <UserWrapper>
                <div className="flex items-center justify-center p-20">
                    <Spinner />
                </div>
            </UserWrapper>
        );
    }

    if (isError || !article) {
        return (
            <UserWrapper>
                <div className="flex items-center justify-center p-20 text-red-600">
                    Blog not found
                </div>
            </UserWrapper>
        );
    }

    const handleShare = async () => {
        const shareData = {
            title: article.title,
            text: article.excerpt,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.error("Share cancelled or failed", error);
            }
        } else {
            await navigator.clipboard.writeText(shareData.url);
            alert("Link copied to clipboard!");
        }
    };


    const readTime = estimateReadTime(article.content);


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
                                onClick={handleShare}
                            >
                                <Share2 className="mr-1 h-4 w-4" />
                                Share
                            </Button>
                            {/* <Button
                                variant="outline"
                                className="h-10 rounded-full border-[#00292D]/15 bg-white"
                            >
                                <Bookmark className="mr-1 h-4 w-4" />
                                Save
                            </Button> */}
                        </div>
                    </div>
                </div>

                <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="">
                            <div className="overflow-hidden ">
                                <div className="relative aspect-[16/9] w-full ">
                                    <Image
                                        src={article.coverImage}
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
                                            {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "—"}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5">
                                            <Clock className="h-3.5 w-3.5" />
                                            {readTime}
                                        </span>
                                    </div>

                                    <Separator className="my-6 bg-[#00292D]/10" />

                                    <p className="mt-2 leading-relaxed text-[#00292D]/75">{article.content}</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
