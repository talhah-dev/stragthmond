"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { AtSign, Lock, ShieldCheck, ArrowLeft } from "lucide-react";

export default function AdminLoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        const payload = {
            email: email.trim(),
            password,
        };

        console.log("Admin login submit:", payload);

        toast("Login successful!");

        setTimeout(() => setLoading(false), 400);
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#F8F8FF]">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#AFF8C8]/22 blur-3xl" />
                <div className="absolute -bottom-56 right-[-10%] h-[620px] w-[620px] rounded-full bg-[#D2C4FB]/18 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,41,45,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,238,180,0.35),transparent_40%)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur transition hover:bg-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to site
                    </Link>

                    <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur">
                        <ShieldCheck className="h-4 w-4" />
                        Admin only
                    </div>
                </div>

                <div className="mt-10 max-w-xl mx-auto lg:items-center">
                    <div className="">
                        <div className="rounded-[28px] bg-white p-8 ring-1 ring-[#00292D]/10 sm:p-10">
                            <div className="flex md:flex-row flex-col md:items-center gap-3">
                                <div className="inline-flex shrink-0 h-12 w-12 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF]">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                        ADMIN ACCESS
                                    </div>
                                    <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#00292D] sm:text-3xl">
                                        Sign in to Strathmond Admin
                                    </h1>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-[#00292D]/70">
                                This area is restricted. Use your admin email and password to continue.
                            </p>

                            <form onSubmit={onSubmit} className="mt-8 space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#00292D]">Email</label>
                                    <div className="relative">
                                        <Input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="admin@strathmond.com"
                                            type="email"
                                            required
                                            className="h-11 mt-1.5 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#00292D]">Password</label>
                                    <div className="relative">
                                        <Input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            type="password"
                                            required
                                            className="h-11 mt-1.5 border-[#00292D]/15 bg-[#F8F8FF] focus-visible:ring-0 focus-visible:ring-offset-0"
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="h-12 w-full bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90"
                                >
                                    {loading ? "Signing in..." : "Sign in"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
