import {
    SettingsDocumentDataCompanyLinkItem,
    Simplify,
} from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

type Props = {
    title: string;
    links: GroupField<Simplify<SettingsDocumentDataCompanyLinkItem>>;
};

const FooterLink = ({ title, links }: Props) => {
    return (
        <ul>
            <h6 className="text-[#98A2B3] text-xs sm:text-lg leading-5">
                {title}
            </h6>
            {links.map(({ link, label }, i) => (
                <li
                    key={i}
                    className="text-[#667085] text-[11px] sm:text-base leading-6 mt-2 md:mt-4"
                >
                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
            ))}
        </ul>
    );
};

export default FooterLink;
