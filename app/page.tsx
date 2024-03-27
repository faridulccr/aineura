import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

const Home = async () => {
    const client = createClient();
    const setting = await client.getSingle("settings");
    const { data } = setting;

    return (
        <main>
            <div>
                <PrismicNextImage
                    className="w-full h-screen "
                    field={data.homepage_banner}
                />
            </div>
        </main>
    );
};

export default Home;
