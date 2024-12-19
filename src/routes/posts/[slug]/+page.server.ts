import { error } from '@sveltejs/kit';
import { compile } from "mdsvex";
import type { PageServerLoad } from './$types';

interface Post {
    title: string;
    description: string;
    image: string;
    draft: boolean;
    optional?: string;
}

export const load: PageServerLoad = async ({ params }) => {
    try {
        const postFiles = import.meta.glob("/src/content/posts/**/*.md", { eager: true, query: "?raw", import: "default" });

        for (const path in postFiles) {
            const slug = path.split("/").at(-1)?.replace(".md", '');
            if (params.slug == slug) {
                const record = await compile(postFiles[path]);

                return {
                    post: {
                        ...record?.data?.fm,
                        slug
                    }
                };
            }
        }
        error(404, 'not found');
    } catch (err) {
        console.error(err);
        error(404, 'not found');
    }
};