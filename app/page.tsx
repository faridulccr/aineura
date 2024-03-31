import { createClient } from "@/prismicio";
import { Metadata } from "next";

import Homepage from "@/components/homepage/Homepage";

export default async function Page() {
    const client = createClient();
    const page = await client.getSingle("homepage");

    return (
        <main>
            <Homepage slices={page.data.slices} />
        </main>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("homepage");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}
