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
import half_circle from "@/public/icons/half-circle.png";
import bottom_quote from "@/public/icons/quote.png";
import top_quote from "@/public/icons/white-qoute.png";
import { useState } from "react";
/**
 * Props for `UserReview`.
 */
export type UserReviewProps = SliceComponentProps<Content.UserReviewSlice>;

const content: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="mb-5 text-sm xl:text-lg leading-6 pr-4 font-[400]">
            {children}
        </p>
    ),
};
const info: JSXMapSerializer = {
    heading5: ({ children }) => (
        <h5 className="text-lg leading-8 font-semibold">{children}</h5>
    ),
    paragraph: ({ children }: { children: any }) => (
        <p className="text-xs leading-[14px]">{children}</p>
    ),
};

const UserReview = ({ slice }: UserReviewProps): JSX.Element => {
    const [margin, setMargin] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const numberOfItems = slice.items.length;

    const previous = () => {
        const width = window.innerWidth;
        if (width < 640) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 80);
                setCurrentIndex((prev) => prev - 1);
            }
        } else if (width < 1024) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 84);
                setCurrentIndex((prev) => prev - 1);
            }
        } else if (width >= 1024) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 84);
                setCurrentIndex((prev) => prev - 1);
            }
        }
    };

    const next = () => {
        const width = window.innerWidth;
        if (width < 640) {
            if (currentIndex < numberOfItems) {
                setMargin((prev) => prev - 80);
                setCurrentIndex((prev) => prev + 1);
            }
        } else if (width < 1024) {
            if (currentIndex < numberOfItems / 2) {
                setMargin((prev) => prev - 84);
                setCurrentIndex((prev) => prev + 1);
            }
        } else if (width >= 1024) {
            if (currentIndex < numberOfItems / 3) {
                setMargin((prev) => prev - 84);
                setCurrentIndex((prev) => prev + 1);
            }
        }
    };

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="mb-10 overflow-hidden font-glory"
        >
            <div className="bg-[#f4f3f8] px-[5vw] md:px-0 rounded-3xl pt-10 pb-16 w-[90vw] mx-auto relative">
                <div className="heading text-center">
                    <PrismicRichText field={slice.primary.heading} />
                </div>
                <div className="overflow-hidden md:w-[80vw] md:mx-auto">
                    <div
                        style={{
                            marginLeft: margin + "vw",
                            transition: "0.3s",
                        }}
                        className="flex gap-0 sm:gap-[4vw] mt-5 sticky z-10 w-fit"
                    >
                        {slice.items.map((item, i) => (
                            <div
                                className="bg-white rounded-[22px] w-[80vw] sm:w-[38vw] lg:w-[24vw] p-10 pr-16 md:pr-10"
                                key={i}
                            >
                                <div className="relative">
                                    <div className="sticky z-10">
                                        <PrismicRichText
                                            field={item.comments}
                                            components={content}
                                        />
                                    </div>

                                    <Image
                                        className="absolute -top-3 -left-4 w-7 h-7 z-0"
                                        src={top_quote}
                                        alt="top quote"
                                    />
                                    <Image
                                        className="absolute -bottom-4 -right-4 w-7 h-7"
                                        src={bottom_quote}
                                        alt="bottom quote"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <PrismicNextImage
                                        className="w-16 h-16 rounded-full"
                                        field={item.customer_image}
                                    />
                                    <div>
                                        <PrismicRichText
                                            field={item.customer_info}
                                            components={info}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Image
                    style={{ transform: "rotateZ(-10deg)" }}
                    src={half_circle}
                    className="hidden md:inline w-[160px] h-[160px] absolute top-16 left-0 z-0"
                    alt="half circle"
                />

                <button
                    onClick={previous}
                    className="angle-btn bottom-[20px] left-1/2 -translate-x-8 md:bg-white"
                    value={"previous"}
                >
                    <Image src={angleLeft} alt="left angle bracket" />
                </button>
                <button
                    onClick={next}
                    className="angle-btn bottom-[20px] right-1/2 translate-x-8 md:bg-white"
                    value={"next"}
                >
                    <Image src={angleRight} alt="right angle bracket" />
                </button>
            </div>
        </section>
    );
};

export default UserReview;
