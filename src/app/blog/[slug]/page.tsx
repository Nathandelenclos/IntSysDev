"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getArticleBySlug } from "@/utils/articles";
import {BackButton} from "@/components/common/BackButton";

export default function Post() {
    const { slug } = useParams();
    const article = getArticleBySlug(slug as string);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <>
            <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 gap-4">
                    <div className="flex flex-col gap-4">
                        <BackButton />
                        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">{article.title}</h2>
                    </div>
                    <Link href="#" className="bg-[#FFD600] rounded-md px-4 py-2 font-bold text-sm sm:text-base">Like</Link>
                </div>

                <div className="flex flex-col bg-white p-6 sm:p-8 rounded-xl gap-4">
                    <div className="text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex gap-2 items-center">
                            <Image src={"/icons/user.svg"} alt={"user"} width={16} height={16} />
                            <p className="font-bold">{article.author}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={"/icons/calandar.svg"} alt={"calandar"} width={16} height={16} />
                            <p className="font-bold">{new Date(article.date).toLocaleDateString('fr-FR')}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 gap-4">
                    <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">Comments</h2>
                    <Link href="#" className="bg-[#FFD600] rounded-md px-4 py-2 font-bold text-sm sm:text-base">Leave a comment</Link>
                </div>

                {article.comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="flex flex-col sm:flex-row gap-6 px-6 py-6 bg-white rounded-xl justify-between items-start sm:items-center"
                    >
                        <div className="flex flex-col gap-2 text-sm sm:text-base">
                            <p>{comment.content}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex gap-2 items-center">
                                    <Image src={"/icons/user.svg"} alt={"user"} width={16} height={16} />
                                    <p className="font-bold">{comment.author}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={"/icons/calandar.svg"} alt={"calandar"} width={16} height={16} />
                                    <p className="font-bold">{new Date(comment.date).toLocaleDateString('fr-FR')}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link href="#" className="bg-[#FFD600] rounded-md px-4 py-2 font-bold text-sm sm:text-base">Like</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
} 