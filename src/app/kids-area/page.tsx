"use client";

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import { AnimatedPage, AnimatedElement, AnimatedBackground } from "@/components/common/AnimatedPage";

export default function KidsAreaPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <AnimatedBackground 
                className="min-h-[800px]"
                backgroundImage="/backgrounds/kids-area.png"
                delay={0.2}
            >
                <AnimatedPage>
                    <div className="inline-flex flex-col flex-start gap-8 m-12 max-w-[800px]">
                        <AnimatedElement delay={0.1}>
                            <H2>🧒 Kids&#39; Area</H2>
                        </AnimatedElement>
                        <div className="flex flex-col gap-4">
                            <AnimatedElement delay={0.2}>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-bold text-2xl">Welcome to our Kids&#39; Area – A Safe Space for Children to Play, Learn, and Grow.</h3>
                                    <p>Our dedicated kids&#39; area is specially designed to provide a safe, stimulating and fun environment for children aged 3 to 12. With over 200m² of dedicated space, we offer a variety of activities that promote physical, cognitive and social development in a secure and supervised environment.</p>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement delay={0.3}>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-bold text-2xl">🎮 Available Activities</h3>
                                    <div>
                                        <p>Our kids&#39; area includes:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Educational Games – Fun and educational activities to stimulate creativity and learning</li>
                                            <li>Sports & Fitness – Physical activities adapted for children to develop motor skills</li>
                                            <li>Arts & Crafts – Creative workshops for painting, drawing and manual activities</li>
                                            <li>Board Games – Discover board games to develop logic and social skills</li>
                                        </ul>
                                    </div>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement delay={0.4}>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-bold text-2xl">🛡️ Safety Features</h3>
                                    <div>
                                        <p>Your children&#39;s safety is our priority:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Continuous supervision by qualified staff</li>
                                            <li>Safe equipment meeting strict standards</li>
                                            <li>Child-friendly space with soft floors</li>
                                            <li>First aid trained personnel</li>
                                        </ul>
                                    </div>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement delay={0.5}>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-bold text-2xl">⏰ Opening Hours & Pricing</h3>
                                    <div>
                                        <p>We offer flexible access for your convenience:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                                            <li>Saturday: 9:00 AM - 6:00 PM</li>
                                            <li>Sunday: 10:00 AM - 5:00 PM</li>
                                        </ul>
                                        <p>Pricing:</p>
                                        <ul className="list-disc pl-5">
                                            <li>1 hour: $15</li>
                                            <li>2 hours: $25</li>
                                            <li>Day pass: $35</li>
                                        </ul>
                                        <p>Perfect for parents who want to work out while their children are safely entertained.</p>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </AnimatedPage>
            </AnimatedBackground>
            <Footer />
        </main>
    );
} 