"use client";

import Link from "next/link";
import {useRef} from "react";
import {Editor} from "@tinymce/tinymce-react";
import {BackButton} from "@/components/common/BackButton";
import { AnimatedPage, AnimatedElement, AnimatedButton } from "@/components/common/AnimatedPage";

export default function CreatePost() {
    const editorRef = useRef(null);
    const handleEditorChange = (content: string) => {
        console.log("Content was updated:", content);
    };

    return (
        <AnimatedPage>
            <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-8">
                <AnimatedElement delay={0.1}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex flex-col gap-4">
                            <BackButton />
                            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">
                                Create Your Post
                            </h2>
                        </div>
                        <div className="flex flex-row gap-2">
                            <AnimatedButton
                                className="bg-[#FFD600] rounded-md px-4 py-2 font-bold text-sm sm:text-base"
                            >
                                <Link href="/blog">
                                    Publish
                                </Link>
                            </AnimatedButton>
                            <AnimatedButton
                                className="bg-[#FFD600] rounded-md px-4 py-2 font-bold text-sm sm:text-base"
                            >
                                <Link href="/blog">
                                    Save as Draft
                                </Link>
                            </AnimatedButton>
                        </div>
                    </div>
                </AnimatedElement>

                <AnimatedElement delay={0.2}>
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full p-3 border border-gray-300 bg-white rounded-md text-sm sm:text-base"
                    />
                </AnimatedElement>

                <AnimatedElement delay={0.3}>
                    <div className="w-full">
                        <Editor
                            apiKey="eo2wxm07qcuni8iuwrgdohpv0u2n0tqlhc551a5fabq587pq"
                            onInit={(_evt, editor) => (editorRef.current = editor)}
                            onEditorChange={handleEditorChange}
                            init={{
                                height: 600,
                                width: "100%",
                                menubar: false,
                                plugins: [
                                    "preview", "importcss", "searchreplace", "autolink",
                                    "autosave", "save", "directionality", "code", "visualblocks",
                                    "visualchars", "fullscreen", "image", "link", "media",
                                    "template", "codesample", "table", "charmap", "pagebreak",
                                    "nonbreaking", "anchor", "insertdatetime", "advlist", "lists",
                                    "wordcount", "help", "charmap", "quickbars", "emoticons"
                                ],
                                toolbar:
                                    "undo redo | bold italic underline strikethrough |" +
                                    " fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | " +
                                    "outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak |" +
                                    " charmap emoticons | fullscreen preview save print | " +
                                    "insertfile image media template link anchor codesample | ltr rtl",
                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            }}
                        />
                    </div>
                </AnimatedElement>
            </div>
        </AnimatedPage>
    );
}
