"use client";

import {useState} from "react";
import {H2} from "@/components/typo/H2";
import {ActivitySchedule, BookingModal, CoachesSlider, WeeklySchedule} from "@/components/activities";
import Image from "next/image";
import coaches from "@/data/coaches.json";

const relaxationSchedule = {
    schedules: [
        {
            day: "Monday",
            timeSlots: [
                { start: "10:00", end: "18:00", color: "#7FB3D5" }
            ]
        },
        {
            day: "Tuesday",
            timeSlots: [
                { start: "10:00", end: "18:00", color: "#7FB3D5" }
            ]
        },
        {
            day: "Wednesday",
            timeSlots: [
                { start: "10:00", end: "18:00", color: "#7FB3D5" }
            ]
        },
        {
            day: "Thursday",
            timeSlots: [
                { start: "10:00", end: "18:00", color: "#7FB3D5" }
            ]
        },
        {
            day: "Friday",
            timeSlots: [
                { start: "10:00", end: "18:00", color: "#7FB3D5" }
            ]
        },
        {
            day: "Saturday",
            timeSlots: [
                { start: "11:00", end: "16:00", color: "#7FB3D5" }
            ]
        }
    ]
};

const features = [
    {
        title: "Guided Meditation",
        description: "Expert-led meditation sessions for deep relaxation",
        icon: "🧘‍♀️"
    },
    {
        title: "Breathing Techniques",
        description: "Learn effective breathing methods for stress relief",
        icon: "🫁"
    },
    {
        title: "Mindfulness Practice",
        description: "Develop present-moment awareness and focus",
        icon: "🌿"
    },
    {
        title: "Stress Relief",
        description: "Comprehensive approach to managing daily stress",
        icon: "✨"
    }
];

export default function RelaxationPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [day, setDay] = useState("Monday");
    const [time, setTime] = useState("10:00 AM");
    
    const handleTimeSlotClick = (day: string, time: string) => {
        setIsModalOpen(true);
        setDay(day);
        setTime(time);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
            {/* Hero Section */}
            <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/wellness/relaxation-hero.jpg"
                        alt="Relaxation & Meditation"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            <H2>Relaxation & Meditation</H2>
                        </div>
                        <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                            Discover inner peace through our guided relaxation and meditation sessions. Our specialists will help you 
                            achieve deep relaxation, reduce stress, and cultivate mindfulness in your daily life.
                        </p>
                        <button 
                            onClick={() => handleTimeSlotClick("Monday", "10:00")}
                            className="mt-8 px-8 py-4 bg-[#7FB3D5] text-white rounded-full text-lg font-semibold hover:bg-[#6ba3c5] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Start Your Journey
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
                            className="bg-white/80 backdrop-blur-lg rounded-xl p-6 text-gray-800 transform transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-lg border border-gray-200"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 mb-16 shadow-lg border border-gray-200">
                    <h3 className="text-3xl font-bold mb-8 text-gray-800">Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Reduces stress and anxiety",
                            "Improves sleep quality",
                            "Enhances mental clarity",
                            "Increases emotional balance",
                            "Boosts immune system",
                            "Promotes overall well-being"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 border border-blue-200">
                                <div className="w-10 h-10 bg-[#7FB3D5] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <p className="text-gray-700 font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 mb-16 shadow-lg border border-gray-200">
                    <h3 className="text-3xl font-bold mb-8 text-gray-800">Session Times</h3>
                    <div className="flex flex-col gap-8">
                        <ActivitySchedule schedule={relaxationSchedule} />
                        <WeeklySchedule schedule={relaxationSchedule} onCLickTimeSlot={handleTimeSlotClick} />
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Relaxation Specialists</h3>
                    <div className="max-w-3xl mx-auto">
                        <CoachesSlider coaches={coaches.relaxation} />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-[#7FB3D5] rounded-xl p-12 mb-16 shadow-xl">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Find Your Inner Peace?</h3>
                    <p className="text-white text-lg mb-8">Start your relaxation journey today and discover the power of mindfulness</p>
                    <button 
                        onClick={() => handleTimeSlotClick("Monday", "10:00")}
                        className="px-8 py-4 bg-white text-[#7FB3D5] rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Book Your Session
                    </button>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                day={day}
                time={time}
                activityName="Relaxation"
            />
        </div>
    );
} 