import FnKnowTbn from "@/app/components/FnKnowTbn";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
    const components = {
        paragraph: ({ children }: { children: any }) => (
            <p className="text-lg leading-7 sm:text-[28px] sm:leading-[40px] my-6">
                {children}
            </p>
        ),
    };

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-12 px-5 sm:px-8 lg:px-12 bg-white text-center"
        >
            <div className="heading">
                <PrismicRichText field={slice.primary.title} />
            </div>

            <PrismicRichText
                field={slice.primary.content}
                components={components}
            />
            {/* <PrismicNextLink field={slice.primary.btn_link}>
                <PrismicNextImage
                    className="w-[220px] h-[55px] rounded-[8px] mx-auto"
                    field={slice.primary.btn}
                />
            </PrismicNextLink> */}
            <div className="w-fit mx-auto">
                <FnKnowTbn url="/" />
            </div>
        </section>
    );
};

export default AboutSection;
