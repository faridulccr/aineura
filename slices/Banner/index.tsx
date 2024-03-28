"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
    const content = {
        heading1: ({ children }: { children: any }) => (
            <h2 className="text-[38px] lg:text-[50px] font-[400] inline">
                {children}
            </h2>
        ),
        heading2: ({ children }: { children: any }) => (
            <h2 className="text-[38px] lg:text-[50px] font-[400] inline text-[#E88AEA] mx-1.5">
                {children}
            </h2>
        ),
    };

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative font-glory"
        >
            <PrismicNextImage
                className="h-screen w-full"
                field={slice.primary.banner}
            />
            <div className="absolute w-full h-full top-0 left-0 right-0 z-1 text-white flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-40 gap-7 lg:gap-20 2xl:gap-40">
                <PrismicNextImage
                    className="w-[182px h-[250px] lg:w-[250px] lg:h-[350px]"
                    field={slice.primary.aineura_logo}
                />

                <div className="xl:w-1/2 2xl:px-10 text-center lg:text-start leading-[50px] lg:leading-[62px]">
                    <PrismicRichText
                        field={slice.primary.content}
                        components={content}
                    />
                </div>
            </div>
            <PrismicNextLink
                className="absolute bottom-6 md:bottom-20 right-6 md:right-10"
                field={slice.primary.bot_link}
            >
                <PrismicNextImage field={slice.primary.bot_logo} />
            </PrismicNextLink>
        </section>
    );
};

export default Banner;
