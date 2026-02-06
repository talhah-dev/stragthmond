"use client";

import React, { useState } from "react";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact } from "@/lib/api/contact";
import { toast } from "sonner";
import { Contact } from "@/types/Contact";

export default function ContactForm() {
    const [form, setForm] = useState<Contact>({
        fullname: "",
        email: "",
        phone: "",
        goal: "buy",
        budget: "",
        preferredArea: "",
        message: "",
    });

    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: async (payload: Contact) => {
            return createContact(payload);
        },
        onSuccess: (data: any) => {
            setForm({
                fullname: "",
                email: "",
                phone: "",
                goal: "buy",
                budget: "",
                preferredArea: "",
                message: "",
            });
            toast.success(data?.message || "Message sent successfully");
            queryClient.invalidateQueries({ queryKey: ["contacts"] });
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
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Full name</label>
                    <Input
                        placeholder="Your name"
                        className="h-11 mt-1"
                        required
                        value={form.fullname}
                        onChange={(e) =>
                            setForm({ ...form, fullname: e.target.value })
                        }
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Email</label>
                    <Input
                        type="email"
                        placeholder="you@email.com"
                        className="h-11 mt-1"
                        required
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Phone</label>
                    <Input
                        placeholder="+971 ..."
                        className="h-11 mt-1"
                        value={form.phone}
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Goal</label>
                    <Select
                        value={form.goal}
                        onValueChange={(value) =>
                            setForm({ ...form, goal: value as Contact["goal"] })
                        }
                    >
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
                        placeholder="e.g. AED 1M – AED 3M"
                        className="h-11 mt-1"
                        value={form.budget}
                        onChange={(e) =>
                            setForm({ ...form, budget: e.target.value })
                        }
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#00292D]">Preferred area</label>
                    <Input
                        placeholder="e.g. Dubai Hills, Downtown"
                        className="h-11 mt-1"
                        value={form.preferredArea}
                        onChange={(e) =>
                            setForm({ ...form, preferredArea: e.target.value })
                        }
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-[#00292D]">Message</label>
                <Textarea
                    placeholder="Tell us what you’re looking for…"
                    className="min-h-[120px] mt-1"
                    value={form.message}
                    onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                    }
                />
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="h-12 w-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90"
            >
                {isPending ? "Submitting..." : "Send request"}
            </Button>
        </form>
    );
}