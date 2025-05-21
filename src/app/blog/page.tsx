import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import Link from "next/link";

interface IPost {
    title: string,
    description: string,
    link: string
}

const Card = ({post}: {post: IPost}) => {
    return (
        <div className="flex flex-col items-start p-8 gap-4 flex-1 self-stretch col-span-1 row-span-1 bg-white rounded-xl justify-between">
            <div className="w-full gap-1 flex-row">
                <p className="font-bold italic">{post.title}</p>
                <p className="font-light">{post.description}</p>
            </div>
            <div className="flex flex-row justify-between w-full">
                <Link href="#" className="rounded-md px-4 py-2 bg-[#003A5E] text-white">Share this post</Link>
                <Link href={post.link} className="rounded-md px-4 py-2 bg-[#FFD600]">Read Now</Link>
            </div>
        </div>
    )
}

export default function Blog() {
    const posts: IPost[] = [
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
        {
            description: "Train at home without anything! And it works!",
            link: "/blog/test",
            title: "How to train at home"
        },
    ]

    return (
        <main className="min-h-screen">
            <Header/>

            <section className="flex flex-col h-full bg-[linear-gradient(180deg,_#03080B_0%,_#012E4A_100%)] bg-cover overflow-hidden p-16 gap-8 justify-center">
                <div className="flex justify-between w-full px-8">
                    <h2 className="text-4xl font-bold uppercase text-white">BLOG</h2>
                    <Link href="/blog/create" className="bg-[#FFD600] px-4 py-2 font-bold rounded-md">Create a Post</Link>
                </div>
                <div className="grid h-[731px] gap-8 self-stretch grid-rows-3 grid-cols-3 ">
                    {posts.map((post, index) => (<Card post={post} key={index} />))}
                </div>
            </section>
            <Footer />
        </main>
    )
}
