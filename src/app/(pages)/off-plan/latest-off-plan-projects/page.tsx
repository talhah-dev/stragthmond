"use client";

import React from "react";
import HeroSections from "@/components/HeroSections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";
import PropertyCard from "@/components/PropertyCard";
import type { PropertyType } from "@/components/PropertyCard";

type Listing = {
    id: string;
    title: string;
    area: string;
    propertyType: PropertyType;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    tag?: "Featured" | "New" | "Hot";
    image: string;

    // required by PropertyCard
    href: string;
    priceSuffix?: string;
    description?: string;

    // Off-plan extra fields (optional but useful)
    developer?: string;
    handover?: string; // e.g. "Q4 2027"
};

const listings: Listing[] = [
    {
        id: "op1",
        title: "Off-Plan 1BR in Prime Tower",
        area: "Business Bay",
        propertyType: "Apartment",
        price: 1450000,
        beds: 1,
        baths: 2,
        sqft: 810,
        tag: "New",
        image:
            "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/off-plan/op1",
        priceSuffix: "from",
        developer: "Select Group",
        handover: "Q4 2027",
        description: "Strong payment plan with premium amenities and central connectivity.",
    },
    {
        id: "op2",
        title: "Waterfront 2BR with Balcony (Off-Plan)",
        area: "Dubai Creek Harbour",
        propertyType: "Apartment",
        price: 2380000,
        beds: 2,
        baths: 2,
        sqft: 1280,
        tag: "Featured",
        image:
            "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/off-plan/op2",
        priceSuffix: "from",
        developer: "Emaar",
        handover: "Q2 2028",
        description: "Creek views, modern layouts, and long-term rental demand.",
    },
    {
        id: "op3",
        title: "Townhouse Community Launch (Off-Plan)",
        area: "Arabian Ranches",
        propertyType: "Townhouse",
        price: 3250000,
        beds: 3,
        baths: 4,
        sqft: 2190,
        tag: "Hot",
        image:
            "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/off-plan/op3",
        priceSuffix: "from",
        developer: "Dubai Properties",
        handover: "Q1 2028",
        description: "Family-first community, parks nearby, attractive phased payment plan.",
    },
    {
        id: "op4",
        title: "Luxury Penthouse Launch (Off-Plan)",
        area: "Dubai Marina",
        propertyType: "Penthouse",
        price: 11950000,
        beds: 4,
        baths: 5,
        sqft: 4520,
        tag: "Featured",
        image:
            "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/off-plan/op4",
        priceSuffix: "from",
        developer: "DAMAC",
        handover: "Q4 2028",
        description: "Signature penthouse collection with private terraces and marina views.",
    },
    {
        id: "op5",
        title: "Off-Plan Villa in Gated Community",
        area: "Dubai Hills Estate",
        propertyType: "Villa",
        price: 7350000,
        beds: 4,
        baths: 5,
        sqft: 3860,
        tag: "New",
        image:
            "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/off-plan/op5",
        priceSuffix: "from",
        developer: "Emaar",
        handover: "Q3 2027",
        description: "High-demand villa community with modern architecture and greenery.",
    },
    {
        id: "op6",
        title: "Hotel Apartment Investment (Off-Plan)",
        area: "Downtown Dubai",
        propertyType: "Hotel Apartment",
        price: 1680000,
        beds: 1,
        baths: 1,
        sqft: 640,
        image:
            "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/off-plan/op6",
        priceSuffix: "from",
        developer: "Omniyat",
        handover: "Q2 2027",
        description: "Investor-friendly units designed for high occupancy and premium yields.",
    },
];

// Fixed order like your dropdown screenshots
const PROPERTY_TYPE_ORDER: PropertyType[] = [
    "Apartment",
    "Villa",
    "Townhouse",
    "Penthouse",
    "Fully Furnished",
    "Land Plot",
    "Hotel Apartment",
    "Office",
];

