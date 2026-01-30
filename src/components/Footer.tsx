"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";

const footerLinks = {
    explore: [
        { label: "Communities", href: "/communities" },
        { label: "Search", href: "/buy" },
        { label: "House", href: "/buy?type=house" },
        { label: "Apartment", href: "/buy?type=apartment" },
        { label: "Land", href: "/buy?type=land" },
    ],
    company: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/news" },
        { label: "Contact", href: "/contact" },
    ],
};

export default function SiteFooterLight() {
    return (
        <footer className="bg-[#F8F8FF] md:p t-10">
            <div className="mx-auto max-w-full  sm:p-6 lg:p-6  ">
                <div className="rounded-3xl bg-white ring-1 ring-[#00292D]/10">
                    <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-7">
                            <div data-aos="fade" className="text-balance text-xl font-semibold md:text-start text-center tracking-tight text-[#00292D] sm:text-3xl">
                                Join Strathmond email list to stay up to date about
                                <span className="text-[#00292D]/80"> properties and opportunities in Dubai.</span>
                            </div>
                        </div>

                        <div data-aos="fade" className="lg:col-span-5">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex w-full items-center gap-2 rounded-full bg-[#F8F8FF] p-2 ring-1 ring-[#00292D]/10"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-11 flex-1 outline-none bg-transparent text-[#00292D] placeholder:text-[#00292D]/45 pl-4"
                                />
                                <Button
                                    type="submit"
                                    className="h-11 rounded-full bg-[#00292D] px-6 text-[#F8F8FF] hover:bg-[#00292D]/90"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-[#00292D]/10">
                        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-12">
                            <div className="lg:col-span-3">
                                <div className="text-lg font-semibold text-[#00292D]">Let’s Talk</div>
                                <div className="mt-3 space-y-2 text-sm text-[#00292D]/70">
                                    <div>hello@strathmond.com</div>
                                    <div>Dubai, UAE</div>
                                    <div>+971 00 000 0000</div>
                                </div>

                                <div className="mt-8 flex items-center gap-3">
                                    <Link href="/" className="flex items-center gap-2">
                                        <Image src={"/logo.png"} alt="logo" width={200} height={100} className="w-auto h-10" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-6">
                                <div className="grid gap-10 sm:grid-cols-2">
                                    <div>
                                        <div className="font-semibold text-[#00292D]">
                                            EXPLORE
                                        </div>
                                        <div className="mt-4 flex flex-col gap-3">
                                            {footerLinks.explore.map((l) => (
                                                <Link
                                                    key={l.href}
                                                    href={l.href}
                                                    className="text-[#00292D]/70 hover:text-[#00292D]"
                                                >
                                                    {l.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className=" font-semibold text-[#00292D]">
                                            COMPANY
                                        </div>
                                        <div className="mt-4 flex flex-col gap-3">
                                            {footerLinks.company.map((l) => (
                                                <Link
                                                    key={l.href}
                                                    href={l.href}
                                                    className=" text-[#00292D]/70 hover:text-[#00292D]"
                                                >
                                                    {l.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-3 lg:flex lg:justify-end">
                                <div className="flex items-center gap-3">
                                    {[
                                        { Icon: Facebook, href: "https://facebook.com" },
                                        { Icon: Instagram, href: "https://instagram.com" },
                                        { Icon: X, href: "https://x.com" },
                                        { Icon: Linkedin, href: "https://linkedin.com" },
                                    ].map(({ Icon, href }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            target="_blank"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F8FF] text-[#00292D] ring-1 ring-[#00292D]/10 transition hover:bg-white"
                                            aria-label="Social link"
                                        >
                                            <Icon className="h-5 w-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 px-6 pb-6 pt-2 text-sm text-[#00292D]/55 sm:flex-row items-center sm:justify-between sm:px-8 sm:pb-8">
                            <div>Strathmond. All rights reserved. © {new Date().getFullYear()}</div>
                            <div className="flex gap-4">
                                <Link href="/privacy" className="hover:text-[#00292D]">
                                    Privacy
                                </Link>
                                <Link href="/terms" className="hover:text-[#00292D]">
                                    Terms
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
