"use client";

import {H3} from "@/components/typo/H3";
import {Card} from "@/components/ui/Card";
import {Badge} from "@/components/ui/Badge";

interface Reservation {
    id: string;
    activity: string;
    date: string;
    time: string;
    status: 'confirmed' | 'pending' | 'cancelled';
    location: string;
    instructor?: string;
    participants: number;
    maxParticipants: number;
}

const mockReservations: Reservation[] = [
    {
        id: "1",
        activity: "Yoga Flow",
        date: "2024-03-20",
        time: "10:00 AM",
        status: "confirmed",
        location: "Studio 1",
        instructor: "Sarah Johnson",
        participants: 12,
        maxParticipants: 20
    },
    {
        id: "2",
        activity: "Swimming Pool",
        date: "2024-03-22",
        time: "2:00 PM",
        status: "pending",
        location: "Main Pool",
        participants: 8,
        maxParticipants: 15
    },
    {
        id: "3",
        activity: "HIIT Training",
        date: "2024-03-25",
        time: "9:00 AM",
        status: "cancelled",
        location: "Fitness Center",
        instructor: "Mike Thompson",
        participants: 0,
        maxParticipants: 12
    }
];

export function Reservations() {
    const getStatusVariant = (status: Reservation['status']) => {
        switch (status) {
            case 'confirmed':
                return 'success';
            case 'pending':
                return 'warning';
            case 'cancelled':
                return 'danger';
        }
    };

    return (
        <Card>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <H3>Recent Reservations</H3>
                    <button className="bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-2 px-4 rounded-lg transition-colors text-sm">
                        Book New Activity
                    </button>
                </div>
                <div className="space-y-4">
                    {mockReservations.map((reservation) => (
                        <div key={reservation.id} className="p-4 bg-[#0A4D68]/20 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <h4 className="text-white font-medium">{reservation.activity}</h4>
                                    <p className="text-gray-400 text-sm">
                                        {new Date(reservation.date).toLocaleDateString()} at {reservation.time}
                                    </p>
                                </div>
                                <Badge variant={getStatusVariant(reservation.status)}>
                                    {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                                </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-400">Location</p>
                                    <p className="text-white">{reservation.location}</p>
                                </div>
                                {reservation.instructor && (
                                    <div>
                                        <p className="text-gray-400">Instructor</p>
                                        <p className="text-white">{reservation.instructor}</p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-gray-400">Participants</p>
                                    <p className="text-white">
                                        {reservation.participants}/{reservation.maxParticipants}
                                    </p>
                                </div>
                            </div>

                            {reservation.status === 'confirmed' && (
                                <div className="mt-4 pt-4 border-t border-[#0A4D68] flex justify-end gap-2">
                                    <button className="text-gray-400 hover:text-white transition-colors text-sm">
                                        Reschedule
                                    </button>
                                    <button className="text-red-400 hover:text-red-300 transition-colors text-sm">
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
} 