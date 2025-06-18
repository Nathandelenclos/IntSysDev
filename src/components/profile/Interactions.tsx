"use client";

import {H3} from "@/components/typo/H3";
import {Card} from "@/components/ui/Card";

interface Interaction {
    id: string;
    type: 'like' | 'comment' | 'share';
    article: string;
    date: string;
    content?: string;
    author?: string;
    likes?: number;
    replies?: number;
}

const mockInteractions: Interaction[] = [
    {
        id: "1",
        type: "like",
        article: "The Benefits of Morning Exercise",
        date: "2024-03-18",
        author: "Dr. Sarah Wilson",
        likes: 245
    },
    {
        id: "2",
        type: "comment",
        article: "Nutrition Tips for Athletes",
        date: "2024-03-15",
        content: "These tips are really helpful! I've been following them for a month now and I can feel the difference in my performance.",
        author: "You",
        likes: 12,
        replies: 3
    },
    {
        id: "3",
        type: "share",
        article: "Meditation Techniques for Beginners",
        date: "2024-03-10",
        author: "Mike Thompson",
        likes: 89
    }
];

export function Interactions() {
    const getInteractionIcon = (type: Interaction['type']) => {
        switch (type) {
            case 'like':
                return (
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                );
            case 'comment':
                return (
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                );
            case 'share':
                return (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                );
        }
    };

    return (
        <Card>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <H3>Recent Interactions</H3>
                    <button className="text-gray-400 hover:text-white transition-colors text-sm">
                        View All
                    </button>
                </div>
                <div className="space-y-4">
                    {mockInteractions.map((interaction) => (
                        <div key={interaction.id} className="p-4 bg-[#0A4D68]/20 rounded-lg">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    {getInteractionIcon(interaction.type)}
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-white font-medium">{interaction.article}</h4>
                                        <span className="text-gray-400 text-sm">
                                            {new Date(interaction.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2">
                                        {interaction.type.charAt(0).toUpperCase() + interaction.type.slice(1)} by {interaction.author}
                                    </p>
                                    {interaction.content && (
                                        <p className="text-white text-sm mb-3">{interaction.content}</p>
                                    )}
                                    <div className="flex items-center gap-4 text-sm">
                                        {interaction.likes !== undefined && (
                                            <div className="flex items-center gap-1 text-gray-400">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                </svg>
                                                {interaction.likes}
                                            </div>
                                        )}
                                        {interaction.replies !== undefined && (
                                            <div className="flex items-center gap-1 text-gray-400">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                                </svg>
                                                {interaction.replies}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
} 