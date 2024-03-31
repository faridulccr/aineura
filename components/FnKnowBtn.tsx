import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";

import fnknow from "@/public/images/fnknow.png";

type Props = { url: string; logo?: ImageField<never> };

const FnKnowTbn = ({ url, logo }: Props) => {
    const style =
        "w-[115px] h-8 md:w-[136px] md:h-[36px] lg:w-[200px] lg:h-[50px]";

    return (
        <Link href={url}>
            {logo ? (
                <PrismicNextImage className={style} field={logo} />
            ) : (
                <Image className={style} src={fnknow} alt="logo" />
            )}
        </Link>
    );
};

export default FnKnowTbn;
