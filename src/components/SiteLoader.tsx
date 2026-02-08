"use client";

import Image from "next/image";
import React from "react";

export default function SiteLoader() {
    const [visible, setVisible] = React.useState(true);
    const [hide, setHide] = React.useState(false);

    React.useEffect(() => {
        const t1 = window.setTimeout(() => setHide(true), 500);
        const t2 = window.setTimeout(() => setVisible(false), 1500);
        return () => {
            window.clearTimeout(t1);
            window.clearTimeout(t2);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className={[
                "fixed inset-0 z-[9999] flex h-dvh w-dvw items-center justify-center bg-[#f8f8ff] transition-transform duration-500 ease-out",
                hide ? "-translate-y-full" : "translate-y-0",
            ].join(" ")}
            aria-label="Loading"
            role="status"
        >
            <div className="flex items-center justify-center">
                <Image
                    src="/logo.png"
                    alt="Loading"
                    width={220}
                    height={80}
                    priority
                    className="h-auto w-[180px] sm:w-[220px]"
                />
            </div>
        </div>
    );
}
