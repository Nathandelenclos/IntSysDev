"use client";

import {useState} from "react";
import {H2} from "@/components/typo/H2";
import {Coach} from "@/types/activity";
import {ActivitySchedule, BookingModal, CoachesSlider, WeeklySchedule} from "@/components/activities";
import Image from "next/image";

const saunaSchedule = {
    schedules: [
        {
            day: "Monday",
            timeSlots: [
                { start: "10:00", end: "20:00", color: "#FF6B6B" }
            ]
        },
        {
            day: "Tuesday",
            timeSlots: [
                { start: "10:00", end: "20:00", color: "#FF6B6B" }
            ]
        },
        {
            day: "Wednesday",
            timeSlots: [
                { start: "10:00", end: "20:00", color: "#FF6B6B" }
            ]
        },
        {
            day: "Thursday",
            timeSlots: [
                { start: "10:00", end: "20:00", color: "#FF6B6B" }
            ]
        },
        {
            day: "Friday",
            timeSlots: [
                { start: "10:00", end: "20:00", color: "#FF6B6B" }
            ]
        },
        {
            day: "Saturday",
            timeSlots: [
                { start: "10:00", end: "18:00", color: "#FF6B6B" }
            ]
        }
    ]
};

const coaches: Coach[] = [
    {
        id: "1",
        name: "Sophie Dubois",
        role: "Wellness Specialist",
        imageUrl: "/coaches/sophie.jpg",
        bio: "With a background in holistic wellness and spa therapy, Sophie brings a wealth of knowledge in relaxation techniques and wellness practices. She ensures a peaceful and rejuvenating experience for all our sauna guests.",
        specialties: ["Sauna Therapy", "Wellness Coaching", "Stress Management"],
        certifications: [
            "Certified Spa Therapist",
            "Wellness Coach Certification",
            "Holistic Health Practitioner"
        ]
    },
    {
        id: "2",
        name: "Marc Laurent",
        role: "Wellness & Recovery Specialist",
        imageUrl: "/coaches/marc.jpg",
        bio: "Specializing in recovery and wellness practices, Marc helps clients optimize their recovery through sauna therapy and complementary wellness techniques. His expertise in sports recovery makes him particularly valuable for athletes.",
        specialties: ["Recovery Techniques", "Sauna Therapy", "Wellness Planning"],
        certifications: [
            "Sports Recovery Specialist",
            "Wellness Therapy Certification",
            "Thermal Therapy Expert"
        ]
    }
];

const features = [
    {
        title: "Traditional Finnish Sauna",
        description: "Experience authentic Finnish sauna with temperatures up to 90°C",
        icon: "🌡️"
    },
    {
        title: "Infrared Sauna",
        description: "Modern infrared technology for deep tissue relaxation",
        icon: "🔴"
    },
    {
        title: "Cold Plunge Pool",
        description: "Refresh and invigorate with our cold plunge pool",
        icon: "💧"
    },
    {
        title: "Relaxation Area",
        description: "Comfortable lounge area for post-sauna relaxation",
        icon: "🛋️"
    }
];

export default function WellnessPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [day, setDay] = useState("Monday");
    const [time, setTime] = useState("10:00 AM");
    
    const handleTimeSlotClick = (day: string, time: string) => {
        setIsModalOpen(true);
        setDay(day);
        setTime(time);
    }

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,_#03080B_0%,_#012E4A_100%)]">
            {/* Hero Section with Parallax Effect */}
            <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/wellness/sauna-hero.jpg"
                        alt="Luxury Sauna Experience"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            <H2>Wellness & Sauna</H2>
                        </div>
                        <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                            Experience the ultimate relaxation with our premium sauna facilities. Our wellness center offers 
                            a perfect blend of traditional sauna therapy and modern wellness practices for complete mind and body rejuvenation.
                        </p>
                        <button 
                            onClick={() => handleTimeSlotClick("Monday", "10:00")}
                            className="mt-8 px-8 py-4 bg-[#FF6B6B] text-white rounded-full text-lg font-semibold hover:bg-[#ff5252] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book Your Session
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-200">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Promotes deep relaxation and stress relief",
                            "Improves circulation and cardiovascular health",
                            "Supports muscle recovery and flexibility",
                            "Enhances skin health and detoxification",
                            "Boosts immune system function",
                            "Aids in better sleep quality"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-[#FF6B6B] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <p className="text-white">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Opening Hours</h3>
                    <div className="flex flex-col gap-8">
                        <ActivitySchedule schedule={saunaSchedule} />
                        <WeeklySchedule schedule={saunaSchedule} onCLickTimeSlot={handleTimeSlotClick} />
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-white mb-8">Our Wellness Specialists</h3>
                    <div className="max-w-3xl mx-auto">
                        <CoachesSlider coaches={coaches} />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-[#FF6B6B] rounded-xl p-12 mb-16">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience Pure Relaxation?</h3>
                    <p className="text-white text-lg mb-8">Book your sauna session today and start your journey to wellness</p>
                    <button 
                        onClick={() => handleTimeSlotClick("Monday", "10:00")}
                        className="px-8 py-4 bg-white text-[#FF6B6B] rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Book Now
                    </button>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                day={day}
                time={time}
                activityName="Sauna"
            />
        </div>
    );
} 