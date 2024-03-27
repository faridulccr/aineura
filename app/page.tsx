import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

const Home = async () => {
    const client = createClient();
    const homepage = await client.getSingle("settings");
    const { data } = homepage;

    return (
        <main>
            <div>
                <PrismicNextImage
                    className="w-full h-screen"
                    field={data.banner}
                />
            </div>
        </main>
    );
};

export default Home;
