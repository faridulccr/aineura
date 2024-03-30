import fnknow from "@/public/images/fnknow.png";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";

const FnKnowTbn = ({ url, logo }: { url: string; logo?: any }) => {
    return (
        <Link href={url}>
            {typeof logo === "object" && (
                <PrismicNextImage
                    className="w-[115px] h-8 md:w-[136px] md:h-[36px] lg:w-[200px] lg:h-[50px]"
                    field={logo}
                />
            )}
            {typeof logo !== "object" && (
                <Image
                    className="w-[115px] h-8 md:w-[136px] md:h-[36px] lg:w-[200px] lg:h-[50px]"
                    src={fnknow}
                    alt="logo"
                />
            )}
        </Link>
    );
};

export default FnKnowTbn;
