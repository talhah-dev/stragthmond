"use client";

import React, { useEffect, useMemo, useState } from "react";
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
import { ArrowLeft, FileText, UploadCloud, Loader2, Bot } from "lucide-react";
import type { Blog } from "@/types/blog";
import { upload } from "@vercel/blob/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/lib/api/blogs";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { BlobStorage } from "@/components/admin/BlobStorage";

function toSlug(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/['"]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

export default function CreateBlogPage() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [category, setCategory] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [coverImage, setCoverImage] = useState<string>("");
    const [activeStatus, setActiveStatus] = useState<Blog["status"] | null>(null);
    const [coverFileName, setCoverFileName] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const autoSlug = useMemo(() => toSlug(title), [title]);

    useEffect(() => {
        setSlug(autoSlug);
    }, [autoSlug]);

    const queryClient = useQueryClient();

    const { mutate: mutateCreateBlog, isPending: isCreating } = useMutation({
        mutationFn: async (payload: Blog) => {
            return createBlog(payload);
        },
        onSuccess: (data: any) => {
            setActiveStatus(null);
            setTitle("");
            setSlug("");
            setCategory("");
            setExcerpt("");
            setContent("");
            setCoverImage("");
            setCoverFileName("");
            toast.success(data?.message || "Blog created successfully");
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
        },
        onError: (err: any) => {
            setActiveStatus(null);
            toast.error(err?.message || "Unauthorized access");
        },
    });

    const onPickCover = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);

        const fileType = file.name.split(".").pop();
        const base = file.name.replace(/\.[^/.]+$/, "");
        const uniqueName = `${base}-${crypto.randomUUID()}.${fileType}`;

        try {
            const blob = await upload(uniqueName, file, {
                access: "public",
                handleUploadUrl: "/api/upload",
            });

            setCoverImage(blob.url);
            setCoverFileName(file.name);
            queryClient.invalidateQueries({ queryKey: ["blob-usage"] });
        } catch (err: any) {
            toast.error(err?.message || "Image upload failed");
        } finally {
            setIsUploading(false);
            e.target.value = "";
        }
    };

    const submit = (nextStatus: Blog["status"]) => {
        setActiveStatus(nextStatus);

        const payload: Blog = {
            status: nextStatus,
            title: title.trim(),
            slug: slug.trim(),
            category,
            excerpt: excerpt.trim(),
            content: content.trim(),
            coverImage,
        };

        mutateCreateBlog(payload);
    };

    const isDisabled =
        isUploading ||
        isCreating ||
        !title.trim() ||
        !category ||
        !excerpt.trim() ||
        !content.trim() ||
        !coverImage;

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
                                Create Blog
                            </h1>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Create a new article with premium structure and clean content blocks
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
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. Buying Property in Dubai: A Clear 2026 Guide"
                                    className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    required
                                    disabled={isUploading || isCreating}
                                />
                                <div className="text-xs font-medium text-[#00292D]/60">
                                    Slug:{" "}
                                    <span className="font-semibold text-[#00292D]">
                                        {slug || "auto-generated-from-title"}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-[#00292D]">Category</Label>
                                <Select
                                    value={category}
                                    onValueChange={setCategory}
                                    disabled={isUploading || isCreating}
                                >
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
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    placeholder="Short summary shown on blog listing cards"
                                    className="min-h-[260px] border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    required
                                    disabled={isUploading || isCreating}
                                />
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="">
                                <BlobStorage />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-[#00292D]">Cover image</Label>

                                <div className="rounded-xl border border-[#00292D]/15 bg-[#F8F8FF] p-4">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="space-y-1">
                                            <div className="text-sm font-semibold text-[#00292D]">Upload cover</div>
                                            <div className="text-xs text-[#00292D]/60">
                                                Recommended: 16:9 image for best layout
                                            </div>
                                        </div>

                                        <label
                                            className={[
                                                "inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#00292D] ring-1 ring-[#00292D]/15 hover:bg-white/80",
                                                isUploading || isCreating ? "pointer-events-none opacity-60" : "cursor-pointer",
                                            ].join(" ")}
                                        >
                                            {isUploading ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <UploadCloud className="h-4 w-4" />
                                            )}
                                            {isUploading ? "Uploading..." : "Choose file"}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={onPickCover}
                                                disabled={isUploading || isCreating}
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-4 overflow-hidden rounded-xl bg-white ring-1 ring-[#00292D]/10">
                                        <div className="relative aspect-[16/9] w-full bg-[#00292D]/5">
                                            {coverImage ? (
                                                <Image
                                                    src={coverImage}
                                                    alt="Cover preview"
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-[#00292D]/50">
                                                    No image selected
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {coverFileName ? (
                                        <div className="mt-3 text-xs font-medium text-[#00292D]/60">
                                            Selected:{" "}
                                            <span className="font-semibold text-[#00292D]">{coverFileName}</span>
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <div className="flex items-center justify-between">
                                <Label className="text-sm font-semibold text-[#00292D]">Content</Label>

                                <Button
                                    type="button"
                                    variant="outline"
                                    className="cursor-pointer"
                                    onClick={async () => {
                                        toast.loading("Generating content...");

                                        const res = await fetch("/api/ai/generate-blog", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify({
                                                title,
                                                category,
                                                excerpt,
                                                tone: "premium, confident, trustworthy",
                                                length: "1500-2000 words",
                                            }),
                                        });

                                        const json = await res.json();
                                        toast.dismiss();

                                        if (json.success) {
                                            setContent(json.content);
                                            toast.success("Content generated");
                                        } else {
                                            toast.error(json.message);
                                        }
                                    }}
                                    disabled={!title || isUploading || isCreating}
                                >
                                    <Bot />
                                    Generate with AI
                                </Button>
                            </div>

                            <Textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write the blog content here..."
                                className="min-h-[260px] border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                required
                                disabled={isUploading || isCreating}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-[#00292D]/10 p-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-xs font-medium text-[#00292D]/60">
                            Status will be set when you choose an action below
                        </div>

                        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                            <Button
                                type="button"
                                variant="outline"
                                className="h-11 w-full border-[#00292D]/15 bg-white text-[#00292D] hover:bg-white/80 sm:w-auto"
                                onClick={() => submit("draft")}
                                disabled={isDisabled || isCreating}
                            >
                                {isCreating && activeStatus === "draft" ? <Spinner /> : null}
                                Save Draft
                            </Button>

                            <Button
                                type="button"
                                className="h-11 w-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90 sm:w-auto"
                                onClick={() => submit("published")}
                                disabled={isDisabled || isCreating}
                            >
                                {isCreating && activeStatus === "published" ? <Spinner /> : null}
                                Publish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
