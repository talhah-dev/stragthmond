"use client";

import React from "react";
import Link from "next/link";

const items = [
    { title: "STRATHMOND", href: "/" },
    { title: "BUY", href: "/buy" },
    { title: "RENT", href: "/rent" },
    { title: "SELL", href: "/sell" },
    { title: "OFF PLAN", href: "/off-plan" },
    { title: "INSIGHTS", href: "/news" },
    { title: "CONTACT", href: "/contact" },
];

export default function HomeLogoMarquee() {
    const loop = [...items, ...items];

    return (
        <div className="w-full overflow-hidden py-6">
            <div className="group flex w-max gap-4 will-change-transform">
                <div
                    className="flex w-max gap-4 group-hover:[animation-play-state:paused]"
                    style={{ animation: "strathmond-marquee 22s linear infinite" }}
                >
                    {loop.map((item, idx) => (
                        <Link
                            key={`${item.title}-${idx}`}
                            href={item.href}
                            className="inline-flex items-center rounded-full border border-[#00292D]/15 bg-transparent px-5 py-2 text-sm font-semibold tracking-wide text-[#00292D]/80 transition hover:text-[#00292D]"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
