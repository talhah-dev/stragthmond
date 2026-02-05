"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const stats = [
    {
        name: "Total Properties",
        value: "128",
        href: "/admin/properties",
        buttonLabel: "View Properties",
    },
    {
        name: "Published Blogs",
        value: "24",
        href: "/admin/blogs",
        buttonLabel: "View Blogs",
    },
    {
        name: "User Enquiries",
        value: "56",
        href: "/admin/user-enquiries",
        buttonLabel: "View user Enquiries",
    },
    {
        name: "property Enquiry",
        value: "5",
        href: "/admin/sale-enquiries",
        buttonLabel: "View property Enquiries",
    },
];

export default function AdminStats() {
    return (
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
                <Card
                    key={stat.name}
                    className={cn(
                        "rounded-none py-0 border-0 shadow-none",
                        index === 0 && "rounded-l-xl",
                        index === stats.length - 1 && "rounded-r-xl"
                    )}
                >
                    <CardContent className="flex h-full flex-col justify-between p-6">
                        <div className="space-y-2">
                            <div className="text-sm font-medium text-[#00292D]/60">
                                {stat.name}
                            </div>
                            <div className="text-3xl font-semibold text-[#00292D]">
                                {stat.value}
                            </div>
                        </div>

                        <Link href={stat.href} className="mt-6">
                            <Button
                                variant="outline"
                                className="w-full cursor-pointer border-[#00292D]/20 text-[#00292D] hover:bg-[#00292D] hover:text-[#F8F8FF]"
                            >
                                {stat.buttonLabel}
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
