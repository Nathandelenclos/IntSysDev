import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import Link from "next/link";

interface IPost {
    title: string;
    description: string;
    link: string;
}

const Card = ({ post }: { post: IPost }) => {
    return (
        <div className="flex flex-col items-start p-6 gap-4 flex-1 self-stretch bg-white rounded-xl justify-between shadow">
            <div className="w-full gap-1 flex flex-col">
                <p className="font-bold italic text-lg">{post.title}</p>
                <p className="font-light text-sm">{post.description}</p>
            </div>
            <div className="flex flex-row justify-between w-full flex-wrap gap-2 mt-4">
                <Link href="#" className="rounded-md px-4 py-2 bg-[#003A5E] text-white text-sm">
                    Share this post
                </Link>
                <Link href={post.link} className="rounded-md px-4 py-2 bg-[#FFD600] text-sm">
                    Read Now
                </Link>
            </div>
        </div>
    );
};

export default function Blog() {
    const posts: IPost[] = Array(11).fill({
        description: "Train at home without anything! And it works!",
        link: "/blog/test",
        title: "How to train at home",
    });

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">BLOG</h2>
                <Link
                    href="/blog/create"
                    className="bg-[#FFD600] px-4 py-2 font-bold rounded-md text-sm sm:text-base"
                >
                    Create a Post
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <Card post={post} key={index} />
                ))}
            </div>
        </>
    );
}
