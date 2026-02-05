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
import { ArrowLeft, Home, UploadCloud } from "lucide-react";

type PropertyForm = {
    title: string;
    location: string;
    price: string;
    status: "ready" | "off-plan";
    beds: string;
    baths: string;
    sqft: string;
    overview: string;
    highlights: string;
    communityName: string;
    listedMonth: string;
    mapQuery: string;
    coverFile: File | null;
};

const initialState: PropertyForm = {
    title: "",
    location: "",
    price: "",
    status: "ready",
    beds: "2",
    baths: "2",
    sqft: "1250",
    overview: "",
    highlights: "High-floor skyline view\nModern open-plan layout\nWalkable lifestyle access\nStrong rental demand area",
    communityName: "",
    listedMonth: "Feb 2026",
    mapQuery: "Downtown Dubai",
    coverFile: null,
};

export default function CreatePropertyPage() {
    const [form, setForm] = React.useState<PropertyForm>(initialState);
    const [coverPreview, setCoverPreview] = React.useState<string>("");

    const update = (key: keyof PropertyForm, value: string) => {
        setForm((p) => ({ ...p, [key]: value }));
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
            saveAs: status,
            ...form,
            coverFile: form.coverFile
                ? { name: form.coverFile.name, type: form.coverFile.type, size: form.coverFile.size }
                : null,
        };
        console.log("PROPERTY SUBMIT:", payload);
    };

    return (
        <div className="min-h-screen bg-[#F8F8FF] px-6 py-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                                <Home className="h-4 w-4" />
                                Property
                            </div>

                            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                                Create Property
                            </h1>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Add a new listing with basic details, highlights, and a cover image
                            </p>
                        </div>

                        <Link href="/admin/properties">
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
                                    onChange={(e) => update("title", e.target.value)}
                                    placeholder="e.g. Luxury Apartment with Skyline View"
                                    className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    required
                                />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Location</Label>
                                    <Input
                                        value={form.location}
                                        onChange={(e) => update("location", e.target.value)}
                                        placeholder="e.g. Downtown Dubai"
                                        className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Price</Label>
                                    <Input
                                        value={form.price}
                                        onChange={(e) => update("price", e.target.value)}
                                        placeholder="e.g. AED 2,450,000"
                                        className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Listing status</Label>
                                    <Select value={form.status} onValueChange={(v) => update("status", v)}>
                                        <SelectTrigger className="h-11 w-full border-[#00292D]/15 bg-[#F8F8FF] focus:ring-0">
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ready">Ready</SelectItem>
                                            <SelectItem value="off-plan">Off Plan</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Listed month</Label>
                                    <Input
                                        value={form.listedMonth}
                                        onChange={(e) => update("listedMonth", e.target.value)}
                                        placeholder="e.g. Feb 2026"
                                        className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Beds</Label>
                                    <Input
                                        value={form.beds}
                                        onChange={(e) => update("beds", e.target.value)}
                                        placeholder="2"
                                        className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Baths</Label>
                                    <Input
                                        value={form.baths}
                                        onChange={(e) => update("baths", e.target.value)}
                                        placeholder="2"
                                        className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Sqft</Label>
                                    <Input
                                        value={form.sqft}
                                        onChange={(e) => update("sqft", e.target.value)}
                                        placeholder="1250"
                                        className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-[#00292D]">Overview</Label>
                                <Textarea
                                    value={form.overview}
                                    onChange={(e) => update("overview", e.target.value)}
                                    placeholder="Write the overview description..."
                                    className="min-h-[180px] border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
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
                                            <div className="text-sm font-semibold text-[#00292D]">Upload cover</div>
                                            <div className="text-xs text-[#00292D]/60">
                                                Recommended: 16:9 for best property hero
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
                                                    No image selected
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-[#00292D]">Highlights</Label>
                                <Textarea
                                    value={form.highlights}
                                    onChange={(e) => update("highlights", e.target.value)}
                                    placeholder={"Add highlights (one per line)\nExample:\nHigh-floor skyline view"}
                                    className="min-h-[180px] border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Community</Label>
                                    <Input
                                        value={form.communityName}
                                        onChange={(e) => update("communityName", e.target.value)}
                                        placeholder="e.g. Downtown Dubai"
                                        className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-[#00292D]">Map query</Label>
                                    <Input
                                        value={form.mapQuery}
                                        onChange={(e) => update("mapQuery", e.target.value)}
                                        placeholder="e.g. Downtown Dubai"
                                        className="h-11 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>
                            </div>

                            <div className="rounded-xl border border-[#00292D]/15 bg-[#F8F8FF] p-4">
                                <div className="text-sm font-semibold text-[#00292D]">Map preview</div>
                                <div className="mt-2 text-xs text-[#00292D]/60">
                                    This is only a preview for now. Later we’ll store map location properly.
                                </div>
                                <div className="mt-4 overflow-hidden rounded-xl bg-white ring-1 ring-[#00292D]/10">
                                    <div className="relative h-[220px] w-full">
                                        <iframe
                                            title="Map Preview"
                                            src={`https://www.google.com/maps?q=${encodeURIComponent(form.mapQuery || "Dubai")}&output=embed`}
                                            className="h-full w-full border-0"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-[#00292D]/10 p-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-xs font-medium text-[#00292D]/60">
                            Save as draft or publish. Data will be logged in console for now.
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
                                Publish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
