"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type NavItem =
    | {
        type: "link";
        href: string;
        label: string;
    }
    | {
        type: "dropdown";
        label: string;
        items: { href: string; label: string }[];
    };

const navItems: NavItem[] = [
    {
        type: "dropdown",
        label: "Buy Property",
        items: [
            // { href: "/buy/properties-for-sale", label: "Properties for Sale" },
            { href: "/cooming-soon", label: "Properties for Sale" },
            { href: "/buy/buy-property", label: "Buy property" },
        ],
    },
    {
        type: "dropdown",
        label: "Rent Property",
        items: [
            // { href: "/rent/properties-for-rent", label: "Properties for Rent" },
            { href: "/cooming-soon", label: "Properties for Rent" },
            { href: "/rent/rent-property", label: "Rent property" },
        ],
    },
    {
        type: "dropdown",
        label: "Off Plan Projects",
        items: [
            { href: "/off-plan/latest-off-plan-projects", label: "Latest Off Plan Projects" },
            { href: "/off-plan/off-plan-properties", label: "Why Choose for offset plan" },
        ],
    },
    {
        type: "dropdown",
        label: "Sell Property",
        items: [
            { href: "/sell/sell-property", label: "Sell your property" },
            { href: "/sell/why-sell-property", label: "Why sell property" },
        ],
    },
    { type: "link", href: "/about", label: "About" },
    { type: "link", href: "/team", label: "Meet The Team" },
    { type: "link", href: "/careers", label: "Careers" },
];

function isActive(pathname: string | null, href: string) {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
}

