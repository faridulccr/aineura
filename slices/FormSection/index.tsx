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
        <p className="text-xs md:text-lg mb-5">{children}</p>
    ),
};

const FormSection = ({ slice }: FormSectionProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="heading">
                <PrismicRichText
                    field={slice.primary.heading}
                    components={components}
                />
                <form>
                    <div>
                        <input type="text" name="name" placeholder="Name" />
                        <input
                            type="text"
                            name="number"
                            placeholder="Phone now"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id=""
                            cols={30}
                            rows={10}
                            placeholder="Message...(200 words)"
                        ></textarea>
                    </div>
                    <button type="submit">{slice.primary.button_name}</button>
                    <PrismicRichText field={slice.primary.form_bottom_text} />
                </form>
            </div>
        </section>
    );
};

export default FormSection;
