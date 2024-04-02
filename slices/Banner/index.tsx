import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
    JSXMapSerializer,
    PrismicRichText,
    SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

const heading: JSXMapSerializer = {
    heading2: ({ children }) => (
        <h2 className="text-[30px] sm:text-[38px] md:text-[42px] lg:text-[50px] font-[400] inline">
            {children}{" "}
        </h2>
    ),
};

const Banner = ({ slice }: BannerProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative font-glory overflow-hidden h-screen"
        >
            <PrismicNextImage
                className="h-screen w-full hidden sm:block"
                field={slice.primary.banner}
            />
            <PrismicNextImage
                className="h-screen w-full block sm:hidden"
                field={slice.primary.small_banner}
            />
            <div className="absolute w-full h-full top-0 left-0 right-0 z-1 text-white flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 lg:px-40 gap-7 md:gap-20 2xl:gap-40">
                <PrismicNextImage
                    className="w-[182px] h-[250px] lg:w-[250px] lg:h-[350px]"
                    field={slice.primary.aineura_logo}
                />

                <div className="banner-content xl:w-1/2 2xl:px-10 text-center md:text-start leading-[50px] lg:leading-[62px]">
                    <PrismicRichText
                        field={slice.primary.content}
                        components={heading}
                    />
                </div>
            </div>
            <PrismicNextLink
                className="absolute bottom-20 sm:bottom-16 right-6 md:right-10"
                field={slice.primary.bot_link}
            >
                <PrismicNextImage field={slice.primary.bot_logo} />
            </PrismicNextLink>
        </section>
    );
};

export default Banner;
