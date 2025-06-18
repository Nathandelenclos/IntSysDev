"use client";

import {H3} from "@/components/typo/H3";
import {Card} from "@/components/ui/Card";
import {Badge} from "@/components/ui/Badge";
import {useToast} from "@/contexts/ToastContext";

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
    const { showToast } = useToast();

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

    const handleReschedule = (reservation: Reservation) => {
        showToast({
            type: "info",
            title: "Reschedule Feature",
            message: "Reschedule feature coming soon!",
            duration: 4000
        });
    };

    const handleCancel = (reservation: Reservation) => {
        showToast({
            type: "warning",
            title: "Cancel Reservation",
            message: `Are you sure you want to cancel your ${reservation.activity} session?`,
            duration: 5000
        });
    };

    const handleBookNew = () => {
        showToast({
            type: "info",
            title: "Book New Activity",
            message: "Redirecting to activities page...",
            duration: 3000
        });
    };

    return (
        <Card>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <H3>Recent Reservations</H3>
                    <button 
                        onClick={handleBookNew}
                        className="bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                        Book New Activity
                    </button>
                </div>
                <div className="space-y-4">
                    {mockReservations.map((reservation) => (
                        <div key={reservation.id} className="bg-[#0A4D68] rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-white font-semibold">{reservation.activity}</h4>
                                    <p className="text-gray-300 text-sm">{reservation.date} at {reservation.time}</p>
                                    <p className="text-gray-300 text-sm">{reservation.location}</p>
                                </div>
                                <Badge variant={getStatusVariant(reservation.status)}>
                                    {reservation.status}
                                </Badge>
                            </div>

                            {reservation.instructor && (
                                <p className="text-gray-300 text-sm mb-3">
                                    Instructor: {reservation.instructor}
                                </p>
                            )}

                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-300">
                                    {reservation.participants}/{reservation.maxParticipants} participants
                                </span>
                            </div>

                            {reservation.status === 'confirmed' && (
                                <div className="mt-4 pt-4 border-t border-[#0A4D68] flex justify-end gap-2">
                                    <button 
                                        onClick={() => handleReschedule(reservation)}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        Reschedule
                                    </button>
                                    <button 
                                        onClick={() => handleCancel(reservation)}
                                        className="text-red-400 hover:text-red-300 transition-colors text-sm"
                                    >
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