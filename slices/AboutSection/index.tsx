import FnKnowTbn from "@/components/FnKnowBtn";
import { Content } from "@prismicio/client";
import {
    JSXMapSerializer,
    PrismicRichText,
    SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

const components: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="text-lg leading-7 sm:text-[28px] sm:leading-[40px] my-6">
            {children}
        </p>
    ),
};

const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
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
