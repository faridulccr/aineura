import fnknow from "@/public/images/fnknow.png";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";

const FnKnowTbn = ({ url, logo }: { url: string; logo?: any }) => {
    return (
        <Link
            href={url}
            className="w-[115px] md:w-[136px] lg:w-[200px] h-[36px] lg:h-[50px] block"
        >
            {typeof logo === "object" && <PrismicNextImage field={logo} />}
            {typeof logo !== "object" && <Image src={fnknow} alt="logo" />}
        </Link>
    );
};

export default FnKnowTbn;
