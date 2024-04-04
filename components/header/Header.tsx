"use client";

import { SettingsDocumentData, Simplify } from "@/prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import { useState } from "react";

import cross_icon from "@/public/icons/cross.png";
import menu_icon from "@/public/icons/menu.png";
import FnKnowTbn from "../FnKnowBtn";

type Props = { data: Simplify<SettingsDocumentData> };

const Header = ({ data }: Props) => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        // <header className="fixed w-full max-w-[1440px] top-0 left-0 right-0 mx-auto z-50">
            <header className="fixed bg-black z-50 w-full max-w-[2040px] mx-auto">
            <nav
                className={`font-glory flex ${isToggle ? "flex-col h-screen backdrop-blur-lg" : "flex-row justify-between"} md:items-center text-white px-5 sm:px-12 md:px-20 py-3 gap-5`}
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
                        className={`${isToggle ? "flex" : "hidden"} md:flex flex-col md:flex-row md:items-center gap-6 lg:gap-14`}
                    >
                        {data.nav_menu.map(({ link, link_text }, i) => (
                            <li onClick={() => setIsToggle(false)} key={i}>
                                <PrismicNextLink
                                    className="text-xl lg:text-2xl leading-6 font-[400]"
                                    field={link}
                                >
                                    {link_text}
                                </PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <FnKnowTbn />
            </nav>
        </header>
    );
};

export default Header;
