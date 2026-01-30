import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

type Community = {
    name: string;
    subtitle: string;
    listings: string;
    href: string;
};

const communities: Community[] = [
    {
        name: "Dubai Hills Estate",
        subtitle: "Family villas & green living",
        listings: "120+ listings",
        href: "/communities/dubai-hills-estate",
    },
    {
        name: "Dubai Creek Harbour",
        subtitle: "Waterfront skyline views",
        listings: "90+ listings",
        href: "/communities/dubai-creek-harbour",
    },
    {
        name: "Business Bay",
        subtitle: "City living & investment",
        listings: "150+ listings",
        href: "/communities/business-bay",
    },
    {
        name: "Dubai Harbour",
        subtitle: "Premium waterfront lifestyle",
        listings: "70+ listings",
        href: "/communities/dubai-harbour",
    },
    {
        name: "Bluewaters Island",
        subtitle: "Island lifestyle & marina views",
        listings: "45+ listings",
        href: "/communities/bluewaters-island",
    },
    {
        name: "Dubai South",
        subtitle: "Value-led communities",
        listings: "60+ listings",
        href: "/communities/dubai-south",
    },
];

function CommunityCard({ item, tone }: { item: Community; tone: "mint" | "lilac" | "yellow" }) {
    const toneBg =
        tone === "mint"
            ? "from-[#AFF8C8]/35 via-white to-white"
            : tone === "lilac"
                ? "from-[#D2C4FB]/30 via-white to-white"
                : "from-[#FFEEB4]/35 via-white to-white";

    return (
        <Link
            href={item.href}
            className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className={`relative h-32 w-full bg-gradient-to-br ${toneBg}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(0,41,45,0.10),transparent_55%)]" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur">
                    <MapPin className="h-3.5 w-3.5" />
                    Community
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <div className="truncate text-base font-semibold text-[#00292D]">{item.name}</div>
                        <div className="mt-1 truncate text-sm text-[#00292D]/65">{item.subtitle}</div>
                    </div>
                    <div className="shrink-0 rounded-full bg-[#00292D]/5 px-3 py-1 text-xs font-semibold text-[#00292D]/70">
                        {item.listings}
                    </div>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#00292D] transition group-hover:translate-x-0.5">
                    Explore <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </Link>
    );
}

export default function HomeCommunities() {
    const tones: Array<"mint" | "lilac" | "yellow"> = ["mint", "lilac", "yellow"];

    return (
        <section className="bg-[#F8F8FF]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium text-[#00292D]/70">Communities</p>
                        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                            Explore Dubai’s most in-demand areas.
                        </h2>
                        <p className="mt-3 text-pretty text-base text-[#00292D]/70 sm:text-lg">
                            Browse communities based on lifestyle, budget, and property type—curated by Strathmond.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline" className="border-[#00292D]/15 bg-transparent">
                            <Link href="/communities">View all communities</Link>
                        </Button>
                        <Button asChild className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                            <Link href="/contact">Get recommendations</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {communities.map((item, idx) => (
                        <CommunityCard key={item.name} item={item} tone={tones[idx % tones.length]} />
                    ))}
                </div>
            </div>
        </section>
    );
}
