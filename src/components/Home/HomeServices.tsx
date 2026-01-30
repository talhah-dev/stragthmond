"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

type PropertyCardProps = {
    href: string;
    price: string;
    title: string;
    image: string;
    location: string;
    tone?: "mint" | "yellow";
};

function PropertyCard({ image, href, price, title, location, tone = "mint" }: PropertyCardProps) {
    const pill =
        tone === "yellow"
            ? "bg-[#FFEEB4] text-[#00292D]"
            : "bg-[#AFF8C8] text-[#00292D]";

    return (
        <Link
            href={href}
            className="group block overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
        >
            <div className="relative h-74 w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img src={image} className="w-full h-full object-cover rounded-xl" alt="" />
                </div>

                <div
                    className={`absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${pill}`}
                >
                    {price}
                </div>
            </div>

            <div className="py-4">
                <div className="truncate text-sm font-semibold text-[#00292D]">{title}</div>
                <div className="mt-1 truncate text-xs text-[#00292D]/60">{location}</div>
            </div>
        </Link>
    );
}

export default function HomeServices() {
    return (
        <section className="bg-[#F8F8FF]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium text-[#00292D]/70">Explore</p>
                        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                            Everything you need to move with confidence.
                        </h2>
                        <p className="mt-3 text-pretty text-base text-[#00292D]/70 sm:text-lg">
                            Browse curated options across Dubai’s key communities and price ranges.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline" className="border-[#00292D]/15 bg-transparent">
                            <Link href="/properties">View all properties</Link>
                        </Button>
                        <Button asChild className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                            <Link href="/contact">Speak to an advisor</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-4">
                    <div className="">
                        <PropertyCard
                            image="https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                            href="/buy"
                            price="$75,000"
                            title="House for sale at Dafros Residences"
                            location="Dubai, UAE"
                            tone="mint"
                        />
                    </div>
                    <div className="">
                        <PropertyCard
                            image="https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                            href="/buy"
                            price="$75,000"
                            title="House for sale at Dafros Residences"
                            location="Dubai, UAE"
                            tone="mint"
                        />
                    </div>

                    <div className="">
                        <PropertyCard
                            image="https://images.unsplash.com/photo-1733413788848-6f9e0c1c414c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
                            href="/buy"
                            price="$85,000"
                            title="House for sale at Fajar Indah"
                            location="Dubai, UAE"
                            tone="yellow"
                        />
                    </div>

                    <div className="">
                        <PropertyCard
                            image="https://images.unsplash.com/photo-1686164748506-4311ba437c24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
                            href="/rent"
                            price="$55,000"
                            title="Perumahan Griya Sakinah"
                            location="Dubai, UAE"
                            tone="mint"
                        />
                    </div>

                    <div className="">
                        <PropertyCard
                            image="https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8"
                            href="/rent"
                            price="$75,000"
                            title="House for sale at Palm View Residence"
                            location="Dubai, UAE"
                            tone="mint"
                        />
                    </div>

                    <div className="">
                        <PropertyCard
                            image="https://images.unsplash.com/photo-1748063578185-3d68121b11ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8"
                            href="/buy"
                            price="$62,000"
                            title="Land for sale area"
                            location="Dubai, UAE"
                            tone="yellow"
                        />
                    </div>

                    <div className="">
                        <PropertyCard
                            image="https://images.unsplash.com/photo-1733413788252-e83ecab5ea75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8"
                            href="/buy"
                            price="$62,000"
                            title="Land for sale area"
                            location="Dubai, UAE"
                            tone="yellow"
                        />
                    </div>

                    <div className="">
                        <PropertyCard
                            image="https://plus.unsplash.com/premium_photo-1733342586521-6d04831831bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8"
                            href="/buy"
                            price="$90,000"
                            title="Land for sale near"
                            location="Dubai, UAE"
                            tone="mint"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
