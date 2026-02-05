"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SaleEnquiry {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    propertyType: string;
    address: string;
    bedrooms: string;
    timeline: string;
    priceExpectation: string;
    notes: string;
    date: string;
}

const enquiries: SaleEnquiry[] = [
    {
        id: "SALE-001",
        fullName: "Ahmed Khan",
        email: "ahmed@email.com",
        phone: "+971 50 123 4567",
        propertyType: "Villa",
        address: "Dubai Hills, Maple 2",
        bedrooms: "3",
        timeline: "0–30 days",
        priceExpectation: "Market-based valuation",
        notes: "Owner occupied, upgraded kitchen, park-facing.",
        date: "Jan 26, 2026",
    },
    {
        id: "SALE-002",
        fullName: "Sarah Williams",
        email: "sarah@email.com",
        phone: "+971 55 987 6543",
        propertyType: "Apartment",
        address: "Downtown Dubai, Burj Views, Tower B",
        bedrooms: "2",
        timeline: "30–60 days",
        priceExpectation: "Best possible price",
        notes: "Tenanted until March, high floor, full fountain view.",
        date: "Jan 25, 2026",
    },
];

function Field({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-1">
            <div className="text-xs font-semibold tracking-wide text-[#00292D]/55">
                {label}
            </div>
            <div className="text-sm font-medium text-[#00292D]">
                {value?.trim() ? value : "—"}
            </div>
        </div>
    );
}

export default function SalePropertyEnquiries() {
    return (
        <div className="space-y-6">
            {enquiries.map((enquiry) => (
                <Card
                    key={enquiry.id}
                    className="overflow-hidden rounded-xl border bg-white ring-1 ring-[#00292D]/10"
                >
                    <CardContent className="p-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                            <div className="space-y-1">
                                <div className="text-lg font-semibold text-[#00292D]">
                                    {enquiry.fullName}
                                </div>
                                <div className="text-sm text-[#00292D]/60">{enquiry.email}</div>
                                <div className="text-sm text-[#00292D]/60">{enquiry.phone}</div>
                            </div>

                            <div className="inline-flex w-fit items-center rounded-xl bg-[#F8F8FF] px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                                Submitted: {enquiry.date}
                            </div>
                        </div>

                        <Separator className="my-5" />

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="rounded-xl bg-white ring-1 ring-[#00292D]/10">
                                <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
                                    <Field label="Property type" value={enquiry.propertyType} />
                                    <Field label="Bedrooms" value={enquiry.bedrooms} />
                                    <Field label="Selling timeline" value={enquiry.timeline} />
                                    <Field label="Price expectation" value={enquiry.priceExpectation} />
                                </div>
                                <Separator />
                                <div className="p-5">
                                    <Field
                                        label="Property address / building / community"
                                        value={enquiry.address}
                                    />
                                </div>
                            </div>

                            <div className="rounded-xl bg-[#F8F8FF] p-5 ring-1 ring-[#00292D]/10">
                                <div className="text-xs font-semibold tracking-wide text-[#00292D]/55">
                                    Notes
                                </div>
                                <div className="mt-2 text-sm leading-relaxed text-[#00292D]/75">
                                    {enquiry.notes?.trim() ? enquiry.notes : "—"}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
