"use client";
import { SliceZone } from "@prismicio/react";

import usePrismicPage from "@/lib/prismic/usePrismicPage";
import { components } from "@/slices";

export default function Home() {
    const [loading, page] = usePrismicPage("homepage");

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
