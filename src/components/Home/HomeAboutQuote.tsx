"use client";

import React from "react";
import Image from "next/image";

export default function HomeAboutQuote() {
    return (
        <section className="bg-[#F8F8FF]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="">
                    <div className="">
                        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                            <div className="lg:col-span-2">
                                <div className="font-semibold mt-3 text-xl uppercase tracking-widest text-[#00292D]/75">
                                    about us
                                </div>
                            </div>

                            <div className="lg:col-span-10">
                                <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#00292D] sm:text-5xl">
                                    We guide decisions, not just listings.
                                    <br />
                                    Built on honesty, clarity, and a deep respect for your goals.
                                </h2>
                                <div className="mt-10 text-sm flex justify-between leading-relaxed text-[#00292D]/70">
                                    <p className="max-w-lg">
                                        In a market full of noise, Strathmond focuses on a premium, structured experience—
                                        curated shortlists, transparent advice, and a clear process for buying, renting, selling,
                                        and off-plan opportunities.
                                    </p>
                                    <img src="https://images.unsplash.com/photo-1738168246881-40f35f8aba0a?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-2xl max-w-80" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center">
                        <div className="overflow-hidden rounded-3xl ring-1 ring-[#00292D]/10">
                            <div className="relative aspect-[4/3] w-full bg-[#00292D]/5">
                                <Image
                                    src="/images/about-quote.jpg"
                                    alt="Strathmond"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
