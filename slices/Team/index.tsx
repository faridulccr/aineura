"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
    JSXMapSerializer,
    PrismicRichText,
    SliceComponentProps,
} from "@prismicio/react";
import Image from "next/image";

import angleLeft from "@/public/icons/angle-left-solid.svg";
import angleRight from "@/public/icons/angle-right-solid.svg";
import { useState } from "react";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const components: JSXMapSerializer = {
    heading5: ({ children }) => (
        <h5 className="text-[14px] md:text-xl leading-[24px]">{children}</h5>
    ),
    paragraph: ({ children }: { children: any }) => (
        <p className="text-[10px] md:text-base leading-[18px]">{children}</p>
    ),
};

const content: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="text-lg leading-[26px] sm:w-3/4 md:w-1/2 mx-auto">
            {children}
        </p>
    ),
};

const Team = ({ slice }: TeamProps): JSX.Element => {
    const [margin, setMargin] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const numberOfItems = slice.items.length;

    const previous = () => {
        const width = window.innerWidth;
        if (width < 640) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 94);
                setCurrentIndex((prev) => prev - 1);
            }
        } else if (width < 1024) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 93);
                setCurrentIndex((prev) => prev - 1);
            }
        } else if (width >= 1024) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 93.2);
                setCurrentIndex((prev) => prev - 1);
            }
        }
    };

    const next = () => {
        const width = window.innerWidth;
        if (width < 640) {
            if (currentIndex < numberOfItems / 2) {
                setMargin((prev) => prev - 94);
                setCurrentIndex((prev) => prev + 1);
            }
        } else if (width < 1024) {
            if (currentIndex < numberOfItems / 3) {
                setMargin((prev) => prev - 93);
                setCurrentIndex((prev) => prev + 1);
            }
        } else if (width >= 1024) {
            if (currentIndex < numberOfItems / 4) {
                setMargin((prev) => prev - 93.2);
                setCurrentIndex((prev) => prev + 1);
            }
        }
    };

    return (
        <section
            id="team"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-12 relative"
        >
            <div className="heading text-center">
                <PrismicRichText field={slice.primary.heading} />
                <PrismicRichText
                    field={slice.primary.content}
                    components={content}
                />
            </div>
            <div className="mx-auto w-[90vw] overflow-hidden">
                <div
                    style={{
                        marginLeft: margin + "vw",
                        transition: "0.3s",
                    }}
                    className="mt-6 flex gap-[4vw] sm:gap-[3vw] lg:gap-[3.2vw] justify-between w-fit"
                >
                    {slice.items.map(({ teammate, info }, i) => (
                        <div
                            key={i}
                            className="text-center w-[43vw] sm:w-[28vw] lg:w-[20vw]  "
                        >
                            <PrismicNextImage
                                // className="w-[160px] md:w-[200px] lg:w-[282px] h-auto mx-auto"
                                className="w-auto h-auto mx-auto mb-3"
                                field={teammate}
                            />
                            <PrismicRichText
                                field={info}
                                components={components}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={previous}
                className="angle-btn bottom-[20px] sm:top-[56%] left-1/2 sm:left-2 -translate-x-8 sm:translate-x-0"
                value={"previous"}
            >
                <Image src={angleLeft} alt="left angle bracket" />
            </button>
            <button
                onClick={next}
                className="angle-btn bottom-[20px] sm:top-[56%] right-1/2 sm:right-2 translate-x-8 sm:translate-x-0"
                value={"next"}
            >
                <Image src={angleRight} alt="right angle bracket" />
            </button>
        </section>
    );
};

export default Team;
