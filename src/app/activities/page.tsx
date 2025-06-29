"use client";

import {H2} from "@/components/typo/H2";
import Image from "next/image";
import Link from "next/link";
import { AnimatedPage, AnimatedElement, AnimatedCard } from "@/components/common/AnimatedPage";

const activities = [
    {
        title: "CrossFit",
        description: "High-intensity functional movements that will challenge your strength, endurance, and mental toughness. Perfect for all fitness levels.",
        image: "/activities/crossfit-hero.jpg",
        link: "/activities/crossfit",
        color: "#FFD600"
    },
    {
        title: "Pilates",
        description: "Improve your core strength, flexibility, and posture through controlled movements. A perfect blend of mind and body training.",
        image: "/activities/pilates-hero.jpg",
        link: "/activities/pilates",
        color: "#4CAF50"
    },
    {
        title: "Zumba",
        description: "Dance your way to fitness with our energetic Zumba classes. A fun and effective way to burn calories while learning new dance moves.",
        image: "/activities/zumba-hero.jpg",
        link: "/activities/zumba",
        color: "#FF1493"
    },
    {
        title: "Mom Sessions",
        description: "Specialized fitness classes designed for mothers, focusing on postnatal recovery, core strength, and overall well-being.",
        image: "/activities/mom-sessions-hero.jpg",
        link: "/activities/mom-sessions",
        color: "#9C27B0"
    }
];

export default function ActivitiesPage() {
    return (
        <AnimatedPage>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
                {/* Hero Section */}
                <AnimatedElement delay={0.1}>
                    <div className="relative h-[70vh] overflow-hidden">
                        <div className="absolute inset-0">
                            <Image
                                src="/activities/activities-hero.jpg"
                                alt="Fitness Activities"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/30" />
                        </div>
                        <div className="relative h-full flex items-center justify-center text-center px-4">
                            <div className="max-w-4xl">
                                <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                                    <H2>Fitness Activities</H2>
                                </div>
                                <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                                    Discover our diverse range of fitness activities designed to challenge, energize, and transform you. 
                                    From high-intensity CrossFit to mindful Pilates, find your perfect workout.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>

                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Activities Grid */}
                    <AnimatedElement delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {activities.map((activity, index) => (
                                <AnimatedCard key={index} delay={0.3 + index * 0.1}>
                                    <Link 
                                        href={activity.link}
                                        className="group"
                                    >
                                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                            <Image
                                                src={activity.image}
                                                alt={activity.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <h3 className="text-3xl font-bold text-white mb-4">{activity.title}</h3>
                                                <p className="text-gray-100 mb-6 text-lg">{activity.description}</p>
                                                <div 
                                                    className="inline-block px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg"
                                                    style={{ backgroundColor: activity.color }}
                                                >
                                                    Join Now
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedCard>
                            ))}
                        </div>
                    </AnimatedElement>

                    {/* Benefits Section */}
                    <AnimatedElement delay={0.4}>
                        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 mb-16 shadow-lg border border-gray-200">
                            <h3 className="text-3xl font-bold mb-8 text-gray-800">Why Train With Us?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    "Expert coaches",
                                    "Modern equipment",
                                    "Flexible schedules",
                                    "Supportive community",
                                    "Personalized attention",
                                    "Progressive programs",
                                    "Clean facilities",
                                    "Results-driven approach"
                                ].map((benefit, index) => (
                                    <AnimatedCard key={index} delay={0.5 + index * 0.05}>
                                        <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 border border-blue-200">
                                            <div className="w-10 h-10 bg-[#FFD600] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                                <span className="text-black font-bold">✓</span>
                                            </div>
                                            <p className="text-gray-700 font-medium">{benefit}</p>
                                        </div>
                                    </AnimatedCard>
                                ))}
                            </div>
                        </div>
                    </AnimatedElement>

                    {/* Call to Action */}
                    <AnimatedElement delay={0.6}>
                        <div className="text-center bg-gradient-to-r from-[#FFD600] via-[#4CAF50] to-[#FF1493] rounded-xl p-12 mb-16 shadow-xl">
                            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Fitness Journey?</h3>
                            <p className="text-white text-lg mb-8">Join our community and discover the perfect activity for your fitness goals</p>
                            <Link 
                                href="/activities/crossfit"
                                className="inline-block px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Find Your Activity
                            </Link>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </AnimatedPage>
    );
} 