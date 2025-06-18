"use client";

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {useToast} from "@/contexts/ToastContext";
import { AnimatedPage, AnimatedElement, AnimatedBackground } from "@/components/common/AnimatedPage";
import { motion } from "framer-motion";

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

            <AnimatedBackground 
                className="h-[800px]"
                backgroundImage="/backgrounds/contact.png"
                delay={0.2}
            >
                <AnimatedPage>
                    <div className="flex flex-col flex-start gap-8 m-12 max-w-[450px]">
                        <AnimatedElement delay={0.1}>
                            <H2>Contact</H2>
                        </AnimatedElement>
                        <div className="flex flex-col gap-8">
                            <AnimatedElement delay={0.2}>
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
                            </AnimatedElement>
                            <AnimatedElement delay={0.3}>
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
                                    <motion.button 
                                        type="submit" 
                                        className="bg-[#003A5E] text-white py-4 font-bold"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </AnimatedElement>
                        </div>
                    </div>
                </AnimatedPage>
            </AnimatedBackground>
            <Footer />
        </main>
    )
}