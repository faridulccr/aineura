import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FinancialLearning`.
 */
export type FinancialLearningProps =
    SliceComponentProps<Content.FinancialLearningSlice>;

/**
 * Component for "FinancialLearning" Slices.
 */
const FinancialLearning = ({ slice }: FinancialLearningProps): JSX.Element => {
    const heading = {
        heading1: ({ children }: { children: any }) => (
            <h2 className="text-[28px] md:text-[34px] leading-10 lg:text-[40px] text-[#000] inline font-[400]">
                {children}
            </h2>
        ),
        heading2: ({ children }: { children: any }) => (
            <h2 className="text-[28px] md:text-[34px] leading-10 lg:text-[40px] text-[#5200Bb] inline mx-2 font-[400]">
                {children}
            </h2>
        ),
    };

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="sm:px-5 lg:px-12 bg-white"
        >
            <div className="bg-[#fcf6ff] py-20 px-5 sm:px-11 rounded-3xl flex flex-col md:flex-row md:justify-between gap-5">
                <div className="relative mx-auto max-w-[480px] md:w-[40%] h-[300px] sm:h-[380px]">
                    <PrismicNextImage
                        className="w-full h-full"
                        field={slice.primary.bot_bg_image}
                    />
                    <PrismicNextImage
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[370px] h-[225px]"
                        field={slice.primary.bot_iimage}
                    />
                </div>
                <div className="md:w-[50%]">
                    <div className="lg:w-[92%] mb-5">
                        <PrismicRichText
                            field={slice.primary.heading}
                            components={heading}
                        />
                    </div>

                    <p className="text-xs md:text-lg mb-5">
                        {slice.primary.content1}
                    </p>
                    <p className="text-xs md:text-lg mb-5">
                        {slice.primary.content2}
                    </p>
                    <div className="grid grid-cols-2">
                        {slice.items.map(({ icon, label }) => (
                            <div
                                className="flex items-center gap-3 md:gap-5 py-2"
                                key={label}
                            >
                                <PrismicNextImage
                                    className="w-6 h-6 md:w-8 md:h-8"
                                    field={icon}
                                />
                                <span className="text-xs md:text-bs font-semibold">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialLearning;
