"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/sell", label: "Sell" },
    { href: "/off-plan", label: "Off Plan" },
    { href: "/about", label: "About" },
    { href: "/news", label: "News & Insights" },
];

export default function SiteNavbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    React.useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-5 z-50 w-full">
            <div
                className={[
                    "mx-auto px-2 sm:px-6 lg:px-8 transition-all duration-300",
                    scrolled ? "max-w-[1250px]" : "max-w-[1450px]",
                ].join(" ")}
            >
                <div
                    className={[
                        "mt-3 flex h-16 md:h-20 items-center justify-between gap-4 rounded-full transition-all duration-300",
                        scrolled
                            ? "bg-white/70 backdrop-blur-xl shadow-sm ring-1 ring-[#00292D]/10"
                            : "bg-transparent",
                    ].join(" ")}
                >
                    <div className="flex items-center gap-3 pl-4 sm:pl-5">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src={"/logo.png"} alt="logo" width={200} height={100} className="w-auto md:h-10 h-8" />
                        </Link>
                    </div>

                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((l) => {
                            const active =
                                pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className={[
                                        "rounded-full px-4 py-2 font-semibold transition",
                                        active
                                            ? "bg-[#00292D] text-[#F8F8FF]"
                                            : "text-[#00292D]/70 hover:bg-[#00292D]/5 hover:text-[#00292D]",
                                    ].join(" ")}
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2 pr-3 sm:pr-4">
                        <div className="hidden lg:block">
                            <Button className="rounded-full bg-[#FFEEB4] text-[#00292D] h-12 px-8 hover:bg-[#FFEEB4]/90">
                                <Link href="/contact">Get shortlist</Link>
                            </Button>
                        </div>

                        <div className="lg:hidden">
                            <Sheet open={open} onOpenChange={setOpen}>
                                <SheetTrigger asChild>
                                    <button
                                        type="button"
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/60 text-[#00292D] ring-1 ring-[#00292D]/10 backdrop-blur transition hover:bg-white"
                                        aria-label="Open menu"
                                    >
                                        <Menu className="h-5 w-5" />
                                    </button>
                                </SheetTrigger>

                                <SheetContent
                                    side="right"
                                    className="w-[320px] border-l border-[#00292D]/10 bg-white/80 p-0 backdrop-blur-xl"
                                >
                                    <div className="p-2">
                                        <SheetHeader>
                                            <SheetTitle className="">
                                                <Link href="/" className="flex items-center">
                                                    <Image src={"/logo.png"} alt="logo" width={200} height={100} className="w-auto md:h-10 h-8" />
                                                </Link>
                                            </SheetTitle>
                                        </SheetHeader>

                                        <div className="mt-6 space-y-2 px-2">
                                            {navLinks.map((l) => {
                                                const active =
                                                    pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
                                                return (
                                                    <Link
                                                        key={l.href}
                                                        href={l.href}
                                                        className={[
                                                            "block rounded-2xl px-4 py-3 font-semibold transition",
                                                            active
                                                                ? "bg-[#00292D] text-[#F8F8FF]"
                                                                : "text-[#00292D]/80 hover:bg-[#00292D]/5",
                                                        ].join(" ")}
                                                    >
                                                        {l.label}
                                                    </Link>
                                                );
                                            })}
                                        </div>

                                        <div className="mt-6 mx-2 rounded-3xl bg-[#F8F8FF] p-4 ring-1 ring-[#00292D]/10">
                                            <div className="text-sm font-semibold text-[#00292D]">Need guidance?</div>
                                            <div className="mt-1 text-sm text-[#00292D]/65">
                                                Get a curated shortlist based on your goal and budget.
                                            </div>

                                            <div className="mt-4">
                                                <Button className="h-11 w-full rounded-full bg-[#FFEEB4] text-[#00292D] hover:bg-[#FFEEB4]/90">
                                                    <Link href="/contact">Get shortlist</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
