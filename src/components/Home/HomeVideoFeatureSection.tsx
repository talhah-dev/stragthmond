"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquareText, Zap, Play, X } from "lucide-react";
import Link from "next/link";

export default function HomeVideoFeatureSection() {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const playVideo = async () => {
        const video = videoRef.current;
        if (!video) return;

        try {
            await video.play();
        } catch {
            setIsPlaying(false);
        }
    };

    const stopState = () => setIsPlaying(false);

    return (
        <section className="bg-gradient-to-b from-[#F8FBFB] to-[#F6F7FF]">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-6">
                        <div data-aos="fade-up" className="inline-flex items-center rounded-full bg-[#D2C4FB]/20 px-3 py-1 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                            New feature
                        </div>

                        <h2 data-aos="fade-up" className="mt-4 text-3xl font-bold tracking-tight text-[#00292D] sm:text-4xl">
                            Real estate for living and investments
                        </h2>

                        <p data-aos="fade-up" className="mt-4 max-w-xl text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                            A premium, curated experience helping you buy, rent, sell and explore projects with clarity
                            —beautifully simple and built for confident decisions.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link href="/about">
                                <Button className="rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90">Explore Strathmond</Button>
                            </Link>
                            <Button variant="ghost" className="rounded-full text-[#00292D] hover:bg-[#EAF5F5]" onClick={() => setOpen(true)}>
                                <Play className="mr-2 h-4 w-4" /> Watch overview
                            </Button>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="flex gap-3 rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-[#00292D]/6">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-[#00292D]/8">
                                    <MessageSquareText className="h-5 w-5 text-[#00292D]" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[#00292D]">Share listings</div>
                                    <div className="mt-1 text-xs text-[#00292D]/70">Create shortlists for teams and families.</div>
                                </div>
                            </div>

                            <div className="flex gap-3 rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-[#00292D]/6">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-[#00292D]/8">
                                    <Zap className="h-5 w-5 text-[#00292D]" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[#00292D]">Fast guidance</div>
                                    <div className="mt-1 text-xs text-[#00292D]/70">Structured viewings, paperwork and pricing context.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div data-aos="zoom-in-up" className="relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Property overview"
                                className="h-64 w-full object-cover md:h-80 lg:h-[420px]"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 to-transparent">
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    aria-label="Open video"
                                    className="inline-flex items-center gap-3 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#00292D] shadow-md transition hover:scale-105"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D2C4FB]/30">
                                        <Play className="h-5 w-5 text-[#00292D]" />
                                    </span>
                                    Watch overview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lightbox modal */}
                {open && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
                        <div className="relative mx-auto w-full max-w-4xl">
                            <button
                                aria-label="Close video"
                                onClick={() => {
                                    setOpen(false);
                                    const v = videoRef.current;
                                    if (v) v.pause();
                                    setIsPlaying(false);
                                }}
                                className="absolute right-3 top-3 z-50 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-[#00292D] shadow"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="overflow-hidden rounded-lg bg-black">
                                <video
                                    ref={videoRef}
                                    className="w-full"
                                    src="https://www.pexels.com/download/video/17224730/"
                                    poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    playsInline
                                    controls
                                    autoPlay
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={stopState}
                                    onEnded={() => {
                                        stopState();
                                        setOpen(false);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
