import React from "react";

export default function Home2() {
    return (
        <div className="md:px-5 px-3" data-aos="zoom-out-up" data-aos-delay="500">

            <div className=" mx-auto md:h-[calc(100vh-120px)] h-[calc(100vh-100px)] overflow-hidden rounded-xl md:mt-5 mt-5">
                <video
                    className="hidden md:block w-full h-full object-cover"
                    src="https://res.cloudinary.com/dpkp4hymz/video/upload/v1770111509/desktop_ntobyi.mp4"
                    autoPlay
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115231/Screenshot_2026-02-03_154010_jm7cos.png"
                    muted
                    loop
                    playsInline
                    preload="auto"
                />

                <video
                    className="block md:hidden w-full h-full object-cover"
                    src="https://res.cloudinary.com/dpkp4hymz/video/upload/v1770111518/mobile_ch5v8e.mp4"
                    autoPlay
                    poster="https://res.cloudinary.com/dpkp4hymz/image/upload/v1770115366/Screenshot_2026-02-03_154235_qz8kvz.png"
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
            </div>
        </div>
    );
}
