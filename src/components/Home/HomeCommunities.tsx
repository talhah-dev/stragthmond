import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

type Community = {
    name: string;
    subtitle: string;
    listings: string;
    image: string,
    indexAnimation: number,
    href: string;
};

const communities: Community[] = [
    {
        indexAnimation: 0,
        name: "Dubai Hills Estate",
        subtitle: "Family villas & green living",
        listings: "120+ listings",
        image: "https://images.unsplash.com/photo-1733413788848-6f9e0c1c414c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        href: "/communities/dubai-hills-estate",
    },
    {
        name: "Dubai Creek Harbour",
        indexAnimation: 1,
        subtitle: "Waterfront skyline views",
        listings: "90+ listings",
        image: "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        href: "/communities/dubai-creek-harbour",
    },
    {
        name: "Business Bay",
        indexAnimation: 2,
        subtitle: "City living & investment",
        listings: "150+ listings",
        image: "https://images.unsplash.com/photo-1756706718604-ef4af3970e33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        href: "/communities/business-bay",
    },
    {
        name: "Dubai Harbour",
        subtitle: "Premium waterfront lifestyle",
        listings: "70+ listings",
        indexAnimation: 0,
        image: "https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        href: "/communities/dubai-harbour",
    },
    {
        name: "Bluewaters Island",
        subtitle: "Island lifestyle & marina views",
        indexAnimation: 1,
        listings: "45+ listings",
        image: "https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
        href: "/communities/bluewaters-island",
    },
    {
        name: "Dubai South",
        subtitle: "Value-led communities",
        indexAnimation: 2,
        listings: "60+ listings",
        image: "https://images.unsplash.com/photo-1660797347557-4b100998d808?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
        href: "/communities/dubai-south",
    },
];

function CommunityCard({ item, tone,index }: { item: Community; tone: "mint" | "lilac" | "yellow"; index: number}) {
    const toneBg =
        tone === "mint"
            ? "from-[#AFF8C8]/35 via-white to-white"
            : tone === "lilac"
                ? "from-[#D2C4FB]/30 via-white to-white"
                : "from-[#FFEEB4]/35 via-white to-white";

    return (
        <Link
            href={item.href}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#00292D]/10 transition hover:-translate-y-0.5 hover:shadow-md"
        >
            <div className={`relative h-60 md:h-70 w-full bg-gradient-to-br ${toneBg}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(0,41,45,0.10),transparent_55%)]" >
                    <img src={item.image} className="w-full h-full object-cover" alt="" />
                </div>
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
                        <p data-aos="fade-up" className="text-sm font-medium text-[#00292D]/70">Communities</p>
                        <h2 data-aos="fade-up" className="mt-2 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                            Explore Dubai’s most in-demand areas.
                        </h2>
                        <p data-aos="fade-up" className="mt-3 text-pretty text-base text-[#00292D]/70 sm:text-lg">
                            Browse communities based on lifestyle, budget, and property type—curated by Strathmond.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="flex flex-wrap gap-2">
                        <Button asChild className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                            <Link href="/contact">Get recommendations</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {communities.map((item, idx) => (
                        <CommunityCard index={item.indexAnimation} key={item.name} item={item} tone={tones[idx % tones.length]} />
                    ))}
                </div>
            </div>
        </section>
    );
}
