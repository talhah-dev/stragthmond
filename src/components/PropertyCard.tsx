"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, BedDouble, Bath, Ruler } from "lucide-react";

export type PropertyTag = "Featured" | "New" | "Hot";
export type PropertyType =
    | "Apartment"
    | "Villa"
    | "Townhouse"
    | "Penthouse"
    | "Hotel Apartment"
    | "Office"
    | "Land Plot"
    | "Fully Furnished";

export type PropertyCardData = {
    id: string;
    title: string;
    area: string;
    propertyType: PropertyType; // ✅ added
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    tag?: PropertyTag;
    image: string;
    href: string;
    priceSuffix?: string;
    description?: string;
};

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full bg-[#F8F8FF] px-3 py-1 text-xs font-semibold text-[#00292D]/75 ring-1 ring-[#00292D]/10">
            {children}
        </span>
    );
}

function formatAED(amount: number) {
    return new Intl.NumberFormat("en-AE", {
        style: "currency",
        currency: "AED",
        maximumFractionDigits: 0,
    }).format(amount);
}

export default function PropertyCard({ item }: { item: PropertyCardData }) {
    return (
        <div
            data-aos="fade-up"
            className="group overflow-hidden rounded-xl bg-white ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="relative aspect-[4/3] w-full bg-[#00292D]/5">
                {/* ✅ safety: don't render Image if empty */}
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-70" />

                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]">
                        {item.propertyType}
                    </Badge>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.area}
                    </span>
                </div>

                <div className="absolute bottom-5 left-5 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur">
                    {formatAED(item.price)}
                    {item.priceSuffix ? (
                        <span className="ml-2 text-xs font-semibold text-[#00292D]/70">
                            {item.priceSuffix}
                        </span>
                    ) : null}
                </div>
            </div>

            <div className="p-6">
                <div className="text-lg font-semibold text-[#00292D]">{item.title}</div>
                <div className="text-[#00292D]/70 text-sm py-2">
                    {item.description ?? "Curated options with a clean, premium process."}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    <Pill>
                        <BedDouble className="mr-1.5 h-4 w-4" />
                        {item.beds === 0 ? "Studio" : `${item.beds} Beds`}
                    </Pill>
                    <Pill>
                        <Bath className="mr-1.5 h-4 w-4" />
                        {item.baths} Baths
                    </Pill>
                    <Pill>
                        <Ruler className="mr-1.5 h-4 w-4" />
                        {item.sqft} sqft
                    </Pill>
                </div>

                <div className="mt-6 flex items-center gap-3">
                    <Link href={"/property/1"} className="w-full">
                        <Button className="h-11 cursor-pointer w-full rounded-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                            View details
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