function isDropdownActive(pathname: string | null, items: { href: string; label: string }[]) {
    if (!pathname) return false;
    return items.some((it) => pathname === it.href || pathname.startsWith(it.href + "/"));
}

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
        <header data-aos="fade-down" className="sticky top-3 z-50 w-full">
            <div
                className={[
                    "mx-auto px-2 sm:px-6 2xl:px-8 transition-all duration-300",
                    scrolled ? "max-w-[1350px]" : "max-w-[1450px]",
                ].join(" ")}
            >
                <div
                    className={[
                        "flex h-16 md:h-20 items-center justify-between gap-4 rounded-full transition-all duration-300",
                        scrolled ? "bg-white/70 backdrop-blur-xl shadow-sm ring-1 ring-[#00292D]/10" : "bg-transparent",
                    ].join(" ")}
                >
                    <div className="flex items-center gap-3 pl-4 sm:pl-5">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo.png" alt="logo" width={200} height={100} className="w-auto md:h-10 h-8" />
                        </Link>
                    </div>

                    <nav className="hidden 2xl:flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                {navItems.map((item) => {
                                    if (item.type === "link") {
                                        const active = isActive(pathname, item.href);
                                        return (
                                            <NavigationMenuItem key={item.href}>
                                                <NavigationMenuLink className="rounded-full" asChild>
                                                    <Link
                                                        href={item.href}
                                                        className={[
                                                            "rounded-full px-4 py-2 font-semibold transition",
                                                            active
                                                                ? "bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D] hover:text-[#F8F8FF]"
                                                                : "text-[#00292D]/70 hover:bg-[#00292D]/5 hover:text-[#00292D]",
                                                        ].join(" ")}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        );
                                    }

                                    const active = isDropdownActive(pathname, item.items);

                                    return (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuTrigger
                                                className={[
                                                    "rounded-full font-semibold hover:text-[#00292D] transition bg-transparent ",
                                                    active
                                                        ? "bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D] hover:text-[#F8F8FF] data-[state=open]:bg-[#00292D] data-[state=open]:text-[#F8F8FF]"
                                                        : "text-[#00292D]/70 hover:bg-[#00292D]/5 hover:text-[#00292D] data-[state=open]:bg-[#00292D]/5 data-[state=open]:text-[#00292D]",
                                                ].join(" ")}
                                            >
                                                <span className="flex items-center gap-2 px- py-2 hover:text-[#00292D]">{item.label}</span>
                                            </NavigationMenuTrigger>

                                            <NavigationMenuContent>
                                                <div className="w-[360px]">
                                                    <div className="overflow-hidden">
                                                        <div className="p-2">
                                                            {item.items.map((sub) => {
                                                                const subActive = isActive(pathname, sub.href);
                                                                return (
                                                                    <Link
                                                                        key={sub.href}
                                                                        href={sub.href}
                                                                        className={[
                                                                            "block rounded-2xl px-4 py-3 font-semibold transition",
                                                                            subActive
                                                                                ? "bg-[#00292D] text-[#F8F8FF]"
                                                                                : "text-[#00292D]/80 hover:bg-[#00292D]/5",
                                                                        ].join(" ")}
                                                                    >
                                                                        {sub.label}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    );
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    <div className="flex items-center gap-2 pr-3 sm:pr-4">
                        <div className="hidden 2xl:block">
                            <Link href="/contact">
                                <Button className="rounded-full cursor-pointer bg-[#FFEEB4] text-[#00292D] h-12 px-8 hover:bg-[#FFEEB4]/90">
                                    Get shortlist
                                </Button>
                            </Link>
                        </div>

                        <div className="2xl:hidden">
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
                                    className="w-[320px] overflow-y-auto border-l border-[#00292D]/10 bg-white/80 p-0 backdrop-blur-xl"
                                >
                                    <div className="p-2">
                                        <SheetHeader>
                                            <SheetTitle>
                                                <Link href="/" className="flex items-center">
                                                    <Image src="/logo.png" alt="logo" width={200} height={100} className="w-auto md:h-10 h-8" />
                                                </Link>
                                            </SheetTitle>
                                        </SheetHeader>

                                        <div className="mt-6 px-2 ">
                                            <Accordion type="single" collapsible className="space-y-2">
                                                {navItems.map((item) => {
                                                    if (item.type === "link") {
                                                        const active = isActive(pathname, item.href);
                                                        return (
                                                            <Link
                                                                key={item.href}
                                                                href={item.href}
                                                                className={[
                                                                    "block rounded-2xl px-4 py-3 font-semibold transition",
                                                                    active ? "bg-[#00292D] text-[#F8F8FF]" : "text-[#00292D]/80 hover:bg-[#00292D]/5",
                                                                ].join(" ")}
                                                            >
                                                                {item.label}
                                                            </Link>
                                                        );
                                                    }

                                                    const active = isDropdownActive(pathname, item.items);

                                                    return (
                                                        <AccordionItem
                                                            key={item.label}
                                                            value={item.label}
                                                            className="border-0"
                                                        >
                                                            <AccordionTrigger
                                                                className={[
                                                                    "w-full rounded-xl px-4 py-3 font-semibold transition hover:no-underline",
                                                                    active
                                                                        ? "bg-[#00292D] text-[#F8F8FF]"
                                                                        : "text-[#00292D]/80 hover:bg-[#00292D]/5",
                                                                ].join(" ")}
                                                            >
                                                                <span className="flex items-center justify-between w-full">
                                                                    {item.label}
                                                                </span>
                                                            </AccordionTrigger>
                                                            <AccordionContent className="pt-2">
                                                                <div className="space-y-2 pl-2">
                                                                    {item.items.map((sub) => {
                                                                        const subActive = isActive(pathname, sub.href);
                                                                        return (
                                                                            <Link
                                                                                key={sub.href}
                                                                                href={sub.href}
                                                                                className={[
                                                                                    "block rounded-xl px-4 py-3 font-semibold transition",
                                                                                    subActive
                                                                                        ? "bg-[#00292D] text-[#F8F8FF]"
                                                                                        : "text-[#00292D]/80 hover:bg-[#00292D]/5",
                                                                                ].join(" ")}
                                                                            >
                                                                                {sub.label}
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    );
                                                })}
                                            </Accordion>
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
