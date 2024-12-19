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

export const load: PageServerLoad = async () => {
    try {
        const posts = [];
        const postFiles = import.meta.glob("/src/content/posts/**/*.md", { eager: true, query: "?raw", import: "default" });

        for (const path in postFiles) {
            const slug = path.split("/").at(-1)?.replace(".md", '');
            const record = await compile(postFiles[path]);

            posts.push({
                ...record?.data?.fm,
                slug
            });
        }

        const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        // console.log(sortedPosts);

        return {
            posts: sortedPosts
        };
    } catch (err) {
        console.error(err);
        error(404, 'not found');
    }
};