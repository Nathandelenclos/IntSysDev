"use client";

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {useToast} from "@/contexts/ToastContext";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        content: ""
    });
    const { showToast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Simuler l'envoi du message
        console.log("Message sent:", formData);
        
        // Afficher le toast de succès
        showToast({
            type: "success",
            title: "Message Sent!",
            message: "Your message has been sent successfully. We'll get back to you soon!",
            duration: 5000
        });
        
        // Réinitialiser le formulaire
        setFormData({
            name: "",
            email: "",
            subject: "",
            content: ""
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <main className="min-h-screen">
            <Header />

            <section className="h-[800px] bg-[url(/backgrounds/contact.png)] bg-cover overflow-hidden">
                <div className="flex flex-col flex-start gap-8 m-12 max-w-[450px]">
                    <H2>Contact</H2>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row gap-4 max-sm:flex-col max-sm:gap-0">
                            <Link href="tel:+33 3 27 96 47 38" className="flex gap-2 font-bold">
                                <Image src="/icons/phone.svg" alt="phone" height="18" width="18" />
                                <p>+33 3 27 96 47 38</p>
                            </Link>
                            <Link href="mailto:fitnesspark@mail.com" className="flex gap-2 font-bold">
                                <Image src="/icons/mail.svg" alt="mail" height="18" width="18" />
                                <p>fitnesspark@mail.com</p>
                            </Link>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 bg-white" 
                                required
                            />
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Your Email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 bg-white" 
                                required
                            />
                            <input 
                                type="text" 
                                name="subject"
                                placeholder="Your Subject" 
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 bg-white" 
                                required
                            />
                            <textarea
                                className="w-full p-3 border border-gray-300 bg-white"
                                name="content"
                                placeholder="Your Message"
                                value={formData.content}
                                onChange={handleChange}
                                cols={20}
                                rows={5}
                                required
                            ></textarea>
                            <button type="submit" className="bg-[#003A5E] text-white py-4 font-bold">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}