import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import angleLeft from "@/public/icons/angle-left-solid.svg";
import angleRight from "@/public/icons/angle-right-solid.svg";
import Image from "next/image";
import { useState } from "react";

/**
 * Props for `Collaborator`.
 */
export type CollaboratorProps = SliceComponentProps<Content.CollaboratorSlice>;

/**
 * Component for "Collaborator" Slices.
 */
const Collaborator = ({ slice }: CollaboratorProps): JSX.Element => {
    const [margin, setMargin] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const numberOfItems = slice.items.length;

    const previous = () => {
        const width = window.innerWidth;
        if (width < 640) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 100);
                setCurrentIndex((prev) => prev - 1);
            }
        } else if (width < 768) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 93);
                setCurrentIndex((prev) => prev - 1);
            }
        } else if (width < 1024) {
            if (currentIndex > 1) {
                setMargin((prev) => prev + 92);
                setCurrentIndex((prev) => prev - 1);
            }
        }
    };

    const next = () => {
        const width = window.innerWidth;
        if (width < 640) {
            if (currentIndex < numberOfItems / 2) {
                setMargin((prev) => prev - 100);
                setCurrentIndex((prev) => prev + 1);
            }
        } else if (width < 768) {
            if (currentIndex < numberOfItems / 3) {
                setMargin((prev) => prev - 93);
                setCurrentIndex((prev) => prev + 1);
            }
        } else if (width < 1024) {
            if (currentIndex < numberOfItems / 4) {
                setMargin((prev) => prev - 92);
                setCurrentIndex((prev) => prev + 1);
            }
        }
    };

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative mb-10 sm:mb-0"
        >
            <div className="heading text-center mb-8">
                <PrismicRichText field={slice.primary.heading} />
            </div>

            <div className="mb-16 sm:mb-12 w-[90vw] mx-auto overflow-hidden">
                <div
                    style={{ marginLeft: margin + "vw", transition: "0.3s" }}
                    className="flex w-fit lg:w-full lg:grid md:grid-cols-6 gap-[10vw] sm:gap-[3vw] md:gap-[2vw] justify-between"
                >
                    {slice.items.map(({ image }, i) => (
                        <div
                            key={i}
                            className="w-[40vw] sm:w-[28vw] md:w-[21vw] lg:w-full"
                        >
                            <PrismicNextImage
                                className="max-w-full h-[50px] mx-auto"
                                field={image}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="angle-btn -bottom-10 lg:hidden left-1/2 -translate-x-8"
                value={"previous"}
                onClick={previous}
            >
                <Image src={angleLeft} alt="left angle bracket" />
            </button>
            <button
                className="angle-btn -bottom-10 lg:hidden right-1/2 translate-x-8"
                value={"next"}
                onClick={next}
            >
                <Image src={angleRight} alt="right angle bracket" />
            </button>
        </section>
    );
};

export default Collaborator;
