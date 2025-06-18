"use client";

import {H2} from "@/components/typo/H2";
import Image from "next/image";
import Link from "next/link";

const wellnessServices = [
    {
        title: "Sauna",
        description: "Experience the benefits of traditional sauna therapy in our state-of-the-art facilities. Perfect for relaxation and detoxification.",
        image: "/wellness/sauna-hero.jpg",
        link: "/wellness/sauna",
        color: "#FF6B6B"
    },
    {
        title: "Massage",
        description: "Indulge in professional massage therapy sessions tailored to your needs. From deep tissue to relaxation massages.",
        image: "/wellness/massage-hero.jpg",
        link: "/wellness/massage",
        color: "#9B6B9E"
    },
    {
        title: "Relaxation",
        description: "Discover inner peace through guided relaxation sessions. Our specialists will help you achieve deep relaxation and stress relief.",
        image: "/wellness/relaxation-hero.jpg",
        link: "/wellness/relaxation",
        color: "#7FB3D5"
    }
];

export default function WellnessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/wellness/wellness-hero.jpg"
                        alt="Wellness Center"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            <H2>Wellness Center</H2>
                        </div>
                        <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                            Discover our comprehensive wellness services designed to enhance your physical and mental well-being. 
                            From sauna therapy to massage and relaxation sessions, find your path to wellness.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {wellnessServices.map((service, index) => (
                        <Link 
                            href={service.link}
                            key={index}
                            className="group"
                        >
                            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-100 mb-4">{service.description}</p>
                                    <div 
                                        className="inline-block px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 shadow-lg"
                                        style={{ backgroundColor: service.color }}
                                    >
                                        Discover More
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 mb-16 shadow-lg border border-gray-200">
                    <h3 className="text-3xl font-bold mb-8 text-gray-800">Why Choose Our Wellness Center?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Expert practitioners",
                            "State-of-the-art facilities",
                            "Personalized approach",
                            "Holistic wellness programs",
                            "Flexible scheduling",
                            "Premium quality service"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 bg-purple-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-100 border border-purple-200">
                                <div className="w-10 h-10 bg-[#7FB3D5] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <p className="text-gray-700 font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-[#FF6B6B] via-[#9B6B9E] to-[#7FB3D5] rounded-xl p-12 mb-16 shadow-xl">
                    <h3 className="text-3xl font-bold text-white mb-4">Start Your Wellness Journey Today</h3>
                    <p className="text-white text-lg mb-8">Choose from our range of wellness services and take the first step towards a healthier, more balanced life</p>
                    <Link 
                        href="/wellness/sauna"
                        className="inline-block px-8 py-4 bg-white text-gray-800 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </div>
    );
} 