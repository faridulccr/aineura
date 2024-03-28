import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
    const title = {
        heading1: ({ children }: { children: any }) => (
            <h2 className="text-[40px] text-[#000] inline-block font-[400]">
                {children}
            </h2>
        ),
        heading2: ({ children }: { children: any }) => (
            <h2 className="text-[40px] text-[#5200Bb] inline-block mx-2 font-[400]">
                {children}
            </h2>
        ),
    };

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-12 px-5 sm:px-8 lg:px-12 bg-white text-center"
        >
            <PrismicRichText field={slice.primary.title} components={title} />
            <PrismicRichText
                field={slice.primary.content}
                components={{
                    paragraph: ({ children }) => (
                        <p className="text-[28px] leading-[40px] my-6">
                            {children}
                        </p>
                    ),
                }}
            />
            <PrismicNextLink field={slice.primary.btn_link}>
                <PrismicNextImage
                    className="w-[220px] h-[55px] rounded-[8px] mx-auto"
                    field={slice.primary.btn}
                />
            </PrismicNextLink>
        </section>
    );
};

export default AboutSection;
