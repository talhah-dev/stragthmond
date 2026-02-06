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
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "@/lib/api/blogs";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { Blog } from "@/types/blog";


function estimateReadTime(content: string) {
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
}

function BlogCard({ blog }: { blog: Blog }) {
    const readTime = estimateReadTime(blog.content);

    return (
        <div data-aos="fade-up" className="group overflow-hidden rounded-2xl bg-white ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="relative aspect-[16/12] w-full bg-[#00292D]/5">
                <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute left-5 top-5">
                    <Badge className="rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]">
                        {blog.category}
                    </Badge>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-semibold text-[#00292D]">
                    {blog.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#00292D]/70">
                    {blog.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-[#00292D]/60">
                    <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "—"}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {readTime}
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

    const { data = [], isLoading, isError } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => getBlog({ status: "published" })
    })

    if (isError) {
        return (
            toast.error(isError || "Failed to load blogs")
        );
    }

    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF]">
                {
                    isLoading && (
                        <div className="flex items-center justify-center p-20"><Spinner /></div >
                    )
                }



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

                        {/* <Button
                            className="h-11 rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90"
                        >
                            Subscribe
                        </Button> */}
                    </div>
                </section>

                {
                    data.length === 0 && (
                        <div className="flex items-center justify-center p-20 text-zinc-600">
                            No blogs avaliabe at the moment
                        </div>
                    )
                }

                {/* GRID */}
                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((blog) => (
                            <Link key={blog._id ?? blog.slug} href={`/blog/${blog.slug}`}>
                                <BlogCard blog={blog} />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
