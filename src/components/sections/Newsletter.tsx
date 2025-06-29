"use client";

import {useState} from "react";
import {useToast} from "@/contexts/ToastContext";
import {AnimatedOnScroll} from "@/components/common/AnimatedPage";
import {motion} from "framer-motion";

export const NewsletterSection = () => {
    const [email, setEmail] = useState("");
    const { showToast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email.trim()) {
            showToast({
                type: "warning",
                title: "Email Required",
                message: "Please enter your email address.",
                duration: 4000
            });
            return;
        }

        // Simuler l'inscription à la newsletter
        console.log("Newsletter subscription:", email);
        
        showToast({
            type: "success",
            title: "Subscribed!",
            message: "You have been successfully subscribed to our newsletter.",
            duration: 5000
        });
        
        // Réinitialiser le champ
        setEmail("");
    };

    return (
        <section className="bg-[#ffd600] py-12">
            <AnimatedOnScroll delay={0.2}>
                <div className="container mx-auto px-6 flex flex-col items-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <AnimatedOnScroll delay={0.4}>
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 mb-4 border border-gray-300 bg-white" 
                                required
                            />
                        </AnimatedOnScroll>
                        
                            <motion.button
                                type="submit" 
                                className="w-full bg-[#3b444b] text-white py-3 font-medium hover:bg-[#2a3136] transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                            >
                                REGISTER TO THE NEWSLETTER
                            </motion.button>
                    </form>
                </div>
            </AnimatedOnScroll>
        </section>
    )
}