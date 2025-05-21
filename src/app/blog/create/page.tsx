"use client";

import {Header} from "@/components/layouts/Header";
import Link from "next/link";
import {Footer} from "@/components/layouts/Footer";
import Image from "next/image";
import {useRef} from "react";
import {Editor} from "@tinymce/tinymce-react";

export default function CreatePost() {
    const editorRef = useRef(null);
    const handleEditorChange = (content: string) => {
        console.log('Content was updated:', content);
    };

    return (
        <main className="min-h-screen">
            <Header/>

            <section className="flex flex-col h-full bg-[linear-gradient(180deg,_#03080B_0%,_#012E4A_100%)] bg-cover overflow-hidden p-16 gap-8">
                <div className="flex flex-col w-[1000px] mx-auto gap-8">
                    <div className="flex gap-4 justify-between">
                        <h2 className="text-4xl font-bold uppercase text-white">Create Your Post</h2>
                        <Link href="#" className="bg-[#FFD600] rounded-md px-4 py-2 font-bold">Publish</Link>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <input type="email" placeholder="Title" className="w-full p-3 border border-gray-300 bg-white rounded-md" />
                    </div>
                    <Editor
                        apiKey='eo2wxm07qcuni8iuwrgdohpv0u2n0tqlhc551a5fabq587pq'
                        onInit={ (_evt, editor) => editorRef.current = editor }
                        onEditorChange={handleEditorChange}
                        init={{
                            height: 800,
                            plugins: [
                                "preview","importcss", "searchreplace", "autolink",
                                "autosave", "save", "directionality", "code", "visualblocks",
                                "visualchars", "fullscreen", "image", "link", "media",
                                "template", "codesample", "table", "charmap", "pagebreak",
                                "nonbreaking", "anchor", "insertdatetime", "advlist", "lists",
                                "wordcount", "help", "charmap", "quickbars", "emoticons"
                            ],
                            toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>
            </section>
            <Footer />
        </main>
    )
}
