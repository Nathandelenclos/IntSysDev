"use client";

import {ActivitySchedule as ActivityScheduleType} from "@/types/activity";

interface WeeklyScheduleProps {
    schedule: ActivityScheduleType;
    onCLickTimeSlot?: (day: string, time: string) => void;
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const TIME_SLOTS = [
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];

export function WeeklySchedule({ schedule, onCLickTimeSlot }: WeeklyScheduleProps) {
    // Fonction pour vérifier si un créneau est occupé
    const isTimeSlotOccupied = (day: string, time: string) => {
        const daySchedule = schedule.schedules.find(s => s.day === day);
        if (!daySchedule) return false;

        return daySchedule.timeSlots.some(slot => {
            const slotStart = parseInt(slot.start.split(":")[0]);
            const slotEnd = parseInt(slot.end.split(":")[0]);
            const currentTime = parseInt(time.split(":")[0]);
            return currentTime >= slotStart && currentTime < slotEnd;
        });
    };

    // Fonction pour obtenir la couleur du créneau
    const getTimeSlotColor = (day: string, time: string) => {
        const daySchedule = schedule.schedules.find(s => s.day === day);
        if (!daySchedule) return null;

        const slot = daySchedule.timeSlots.find(slot => {
            const slotStart = parseInt(slot.start.split(":")[0]);
            const slotEnd = parseInt(slot.end.split(":")[0]);
            const currentTime = parseInt(time.split(":")[0]);
            return currentTime >= slotStart && currentTime < slotEnd;
        });

        return slot?.color || null;
    };

    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-[800px]">
                {/* En-tête avec les jours */}
                <div className="grid grid-cols-8 gap-1 mb-2">
                    <div className="w-20"></div>
                    {DAYS.map(day => (
                        <div key={day} className="text-center font-medium text-sm text-gray-800 bg-gray-100 py-2 rounded-t border border-gray-200">
                            {day.slice(0, 3)}
                        </div>
                    ))}
                </div>

                {/* Grille des horaires */}
                <div className="grid grid-cols-8 gap-1">
                    {/* Colonne des heures */}
                    <div className="flex flex-col">
                        {TIME_SLOTS.map(time => (
                            <div key={time} className="h-12 text-sm text-gray-700 bg-gray-100 flex items-center px-2 border border-gray-200">
                                {time}
                            </div>
                        ))}
                    </div>

                    {/* Colonnes des jours */}
                    {DAYS.map(day => (
                        <div key={day} className="flex flex-col">
                            {TIME_SLOTS.map(time => {
                                const isOccupied = isTimeSlotOccupied(day, time);
                                const slotColor = getTimeSlotColor(day, time);
                                return (
                                    <div
                                        key={`${day}-${time}`}
                                        onClick={!isOccupied ? undefined : () => onCLickTimeSlot?.(day, time)}
                                        className={`h-12 border border-gray-200 rounded ${
                                            isOccupied
                                                ? "cursor-pointer hover:opacity-90 transition-opacity shadow-sm"
                                                : "bg-gray-50 cursor-not-allowed"
                                        } flex items-center justify-center`}
                                        style={{
                                            backgroundColor: isOccupied ? slotColor || "#FFD600" : undefined,
                                            color: isOccupied ? "#000000" : "#6B7280"
                                        }}
                                        role="button"
                                        aria-label={isOccupied ? `Book ${day} at ${time}` : `No class available on ${day} at ${time}`}
                                        tabIndex={isOccupied ? 0 : -1}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 