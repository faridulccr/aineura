import { PrismicNextLink } from "@prismicio/next";

const FooterLink = ({ title, links }: { title: string; links: any }) => {
    return (
        <ul>
            <h6 className="text-[#98A2B3] text-xs sm:text-lg leading-5">
                {title}
            </h6>
            {links.map(
                ({ link, label }: { link: any; label: string }, i: number) => (
                    <li
                        key={i}
                        className="text-[#667085] text-[11px] sm:text-base leading-6 mt-2 md:mt-4"
                    >
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                    </li>
                )
            )}
        </ul>
    );
};

export default FooterLink;
