"use client";

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {Reservations} from "@/components/profile/Reservations";
import {Membership} from "@/components/profile/Membership";
import {useAuth} from "@/contexts/AuthContext";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {H1} from "@/components/typo/H1";
import {H2} from "@/components/typo/H2";
import {H3} from "@/components/typo/H3";
import Image from "next/image";
import {Breadcrumb} from "@/components/layouts/Breadcrumb";
import { AnimatedPage, AnimatedElement, AnimatedCard } from "@/components/common/AnimatedPage";
import {Card} from "@/components/ui/Card";
import {Badge} from "@/components/ui/Badge";
import {useToast} from "@/contexts/ToastContext";
import Link from "next/link";

export default function Profile() {
    const { user } = useAuth();
    const router = useRouter();
    const { showToast } = useToast();
    const [activeTab, setActiveTab] = useState<'profile' | 'reservations' | 'membership'>('profile');

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    const handleEditProfile = () => {
        showToast({
            type: "info",
            title: "Edit Profile",
            message: "Profile editing feature coming soon!",
            duration: 4000
        });
    };

    const tabs = [
        { id: 'profile', label: 'Profile', icon: '👤' },
        { id: 'reservations', label: 'Reservations', icon: '📅' },
        { id: 'membership', label: 'Membership', icon: '💎' }
    ] as const;

    return (
        <main className="min-h-screen">
            <Header />
            
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
                <AnimatedPage>
                    {/* Hero Section */}
                    <AnimatedElement delay={0.1}>
                        <div className="relative h-[40vh] overflow-hidden">
                            <div className="absolute inset-0">
                                <Image
                                    src="/backgrounds/profile-hero.jpg"
                                    alt="Profile Background"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <div className="max-w-4xl">
                                    <div className="text-4xl md:text-5xl text-white mb-6 drop-shadow-lg">
                                        <H1>My Account</H1>
                                    </div>
                                    <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
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
                                    { label: "My Account", href: "/profile" }
                                ]}
                            />
                        </div>
                    </AnimatedElement>

                    {/* Tab Navigation */}
                    <AnimatedElement delay={0.3}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-lg rounded-lg p-2 shadow-lg border border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                            activeTab === tab.id
                                                ? 'bg-[#FFD600] text-black shadow-lg'
                                                : 'text-gray-700 hover:bg-blue-100'
                                        }`}
                                    >
                                        <span className="text-lg">{tab.icon}</span>
                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </AnimatedElement>

                    {/* Content Section */}
                    <AnimatedElement delay={0.4}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {activeTab === 'profile' && (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Profile Info */}
                                    <div className="lg:col-span-2">
                                        <AnimatedCard delay={0.5}>
                                            <Card>
                                                <div className="p-6">
                                                    <div className="flex items-center justify-between mb-6">
                                                        <H3 className="text-gray-800">Personal Information</H3>
                                                        <button 
                                                            onClick={handleEditProfile}
                                                            className="bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-2">
                                                            <p className="text-gray-500 text-sm">Full name</p>
                                                            <p className="text-gray-800 font-medium">{user.name}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="text-gray-500 text-sm">Email</p>
                                                            <p className="text-gray-800 font-medium">{user.email}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="text-gray-500 text-sm">Phone</p>
                                                            <p className="text-gray-800 font-medium">Not provided</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="text-gray-500 text-sm">Date of birth</p>
                                                            <p className="text-gray-800 font-medium">Not provided</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="text-gray-500 text-sm">Address</p>
                                                            <p className="text-gray-800 font-medium">Not provided</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="text-gray-500 text-sm">Member since</p>
                                                            <p className="text-gray-800 font-medium">{user.memberSince}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </AnimatedCard>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="space-y-6">
                                        <AnimatedCard delay={0.6}>
                                            <Card>
                                                <div className="p-6 text-center">
                                                    <H3 className="mb-4 text-gray-800">Statistics</H3>
                                                    <div className="space-y-4">
                                                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                                                            <p className="text-2xl font-bold text-[#FFD600]">12</p>
                                                            <p className="text-white text-sm">Sessions this month</p>
                                                        </div>
                                                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
                                                            <p className="text-2xl font-bold text-[#FFD600]">85%</p>
                                                            <p className="text-white text-sm">Attendance rate</p>
                                                        </div>
                                                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
                                                            <p className="text-2xl font-bold text-[#FFD600]">3</p>
                                                            <p className="text-white text-sm">Favorite activities</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </AnimatedCard>

                                        <AnimatedCard delay={0.7}>
                                            <Card>
                                                <div className="p-6">
                                                    <H3 className="mb-4 text-gray-800">Quick Actions</H3>
                                                    <div className="space-y-3">
                                                        <Link 
                                                            href="/activities"
                                                            className="block w-full bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-3 px-4 rounded-lg transition-colors text-center"
                                                        >
                                                            Book an Activity
                                                        </Link>
                                                        <Link 
                                                            href="/wellness"
                                                            className="block w-full bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-3 px-4 rounded-lg transition-colors text-center"
                                                        >
                                                            Access Wellness
                                                        </Link>
                                                        <Link 
                                                            href="/contact"
                                                            className="block w-full bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-3 px-4 rounded-lg transition-colors text-center"
                                                        >
                                                            Contact Support
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Card>
                                        </AnimatedCard>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'reservations' && (
                                <AnimatedCard delay={0.5}>
                                    <Reservations />
                                </AnimatedCard>
                            )}

                            {activeTab === 'membership' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <AnimatedCard delay={0.5}>
                                        <Membership />
                                    </AnimatedCard>
                                    
                                    <AnimatedCard delay={0.6}>
                                        <Card>
                                            <div className="p-6">
                                                <H3 className="mb-6 text-gray-800">Payment History</H3>
                                                <div className="space-y-4">
                                                    {[
                                                        { date: '2024-03-01', amount: '89€', status: 'paid' },
                                                        { date: '2024-02-01', amount: '89€', status: 'paid' },
                                                        { date: '2024-01-01', amount: '89€', status: 'paid' }
                                                    ].map((payment, index) => (
                                                        <div key={index} className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                                                            <div>
                                                                <p className="text-gray-800 font-medium">{payment.date}</p>
                                                                <p className="text-gray-600 text-sm">Monthly subscription</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-gray-800 font-bold">{payment.amount}</p>
                                                                <Badge variant="success" className="text-xs">
                                                                    {payment.status}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Card>
                                    </AnimatedCard>
                                </div>
                            )}
                        </div>
                    </AnimatedElement>
                </AnimatedPage>
            </div>

            <Footer />
        </main>
    );
} 