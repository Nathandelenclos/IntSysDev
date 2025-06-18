"use client";

import {useState} from "react";
import {H2} from "@/components/typo/H2";
import {ActivitySchedule, BookingModal, CoachesSlider, WeeklySchedule} from "@/components/activities";
import Image from "next/image";
import schedules from "@/data/schedules.json";
import coaches from "@/data/coaches.json";
import {BackButton} from "@/components/common/BackButton";

const features = [
    {
        title: "Dance Fitness",
        description: "Fun, energetic dance moves that get your heart pumping",
        icon: "💃"
    },
    {
        title: "Cardio Workout",
        description: "High-energy cardio exercise disguised as dance",
        icon: "❤️"
    },
    {
        title: "Latin Rhythms",
        description: "Learn moves from salsa, merengue, and other Latin dances",
        icon: "🎵"
    },
    {
        title: "Community Fun",
        description: "Join a vibrant community of dance fitness enthusiasts",
        icon: "👥"
    }
];

export default function ZumbaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [day, setDay] = useState("Monday");
    const [time, setTime] = useState("6:00 PM");
    
    const handleTimeSlotClick = (day: string, time: string) => {
        setIsModalOpen(true);
        setDay(day);
        setTime(time);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
            <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/activities/zumba-hero.jpg"
                        alt="Zumba Dance Fitness"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            <H2>Zumba</H2>
                        </div>
                        <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                            Zumba is a high-energy dance fitness program that combines Latin and international music with dance moves. 
                            It&#39;s a fun way to burn calories, improve cardiovascular health, and learn new dance moves.
                        </p>
                        <button 
                            onClick={() => handleTimeSlotClick("Monday", "18:00")}
                            className="mt-8 px-8 py-4 bg-[#FF1493] text-white rounded-full text-lg font-semibold hover:bg-[#e91e63] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Start Dancing
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
                            "Burns calories effectively",
                            "Improves cardiovascular health",
                            "Enhances coordination and rhythm",
                            "Reduces stress and boosts mood",
                            "Builds endurance and stamina",
                            "No dance experience required"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 bg-pink-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-pink-100 border border-pink-200">
                                <div className="w-10 h-10 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <p className="text-gray-700 font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Schedule Section */}
                <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 mb-16 shadow-lg border border-gray-200">
                    <h3 className="text-3xl font-bold mb-8 text-gray-800">Class Schedule</h3>
                    <div className="flex flex-col gap-8">
                        <ActivitySchedule schedule={schedules.zumba} />
                        <WeeklySchedule schedule={schedules.zumba} onCLickTimeSlot={handleTimeSlotClick} />
                    </div>
                </div>

                {/* Coaches Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Instructors</h3>
                    <div className="max-w-3xl mx-auto">
                        <CoachesSlider coaches={coaches.zumba} />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-[#FF1493] rounded-xl p-12 mb-16 shadow-xl">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Dance Your Way to Fitness?</h3>
                    <p className="text-white text-lg mb-8">Join our Zumba community and experience the joy of dance fitness</p>
                    <button 
                        onClick={() => handleTimeSlotClick("Monday", "18:00")}
                        className="px-8 py-4 bg-white text-[#FF1493] rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Book Your First Class
                    </button>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                day={day}
                time={time}
                activityName="Zumba"
            />
        </div>
    );
} 