"use client";

import { Coach } from "@/types/activity";
import Image from "next/image";
import { useState } from "react";

interface CoachCardProps {
    coach: Coach;
    color?: string;
}

export function CoachCard({ coach, color = "#FFD600" }: CoachCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative h-[300px] w-full">
                <Image
                    src={coach.imageUrl}
                    alt={coach.name}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{coach.name}</h3>
                        <p className="text-gray-300">{coach.role}</p>
                    </div>
                    <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: color }}
                    >
                        <span className="text-white text-xl">👋</span>
                    </div>
                </div>

                <p className="text-gray-200 mb-6 line-clamp-3">{coach.bio}</p>

                {/* Specialties */}
                <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 rounded-full text-sm"
                                style={{ 
                                    backgroundColor: `${color}20`,
                                    color: color
                                }}
                            >
                                {specialty}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Certifications</h4>
                    <ul className="space-y-2">
                        {coach.certifications.map((certification, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-300">
                                <div 
                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: color }}
                                />
                                <span className="text-sm">{certification}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Hover Overlay */}
            <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
            />
        </div>
    );
} 