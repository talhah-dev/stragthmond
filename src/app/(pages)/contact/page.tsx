import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";
import HeroSections from "@/components/HeroSections";

export default function ContactPage() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] overflow-hidden md:px-5 px-3 rounded-xl pt-3">

                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Contact Us"
                    subheading="We’ll get back with a curated shortlist and clear next steps."
                />

                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-28">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                        <div data-aos="fade-up" className="lg:col-span-6">
                            <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                CONTACT
                            </div>

                            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                                Let’s find the right move together.
                            </h1>

                            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Tell us what you’re looking for. We’ll respond with a curated shortlist and clear next
                                steps for buying, renting, selling, or off-plan opportunities.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl bg-white p-5 ring-1 ring-[#00292D]/10">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D]/5 text-[#00292D]">
                                            <Mail className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <div className="text-sm font-semibold text-[#00292D]">Email</div>
                                            <div className="text-sm text-[#00292D]/65">hello@strathmond.com</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl bg-white p-5 ring-1 ring-[#00292D]/10">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D]/5 text-[#00292D]">
                                            <Phone className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <div className="text-sm font-semibold text-[#00292D]">Phone</div>
                                            <div className="text-sm text-[#00292D]/65">+971 00 000 0000</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl bg-white p-5 ring-1 ring-[#00292D]/10 sm:col-span-2">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D]/5 text-[#00292D]">
                                            <MapPin className="h-5 w-5" />
                                        </span>
                                        <div className="min-w-0">
                                            <div className="text-sm font-semibold text-[#00292D]">Office</div>
                                            <div className="truncate text-sm text-[#00292D]/65">Dubai, United Arab Emirates</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-xl bg-white p-6 ring-1 ring-[#00292D]/10">
                                <div className="text-sm font-semibold text-[#00292D]">Prefer to explore first?</div>
                                <div className="mt-2 text-sm text-[#00292D]/70">
                                    Browse curated paths based on your goal.
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        { label: "Buy", href: "/buy" },
                                        { label: "Rent", href: "/rent" },
                                        { label: "Sell", href: "/sell" },
                                        { label: "Off Plan", href: "/off-plan" },
                                    ].map((x) => (
                                        <Link
                                            key={x.href}
                                            href={x.href}
                                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#00292D] ring-1 ring-[#00292D]/10 hover:bg-[#F8F8FF]"
                                        >
                                            {x.label} <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200" className="lg:col-span-6">
                            <div className="overflow-hidden rounded-xl bg-white ring-1 ring-[#00292D]/10">
                                <div className="p-6 sm:p-8">
                                    <div className="text-sm font-semibold text-[#00292D]">Request a shortlist</div>
                                    <div className="mt-2 text-sm text-[#00292D]/65">
                                        Share a few details—our advisor will get back with options and next steps.
                                    </div>
                                    <div className="mt-6">
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="bg-[#F8F8FF]">
                        <div className="mx-auto max-w-7xl pt-14 md:pt-28">
                            <div data-aos="fade-up" className="mb-6">
                                <p className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                    LOCATION
                                </p>
                                <h2 className="mt-2 text-2xl font-semibold text-[#00292D] sm:text-3xl">
                                    Visit us in Dubai
                                </h2>
                                <p className="mt-2 max-w-xl text-sm text-[#00292D]/65">
                                    Our advisors operate across Dubai’s key communities and developments.
                                </p>
                            </div>

                            <div data-aos="zoom-out-up" className="overflow-hidden rounded-lg ring-1 ring-[#00292D]/10">
                                <div className="relative h-[420px] w-full">
                                    <iframe
                                        title="Strathmond Dubai Location"
                                        src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
                                        className="h-full w-full border-0"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </main>
        </UserWrapper>
    );
}
