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
                { start: "09:00", end: "19:00", color: "#9B6B9E" }
            ]
        },
        {
            day: "Tuesday",
            timeSlots: [
                { start: "09:00", end: "19:00", color: "#9B6B9E" }
            ]
        },
        {
            day: "Wednesday",
            timeSlots: [
                { start: "09:00", end: "19:00", color: "#9B6B9E" }
            ]
        },
        {
            day: "Thursday",
            timeSlots: [
                { start: "09:00", end: "19:00", color: "#9B6B9E" }
            ]
        },
        {
            day: "Friday",
            timeSlots: [
                { start: "09:00", end: "19:00", color: "#9B6B9E" }
            ]
        },
        {
            day: "Saturday",
            timeSlots: [
                { start: "10:00", end: "17:00", color: "#9B6B9E" }
            ]
        }
    ]
};

const coaches: Coach[] = [
    {
        id: "1",
        name: "Marie Laurent",
        role: "Senior Massage Therapist",
        imageUrl: "/coaches/marie.jpg",
        bio: "With over 15 years of experience in therapeutic massage, Marie specializes in deep tissue massage and sports recovery. Her expertise helps clients achieve optimal relaxation and pain relief.",
        specialties: ["Deep Tissue Massage", "Sports Massage", "Therapeutic Massage"],
        certifications: [
            "Licensed Massage Therapist",
            "Sports Massage Certification",
            "Deep Tissue Specialist"
        ]
    },
    {
        id: "2",
        name: "Pierre Dubois",
        role: "Wellness Massage Specialist",
        imageUrl: "/coaches/pierre.jpg",
        bio: "Pierre focuses on relaxation and wellness massage techniques. His gentle approach and attention to detail create a truly rejuvenating experience for all clients.",
        specialties: ["Relaxation Massage", "Swedish Massage", "Aromatherapy"],
        certifications: [
            "Wellness Massage Certification",
            "Aromatherapy Specialist",
            "Relaxation Therapy Expert"
        ]
    }
];

const features = [
    {
        title: "Deep Tissue Massage",
        description: "Targeted therapy for muscle tension and chronic pain",
        icon: "💆‍♀️"
    },
    {
        title: "Relaxation Massage",
        description: "Gentle techniques for stress relief and relaxation",
        icon: "🧘‍♀️"
    },
    {
        title: "Sports Massage",
        description: "Specialized massage for athletes and active individuals",
        icon: "🏃‍♂️"
    },
    {
        title: "Aromatherapy",
        description: "Enhanced experience with therapeutic essential oils",
        icon: "🌸"
    }
];

export default function MassagePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [day, setDay] = useState("Monday");
    const [time, setTime] = useState("10:00 AM");
    
    const handleTimeSlotClick = (day: string, time: string) => {
        setIsModalOpen(true);
        setDay(day);
        setTime(time);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
            {/* Hero Section */}
            <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/wellness/massage-hero.jpg"
                        alt="Professional Massage Therapy"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            <H2>Massage Therapy</H2>
                        </div>
                        <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                            Experience professional massage therapy in a serene environment. Our skilled therapists offer a range of 
                            massage techniques to promote relaxation, relieve tension, and enhance your overall well-being.
                        </p>
                        <button 
                            onClick={() => handleTimeSlotClick("Monday", "10:00")}
                            className="mt-8 px-8 py-4 bg-[#9B6B9E] text-white rounded-full text-lg font-semibold hover:bg-[#8e5a8a] transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                            "Relieves muscle tension and pain",
                            "Reduces stress and anxiety",
                            "Improves circulation and flexibility",
                            "Enhances sleep quality",
                            "Boosts immune system function",
                            "Promotes overall relaxation"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 bg-purple-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-100 border border-purple-200">
                                <div className="w-10 h-10 bg-[#9B6B9E] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <p className="text-gray-700 font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 mb-16 shadow-lg border border-gray-200">
                    <h3 className="text-3xl font-bold mb-8 text-gray-800">Appointment Hours</h3>
                    <div className="flex flex-col gap-8">
                        <ActivitySchedule schedule={massageSchedule} />
                        <WeeklySchedule schedule={massageSchedule} onCLickTimeSlot={handleTimeSlotClick} />
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Massage Therapists</h3>
                    <div className="max-w-3xl mx-auto">
                        <CoachesSlider coaches={coaches} />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-[#9B6B9E] rounded-xl p-12 mb-16 shadow-xl">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience Ultimate Relaxation?</h3>
                    <p className="text-white text-lg mb-8">Book your massage session today and treat yourself to pure relaxation</p>
                    <button 
                        onClick={() => handleTimeSlotClick("Monday", "10:00")}
                        className="px-8 py-4 bg-white text-[#9B6B9E] rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                activityName="Massage"
            />
        </div>
    );
} 