import { Content } from "@prismicio/client";
import {
    JSXMapSerializer,
    PrismicRichText,
    SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `FormSection`.
 */
export type FormSectionProps = SliceComponentProps<Content.FormSectionSlice>;

const components: JSXMapSerializer = {
    heading2: ({ children }) => <h2 style={{ margin: "0" }}>{children} </h2>,
    paragraph: ({ children }) => (
        <p className="text-[#0E0E0E] text-base inline">{children} </p>
    ),
};

const FormSection = ({ slice }: FormSectionProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="py-16"
        >
            <div className="heading mb-6 xs:w-[350px] sm:w-[400px] mx-auto text-center">
                <PrismicRichText
                    field={slice.primary.heading}
                    components={components}
                />
            </div>
            <form className="w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] mx-auto">
                <div className=" flex justify-center items-center mx-auto gap-2 mb-2">
                    <input
                        className="border border-[#D3D3D3DD] px-4 py-3 md:px-6 md:py-5 rounded-lg w-[48%] focus:outline-none"
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        className="border border-[#D3D3D3DD] px-4 py-3 md:px-6 md:py-5 rounded-lg w-[48%] focus:outline-none"
                        type="text"
                        name="number"
                        placeholder="Phone no"
                    />
                </div>
                <div className="mx-auto w-[97%] mb-2">
                    <input
                        className="border border-[#D3D3D3DD] w-[100%] px-4 py-3 md:px-6 md:py-5 rounded-lg focus:outline-none"
                        type="email"
                        name="email"
                        placeholder="Email address"
                    />
                </div>
                <div className="mx-auto w-[97%] mb-2">
                    <textarea
                        className="border border-[#D3D3D3DD] w-[100%] h-[120px] rounded-lg px-4 py-3 md:px-6 md:py-5 focus:outline-none"
                        name="message"
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Message...(200 words)"
                    ></textarea>
                </div>
                <div className="flex justify-center items-center mb-4">
                    <button
                        className="w-[145px] md:w-[200px] px-2 py-2 md:px-4 md:py-4 rounded-lg bg-[#3D50C1] text-[white]"
                        type="submit"
                    >
                        {slice.primary.button_name}
                    </button>
                </div>
            </form>
            <div className="form-bottom-text flex gap-2 justify-center items-center">
                <PrismicRichText field={slice.primary.form_bottom_text} />
            </div>
        </section>
    );
};

export default FormSection;
function linkResolver(
    data:
        | import("@prismicio/types").FilledContentRelationshipField<
              string,
              string,
              unknown
          >
        | import("@prismicio/types").FilledLinkToWebField
        | import("@prismicio/types").FilledLinkToMediaField
) {
    throw new Error("Function not implemented.");
}
