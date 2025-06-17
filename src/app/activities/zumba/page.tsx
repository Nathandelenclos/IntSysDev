"use client";

import {useState} from "react";
import {H2} from "@/components/typo/H2";
import {ActivitySchedule, BookingModal, CoachesSlider, WeeklySchedule} from "@/components/activities";
import Image from "next/image";
import schedules from "@/data/schedules.json";
import coaches from "@/data/coaches.json";

const features = [
    {
        title: "Fun Workout",
        description: "Dance your way to fitness with energetic Latin rhythms",
        icon: "💃"
    },
    {
        title: "Cardio Boost",
        description: "Burn calories while learning new dance moves",
        icon: "❤️"
    },
    {
        title: "No Experience Needed",
        description: "Perfect for beginners and experienced dancers alike",
        icon: "🌟"
    },
    {
        title: "Group Energy",
        description: "Join a vibrant community of dance enthusiasts",
        icon: "👥"
    }
];

export default function ZumbaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [day, setDay] = useState("Monday");
    const [time, setTime] = useState("18:30");
    
    const handleTimeSlotClick = (day: string, time: string) => {
        setIsModalOpen(true);
        setDay(day);
        setTime(time);
    }

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,_#03080B_0%,_#012E4A_100%)]">
            <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/activities/zumba-hero.jpg"
                        alt="Zumba Class"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <div className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            <H2>Zumba</H2>
                        </div>
                        <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
                            Experience the joy of Zumba - a high-energy dance fitness program that combines Latin and international 
                            music with dynamic dance moves. It&#39;s a fun and effective way to get fit!
                        </p>
                        <button 
                            onClick={() => handleTimeSlotClick("Monday", "18:30")}
                            className="mt-8 px-8 py-4 bg-[#FF1493] text-white rounded-full text-lg font-semibold hover:bg-[#ff1a9d] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Join the Party
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
                            "Burns calories effectively",
                            "Improves cardiovascular health",
                            "Enhances coordination and rhythm",
                            "Reduces stress and anxiety",
                            "Builds confidence through dance",
                            "Creates a positive social environment"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                                <div className="w-10 h-10 bg-[#FF1493] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold">✓</span>
                                </div>
                                <p className="text-white">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Schedule Section */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Class Schedule</h3>
                    <div className="flex flex-col gap-8">
                        <ActivitySchedule schedule={schedules.zumba} />
                        <WeeklySchedule schedule={schedules.zumba} onCLickTimeSlot={handleTimeSlotClick} />
                    </div>
                </div>

                {/* Coaches Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-white mb-8">Our Instructors</h3>
                    <div className="max-w-3xl mx-auto">
                        <CoachesSlider coaches={coaches.zumba} />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-[#FF1493] rounded-xl p-12 mb-16">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Dance Your Way to Fitness?</h3>
                    <p className="text-white text-lg mb-8">Join our Zumba community and experience the joy of dance fitness</p>
                    <button 
                        onClick={() => handleTimeSlotClick("Monday", "18:30")}
                        className="px-8 py-4 bg-white text-[#FF1493] rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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