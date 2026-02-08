import React from "react"
import { TextEffectOne, TextEffectTwo } from "react-text-animate"

interface HeroProps {
    video: string
    poster: string
    heading: string
    subheading: string
}

export default function HeroSections({
    video,
    poster,
    heading,
    subheading,
}: HeroProps) {
    return (
        <section
            data-aos="zoom-out-up"
            data-aos-delay="500"

            className="relative md:h-[500px] h-70 w-full rounded-xl overflow-hidden"
        >
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src={video}
                autoPlay
                loop
                poster={poster}
                muted
                playsInline
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        <TextEffectOne
                            key={`text-effect-${heading}`}
                            animateOnce={true}
                            text={heading}
                            initialDelay={0.6}
                            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
                        />
                    </h1>

                    <TextEffectTwo
                        animateOnce={true}
                        animationDuration={0.5}
                        text={subheading}
                        wrapperElement={"p"}
                        initialDelay={0.6}
                        className="mt-3 text-sm max-w-xl text-white/80 sm:text-base"
                    />
                </div>
            </div>
        </section>
    )
}
