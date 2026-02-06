"use client";

import React, { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSellProperty } from "@/lib/api/sellProperty";
import { toast } from "sonner";
import { SellProperty } from "@/types/sellProperty";

export default function SellYourPropertyForm() {
    const [form, setForm] = useState<SellProperty>({
        fullname: "",
        email: "",
        phone: "",
        propertyType: "",
        address: "",
        bedrooms: 0,
        sellingTimeline: "",
        priceExpectation: "",
        notes: "",
    });

    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: async (payload: SellProperty) => {
            return createSellProperty(payload);
        },
        onSuccess: (data: any) => {
            setForm({
                fullname: "",
                email: "",
                phone: "",
                propertyType: "",
                address: "",
                bedrooms: 0,
                sellingTimeline: "",
                priceExpectation: "",
                notes: "",
            });
            toast.success(data?.message || "Property details submitted successfully");
            queryClient.invalidateQueries({ queryKey: ["sell-properties"] });
        },
        onError: (err: any) => {
            toast.error(err?.message || "Something went wrong");
        },
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(form);
    };

    return (
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
                <Label className="text-sm font-semibold text-[#00292D]">Full name</Label>
                <Input
                    className="mt-2 h-11"
                    value={form.fullname}
                    onChange={(e) =>
                        setForm({ ...form, fullname: e.target.value })
                    }
                    required
                />
            </div>

            <div>
                <Label className="text-sm font-semibold text-[#00292D]">Email</Label>
                <Input
                    type="email"
                    className="mt-2 h-11"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                    required
                />
            </div>

            <div>
                <Label className="text-sm font-semibold text-[#00292D]">
                    Phone (optional)
                </Label>
                <Input
                    className="mt-2 h-11"
                    value={form.phone}
                    onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                    }
                />
            </div>

            <div>
                <Label className="text-sm font-semibold text-[#00292D]">
                    Property type
                </Label>
                <Select
                    value={form.propertyType}
                    onValueChange={(value) =>
                        setForm({ ...form, propertyType: value })
                    }
                >
                    <SelectTrigger className="mt-2 h-11 w-full">
                        <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="land">Land / Plot</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="sm:col-span-2">
                <Label className="text-sm font-semibold text-[#00292D]">
                    Property address
                </Label>
                <Input
                    className="mt-2 h-11"
                    value={form.address}
                    onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                    }
                    required
                />
            </div>

            <div>
                <Label className="text-sm font-semibold text-[#00292D]">
                    Bedrooms
                </Label>
                <Select
                    value={form.bedrooms.toString()}
                    onValueChange={(value) =>
                        setForm({
                            ...form,
                            bedrooms: value === "studio" ? 0 : Number(value),
                        })
                    }
                >
                    <SelectTrigger className="mt-2 h-11 w-full">
                        <SelectValue placeholder="Bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className="text-sm font-semibold text-[#00292D]">
                    Selling timeline
                </Label>
                <Select
                    value={form.sellingTimeline}
                    onValueChange={(value) =>
                        setForm({ ...form, sellingTimeline: value })
                    }
                >
                    <SelectTrigger className="mt-2 h-11 w-full">
                        <SelectValue placeholder="Timeline" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0-30">0–30 days</SelectItem>
                        <SelectItem value="30-60">30–60 days</SelectItem>
                        <SelectItem value="60-90">60–90 days</SelectItem>
                        <SelectItem value="90+">90+ days</SelectItem>
                        <SelectItem value="not-sure">Not sure</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="sm:col-span-2">
                <Label className="text-sm font-semibold text-[#00292D]">
                    Preferred price expectation
                </Label>
                <Select
                    value={form.priceExpectation}
                    onValueChange={(value) =>
                        setForm({ ...form, priceExpectation: value })
                    }
                >
                    <SelectTrigger className="mt-2 h-11 w-full">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="not-sure">Not sure</SelectItem>
                        <SelectItem value="market">Market-based valuation</SelectItem>
                        <SelectItem value="best">Best possible price</SelectItem>
                        <SelectItem value="fast">Sell fast</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="sm:col-span-2">
                <Label className="text-sm font-semibold text-[#00292D]">
                    Notes (optional)
                </Label>
                <Textarea
                    className="mt-2 min-h-[110px]"
                    value={form.notes}
                    onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                    }
                />
            </div>

            <div className="sm:col-span-2">
                <Button
                    type="submit"
                    disabled={isPending}
                    className="h-12 w-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90"
                >
                    {isPending ? "Submitting..." : "Submit details"}
                </Button>
            </div>
        </form>
    );
}
