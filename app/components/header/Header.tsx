import { createClient } from "@/prismicio";
import ToggleMenu from "./ToggleMenu";

const Header = async () => {
    const client = createClient();
    const setting = await client.getSingle("settings");
    const { data } = setting;

    return (
        // <header className="fixed w-full max-w-[1440px] top-0 left-0 right-0 mx-auto z-50">
        <header className="absolute top-0 left-0 z-10 w-full max-w-[1440px]">
            <ToggleMenu links={data.nav_menu} logo={data.fnknow_logo} />
        </header>
    );
};

export default Header;
