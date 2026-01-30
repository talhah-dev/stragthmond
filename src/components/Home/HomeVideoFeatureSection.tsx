"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquareText, Zap, Play } from "lucide-react";

export default function HomeVideoFeatureSection() {
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const onPlay = async () => {
        setIsPlaying(true);
        try {
            await videoRef.current?.play();
        } catch {
            setIsPlaying(false);
        }
    };

    return (
        <section className="bg-[#F8F8FF]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-7">
                        <div data-aos="fade-up" className="inline-flex items-center rounded-full bg-[#D2C4FB]/20 px-3 py-1 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                            New feature
                        </div>

                        <h2 data-aos="fade-up" className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                            Real estate for living and investments
                        </h2>

                        <p data-aos="fade-up" className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                            A premium, curated experience to help you buy, rent, sell, and explore off-plan projects with clarity and confidence.
                        </p>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="space-y-6">
                            <div data-aos="fade-up" className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-[#00292D]/10">
                                    <MessageSquareText className="h-5 w-5 text-[#00292D]" />
                                </div>
                                <div>
                                    <div className="text-base font-semibold text-[#00292D]">Share listings & shortlists</div>
                                    <div className="mt-1 text-sm leading-relaxed text-[#00292D]/70">
                                        Keep decisions aligned with a clean shortlist flow—ideal for families and investors.
                                    </div>
                                </div>
                            </div>

                            <div data-aos="fade-up" className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-[#00292D]/10">
                                    <Zap className="h-5 w-5 text-[#00292D]" />
                                </div>
                                <div>
                                    <div className="text-base font-semibold text-[#00292D]">Fast guidance, fewer surprises</div>
                                    <div className="mt-1 text-sm leading-relaxed text-[#00292D]/70">
                                        A structured process for viewings, paperwork, pricing context, and next steps.
                                    </div>
                                </div>
                            </div>

                            <Button data-aos="fade-up" className="w-fit rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90">
                                Explore Strathmond
                            </Button>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="zoom-in-up"
                    className="mt-12 overflow-hidden md:rounded-[28px] rounded-xl bg-white ring-1 ring-[#00292D]/10"
                >
                    <div className="relative">
                        <video
                            ref={videoRef}
                            className="h-auto w-full"
                            src="/videos/house-interior.mp4"
                            poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            playsInline
                            controls={isPlaying}
                            preload="metadata"
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                        />

                        {!isPlaying && (
                            <button
                                type="button"
                                onClick={onPlay}
                                className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/15"
                                aria-label="Play video"
                            >
                                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#00292D] shadow-lg ring-1 ring-[#00292D]/10">
                                    <Play className="h-7 w-7 translate-x-[1px]" />
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
