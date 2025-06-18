"use client";

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {Reservations} from "@/components/profile/Reservations";
import {Membership} from "@/components/profile/Membership";
import {Interactions} from "@/components/profile/Interactions";
import {PublishedArticles} from "@/components/profile/PublishedArticles";
import {useAuth} from "@/contexts/AuthContext";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {H1} from "@/components/typo/H1";
import Image from "next/image";
import {Breadcrumb} from "@/components/layouts/Breadcrumb";
import { AnimatedPage, AnimatedElement } from "@/components/common/AnimatedPage";

export default function Profile() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return (
        <main className="min-h-screen">
            <Header />
            
            <div className="bg-[linear-gradient(180deg,_#03080B_0%,_#012E4A_100%)] min-h-screen">
                <AnimatedPage>
                    {/* Hero Section */}
                    <AnimatedElement delay={0.1}>
                        <div className="relative h-[50vh] overflow-hidden">
                            <div className="absolute inset-0">
                                <Image
                                    src="/backgrounds/profile-hero.jpg"
                                    alt="Profile Background"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/60" />
                            </div>
                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <div className="max-w-4xl">
                                    <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                                        <H1>My Profile</H1>
                                    </div>
                                    <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                                        Welcome back, {user.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>

                    {/* Breadcrumb */}
                    <AnimatedElement delay={0.2}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <Breadcrumb
                                items={[
                                    { label: "Home", href: "/" },
                                    { label: "Profile", href: "/profile" }
                                ]}
                            />
                        </div>
                    </AnimatedElement>

                    {/* Content Section */}
                    <AnimatedElement delay={0.3}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <AnimatedElement delay={0.4}>
                                        <Membership />
                                    </AnimatedElement>
                                    <AnimatedElement delay={0.5}>
                                        <Reservations />
                                    </AnimatedElement>
                                </div>
                                <div className="space-y-8">
                                    <AnimatedElement delay={0.6}>
                                        <Interactions />
                                    </AnimatedElement>
                                    <AnimatedElement delay={0.7}>
                                        <PublishedArticles />
                                    </AnimatedElement>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                </AnimatedPage>
            </div>

            <Footer />
        </main>
    );
} 