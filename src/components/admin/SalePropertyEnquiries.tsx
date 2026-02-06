"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getSellProperty } from "@/lib/api/sellProperty";
import { SellProperty } from "@/types/sellProperty";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../ui/spinner";
import { toast } from "sonner";

export default function SalePropertyEnquiries() {
    const { data = [], isLoading, isError } = useQuery<SellProperty[], Error>({
        queryKey: ["sell-properties"],
        queryFn: getSellProperty,
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-20">
                <Spinner />
            </div>
        );
    }

    if (isError) {
        toast.error("Failed to load sell property enquiries");
        return null;
    }

    return (
        <div className="space-y-6">
            {data.map((enquiry) => (
                <Card
                    key={enquiry._id}
                    className="overflow-hidden rounded-xl border bg-white ring-1 ring-[#00292D]/10"
                >
                    <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                            <div className="space-y-1">
                                <div className="text-lg font-semibold text-[#00292D]">
                                    {enquiry.fullname}
                                </div>
                                <div className="text-sm text-[#00292D]/60">
                                    {enquiry.email}
                                </div>
                                <div className="text-sm text-[#00292D]/60">
                                    {enquiry.phone || "—"}
                                </div>
                            </div>

                            <div className="inline-flex w-fit items-center rounded-xl bg-[#F8F8FF] px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                                Submitted:{" "}
                                {enquiry.createdAt
                                    ? new Date(enquiry.createdAt).toLocaleDateString()
                                    : "—"}
                            </div>
                        </div>

                        <Separator className="my-5" />

                        {/* Details */}
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="rounded-xl bg-white ring-1 ring-[#00292D]/10">
                                <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
                                    <div>
                                        <div className="text-xs font-semibold text-[#00292D]/55">
                                            Property type
                                        </div>
                                        <div className="text-sm font-medium text-[#00292D]">
                                            {enquiry.propertyType}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold text-[#00292D]/55">
                                            Bedrooms
                                        </div>
                                        <div className="text-sm font-medium text-[#00292D]">
                                            {enquiry.bedrooms}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold text-[#00292D]/55">
                                            Selling timeline
                                        </div>
                                        <div className="text-sm font-medium text-[#00292D]">
                                            {enquiry.sellingTimeline}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-semibold text-[#00292D]/55">
                                            Price expectation
                                        </div>
                                        <div className="text-sm font-medium text-[#00292D]">
                                            {enquiry.priceExpectation}
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="p-5">
                                    <div className="text-xs font-semibold text-[#00292D]/55">
                                        Property address / building / community
                                    </div>
                                    <div className="text-sm font-medium text-[#00292D]">
                                        {enquiry.address}
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="rounded-xl bg-[#F8F8FF] p-5 ring-1 ring-[#00292D]/10">
                                <div className="text-xs font-semibold text-[#00292D]/55">
                                    Notes
                                </div>
                                <div className="mt-2 text-sm leading-relaxed text-[#00292D]/75">
                                    {enquiry.notes?.trim() || "—"}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
