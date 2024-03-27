"use client";

import cross_icon from "@/public/icons/cross.png";
import menu_icon from "@/public/icons/menu.png";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import { useState } from "react";
import FnKnowTbn from "../FnKnowTbn";

const ToggleMenu = ({ links, logo }: { links: any; logo: any }) => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <nav
            className={`font-glory flex ${isToggle ? "flex-col h-screen backdrop-blur-lg" : "flex-row justify-between"} text-white px-5 sm:px-12 md:px-20 py-3 gap-5`}
        >
            <div>
                <button
                    onClick={() => setIsToggle(!isToggle)}
                    className={`${isToggle ? "mt-2 mb-12" : ""} flex md:hidden w-[34px] h-[34px] bg-white rounded-md items-center justify-center`}
                >
                    {!isToggle && <Image src={menu_icon} alt="menu" />}
                    {isToggle && <Image src={cross_icon} alt="cross" />}
                </button>
                <ul
                    className={`${isToggle ? "flex" : "hidden"} md:flex flex-col md:flex-row md:items-center gap-6`}
                >
                    {links.map(
                        (
                            {
                                link,
                                link_text,
                            }: { link: any; link_text: string },
                            i: number
                        ) => (
                            <li onClick={() => setIsToggle(false)} key={i}>
                                <PrismicNextLink
                                    className="text-xl leading-6 font-[400]"
                                    field={link}
                                >
                                    {link_text}
                                </PrismicNextLink>
                            </li>
                        )
                    )}
                </ul>
            </div>

            <FnKnowTbn url="/" logo={logo} />
        </nav>
    );
};

export default ToggleMenu;
