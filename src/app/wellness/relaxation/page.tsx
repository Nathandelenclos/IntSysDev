"use client";

import {useState} from "react";
import {H2} from "@/components/typo/H2";
import {Coach} from "@/types/activity";
import {ActivitySchedule, BookingModal, CoachesSlider, WeeklySchedule} from "@/components/activities";
import Image from "next/image";

const relaxationSchedule = {
    schedules: [
        {
            day: "Monday",
            timeSlots: [
                { start: "11:00", end: "12:00", color: "#7FB3D5" },
                { start: "15:00", end: "16:00", color: "#7FB3D5" }
            ]
        },
        {
            day: "Wednesday",
            timeSlots: [
                { start: "11:00", end: "12:00", color: "#7FB3D5" },
                { start: "15:00", end: "16:00", color: "#7FB3D5" }
            ]
        },
        {
            day: "Friday",
            timeSlots: [
                { start: "11:00", end: "12:00", color: "#7FB3D5" },
                { start: "15:00", end: "16:00", color: "#7FB3D5" }
            ]
        }
    ]
};

const coaches: Coach[] = [
    {
        id: "1",
        name: "Emma Laurent",
        role: "Relaxation Specialist",
        imageUrl: "/coaches/emma.jpg",
        bio: "With a background in mindfulness and meditation, Emma guides clients through various relaxation techniques. Her gentle approach and soothing presence create a perfect environment for deep relaxation and stress relief.",
        specialties: ["Guided Meditation", "Breathing Techniques", "Mindfulness"],
        certifications: [
            "Mindfulness Meditation Teacher",
            "Stress Management Specialist",
            "Yoga Nidra Practitioner"
        ]
    },
    {
        id: "2",
        name: "Thomas Moreau",
        role: "Wellness Coach",
        imageUrl: "/coaches/thomas.jpg",
        bio: "A certified wellness coach specializing in relaxation and stress reduction techniques. Thomas combines ancient wisdom with modern approaches to help clients achieve deep relaxation and mental clarity.",
        specialties: ["Relaxation Techniques", "Stress Reduction", "Mental Wellness"],
        certifications: [
            "Wellness Coach Certification",
            "Stress Management Expert",
            "Meditation Instructor"
        ]
    }
];

const features = [
    {
        title: "Guided Sessions",
        description: "Expert-led relaxation techniques",
        icon: "🧘"
    },
    {
        title: "Peaceful Setting",
        description: "Tranquil environment for deep relaxation",
        icon: "🌿"
    },
    {
        title: "Various Methods",
        description: "Multiple relaxation approaches",
        icon: "✨"
    },
    {
        title: "Personalized Care",
        description: "Tailored to your needs",
        icon: "💫"
    }
];

export default function RelaxationPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [day, setDay] = useState("Monday");
    const [time, setTime] = useState("11:00");
    
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
                        src="/wellness/relaxation-hero.jpg"
                        alt="Relaxation Session"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            <H2>Relaxation</H2>
                        </div>
                        <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                            Discover the art of deep relaxation through guided sessions. Our specialists will help you 
                            find inner peace and balance through various techniques designed to reduce stress and promote well-being.
                        </p>
                        <button 
                            onClick={() => handleTimeSlotClick("Monday", "11:00")}
                            className="mt-8 px-8 py-4 bg-[#7FB3D5] text-white rounded-full text-lg font-semibold hover:bg-[#6EA2C4] transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                            "Reduces stress and anxiety",
                            "Improves sleep quality",
                            "Enhances mental clarity",
                            "Promotes emotional balance",
                            "Boosts overall well-being",
                            "Increases mindfulness"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-[#7FB3D5] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <p className="text-white">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Schedule Section */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Available Sessions</h3>
                    <div className="flex flex-col gap-8">
                        <ActivitySchedule schedule={relaxationSchedule} />
                        <WeeklySchedule schedule={relaxationSchedule} onCLickTimeSlot={handleTimeSlotClick} />
                    </div>
                </div>

                {/* Specialists Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-white mb-8">Our Specialists</h3>
                    <div className="max-w-3xl mx-auto">
                        <CoachesSlider coaches={coaches} />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-[#7FB3D5] rounded-xl p-12 mb-16">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Find Your Inner Peace?</h3>
                    <p className="text-white text-lg mb-8">Book your relaxation session today and take the first step towards a more balanced life</p>
                    <button 
                        onClick={() => handleTimeSlotClick("Monday", "11:00")}
                        className="px-8 py-4 bg-white text-[#7FB3D5] rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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