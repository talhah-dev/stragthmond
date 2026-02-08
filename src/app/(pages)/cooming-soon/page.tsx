"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Bell,
    ArrowRight,
    Mail,
    Sparkles,
    Timer,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

type ComingSoonProps = {
    title?: string;
    subtitle?: string;
    launchText?: string;
    primaryCtaHref?: string;
    primaryCtaText?: string;
    secondaryCtaHref?: string;
    secondaryCtaText?: string;
};

export default function ComingSoon({
    title = "Coming soon",
    subtitle = "We’re building a premium experience with clarity, structure, and better decisions.",
    launchText = "Launching soon",
    primaryCtaHref = "/",
    primaryCtaText = "Back to Home",
    secondaryCtaHref = "/contact",
    secondaryCtaText = "Contact us",
}: ComingSoonProps) {
    const [email, setEmail] = React.useState("");

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        const value = email.trim();
        if (!value) {
            toast("Please enter your email.");
            return;
        }
        console.log("Coming Soon email:", value);
        toast("You're on the list.");
        setEmail("");
    }

    return (
        <main className="min-h-dvh bg-[#F8F8FF]">
            <div className="relative min-h-dvh overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-48 left-[-10%] h-[560px] w-[560px] rounded-full bg-[#AFF8C8]/25 blur-3xl" />
                    <div className="absolute -bottom-64 right-[-10%] h-[680px] w-[680px] rounded-full bg-[#D2C4FB]/22 blur-3xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,41,45,0.09),transparent_45%),radial-gradient(circle_at_85%_12%,rgba(255,238,180,0.45),transparent_40%)]" />
                </div>

                <div className="relative min-h-dvh flex items-center justify-center  mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
                    <div className="gap-10  ">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur">
                                <Sparkles className="h-4 w-4" />
                                {launchText}
                            </div>

                            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                                {title}
                            </h1>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                {subtitle}
                            </p>

                            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                                <Button
                                    asChild
                                    className="h-12 rounded-full bg-[#00292D]  text-[#F8F8FF] hover:bg-[#00292D]/90"
                                >
                                    <Link href={primaryCtaHref}>
                                        {primaryCtaText} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-12 rounded-full border-[#00292D]/15 bg-transparent px-10"
                                >
                                    <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
