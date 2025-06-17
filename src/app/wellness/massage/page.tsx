"use client";

import {useState} from "react";
import {H2} from "@/components/typo/H2";
import {Coach} from "@/types/activity";
import {ActivitySchedule, BookingModal, CoachesSlider, WeeklySchedule} from "@/components/activities";
import Image from "next/image";

const massageSchedule = {
    schedules: [
        {
            day: "Monday",
            timeSlots: [
                { start: "10:00", end: "11:00", color: "#9B6B9E" },
                { start: "14:00", end: "15:00", color: "#9B6B9E" },
                { start: "16:00", end: "17:00", color: "#9B6B9E" }
            ]
        },
        {
            day: "Wednesday",
            timeSlots: [
                { start: "10:00", end: "11:00", color: "#9B6B9E" },
                { start: "14:00", end: "15:00", color: "#9B6B9E" },
                { start: "16:00", end: "17:00", color: "#9B6B9E" }
            ]
        },
        {
            day: "Friday",
            timeSlots: [
                { start: "10:00", end: "11:00", color: "#9B6B9E" },
                { start: "14:00", end: "15:00", color: "#9B6B9E" },
                { start: "16:00", end: "17:00", color: "#9B6B9E" }
            ]
        }
    ]
};

const coaches: Coach[] = [
    {
        id: "1",
        name: "Sophie Martin",
        role: "Massage Therapist",
        imageUrl: "/coaches/sophie.jpg",
        bio: "With over 10 years of experience in various massage techniques, Sophie specializes in deep tissue and relaxation massages. Her gentle approach and attention to detail ensure a personalized experience for each client.",
        specialties: ["Deep Tissue", "Swedish Massage", "Sports Massage"],
        certifications: [
            "Certified Massage Therapist",
            "Sports Massage Specialist",
            "Aromatherapy Practitioner"
        ]
    },
    {
        id: "2",
        name: "Lucas Dubois",
        role: "Wellness Specialist",
        imageUrl: "/coaches/lucas.jpg",
        bio: "A certified wellness practitioner with expertise in therapeutic massage and bodywork. Lucas combines traditional techniques with modern approaches to provide holistic healing and relaxation.",
        specialties: ["Therapeutic Massage", "Reflexology", "Energy Work"],
        certifications: [
            "Therapeutic Massage Certification",
            "Reflexology Practitioner",
            "Energy Healing Specialist"
        ]
    }
];

const features = [
    {
        title: "Professional Care",
        description: "Expert therapists with years of experience",
        icon: "👐"
    },
    {
        title: "Various Techniques",
        description: "Choose from different massage styles",
        icon: "💆"
    },
    {
        title: "Relaxing Environment",
        description: "Peaceful setting for complete relaxation",
        icon: "✨"
    },
    {
        title: "Personalized Treatment",
        description: "Tailored to your specific needs",
        icon: "🎯"
    }
];

export default function MassagePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [day, setDay] = useState("Monday");
    const [time, setTime] = useState("10:00");
    
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
                        src="/wellness/massage-hero.jpg"
                        alt="Professional Massage"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            <H2>Massage Therapy</H2>
                        </div>
                        <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                            Experience the healing power of professional massage therapy. Our expert therapists 
                            provide personalized treatments to help you relax, recover, and rejuvenate your body and mind.
                        </p>
                        <button 
                            onClick={() => handleTimeSlotClick("Monday", "10:00")}
                            className="mt-8 px-8 py-4 bg-[#9B6B9E] text-white rounded-full text-lg font-semibold hover:bg-[#8A5A8D] transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                            "Reduces stress and anxiety",
                            "Relieves muscle tension",
                            "Improves circulation",
                            "Enhances sleep quality",
                            "Boosts immune system",
                            "Promotes overall wellness"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-[#9B6B9E] rounded-full flex items-center justify-center flex-shrink-0">
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
                        <ActivitySchedule schedule={massageSchedule} />
                        <WeeklySchedule schedule={massageSchedule} onCLickTimeSlot={handleTimeSlotClick} />
                    </div>
                </div>

                {/* Therapists Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-white mb-8">Our Therapists</h3>
                    <div className="max-w-3xl mx-auto">
                        <CoachesSlider coaches={coaches} />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-[#9B6B9E] rounded-xl p-12 mb-16">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience True Relaxation?</h3>
                    <p className="text-white text-lg mb-8">Book your massage session today and take the first step towards better wellness</p>
                    <button 
                        onClick={() => handleTimeSlotClick("Monday", "10:00")}
                        className="px-8 py-4 bg-white text-[#9B6B9E] rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        Schedule Your Massage
                    </button>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                day={day}
                time={time}
                activityName="Massage"
            />
        </div>
    );
} 