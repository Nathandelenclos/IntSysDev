"use client";

import { ActivitySchedule as ActivityScheduleType } from "@/types/activity";

interface ActivityScheduleProps {
    schedule: ActivityScheduleType;
}

export function ActivitySchedule({ schedule }: ActivityScheduleProps) {
    // Fonction pour formater l'heure (ex: "07:00" -> "7:00 AM")
    const formatTime = (time: string) => {
        const [hours, minutes] = time.split(":");
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minutes} ${ampm}`;
    };

    // Fonction pour formater un créneau horaire
    const formatTimeSlot = (slot: { start: string; end: string }) => {
        return `${formatTime(slot.start)} – ${formatTime(slot.end)}`;
    };

    // Grouper les jours qui ont les mêmes horaires
    const groupedSchedules = schedule.schedules.reduce((acc, curr) => {
        const timeSlotsKey = JSON.stringify(curr.timeSlots);
        if (!acc[timeSlotsKey]) {
            acc[timeSlotsKey] = {
                days: [],
                timeSlots: curr.timeSlots,
            };
        }
        acc[timeSlotsKey].days.push(curr.day);
        return acc;
    }, {} as Record<string, { days: string[]; timeSlots: typeof schedule.schedules[0]["timeSlots"] }>);

    return (
        <div className="flex flex-col gap-4">
            {Object.values(groupedSchedules).map((group, index) => (
                <div key={index} className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
                    <div className="flex flex-wrap gap-1">
                        {group.days.map((day, dayIndex) => (
                            <span key={day} className="font-medium text-white">
                                {day}
                                {dayIndex < group.days.length - 1 && ","}
                            </span>
                        ))}
                        <span className="text-white">:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {group.timeSlots.map((slot, slotIndex) => (
                            <span 
                                key={slotIndex} 
                                className="text-white font-medium"
                                style={{ color: slot.color || "#FFFFFF" }}
                            >
                                {formatTimeSlot(slot)}
                                {slotIndex < group.timeSlots.length - 1 && ","}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
} 