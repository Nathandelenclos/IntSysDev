"use client";

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import Link from "next/link";
import {useState} from "react";
import {useToast} from "@/contexts/ToastContext";
import {useRouter} from "next/navigation";
import { AnimatedPage, AnimatedElement, AnimatedBackground } from "@/components/common/AnimatedPage";
import { motion } from "framer-motion";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const { showToast } = useToast();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validation des mots de passe
        if (formData.password !== formData.confirmPassword) {
            showToast({
                type: "error",
                title: "Registration Failed",
                message: "Passwords do not match. Please try again.",
                duration: 5000
            });
            return;
        }
        
        // Simuler l'inscription
        console.log("Registration:", formData);
        
        // Afficher le toast de succès
        showToast({
            type: "success",
            title: "Account Created!",
            message: "Your account has been successfully created. Welcome to Fitness Park!",
            duration: 5000
        });
        
        // Rediriger vers la page de connexion
        setTimeout(() => {
            router.push("/login");
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                backgroundImage="/backgrounds/register.png"
                delay={0.2}
            >
                <AnimatedPage>
                    <div className="flex flex-col flex-start gap-8 h-full justify-center m-12 max-w-[450px]">
                        <AnimatedElement delay={0.1}>
                            <H2>Register</H2>
                        </AnimatedElement>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <AnimatedElement delay={0.2}>
                                <div className="flex flex-col gap-4">
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 bg-white" 
                                        required
                                    />
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 bg-white" 
                                        required
                                    />
                                    <input 
                                        type="password" 
                                        name="password"
                                        placeholder="Password" 
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 bg-white" 
                                        required
                                    />
                                    <input 
                                        type="password" 
                                        name="confirmPassword"
                                        placeholder="Confirm password" 
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 bg-white" 
                                        required
                                    />
                                    <motion.button 
                                        type="submit" 
                                        className="bg-[#003A5E] text-white py-4 font-bold justify-center flex"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Register
                                    </motion.button>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement delay={0.3}>
                                <hr className="bg-gray-600"/>
                            </AnimatedElement>
                            <AnimatedElement delay={0.4}>
                                <Link href="/login" className="w-full text-center">Or login</Link>
                            </AnimatedElement>
                        </form>
                    </div>
                </AnimatedPage>
            </AnimatedBackground>
            <Footer />
        </main>
    )
}