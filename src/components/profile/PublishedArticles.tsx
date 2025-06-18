"use client";

import {H3} from "@/components/typo/H3";
import {Card} from "@/components/ui/Card";
import {Badge} from "@/components/ui/Badge";
import {useToast} from "@/contexts/ToastContext";

interface Article {
    id: string;
    title: string;
    date: string;
    status: 'published' | 'draft' | 'review';
    views: number;
    likes: number;
    comments: number;
    category: string;
    readTime: string;
    excerpt: string;
}

const mockArticles: Article[] = [
    {
        id: "1",
        title: "The Science of Sleep and Recovery",
        date: "2024-03-15",
        status: "published",
        views: 1234,
        likes: 89,
        comments: 23,
        category: "Wellness",
        readTime: "8 min read",
        excerpt: "Understanding the crucial role of sleep in athletic performance and recovery..."
    },
    {
        id: "2",
        title: "Nutrition for Peak Performance",
        date: "2024-03-10",
        status: "published",
        views: 856,
        likes: 45,
        comments: 12,
        category: "Nutrition",
        readTime: "6 min read",
        excerpt: "Essential nutrition strategies to optimize your training and competition results..."
    },
    {
        id: "3",
        title: "Mindfulness in Training",
        date: "2024-03-05",
        status: "draft",
        views: 0,
        likes: 0,
        comments: 0,
        category: "Mental Health",
        readTime: "5 min read",
        excerpt: "How incorporating mindfulness practices can enhance your athletic performance..."
    }
];

export function PublishedArticles() {
    const { showToast } = useToast();

    const getStatusVariant = (status: Article['status']) => {
        switch (status) {
            case 'published':
                return 'success';
            case 'draft':
                return 'warning';
            case 'review':
                return 'primary';
        }
    };

    const handleWriteNewArticle = () => {
        showToast({
            type: "info",
            title: "Create New Article",
            message: "Redirecting to article creation page...",
            duration: 3000
        });
    };

    return (
        <Card>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <H3>Published Articles</H3>
                    <button 
                        onClick={handleWriteNewArticle}
                        className="bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                        Write New Article
                    </button>
                </div>
                <div className="space-y-4">
                    {mockArticles.map((article) => (
                        <div key={article.id} className="bg-[#0A4D68] rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                    <h4 className="text-white font-semibold mb-1">{article.title}</h4>
                                    <p className="text-gray-300 text-sm mb-2">{article.excerpt}</p>
                                    <div className="flex items-center gap-4 text-xs text-gray-400">
                                        <span>{article.category}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                        <span>•</span>
                                        <span>{new Date(article.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <Badge variant={getStatusVariant(article.status)}>
                                    {article.status}
                                </Badge>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex gap-4 text-sm">
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                        {article.views}
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        {article.likes}
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                        </svg>
                                        {article.comments}
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