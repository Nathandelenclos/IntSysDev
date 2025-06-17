export interface TimeSlot {
    start: string; // Format: "HH:mm"
    end: string;   // Format: "HH:mm"
    color?: string; // Optional color for the time slot
}

export interface DaySchedule {
    day: string;
    timeSlots: TimeSlot[];
}

export interface ActivitySchedule {
    schedules: DaySchedule[];
}

export interface Coach {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
    specialties: string[];
    certifications: string[];
} 