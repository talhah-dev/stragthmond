import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    BadgeDollarSign,
    BedDouble,
    Bookmark,
    Building2,
    ChevronDown,
    MapPin,
    SlidersHorizontal,
    Bath,
    Ruler,
    ChevronRight,
} from "lucide-react";

function Stat({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
    return (
        <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#00292D]/5 text-[#00292D]">
                <Icon className="h-4.5 w-4.5" />
            </span>
            <div>
                <div className="text-sm font-semibold text-[#00292D]">{value}</div>
                <div className="text-xs text-[#00292D]/60">{label}</div>
            </div>
        </div>
    );
}

function FilterChip({
    icon: Icon,
    label,
    value,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
}) {
    return (
        <button
            type="button"
            className="flex min-w-[180px] items-center gap-3 rounded-2xl border border-[#00292D]/10 bg-[#F8F8FF] px-4 py-3 text-left transition hover:bg-white"
        >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#00292D] ring-1 ring-[#00292D]/10">
                <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
                <div className="text-xs font-medium text-[#00292D]/60">{label}</div>
                <div className="truncate text-sm font-semibold text-[#00292D]">{value}</div>
            </div>
            {/* <ChevronDown className="h-4 w-4 text-[#00292D]/50" /> */}
        </button>
    );
}

export default function HomeLanding() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#F8F8FF]/25 via-[#F8F8FF] to-[#F8F8FF]">
            <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:pb-14">
                <h1 data-aos="fade-up"
                    className="text-balance text-3xl font-medium tracking-tight text-[#00292D]/85 sm:text-4xl">
                    Real estate for living and investments
                </h1>

                <div className="mt-6 grid gap-6 lg:grid-cols-12">
                    <div data-aos="zoom-in" className="lg:col-span-8">
                        <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-[#00292D]/10">
                            <div className="relative md:h-[30rem] h-[20rem] w-full">
                                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="" />
                            </div>

                            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur">
                                <span className="h-2 w-2 rounded-full bg-[#AFF8C8]" />
                                Featured in Dubai Hills Estate
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4" data-aos="fade-up">
                        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#00292D]/10">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="text-sm font-semibold text-[#00292D]">Dubai Hills Estate</div>
                                    <div className="mt-1 flex items-center gap-2 text-sm text-[#00292D]/65">
                                        <MapPin className="h-4 w-4" />
                                        <span className="truncate">Dubai, United Arab Emirates</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F8F8FF] text-[#00292D] ring-1 ring-[#00292D]/10 transition hover:bg-white"
                                >
                                    <Bookmark className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-3">
                                <Stat value="4" label="beds" icon={BedDouble} />
                                <Stat value="3" label="baths" icon={Bath} />
                                <Stat value="1,868" label="sqft" icon={Ruler} />
                            </div>

                            <div className="mt-6 flex items-center justify-between gap-3">
                                <div className="text-xl font-semibold text-[#00292D]">AED 2,450,000</div>
                                <button
                                    type="button"
                                    className="md:inline-flex hidden items-center gap-2 rounded-full border border-[#00292D]/15 bg-[#F8F8FF] px-4 py-2 text-sm font-semibold text-[#00292D] transition hover:bg-white"
                                >
                                    Split options
                                    <ChevronRight className="h-4 w-4 opacity-70" />
                                </button>
                            </div>

                            <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl bg-[#F8F8FF] p-4 ring-1 ring-[#00292D]/10">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 overflow-hidden rounded-2xl bg-[#00292D]/10" >
                                        <img src="https://images.unsplash.com/photo-1616587226974-c910de27b605?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" /></div>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">Amelia Stephenson</div>
                                        <div className="text-xs text-[#00292D]/60">Strathmond Advisor</div>
                                    </div>
                                </div>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="rounded-full border-[#00292D]/15 bg-white hover:bg-[#00292D]/5"
                                >
                                    <Link href="/contact">Contact</Link>
                                </Button>
                            </div>
                            <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-[#F8F8FF] p-4 ring-1 ring-[#00292D]/10">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 overflow-hidden rounded-2xl bg-[#00292D]/10" >
                                        <img src="https://images.unsplash.com/photo-1616587656062-524b1e7ca03c?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" /></div>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">Noah Williams</div>
                                        <div className="text-xs text-[#00292D]/60">Strathmond Advisor</div>
                                    </div>
                                </div>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="rounded-full border-[#00292D]/15 bg-white hover:bg-[#00292D]/5"
                                >
                                    <Link href="/contact">Contact</Link>
                                </Button>
                            </div>

                            <div className="mt-6">
                                <Button
                                    asChild
                                    className="h-14 w-full flex-col rounded-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90"
                                >
                                    <Link className="block text-[16px]" href="/contact">Request a tour <p className="!block -mt-1.5 !text-xs font-normal">Earliest at 11:00 tomorrow</p></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="mt-6 rounded-3xl bg-white p-4 ring-1 ring-[#00292D]/10">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center w-full">
                        <div className="lg:flex grid lg:shrink-0  flex-wrap gap-3">
                            <FilterChip icon={MapPin} label="Location" value="Dubai, UAE" />
                            <FilterChip icon={Building2} label="Property type" value="Apartments" />
                            <FilterChip icon={BadgeDollarSign} label="Price" value="AED 500K – AED 5M" />
                            <FilterChip icon={BedDouble} label="Bedrooms" value="2–4" />
                            <button
                                type="button"
                                className="flex min-w-[140px] items-center gap-3 rounded-2xl border border-[#00292D]/10 bg-[#F8F8FF] px-4 py-3 text-left transition hover:bg-white"
                            >
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#00292D] ring-1 ring-[#00292D]/10">
                                    <SlidersHorizontal className="h-5 w-5" />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <div className="text-xs font-medium text-[#00292D]/60">More</div>
                                    <div className="truncate text-sm font-semibold text-[#00292D]">Filters</div>
                                </div>
                            </button>
                        </div>

                        <div className=" w-full">
                            <div className="bg-gray-50 rounded-full p-2 flex items-center w-full">
                                <input type="text" placeholder="Search..." className="w-full pl-4 outline-none py-2" />
                                <Button
                                    asChild
                                    className="h-10 rounded-full bg-[#00292D] px-8 text-[#F8F8FF] hover:bg-[#00292D]/90 lg:w-auto"
                                >
                                    <Link href="/buy">Search</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
