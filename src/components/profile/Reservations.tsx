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
    category: 'fitness' | 'wellness';
}

const mockReservations: Reservation[] = [
    {
        id: "1",
        activity: "CrossFit",
        date: "2024-03-20",
        time: "10:00",
        status: "confirmed",
        location: "CrossFit Room",
        instructor: "Mike Thompson",
        participants: 12,
        maxParticipants: 15,
        category: "fitness"
    },
    {
        id: "2",
        activity: "Pilates",
        date: "2024-03-22",
        time: "14:00",
        status: "pending",
        location: "Pilates Studio",
        instructor: "Sarah Johnson",
        participants: 8,
        maxParticipants: 12,
        category: "fitness"
    },
    {
        id: "3",
        activity: "Zumba",
        date: "2024-03-25",
        time: "18:30",
        status: "confirmed",
        location: "Dance Studio",
        instructor: "Maria Rodriguez",
        participants: 20,
        maxParticipants: 25,
        category: "fitness"
    },
    {
        id: "4",
        activity: "Sauna",
        date: "2024-03-21",
        time: "16:00",
        status: "confirmed",
        location: "Wellness Area",
        participants: 1,
        maxParticipants: 1,
        category: "wellness"
    },
    {
        id: "5",
        activity: "Massage",
        date: "2024-03-24",
        time: "11:00",
        status: "confirmed",
        location: "Massage Room",
        instructor: "Emma Wilson",
        participants: 1,
        maxParticipants: 1,
        category: "wellness"
    },
    {
        id: "6",
        activity: "Mom Sessions",
        date: "2024-03-26",
        time: "09:00",
        status: "cancelled",
        location: "Specialized Studio",
        instructor: "Lisa Chen",
        participants: 0,
        maxParticipants: 10,
        category: "fitness"
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

    const getCategoryColor = (category: Reservation['category']) => {
        return category === 'fitness' ? 'from-blue-50 to-blue-100 border-blue-200' : 'from-purple-50 to-purple-100 border-purple-200';
    };

    const getCategoryIcon = (category: Reservation['category']) => {
        return category === 'fitness' ? '💪' : '🧘';
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleReschedule = (_: Reservation) => {
        showToast({
            type: "info",
            title: "Reschedule",
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
                    <H3 className="text-gray-800">Recent Reservations</H3>
                    <button 
                        onClick={handleBookNew}
                        className="bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                        Book New Activity
                    </button>
                </div>
                <div className="space-y-4">
                    {mockReservations.map((reservation) => (
                        <div key={reservation.id} className={`bg-gradient-to-r ${getCategoryColor(reservation.category)} rounded-lg p-4 border`}>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{getCategoryIcon(reservation.category)}</span>
                                    <div>
                                        <h4 className="text-gray-800 font-semibold">{reservation.activity}</h4>
                                        <p className="text-gray-600 text-sm">{reservation.date} at {reservation.time}</p>
                                        <p className="text-gray-600 text-sm">{reservation.location}</p>
                                    </div>
                                </div>
                                <Badge variant={getStatusVariant(reservation.status)}>
                                    {reservation.status === 'confirmed' ? 'Confirmed' : 
                                     reservation.status === 'pending' ? 'Pending' : 'Cancelled'}
                                </Badge>
                            </div>

                            {reservation.instructor && (
                                <p className="text-gray-600 text-sm mb-3">
                                    {reservation.category === 'wellness' ? 'Practitioner' : 'Instructor'}: {reservation.instructor}
                                </p>
                            )}

                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">
                                    {reservation.participants}/{reservation.maxParticipants} participants
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    reservation.category === 'fitness' 
                                        ? 'bg-blue-200 text-blue-800' 
                                        : 'bg-purple-200 text-purple-800'
                                }`}>
                                    {reservation.category === 'fitness' ? 'Fitness' : 'Wellness'}
                                </span>
                            </div>

                            {reservation.status === 'confirmed' && (
                                <div className="mt-4 pt-4 border-t border-gray-300 flex justify-end gap-2">
                                    <button 
                                        onClick={() => handleReschedule(reservation)}
                                        className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                                    >
                                        Reschedule
                                    </button>
                                    <button 
                                        onClick={() => handleCancel(reservation)}
                                        className="text-red-600 hover:text-red-800 transition-colors text-sm"
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