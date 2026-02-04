"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
    FileText,
    Scale,
    Shield,
    AlertTriangle,
    Handshake,
    Gavel,
    Mail,
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
        <section className="rounded-2xl bg-white p-6 ring-1 ring-[#00292D]/10 sm:p-8">
            <h2 className="text-xl font-semibold text-[#00292D]">{title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#00292D]/70">
                {children}
            </div>
        </section>
    );
}

export default function TermsConditionsPage() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF]">
                {/* HERO */}
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                            <FileText className="h-4 w-4" />
                            Terms & Conditions
                        </div>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                            Terms of Use
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                            These Terms & Conditions govern your access to and use of the Strathmond
                            website and services. By using our site, you agree to these terms.
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
                            <Section title="1. Acceptance of Terms">
                                <p>
                                    By accessing or using this website, you confirm that you have read,
                                    understood, and agreed to be bound by these Terms & Conditions and
                                    all applicable laws and regulations.
                                </p>
                            </Section>

                            <Section title="2. Use of the Website">
                                <p>You agree to use this website only for lawful purposes.</p>
                                <ul className="list-disc pl-5">
                                    <li>Do not misuse, disrupt, or attempt to damage the website</li>
                                    <li>Do not submit false or misleading information</li>
                                    <li>Do not attempt unauthorised access to systems or data</li>
                                </ul>
                            </Section>

                            <Section title="3. Property Information Disclaimer">
                                <p>
                                    Property listings, prices, availability, and related details are
                                    provided for general information purposes only.
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>Information may change without notice</li>
                                    <li>Images and descriptions are illustrative</li>
                                    <li>No guarantee of accuracy or availability</li>
                                </ul>
                            </Section>

                            <Section title="4. No Professional Advice">
                                <p>
                                    Content on this website does not constitute legal, financial,
                                    or investment advice. You should always seek independent
                                    professional guidance before making property decisions.
                                </p>
                            </Section>

                            <Section title="5. Intellectual Property">
                                <p>
                                    All content on this website, including text, images, logos,
                                    graphics, and design elements, is the property of Strathmond
                                    or its licensors and is protected by intellectual property laws.
                                </p>
                            </Section>

                            <Section title="6. Limitation of Liability">
                                <p>
                                    To the fullest extent permitted by law, Strathmond shall not be
                                    liable for any loss or damage arising from:
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>Use or inability to use this website</li>
                                    <li>Reliance on property information or content</li>
                                    <li>Technical issues, errors, or interruptions</li>
                                </ul>
                            </Section>

                            <Section title="7. Third-Party Links">
                                <p>
                                    This website may contain links to third-party websites. We do not
                                    control or endorse those sites and are not responsible for their
                                    content or practices.
                                </p>
                            </Section>

                            <Section title="8. Termination">
                                <p>
                                    We reserve the right to restrict or terminate access to the website
                                    at any time, without notice, if these terms are violated.
                                </p>
                            </Section>

                            <Section title="9. Governing Law">
                                <p>
                                    These Terms & Conditions are governed by and construed in accordance
                                    with the laws of the United Arab Emirates.
                                </p>
                            </Section>

                            <Section title="10. Changes to Terms">
                                <p>
                                    We may update these Terms & Conditions from time to time. Continued
                                    use of the website constitutes acceptance of the revised terms.
                                </p>
                            </Section>

                            <Section title="11. Contact Information">
                                <p>
                                    If you have any questions about these Terms & Conditions, please
                                    contact us:
                                </p>
                                <p>
                                    Email:{" "}
                                    <Link
                                        href="mailto:legal@strathmond.com"
                                        className="font-semibold text-[#00292D] hover:underline"
                                    >
                                        legal@strathmond.com
                                    </Link>
                                </p>
                            </Section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24 rounded-2xl bg-white p-6 ring-1 ring-[#00292D]/10">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex shrink-0 h-10 w-10 items-center justify-center rounded-2xl bg-[#00292D] text-[#F8F8FF]">
                                        <Scale className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#00292D]">
                                            Fair Use & Transparency
                                        </div>
                                        <div className="mt-1 text-sm text-[#00292D]/65">
                                            Clear terms designed to protect both users and Strathmond.
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6 bg-[#00292D]/10" />

                                <div className="space-y-5 text-sm text-[#00292D]/70">
                                    <div className="flex gap-3">
                                        <Shield className="mt-0.5 h-5 w-5" />
                                        <span>Platform usage protection</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <Handshake className="mt-0.5 h-5 w-5" />
                                        <span>Client-first standards</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <AlertTriangle className="mt-0.5 h-5 w-5" />
                                        <span>Clear risk disclosure</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <Gavel className="mt-0.5 h-5 w-5" />
                                        <span>UAE legal framework</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <Mail className="mt-0.5 h-5 w-5" />
                                        <span>Direct contact for questions</span>
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
