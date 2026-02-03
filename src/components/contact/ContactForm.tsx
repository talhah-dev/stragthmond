"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type FormState = {
    fullName: string;
    email: string;
    phone: string;
    goal: "buy" | "rent" | "sell" | "offplan";
    budget: string;
    location: string;
    message: string;
};

const initialState: FormState = {
    fullName: "",
    email: "",
    phone: "",
    goal: "buy",
    budget: "",
    location: "",
    message: "",
};

export default function ContactForm() {
    const [form, setForm] = React.useState<FormState>(initialState);
    const [submitting, setSubmitting] = React.useState(false);
    const [sent, setSent] = React.useState(false);

    const update = (key: keyof FormState, value: string) => {
        setForm((p) => ({ ...p, [key]: value }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSent(false);

        try {
            await new Promise((r) => setTimeout(r, 650));
            setSent(true);
            setForm(initialState);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Full name</label>
                    <Input
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        placeholder="Your name"
                        className="h-11 mt-1 "
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Email</label>
                    <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@email.com"
                        className="h-11 mt-1 "
                        required
                    />
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Phone</label>
                    <Input
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+971 ..."
                        className="h-11 mt-1 "
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Goal</label>
                    <Select value={form.goal} onValueChange={(v) => update("goal", v)}>
                        <SelectTrigger className="h-11 mt-1 w-full">
                            <SelectValue placeholder="Select goal" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="buy">Buy</SelectItem>
                            <SelectItem value="rent">Rent</SelectItem>
                            <SelectItem value="sell">Sell</SelectItem>
                            <SelectItem value="offplan">Off Plan</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Budget</label>
                    <Input
                        value={form.budget}
                        onChange={(e) => update("budget", e.target.value)}
                        placeholder="e.g. AED 1M – AED 3M"
                        className="h-11 mt-1 "
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Preferred area</label>
                    <Input
                        value={form.location}
                        onChange={(e) => update("location", e.target.value)}
                        placeholder="e.g. Dubai Hills, Downtown"
                        className="h-11 mt-1 "
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-[#00292D]">Message</label>
                <Textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us what you’re looking for…"
                    className="min-h-[120px] mt-1 "
                />
            </div>

            <Button
                type="submit"
                disabled={submitting}
                className="h-12 w-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90"
            >
                {submitting ? "Submitting..." : "Send request"}
            </Button>

            {sent && (
                <div className="mt-1 bg-[#AFF8C8]/35 px-4 py-3 text-sm font-semibold text-[#00292D]">
                    Thanks! We received your request.
                </div>
            )}
        </form>
    );
}
