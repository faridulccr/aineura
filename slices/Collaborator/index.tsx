"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";


export type CollaboratorProps = SliceComponentProps<Content.CollaboratorSlice>;

const Collaborator = ({ slice }: CollaboratorProps): JSX.Element => {

    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="relative mb-10 overflow-hidden"
        >
            <div className="heading text-center mb-8">
                <PrismicRichText field={slice.primary.heading} />
            </div>

            <div className="sm:mb-6 mx-auto w-fit">
                <div
                    className="flex w-fit gap-20 flex-nowrap moving-div"
                >
                    {slice.items.map(({ image }, i) => (
                        <div
                            key={i}
                            className="w-[115px]"
                        >
                            <PrismicNextImage
                                className="max-w-full max-h-[70px] mx-auto"
                                field={image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collaborator;
