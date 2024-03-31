import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { createClient } from "@/prismicio";
import clsx from "clsx";
import type { Metadata } from "next";
import { Glory } from "next/font/google";
import "./globals.css";

const glory = Glory({
    subsets: ["latin"],
    variable: "--font-glory",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Aineura",
    description: "Aineura is one of the best to help you.",
};

type Props = {
    children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
    const client = createClient();
    const setting = await client.getSingle("settings");

    return (
        <html lang="en" className={clsx(glory.variable)}>
            <body>
                <Header data={setting.data} />
                {children}
                <Footer data={setting.data} />
            </body>
        </html>
    );
};

export default RootLayout;
