export const CACHE_KEYS = {
    POSTS: {
        LIST: "posts:list",
        LISTWITHQUERY: (version: number, query: any) => {
            if (!Object.values(query).filter(value => value)) {
                return `posts:list:v${version}`;
            }

            return `posts:list:v${version}` + new URLSearchParams(query).toString()
        },
        DETAIL: (id: number) => `posts:${id}`
    }
}