import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import angleLeft from "@/public/icons/angle-left-solid.svg";
import angleRight from "@/public/icons/angle-right-solid.svg";
import Image from "next/image";

/**
 * Props for `Collaborator`.
 */
export type CollaboratorProps = SliceComponentProps<Content.CollaboratorSlice>;

/**
 * Component for "Collaborator" Slices.
 */
const Collaborator = ({ slice }: CollaboratorProps): JSX.Element => {
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
                <div className="flex w-fit lg:w-full sm:gap-[3vw] lg:grid lg:grid-cols-6 gap-[10vw] justify-between">
                    {slice.items.map(({ image }, i) => (
                        <div key={i} className="w-[40vw] sm:w-[28vw] lg:w-full">
                            <PrismicNextImage
                                className="max-w-[100%] h-[50px] mx-auto"
                                field={image}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="angle-btn -bottom-10 sm:hidden left-1/2 -translate-x-8"
                value={"previous"}
            >
                <Image src={angleLeft} alt="left angle bracket" />
            </button>
            <button
                className="angle-btn -bottom-10 sm:hidden right-1/2 translate-x-8"
                value={"next"}
            >
                <Image src={angleRight} alt="right angle bracket" />
            </button>
        </section>
    );
};

export default Collaborator;
