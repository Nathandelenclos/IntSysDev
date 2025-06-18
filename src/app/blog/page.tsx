"use client";

import Link from "next/link";
import {getAllArticles} from "@/utils/articles";
import {AnimatedButton, AnimatedCard, AnimatedElement, AnimatedPage} from "@/components/common/AnimatedPage";
import {useAuth} from "@/contexts/AuthContext";

interface IPost {
    slug: string;
    title: string;
    description: string;
    link: string;
}

const Card = ({ post, index }: { post: IPost; index: number }) => {
    return (
        <AnimatedCard delay={0.1 + index * 0.1}>
            <div className="flex flex-col items-start p-6 gap-4 flex-1 self-stretch bg-white rounded-xl justify-between shadow h-full">
                <div className="w-full gap-1 flex flex-col">
                    <p className="font-bold italic text-lg">{post.title}</p>
                    <p className="font-light text-sm">{post.description}</p>
                </div>
                <div className="flex flex-row justify-between w-full flex-wrap gap-2 mt-4">
                    <AnimatedButton className="rounded-md px-4 py-2 bg-[#003A5E] text-white text-sm">
                        <Link href="#">Share this post</Link>
                    </AnimatedButton>
                    <AnimatedButton className="rounded-md px-4 py-2 bg-[#FFD600] text-sm">
                        <Link href={`/blog/${post.slug}`}>Read Now</Link>
                    </AnimatedButton>
                </div>
            </div>
        </AnimatedCard>
    );
};

export default function Blog() {
    const articles = getAllArticles();
    const {user} = useAuth();
    const posts: IPost[] = articles.map(article => ({
        slug: article.slug,
        title: article.title,
        description: article.description,
        link: `/blog/${article.slug}`
    }));

    return (
        <AnimatedPage>
            <AnimatedElement delay={0.1}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">BLOG</h2>
                    { user && (
                        <AnimatedButton className="bg-[#FFD600] px-4 py-2 font-bold rounded-md text-sm sm:text-base">
                            <Link href="/blog/create">
                                Create a Post
                            </Link>
                        </AnimatedButton>
                    )}
                </div>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <Card post={post} key={post.slug} index={index} />
                    ))}
                </div>
            </AnimatedElement>
        </AnimatedPage>
    );
}
