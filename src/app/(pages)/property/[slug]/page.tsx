"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
    Bath,
    BedDouble,
    CalendarDays,
    Check,
    ChevronLeft,
    Heart,
    MapPin,
    Ruler,
    Share2,
    ShieldCheck,
} from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";

export default function PropertyDetailsPage() {

    const images = [
        "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] pt-5">
                <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6  lg:px-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <Link
                            href="/buy/properties-for-sale"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00292D]/75 hover:text-[#00292D]"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Back to properties
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
                                <Heart className="mr-2 h-4 w-4" />
                                Save
                            </Button>
                        </div>
                    </div>
                </div>

                <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-xl">
                        <div data-aos="zoom-out-up" className="relative md:aspect-[16/8] aspect-[16/16] w-full bg-[#00292D]/5">
                            <Image
                                src={"https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt="Property image"
                                width={1000}
                                height={1000}
                                className="object-cover w-full rounded-xl md:aspect-[16/8] aspect-[16/16]"
                                priority
                            />
                            <div className="absolute left-5 top-5 flex items-center gap-2">
                                <Badge className="rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]">
                                    Featured
                                </Badge>
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur">
                                    <MapPin className="h-3.5 w-3.5" />
                                    Downtown Dubai
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-10 lg:mt-20">
                        <div className="mt-10 lg:col-span-3">
                            <div className="text-xs font-semibold  tracking-widest text-[#00292D]/55">
                                OVERVIEW
                            </div>
                            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                Luxury Apartment with Skyline View
                            </h1>
                            <p className="mt-4 text-sm leading-relaxed text-[#00292D]/70 sm:text-base">
                                A premium residence designed for clarity and comfort—modern finishes, open-plan
                                living, and a strong lifestyle location. Ideal for end-use buyers and investors
                                looking for long-term value in a high-demand community. A premium residence designed for clarity and comfort—modern finishes, open-plan
                                living, and a strong lifestyle location. Ideal for end-use buyers and investors
                                looking for long-term value in a high-demand community.
                                <br /><br />
                                A premium residence designed for clarity and comfort—modern finishes, open-plan
                                living, and a strong lifestyle location. Ideal for end-use buyers and investors
                                looking for long-term value in a high-demand community.
                                <br /><br />
                                A premium residence designed for clarity and comfort—modern finishes, open-plan
                                living, and a strong lifestyle location. Ideal for end-use buyers and investors
                                looking for long-term value in a high-demand community. A premium residence designed for clarity and comfort—modern finishes, open-plan
                                living, and a strong lifestyle location. Ideal for end-use buyers and investors
                                looking for long-term value in a high-demand community.
                            </p>

                            <div className="mt-10 grid gap-3 sm:grid-cols-2">
                                {[
                                    "High-floor skyline view",
                                    "Modern open-plan layout",
                                    "Walkable lifestyle access",
                                    "Strong rental demand area",
                                ].map((t) => (
                                    <div
                                        key={t}
                                        className="flex items-start gap-2 rounded-2xl bg-white p-4 ring-1 ring-[#00292D]/10"
                                    >
                                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#AFF8C8]/45 text-[#00292D]">
                                            <Check className="h-4 w-4" />
                                        </span>
                                        <div className="text-sm font-semibold text-[#00292D]/80">{t}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl lg:col-span-2 bg-white p-6 ring-1 ring-[#00292D]/10 sm:p-8">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                        PRICE
                                    </div>
                                    <div className="mt-2 text-3xl font-semibold text-[#00292D]">
                                        AED 2,450,000
                                    </div>
                                    <div className="mt-1 text-sm text-[#00292D]/65">
                                        Estimated payment plans available
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-[#F8F8FF] md:block hidden px-4 py-3 ring-1 ring-[#00292D]/10">
                                    <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                        STATUS
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-[#00292D]">
                                        Ready
                                    </div>
                                </div>
                            </div>

                            <Separator className="my-6 bg-[#00292D]/10" />

                            <div className="grid gap-3 sm:grid-cols-3">
                                <div className="rounded-3xl bg-[#F8F8FF] p-4 ring-1 ring-[#00292D]/10">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#00292D]">
                                        <BedDouble className="h-4 w-4" /> 2 Beds
                                    </div>
                                    <div className="mt-1 text-xs text-[#00292D]/60">Bedrooms</div>
                                </div>
                                <div className="rounded-3xl bg-[#F8F8FF] p-4 ring-1 ring-[#00292D]/10">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#00292D]">
                                        <Bath className="h-4 w-4" /> 2 Baths
                                    </div>
                                    <div className="mt-1 text-xs text-[#00292D]/60">Bathrooms</div>
                                </div>
                                <div className="rounded-3xl bg-[#F8F8FF] p-4 ring-1 ring-[#00292D]/10">
                                    <div className="flex items-center gap-2 text-sm font-semibold text-[#00292D]">
                                        <Ruler className="h-4 w-4" /> 1,250
                                    </div>
                                    <div className="mt-1 text-xs text-[#00292D]/60">Sqft</div>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-3xl bg-white p-4 ring-1 ring-[#00292D]/10">
                                    <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                        COMMUNITY
                                    </div>
                                    <div className="mt-2 text-sm font-semibold text-[#00292D]">
                                        Downtown Dubai
                                    </div>
                                    <div className="mt-1 text-xs text-[#00292D]/60">
                                        Premium towers, walkable access
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-white p-4 ring-1 ring-[#00292D]/10">
                                    <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                        LISTED
                                    </div>
                                    <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#00292D]">
                                        <CalendarDays className="h-4 w-4" /> Feb 2026
                                    </div>
                                    <div className="mt-1 text-xs text-[#00292D]/60">
                                        Fresh listing
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 rounded-3xl bg-gradient-to-br bg-white p-5 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF]">
                                        <ShieldCheck className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">
                                            Request a curated shortlist
                                        </div>
                                        <div className="mt-1 text-sm text-[#00292D]/65">
                                            Tell us your goal and budget—get options with clean comparisons.
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                                    <Button className="h-11 flex-1 rounded-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                                        Contact advisor
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-11 rounded-full border-[#00292D]/15 bg-white"
                                    >
                                        Book viewing
                                    </Button>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                    QUICK ENQUIRY
                                </div>
                                <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#F8F8FF] p-1 ring-1 ring-[#00292D]/10">
                                    <input
                                        placeholder="Your email"
                                        className="pl-4 flex-1 border-0 bg-transparent text-[#00292D] placeholder:text-[#00292D]/45 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                    <Button className="h-11 rounded-xl bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90">
                                        Send
                                    </Button>
                                </div>
                                <div className="mt-2 text-xs text-center text-[#00292D]/55">
                                    We respond within 24 hours
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Location Map */}
                    <div className="my-10 overflow-hidden ">
                        <div className="py-6 sm:py-8">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                LOCATION
                            </div>
                            <div className="mt-2 text-2xl font-semibold text-[#00292D]">
                                Dubai, United Arab Emirates
                            </div>
                            <div className="mt-1 text-sm text-[#00292D]/65">
                                Map preview for this location.
                            </div>
                        </div>

                        <div className="relative h-[380px] md:h-[35rem] w-full">
                            <iframe
                                title="Dubai Map"
                                src="https://www.google.com/maps?q=Downtown%20Dubai&output=embed"
                                className="h-full w-full border-0 rounded-2xl"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
