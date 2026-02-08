"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import UserWrapper from "@/app/(wrapper)/UserWrapper";
import HeroSections from "@/components/HeroSections";

type Member = {
    name: string;
    role: string;
    avatar: string;
    link: string;
};

const members: Member[] = [
    {
        name: "Amelia Stephenson",
        role: "Senior Property Advisor",
        avatar: "https://alt.tailus.io/images/team/member-one.webp",
        link: "/team/amelia-stephenson",
    },
    {
        name: "Noah Williams",
        role: "Leasing Specialist",
        avatar: "https://alt.tailus.io/images/team/member-two.webp",
        link: "/team/noah-williams",
    },
    {
        name: "Sophia Khan",
        role: "Off Plan Investment Advisor",
        avatar: "https://alt.tailus.io/images/team/member-three.webp",
        link: "/team/sophia-khan",
    },
    {
        name: "Ethan Parker",
        role: "Market Insights Associate",
        avatar: "https://alt.tailus.io/images/team/member-four.webp",
        link: "/team/ethan-parker",
    },
    {
        name: "Client Advisory Desk",
        role: "Shortlists & Viewing Coordination",
        avatar: "https://alt.tailus.io/images/team/member-five.webp",
        link: "/contact",
    },
    {
        name: "Partnerships",
        role: "Developers & Landlords",
        avatar: "https://alt.tailus.io/images/team/member-six.webp",
        link: "/contact",
    },
];

export default function Team() {
    return (
        <UserWrapper>
            <main className="bg-[#F8F8FF] md:px-5 px-3 rounded-xl pt-3 overflow-hidden">
                <HeroSections
                    video="https://www.pexels.com/download/video/17224771/"
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115481/Screenshot_2026-02-03_154428_di3hus.png"
                    heading="Team"
                    subheading="A Dubai-first advisory team focused on clarity, structure, and trusted guidance across buying, renting, selling, and off-plan opportunities."
                />

                <section className="bg-[#F8F8FF] py-12 md:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="">
                            <div className="">
                                <div data-aos="fade-up" className="grid gap-6 lg:grid-cols-12 lg:items-end">
                                    <div className="lg:col-span-6">
                                        <div className="text-xs font-semibold tracking-widest text-[#00292D]/55">
                                            TEAM
                                        </div>
                                        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#00292D] sm:text-4xl">
                                            People behind the Strathmond standard.
                                        </h1>
                                    </div>
                                    <div className="lg:col-span-6">
                                        <p className="text-sm leading-relaxed text-[#00292D]/70 sm:text-base">
                                            Dubai-first, premium advisory. We curate verified options, share honest context,
                                            and guide you through buying, renting, selling, and off-plan opportunities with a clean process.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pb-10 sm:pb-14">
                                <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                                    {members.map((member, index) => (
                                        <div
                                            key={index}
                                            data-aos="fade-up"
                                            className="group overflow-hidden">
                                            <img
                                                className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                                src={member.avatar}
                                                alt="team member"
                                                width="826"
                                                height="1239"
                                            />
                                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                                <div className="flex justify-between">
                                                    <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                                    <span className="text-xs">_0{index + 1}</span>
                                                </div>
                                                <div className="mt-1 flex items-center justify-between">
                                                    <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                                    <Link
                                                        href={member.link}
                                                        className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                                        {' '}
                                                        Linktree
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </UserWrapper>
    );
}
