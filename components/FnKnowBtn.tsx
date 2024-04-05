import FnKnow_image from "@/public/icons/FnKnow Logo.png";
import Image from "next/image";
import Link from "next/link";

const FnKnowTbn = () => {
    return (
        <Link
            className="bg-[#3D50C1] text-white text-lg px-4 py-1 w-fit sm:text-xl sm:px-5 sm:py-2 rounded-lg font-semibold  mx-w-[50px] flex items-center justify-center gap-0"
            href="/"
        >
            {/* <PrismicNextImage field={data.fnknow_btn_image} /> */}
            <Image
                className="h-[18px] w-[23px]"
                src={FnKnow_image}
                alt="FnKnow"
            />
            FnKnow Bot
        </Link>
    );
};

export default FnKnowTbn;
