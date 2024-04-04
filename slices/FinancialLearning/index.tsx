import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
    JSXMapSerializer,
    PrismicRichText,
    SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `FinancialLearning`.
 */
export type FinancialLearningProps =
    SliceComponentProps<Content.FinancialLearningSlice>;

const components: JSXMapSerializer = {
    heading2: ({ children }) => (
        <h2 style={{ margin: "0" }} className="leading-10 font-[600]">
            {children}{" "}
        </h2>
    ),
    paragraph: ({ children }) => (
        <p className="text-xs lg:text-lg mb-5">{children}</p>
    ),
};

const FinancialLearning = ({ slice }: FinancialLearningProps): JSX.Element => {
    return (
        <section
            id="product"
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="sm:px-5 lg:px-12 bg-white"
        >
            <div className="bg-[#fcf6ff] py-20 px-5 sm:px-11 rounded-3xl flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                <div className="relative mx-auto md:mx-0 w-fit">
                    <PrismicNextImage
                        className="lg:w-[580px] lg:h-[500px]"
                        field={slice.primary.bot_bg_image}
                    />
                    <PrismicNextImage
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[110px] md:w-[110px] md:h-[90px] lg:w-[160px] lg:h-[140px]"
                        field={slice.primary.bot_iimage}
                    />
                </div>
                <div className="md:w-[50%]">
                    <div className="heading lg:w-[85%] 2xl:[80%] mb-5">
                        <PrismicRichText
                            field={slice.primary.heading}
                            components={components}
                        />
                    </div>

                    <PrismicRichText
                        field={slice.primary.content}
                        components={components}
                    />

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
                                <span className="text-xs xs:text-lg md:text-xs lg:text-lg font-semibold">
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
