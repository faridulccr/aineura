import FnKnowTbn from "@/components/FnKnowBtn";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `JourneySection`.
 */
export type JourneySectionProps =
    SliceComponentProps<Content.JourneySectionSlice>;

/**
 * Component for "JourneySection" Slices.
 */
const JourneySection = ({ slice }: JourneySectionProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative"
        >
            <PrismicNextImage
                className="w-full h-auto min-h-[200px]"
                field={slice.primary.background}
            />
            <div className="w-full absolute top-1/2 transform -translate-y-1/2 text-white text-center">
                <h2 className="text-[28px] leading-[38px] sm:text-[42px] sm:leading-[53px] lg:text-[60px] lg:leading-[72px] mb-5">
                    {slice.primary.title}
                </h2>
                <p className="text-[16px] leading-[19px] sm:text-[22px] sm:leading-[38px] lg:text-[32px] lg:leading-[54px]">
                    {slice.primary.subtitle}
                </p>
                <div className="w-fit mx-auto mt-5">
                    <FnKnowTbn url="/" />
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
