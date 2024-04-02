import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
    JSXMapSerializer,
    PrismicRichText,
    SliceComponentProps,
} from "@prismicio/react";
import Image from "next/image";

import angleLeft from "@/public/icons/angle-left-solid.svg";
import angleRight from "@/public/icons/angle-right-solid.svg";
import half_circle from "@/public/icons/half-circle.png";
import bottom_quote from "@/public/icons/quote.png";
import top_quote from "@/public/icons/white-qoute.png";
/**
 * Props for `UserReview`.
 */
export type UserReviewProps = SliceComponentProps<Content.UserReviewSlice>;

const content: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="mb-5 text-sm lg:text-lg leading-6 pr-4 font-[400]">
            {children}
        </p>
    ),
};
const info: JSXMapSerializer = {
    heading5: ({ children }) => (
        <h5 className="text-lg leading-8 font-semibold">{children}</h5>
    ),
    paragraph: ({ children }: { children: any }) => (
        <p className="text-xs leading-[14px]">{children}</p>
    ),
};

const UserReview = ({ slice }: UserReviewProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="mb-10"
        >
            <div className="bg-[#f4f3f8] px-[5vw] md:px-0 rounded-3xl pt-10 pb-16 md:w-[90vw] md:mx-auto relative">
                <div className="heading text-center">
                    <PrismicRichText field={slice.primary.heading} />
                </div>
                <div className="overflow-hidden md:w-[80vw] md:mx-auto">
                    <div className="flex md:gap-[4vw] mt-5 sticky z-10 w-fit">
                        {slice.items.map(
                            (
                                { comments, customer_image, customer_info },
                                i
                            ) => (
                                <div
                                    className="bg-white rounded-[22px] w-[90vw] md:w-[38vw] p-10 pr-16 md:pr-10"
                                    key={i}
                                >
                                    <div className="relative">
                                        <div className="sticky z-10">
                                            <PrismicRichText
                                                field={comments}
                                                components={content}
                                            />
                                        </div>

                                        <Image
                                            className="absolute -top-3 -left-4 w-7 h-7 z-0"
                                            src={top_quote}
                                            alt="top quote"
                                        />
                                        <Image
                                            className="absolute -bottom-4 -right-4 w-7 h-7"
                                            src={bottom_quote}
                                            alt="bottom quote"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <PrismicNextImage
                                            className="w-16 h-16 rounded-full"
                                            field={customer_image}
                                        />
                                        <div>
                                            <PrismicRichText
                                                field={customer_info}
                                                components={info}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                <Image
                    style={{ transform: "rotateZ(-10deg)" }}
                    src={half_circle}
                    className="hidden md:inline w-[160px] h-[160px] absolute top-16 left-0 z-0"
                    alt="half circle"
                />

                <button
                    className="angle-btn bottom-[20px] left-1/2 -translate-x-8 md:bg-white"
                    value={"previous"}
                >
                    <Image src={angleLeft} alt="left angle bracket" />
                </button>
                <button
                    className="angle-btn bottom-[20px] right-1/2 translate-x-8 md:bg-white"
                    value={"next"}
                >
                    <Image src={angleRight} alt="right angle bracket" />
                </button>
            </div>
        </section>
    );
};

export default UserReview;
