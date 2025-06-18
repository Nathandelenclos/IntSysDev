"use client";

import Image from "next/image";
import {useParams} from "next/navigation";
import {useState} from "react";
import {getArticleBySlug} from "@/utils/articles";
import {BackButton} from "@/components/common/BackButton";
import CommentForm from "@/components/blog/CommentForm";
import {Comment} from "@/types/article";
import {useAuth} from "@/contexts/AuthContext";
import { AnimatedPage, AnimatedElement, AnimatedButton, AnimatedCard } from "@/components/common/AnimatedPage";

export default function Post() {
    const { slug } = useParams();
    const article = getArticleBySlug(slug as string);
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [comments, setComments] = useState<Comment[]>(article?.comments || []);
    const { user } = useAuth();

    if (!article) {
        return <div>Article not found</div>;
    }

    const handleCommentAdded = (newComment: Comment) => {
        setComments(prevComments => [newComment, ...prevComments]);
    };

    const handleLeaveComment = () => {
        if (!user) {
            alert("Please log in to leave a comment");
            return;
        }
        setShowCommentForm(true);
    };

    const handleCancelComment = () => {
        setShowCommentForm(false);
    };

    const handleLike = () => {
        if (!user) {
            alert("Please log in to like this article");
            return;
        }
        // Here you would implement the like functionality
        alert("Article liked!");
    };

    const handleCommentLike = () => {
        if (!user) {
            alert("Please log in to like comments");
            return;
        }
        // Here you would implement the comment like functionality
        alert("Comment liked!");
    };

    return (
        <AnimatedPage>
            <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-8">
                <AnimatedElement delay={0.1}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 gap-4">
                        <div className="flex flex-col gap-4">
                            <BackButton />
                            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">{article.title}</h2>
                        </div>
                        {user && (
                            <AnimatedButton 
                                onClick={handleLike}
                                className="bg-[#FFD600] hover:bg-[#E6C200] rounded-md px-4 py-2 font-bold text-sm sm:text-base transition-colors duration-200"
                            >
                                Like
                            </AnimatedButton>
                        )}
                    </div>
                </AnimatedElement>

                <AnimatedElement delay={0.2}>
                    <div className="flex flex-col bg-white p-6 sm:p-8 rounded-xl gap-4">
                        <div className="text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />

                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex gap-2 items-center">
                                <Image src={"/icons/user.svg"} alt={"user"} width={16} height={16} />
                                <p className="font-bold">{article.author}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={"/icons/calandar.svg"} alt={"calandar"} width={16} height={16} />
                                <p className="font-bold">{new Date(article.date).toLocaleDateString('en-US')}</p>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>

                <AnimatedElement delay={0.3}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 gap-4">
                        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">Comments</h2>
                        {user && (
                            <AnimatedButton 
                                onClick={handleLeaveComment}
                                className="bg-[#FFD600] hover:bg-[#E6C200] rounded-md px-4 py-2 font-bold text-sm sm:text-base transition-colors duration-200"
                            >
                                Leave a comment
                            </AnimatedButton>
                        )}
                    </div>
                </AnimatedElement>

                {showCommentForm && (
                    <AnimatedElement delay={0.1}>
                        <div className="px-4">
                            <CommentForm
                                onCommentAdded={handleCommentAdded}
                                onCancel={handleCancelComment}
                            />
                        </div>
                    </AnimatedElement>
                )}

                {comments.length === 0 ? (
                    <AnimatedElement delay={0.4}>
                        <div className="px-4">
                            <div className="bg-white p-6 rounded-xl text-center">
                                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                            </div>
                        </div>
                    </AnimatedElement>
                ) : (
                    comments.map((comment, index) => (
                        <AnimatedCard key={comment.id} delay={0.4 + index * 0.1}>
                            <div className="flex flex-col sm:flex-row gap-6 px-6 py-6 bg-white rounded-xl justify-between items-start sm:items-center">
                                <div className="flex flex-col gap-2 text-sm sm:text-base">
                                    <p>{comment.content}</p>
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div className="flex gap-2 items-center">
                                            <Image src={"/icons/user.svg"} alt={"user"} width={16} height={16} />
                                            <p className="font-bold">{comment.author}</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Image src={"/icons/calandar.svg"} alt={"calandar"} width={16} height={16} />
                                            <p className="font-bold">{new Date(comment.date).toLocaleDateString('en-US')}</p>
                                        </div>
                                    </div>
                                </div>

                                {user && (
                                    <div>
                                        <AnimatedButton 
                                            onClick={handleCommentLike}
                                            className="bg-[#FFD600] hover:bg-[#E6C200] rounded-md px-4 py-2 font-bold text-sm sm:text-base transition-colors duration-200"
                                        >
                                            Like
                                        </AnimatedButton>
                                    </div>
                                )}
                            </div>
                        </AnimatedCard>
                    ))
                )}
            </div>
        </AnimatedPage>
    );
} 