import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";

const usePrismicPage = (query: any) => {
    const [page, setPage]: [any, Function] = useState();
    const [loading, setLoading]: [boolean, Function] = useState(true);
    useEffect(() => {
        const getPage = async () => {
            setLoading(true);
            const client = createClient();
            const page = await client.getSingle(query);
            setPage(page);
            setLoading(false);
        };
        getPage();
    }, [query]);

    return [loading, page];
};

export default usePrismicPage;
