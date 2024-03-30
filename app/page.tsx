"use client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { useEffect, useState } from "react";

export default function Home() {
    const [page, setPage]: [any, Function] = useState();
    const [loading, setLoading]: [boolean, Function] = useState(true);
    useEffect(() => {
        const getPrismicPage = async () => {
            setLoading(true);
            const client = createClient();
            const page = await client.getSingle("homepage");
            setPage(page);
            setLoading(false);
        };
        getPrismicPage();
    }, []);

    return (
        <main>
            {loading && (
                <div className="h-screen flex justify-center items-center">
                    <h1>Loading...</h1>
                </div>
            )}
            {!loading && (
                <SliceZone slices={page.data.slices} components={components} />
            )}
        </main>
    );
}

// export async function generateMetadata(): Promise<Metadata> {
//     const client = createClient();
//     const page = await client.getSingle("homepage");

//     return {
//         title: page.data.meta_title,
//         description: page.data.meta_description,
//     };
// }