export default function OffPlanProperties() {
    const [q, setQ] = React.useState("");
    const [propertyType, setPropertyType] = React.useState<string>("all");
    const [beds, setBeds] = React.useState<string>("any");
    const [sort, setSort] = React.useState<string>("featured");

    const propertyTypes = React.useMemo(() => {
        const inData = new Set(listings.map((l) => l.propertyType));
        const ordered = PROPERTY_TYPE_ORDER.filter((t) => inData.has(t));
        return ["all", ...ordered];
    }, []);

    const filtered = React.useMemo(() => {
        let data = listings.filter((l) => {
            const query = q.trim().toLowerCase();

            const matchQ =
                !query ||
                l.title.toLowerCase().includes(query) ||
                l.area.toLowerCase().includes(query) ||
                l.propertyType.toLowerCase().includes(query) ||
                (l.developer ?? "").toLowerCase().includes(query) ||
                (l.handover ?? "").toLowerCase().includes(query);

            const matchType = propertyType === "all" ? true : l.propertyType === propertyType;

            const matchBeds =
                beds === "any"
                    ? true
                    : beds === "studio"
                        ? l.beds === 0
                        : l.beds === Number(beds);

            return matchQ && matchType && matchBeds;
        });

        if (sort === "priceLow") data = [...data].sort((a, b) => a.price - b.price);
        if (sort === "priceHigh") data = [...data].sort((a, b) => b.price - a.price);

        if (sort === "new")
            data = [...data].sort(
                (a, b) => (b.tag === "New" ? 1 : 0) - (a.tag === "New" ? 1 : 0)
            );

        if (sort === "featured")
            data = [...data].sort(
                (a, b) => (b.tag === "Featured" ? 1 : 0) - (a.tag === "Featured" ? 1 : 0)
            );

        return data;
    }, [q, propertyType, beds, sort]);

    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] overflow-hidden md:px-5 px-3 rounded-xl pt-3">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Off Plan Properties"
                    subheading="New launches and early opportunities across Dubai—payment plans, handover timelines, and clean coordination end-to-end."
                />

                <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                    <div
                        data-aos="zoom-in-up"
                        className="rounded-xl bg-white p-5 ring-1 ring-[#00292D]/10 sm:p-6"
                    >
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                            <div className="relative flex-1">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00292D]/45" />
                                <Input
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    placeholder="Search by title, area, type, developer…"
                                    className="h-11 rounded-xl border-[#00292D]/15 bg-[#F8F8FF] pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:items-center">
                                {/* Property Type */}
                                <Select value={propertyType} onValueChange={setPropertyType}>
                                    <SelectTrigger className="py-5 w-full rounded-lg border-[#00292D]/15 bg-[#F8F8FF] focus:ring-0 lg:w-[220px]">
                                        <SelectValue placeholder="Property Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {propertyTypes.map((t) => (
                                            <SelectItem key={t} value={t}>
                                                {t === "all" ? "All types" : t}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {/* Beds */}
                                <Select value={beds} onValueChange={setBeds}>
                                    <SelectTrigger className="py-5 w-full rounded-lg border-[#00292D]/15 bg-[#F8F8FF] focus:ring-0 lg:w-[200px]">
                                        <SelectValue placeholder="Bedrooms" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="any">Any</SelectItem>
                                        <SelectItem value="studio">Studio</SelectItem>
                                        <SelectItem value="1">1 Bed</SelectItem>
                                        <SelectItem value="2">2 Beds</SelectItem>
                                        <SelectItem value="3">3 Beds</SelectItem>
                                        <SelectItem value="4">4 Beds</SelectItem>
                                    </SelectContent>
                                </Select>

                                {/* Sort */}
                                <Select value={sort} onValueChange={setSort}>
                                    <SelectTrigger className="py-5 w-full rounded-lg border-[#00292D]/15 bg-[#F8F8FF] focus:ring-0 lg:w-[210px]">
                                        <SelectValue placeholder="Sort" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="featured">Featured first</SelectItem>
                                        <SelectItem value="new">New first</SelectItem>
                                        <SelectItem value="priceLow">Price: Low to High</SelectItem>
                                        <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Button
                                    variant="outline"
                                    className="h-11 w-full rounded-lg border-[#00292D]/15 bg-transparent lg:w-auto"
                                >
                                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                                    Filters
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="mt-8 flex items-center justify-between gap-3">
                        <div className="text-sm text-[#00292D]/70">
                            Showing <span className="font-semibold text-[#00292D]">{filtered.length}</span>{" "}
                            results
                        </div>

                        <Button className="h-11 rounded-full bg-[#FFEEB4] px-6 text-[#00292D] hover:bg-[#FFEEB4]/90">
                            Request shortlist
                        </Button>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((item) => (
                            <PropertyCard key={item.id} item={item} />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="mt-8 rounded-xl bg-white p-8 text-center ring-1 ring-[#00292D]/10">
                            <div className="text-lg font-semibold text-[#00292D]">No off-plan listings found</div>
                            <div className="mt-2 text-sm text-[#00292D]/65">
                                Try changing your filters or searching another type.
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </UserWrapper>
    );
}
