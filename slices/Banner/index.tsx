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
        <h2 className="text-[25px] xs:text-[30px] md:text-[38px] lg:text-[50px] font-[400] inline">
            {children}{" "}
        </h2>
    ),
};

const Banner = ({ slice }: BannerProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative font-glory overflow-hidden h-[95vh] md:h-[60vh] xl:h-screen"
        >
            <PrismicNextImage
                className="h-full w-full hidden md:block"
                field={slice.primary.banner}
            />
            <PrismicNextImage
                className="h-full w-full block md:hidden"
                field={slice.primary.small_banner}
            />
            <div className="absolute w-full h-full top-0 left-0 right-0 z-1 text-white flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 lg:px-40 gap-7 md:gap-24 lg:gap-44">
                <div className="flex flex-col items-center">
                    <PrismicNextImage
                        className="min-w-[154px] min-h-[212px] xs:min-w-[180px] xs:min-h-[248px] md:min-w-[283px] md:h-[388px] -mt-16"
                        field={slice.primary.aineura_logo}
                    />
                    <PrismicNextImage
                        className="-mt-16 max-w-[154px] xs:max-w-[180px] md:max-w-[283px]"
                        field={slice.primary.ainera_text_logo}
                    />
                </div>

                <div className="banner-content 2xl:px-10 text-center md:text-start leading-[30px] xs:leading-[50px] lg:leading-[62px]">
                    <PrismicRichText
                        field={slice.primary.content}
                        components={heading}
                    />
                </div>
            </div>
            <PrismicNextLink
                className="absolute bottom-5 xs:bottom-18 sm:bottom-16 right-6 md:right-10"
                field={slice.primary.bot_link}
            >
                <PrismicNextImage field={slice.primary.bot_logo} />
            </PrismicNextLink>
        </section>
    );
};

export default Banner;
