import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

const FnKnowTbn = ({ url, logo }: { url: string; logo: any }) => {
    return (
        <Link
            href={url}
            className="w-[136px] lg:w-[200px] h-[36px] lg:h-[50px] block"
        >
            <PrismicNextImage field={logo} />
        </Link>
    );
};

export default FnKnowTbn;
