"use client";

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import Link from "next/link";
import {useAuth} from "@/contexts/AuthContext";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {useToast} from "@/contexts/ToastContext";
import { AnimatedPage, AnimatedElement, AnimatedBackground } from "@/components/common/AnimatedPage";
import { motion } from "framer-motion";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const { showToast } = useToast();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        try {
            const success = await login(email, password);
            if (success) {
                showToast({
                    type: "success",
                    title: "Welcome back!",
                    message: "You have been successfully logged in.",
                    duration: 4000
                });
                router.push("/");
            } else {
                setError("Invalid email or password");
                showToast({
                    type: "error",
                    title: "Login Failed",
                    message: "Invalid email or password. Please try again.",
                    duration: 5000
                });
            }
        } catch (e) {
            console.error(e)
            setError("An error occurred. Please try again.");
            showToast({
                type: "error",
                title: "Login Error",
                message: "An error occurred during login. Please try again.",
                duration: 5000
            });
        }
    };

    return (
        <main className="min-h-screen">
            <Header />

            <AnimatedBackground 
                className="h-[800px]"
                backgroundImage="/backgrounds/login.png"
                delay={0.2}
            >
                <AnimatedPage>
                    <div className="flex flex-col flex-start gap-8 h-full justify-center m-12 max-w-[450px]">
                        <AnimatedElement delay={0.1}>
                            <H2>Login</H2>
                        </AnimatedElement>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <AnimatedElement delay={0.2}>
                                <div className="flex flex-col gap-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-3 border border-gray-300 bg-white"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full p-3 border border-gray-300 bg-white"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                    <motion.button 
                                        type="submit" 
                                        className="bg-[#003A5E] text-white py-4 font-bold justify-center flex"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Login
                                    </motion.button>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement delay={0.3}>
                                <hr className="bg-gray-600"/>
                            </AnimatedElement>
                            <AnimatedElement delay={0.4}>
                                <Link href="/register" className="w-full text-center">Or register</Link>
                            </AnimatedElement>
                        </form>
                    </div>
                </AnimatedPage>
            </AnimatedBackground>
            <Footer />
        </main>
    );
}