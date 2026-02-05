"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, FileText, UploadCloud } from "lucide-react";

type BlogForm = {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    authorName: string;
    authorRole: string;
    content: string;
    coverFile: File | null;
};

const initialState: BlogForm = {
    title: "Buying Property in Dubai: A Clear 2026 Guide",
    slug: "buying-property-in-dubai-a-clear-2026-guide",
    category: "Insights",
    excerpt:
        "From communities and budgets to fees and timelines—everything you need to know before buying property in Dubai.",
    authorName: "Strathmond Insights",
    authorRole: "Market & Research",
    content:
        "What this guide covers...\n\nPick the right community...\n\nKnow the real costs...\n\nFinal checks before commitment...\n\nWork with a process, not pressure...",
    coverFile: null,
};

function slugify(input: string) {
    return input
        .toLowerCase()
        .trim()
        .replace(/['"]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 80);
}

export default function EditBlogPage({ params }: { params: { slug: string } }) {
    const [form, setForm] = React.useState<BlogForm>(() => ({
        ...initialState,
        slug: params.slug || initialState.slug,
    }));
    const [coverPreview, setCoverPreview] = React.useState<string>("");

    const update = (key: keyof BlogForm, value: string) => {
        setForm((p) => ({ ...p, [key]: value }));
    };

    const onTitleChange = (v: string) => {
        const slug = slugify(v);
        setForm((p) => ({ ...p, title: v, slug: p.slug || slug }));
    };

    const onCoverChange = (file: File | null) => {
        setForm((p) => ({ ...p, coverFile: file }));
        if (coverPreview) URL.revokeObjectURL(coverPreview);
        if (!file) {
            setCoverPreview("");
            return;
        }
        setCoverPreview(URL.createObjectURL(file));
    };

    const submit = (status: "draft" | "published") => {
        const payload = {
            status,
            originalSlug: params.slug,
            title: form.title,
            slug: form.slug,
            category: form.category,
            excerpt: form.excerpt,
            authorName: form.authorName,
            authorRole: form.authorRole,
            content: form.content,
            coverFile: form.coverFile
                ? { name: form.coverFile.name, type: form.coverFile.type, size: form.coverFile.size }
                : null,
        };
        console.log("BLOG UPDATE:", payload);
    };

    return (
        <div className="min-h-screen bg-[#F8F8FF] px-6 py-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                                <FileText className="h-4 w-4" />
                                Blog
                            </div>

                            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                                Edit Blog
                            </h1>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Update your article details, cover, and content
                            </p>
                        </div>

                        <Link href="/admin/blogs">
                            <Button className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                                <ArrowLeft />
                                Back
                            </Button>
                        </Link>
                    </div>
                </section>

                <div className="overflow-hidden rounded-xl border bg-white ring-1 ring-[#00292D]/10">
                    <div className="grid gap-6 p-6 lg:grid-cols-2">
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-[#00292D]">Title</Label>
                                <Input
                                    value={form.title}
                                    onChange={(e) => onTitleChange(e.target.value)}
                                    placeholder="e.g. Buying Property in Dubai: A Clear 2026 Guide"
                                    className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    required
                                />
                                <div className="text-xs font-medium text-[#00292D]/60">
                                    Slug:{" "}
                                    <span className="font-semibold text-[#00292D]">
                                        {form.slug || params.slug}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-[#00292D]">Category</Label>
                                <Select value={form.category} onValueChange={(v) => update("category", v)}>
                                    <SelectTrigger className="h-11 w-full border-[#00292D]/15 bg-[#F8F8FF] focus:ring-0">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Insights">Insights</SelectItem>
                                        <SelectItem value="Buying">Buying</SelectItem>
                                        <SelectItem value="Renting">Renting</SelectItem>
                                        <SelectItem value="Selling">Selling</SelectItem>
                                        <SelectItem value="Investment">Investment</SelectItem>
                                        <SelectItem value="Off Plan">Off Plan</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-[#00292D]">Excerpt</Label>
                                <Textarea
                                    value={form.excerpt}
                                    onChange={(e) => update("excerpt", e.target.value)}
                                    placeholder="Short summary shown on blog listing cards"
                                    className="min-h-[210px] border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-[#00292D]">Cover image</Label>

                                <div className="rounded-xl border border-[#00292D]/15 bg-[#F8F8FF] p-4">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="space-y-1">
                                            <div className="text-sm font-semibold text-[#00292D]">
                                                Upload new cover
                                            </div>
                                            <div className="text-xs text-[#00292D]/60">
                                                Leave empty if you don’t want to change it
                                            </div>
                                        </div>

                                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#00292D] ring-1 ring-[#00292D]/15 hover:bg-white/80">
                                            <UploadCloud className="h-4 w-4" />
                                            Choose file
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => onCoverChange(e.target.files?.[0] ?? null)}
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-4 overflow-hidden rounded-xl bg-white ring-1 ring-[#00292D]/10">
                                        <div className="relative aspect-[16/9] w-full bg-[#00292D]/5">
                                            {coverPreview ? (
                                                <Image
                                                    src={coverPreview}
                                                    alt="Cover preview"
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-[#00292D]/50">
                                                    Current image will remain
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {form.coverFile && (
                                        <div className="mt-3 text-xs font-medium text-[#00292D]/60">
                                            Selected:{" "}
                                            <span className="font-semibold text-[#00292D]">
                                                {form.coverFile.name}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <Label className="text-sm font-semibold text-[#00292D]">Content</Label>
                            <Textarea
                                value={form.content}
                                onChange={(e) => update("content", e.target.value)}
                                placeholder="Write the blog content here..."
                                className="min-h-[260px] border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-[#00292D]/10 p-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-xs font-medium text-[#00292D]/60">
                            Choose an action to set status and update
                        </div>

                        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                            <Button
                                type="button"
                                variant="outline"
                                className="h-11 w-full border-[#00292D]/15 bg-white text-[#00292D] hover:bg-white/80 sm:w-auto"
                                onClick={() => submit("draft")}
                            >
                                Save Draft
                            </Button>

                            <Button
                                type="button"
                                className="h-11 w-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90 sm:w-auto"
                                onClick={() => submit("published")}
                            >
                                Update & Publish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
