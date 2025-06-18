"use client";

import {useEffect, useState} from "react";
import {useAuth} from "@/contexts/AuthContext";
import {useToast} from "@/contexts/ToastContext";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    day: string;
    time: string;
    activityName: string;
}

export function BookingModal({ isOpen, onClose, day, time, activityName }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        notes: ""
    });
    const { user } = useAuth()
    const { showToast } = useToast()

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: "",
                notes: ""
            })
        }
    }, [user]);
    
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter la logique de soumission du formulaire
        console.log("Booking submitted:", { ...formData, day, time, activityName });
        
        // Afficher le toast de succès
        showToast({
            type: "success",
            title: "Booking Confirmed!",
            message: `Your ${activityName} session on ${day} at ${time} has been successfully booked.`,
            duration: 6000
        });
        
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl border border-gray-200">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Book a Class</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Class Info */}
                <div className="bg-[#FFD600]/10 rounded-lg p-4 mb-6 border border-[#FFD600]/20">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-gray-800">{activityName}</p>
                        <p className="text-gray-600">{day} at {time}</p>
                    </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-[#FFD600] transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-[#FFD600] transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-[#FFD600] transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Notes
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-[#FFD600] transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#003A5E] text-white font-bold py-3 px-4 rounded-md hover:bg-[#0A4D68] transition-colors shadow-lg"
                    >
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
} 