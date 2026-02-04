"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
    ShieldCheck,
    Lock,
    Database,
    UserCheck,
    Mail,
    Globe,
} from "lucide-react";
import UserWrapper from "@/app/(wrapper)/UserWrapper";

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="rounded-xl bg-white p-6 ring-1 ring-[#00292D]/10 sm:p-8">
            <h2 className="text-xl font-semibold text-[#00292D]">{title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#00292D]/70">
                {children}
            </div>
        </section>
    );
}

export default function PrivacyPolicyPage() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF]">
                {/* HERO */}
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                            <ShieldCheck className="h-4 w-4" />
                            Privacy Policy
                        </div>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                            Your privacy matters to us.
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                            This Privacy Policy explains how Strathmond collects, uses, and protects
                            your personal information when you use our website and services.
                        </p>

                        <p className="mt-2 text-sm text-[#00292D]/60">
                            Last updated: February 2026
                        </p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="grid gap-6 lg:grid-cols-12">
                        {/* Main */}
                        <div className="lg:col-span-8 space-y-5">
                            <Section title="1. Information We Collect">
                                <p>
                                    We may collect personal information that you voluntarily provide
                                    to us when you fill out forms, contact us, or use our services.
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>Name, email address, and phone number</li>
                                    <li>Property preferences and enquiry details</li>
                                    <li>Communication history with our team</li>
                                    <li>Technical data such as IP address and browser type</li>
                                </ul>
                            </Section>

                            <Section title="2. How We Use Your Information">
                                <p>Your information is used to:</p>
                                <ul className="list-disc pl-5">
                                    <li>Respond to enquiries and provide requested services</li>
                                    <li>Send property updates or relevant market insights</li>
                                    <li>Improve our website experience and content</li>
                                    <li>Comply with legal or regulatory obligations</li>
                                </ul>
                            </Section>

                            <Section title="3. Data Sharing & Disclosure">
                                <p>
                                    We do not sell your personal data. Your information may be shared
                                    only when necessary:
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>With trusted service providers assisting our operations</li>
                                    <li>When legally required by authorities</li>
                                    <li>To protect the rights and safety of our users</li>
                                </ul>
                            </Section>

                            <Section title="4. Data Security">
                                <p>
                                    We implement appropriate technical and organisational measures
                                    to protect your personal information from unauthorised access,
                                    loss, or misuse.
                                </p>
                            </Section>

                            <Section title="5. Cookies & Tracking">
                                <p>
                                    Our website may use cookies and similar technologies to enhance
                                    user experience, analyse traffic, and improve functionality.
                                    You can manage cookie preferences through your browser settings.
                                </p>
                            </Section>

                            <Section title="6. Your Rights">
                                <p>
                                    Depending on your location, you may have the right to:
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>Request access to your personal data</li>
                                    <li>Request correction or deletion of your data</li>
                                    <li>Withdraw consent for data processing</li>
                                </ul>
                            </Section>

                            <Section title="7. External Links">
                                <p>
                                    Our website may contain links to third-party websites. We are not
                                    responsible for the privacy practices or content of those sites.
                                </p>
                            </Section>

                            <Section title="8. Policy Updates">
                                <p>
                                    We may update this Privacy Policy from time to time. Any changes
                                    will be posted on this page with an updated revision date.
                                </p>
                            </Section>

                            <Section title="9. Contact Us">
                                <p>
                                    If you have questions about this Privacy Policy or how we handle
                                    your data, please contact us:
                                </p>
                                <p>
                                    Email:{" "}
                                    <Link
                                        href="mailto:privacy@strathmond.com"
                                        className="font-semibold text-[#00292D] hover:underline"
                                    >
                                        privacy@strathmond.com
                                    </Link>
                                </p>
                            </Section>
                        </div>

                        {/* Side card */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-30 rounded-xl bg-white p-6 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex shrink-0 h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF]">
                                        <Lock className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">
                                            Our Commitment
                                        </div>
                                        <div className="mt-1 text-sm text-[#00292D]/65">
                                            We respect your privacy and protect your information with care.
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6 bg-[#00292D]/10" />

                                <div className="space-y-6 text-sm text-[#00292D]/70">
                                    <div className="flex gap-3">
                                        <Database className="mt-0.5 h-5 w-5" />
                                        <span>No selling of personal data</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <UserCheck className="mt-0.5 h-5 w-5" />
                                        <span>Client-first data handling</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <Globe className="mt-0.5 h-5 w-5" />
                                        <span>GDPR-aligned principles</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <Mail className="mt-0.5 h-5 w-5" />
                                        <span>Clear communication</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
