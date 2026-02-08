"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, BedDouble, Bath, Ruler, ArrowRight } from "lucide-react";

type Listing = {
    id: string;
    label: "Buy" | "Rent" | "Off Plan";
    price: string;
    image: string;
    title: string;
    location: string;
    beds?: number;
    baths?: number;
    area?: string;
    href: string;
    tag?: string;
};

const listings: Listing[] = [
    {
        id: "b1",
        label: "Buy",
        price: "AED 2,450,000",
        title: "Modern Villa in Dubai Hills Estate",
        location: "Dubai Hills Estate, Dubai",
        beds: 4,
        image: "https://images.unsplash.com/photo-1678575326996-a1bf09b86158?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        baths: 5,
        area: "3,120 sq ft",
        href: "/buy",
        tag: "Featured",
    },
    {
        id: "b2",
        label: "Buy",
        price: "AED 1,180,000",
        title: "Luxury Apartment with Skyline Views",
        location: "Business Bay, Dubai",
        beds: 2,
        image: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        baths: 2,
        area: "1,240 sq ft",
        href: "/buy",
        tag: "New",
    },
    {
        id: "b3",
        label: "Buy",
        price: "AED 3,950,000",
        title: "Family Villa Close to Park",
        location: "Dubai Creek Harbour, Dubai",
        beds: 5,
        image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
        baths: 6,
        area: "4,100 sq ft",
        href: "/buy",
        tag: "Prime",
    },
    {
        id: "r1",
        label: "Rent",
        price: "AED 185,000 / year",
        title: "Penthouse with Marina Views",
        location: "Bluewaters Island, Dubai",
        beds: 3,
        image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
        baths: 4,
        area: "2,250 sq ft",
        href: "/rent",
        tag: "Popular",
    },
    {
        id: "r2",
        label: "Rent",
        price: "AED 110,000 / year",
        title: "Elegant Apartment Near Metro",
        location: "Downtown Dubai, Dubai",
        beds: 1,
        image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
        baths: 2,
        area: "920 sq ft",
        href: "/rent",
        tag: "Hot",
    },
    {
        id: "r3",
        label: "Rent",
        price: "AED 240,000 / year",
        title: "Spacious Villa in Gated Community",
        location: "Dubai South, Dubai",
        beds: 4,
        image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
        baths: 4,
        area: "3,400 sq ft",
        href: "/rent",
        tag: "Value",
    },
    {
        id: "o1",
        label: "Off Plan",
        price: "From AED 980,000",
        title: "New Launch Waterfront Residences",
        location: "Dubai Harbour, Dubai",
        image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
        area: "Flexible layouts",
        href: "/off-plan",
        tag: "Launch",
    },
    {
        id: "o2",
        label: "Off Plan",
        price: "From AED 1,450,000",
        title: "Premium Community Townhomes",
        location: "Dubai Hills Estate, Dubai",
        image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
        area: "Payment plan",
        href: "/off-plan",
        tag: "Limited",
    },
    {
        id: "o3",
        label: "Off Plan",
        price: "From AED 1,120,000",
        title: "Creekside Living with Views",
        location: "Dubai Creek Harbour, Dubai",
        image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
        area: "Handover soon",
        href: "/off-plan",
        tag: "Trending",
    },
];

function ListingCard({ item, index, }: { item: Listing, index: number }) {
    return (
        <Link
            href={"/property/1"} data-aos="fade-up" data-aos-delay={index * 150}
            className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className="relative aspect-[16/14] w-full overflow-hidden">
                <img src={item.image} className="
               w-full h-full object-cover" alt="" />
            </div>

            <div className="p-5">
                <div className="text-sm font-semibold text-[#00292D]">{item.price}</div>
                <div className="mt-1 line-clamp-1 text-base font-semibold text-[#00292D]">
                    {item.title}
                </div>

                <div className="mt-2 flex items-center gap-2 text-xs text-[#00292D]/65">
                    <MapPin className="h-4 w-4" />
                    <span className="line-clamp-1">{item.location}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#00292D]/70">
                    {typeof item.beds === "number" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#00292D]/5 px-3 py-1">
                            <BedDouble className="h-4 w-4" />
                            {item.beds} Beds
                        </span>
                    )}
                    {typeof item.baths === "number" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#00292D]/5 px-3 py-1">
                            <Bath className="h-4 w-4" />
                            {item.baths} Baths
                        </span>
                    )}
                    {item.area && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#00292D]/5 px-3 py-1">
                            <Ruler className="h-4 w-4" />
                            {item.area}
                        </span>
                    )}
                </div>

                <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#00292D]/60">{item.label}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00292D] transition group-hover:translate-x-0.5">
                        View
                        <ArrowRight className="h-4 w-4" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default function HomeFeaturedProperties() {
    const [active, setActive] = React.useState<"Buy" | "Rent" | "Off Plan">("Buy");

    const filtered = React.useMemo(
        () => listings.filter((x) => x.label === active),
        [active]
    );

    return (
        <section className="bg-[#F8F8FF]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p data-aos="fade-up" className="text-sm font-medium text-[#00292D]/70">Listings</p>
                        <h2 data-aos="fade-up" className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                            Featured properties tailored to your next move.
                        </h2>
                        <p data-aos="fade-up" className="mt-3 text-pretty text-base text-[#00292D]/70 sm:text-lg">
                            Browse a hand-picked selection across sale, rent, and off-plan opportunities.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="flex flex-wrap items-center gap-2">
                        {/* <div className="inline-flex rounded-2xl bg-white p-1 ring-1 ring-[#00292D]/10">
                            {(["Buy", "Rent", "Off Plan"] as const).map((t) => {
                                const isActive = active === t;
                                return (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setActive(t)}
                                        className={[
                                            "rounded-xl px-4 py-2 text-sm font-semibold transition",
                                            isActive
                                                ? "bg-[#00292D] text-[#F8F8FF]"
                                                : "text-[#00292D]/70 hover:bg-[#00292D]/5",
                                        ].join(" ")}
                                    >
                                        {t}
                                    </button>
                                );
                            })}
                        </div> */}

                        <Button asChild className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                            <Link href={active === "Buy" ? "/buy/properties-for-sale" : active === "Rent" ? "/rent/properties-for-rent" : "/off-plan/latest-off-plan-projects"}>
                                View all
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((item, idx) => (
                        <ListingCard key={item.id} index={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
