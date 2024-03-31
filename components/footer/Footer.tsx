import { SettingsDocumentData, Simplify } from "@/prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import FooterLink from "./FooterLink";

type Props = { data: Simplify<SettingsDocumentData> };

const Footer = ({ data }: Props) => {
    return (
        <footer className="font-glory bg-[#0E0E0E] text-white py-5 px-5 md:px-16 font-[400]">
            <section className="grid grid-cols-2 xs:flex items-start justify-between gap-5 flex-wrap">
                <div className=" col-span-2 xs:w-full md:w-auto">
                    <PrismicNextLink field={data.footer_logo[0]?.link}>
                        <PrismicNextImage
                            className="w-[215px] sm:w-[240px] lg:w-[300px] h-10 md:h-[56px]"
                            field={data.footer_logo[0]?.logo}
                        />
                    </PrismicNextLink>
                </div>

                <FooterLink title="Company" links={data.company_link} />
                <FooterLink title="Product" links={data.product_link} />
                <FooterLink title="Resources" links={data.resources_link} />
                <FooterLink title="Legal" links={data.legal_link} />
            </section>

            <hr className=" border-0 border-t border-[#667085] mx-auto mt-4" />
            <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between mt-4">
                <p className="text-[#98A2B3] text-lg md:text-sm lg:text-lg text-center">
                    {data.copyright}
                </p>
                <div>
                    <ul className="flex items-center justify-start gap-3 mb-5 md:mb-0">
                        {data.footer_media_link.map(({ icon, link }, i) => (
                            <li key={i}>
                                <PrismicNextLink field={link}>
                                    <PrismicNextImage
                                        className="w-6 h-6 rounded-full"
                                        field={icon}
                                    />
                                </PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
