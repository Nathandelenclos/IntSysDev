"use client";

import {useState} from "react";
import {AnimatedButton, AnimatedElement, AnimatedPage} from "@/components/common/AnimatedPage";
import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqData: FAQItem[] = [
    // Opening Hours
    {
        question: "What are your opening hours?",
        answer: "We are open Monday to Friday from 6:00 AM to 10:00 PM, Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM.",
        category: "hours"
    },
    {
        question: "Are you open on public holidays?",
        answer: "We are closed on major public holidays (Christmas, New Year's Day, May 1st). For other public holidays, please check our homepage or contact us.",
        category: "hours"
    },
    {
        question: "Are there specific schedules for group classes?",
        answer: "Yes, group classes have fixed schedules. Check our online schedule or at the front desk for detailed timings.",
        category: "hours"
    },

    // Pricing
    {
        question: "What are your subscription rates?",
        answer: "We offer several plans: monthly subscription (€49), quarterly (€129), semi-annual (€229), and annual (€399). Discounts are available for students and seniors.",
        category: "pricing"
    },
    {
        question: "Are there registration fees?",
        answer: "Yes, a €25 registration fee applies to new members. This includes access to changing rooms and entry badge.",
        category: "pricing"
    },
    {
        question: "Do you offer pay-per-session rates?",
        answer: "Yes, you can pay per session for €12. However, a subscription remains more cost-effective if you come regularly.",
        category: "pricing"
    },
    {
        question: "Are there discounts for couples or families?",
        answer: "Yes, we offer 15% discounts for couples and 20% for families of 3 or more people.",
        category: "pricing"
    },

    // Subscriptions
    {
        question: "How can I cancel my subscription?",
        answer: "You can cancel your subscription by contacting us by email or in person, with 30 days notice. No cancellation fees apply.",
        category: "subscriptions"
    },
    {
        question: "Can I pause my subscription?",
        answer: "Yes, you can pause your subscription for medical or personal reasons, up to 3 months maximum per year.",
        category: "subscriptions"
    },
    {
        question: "Is my subscription transferable?",
        answer: "No, subscriptions are personal and cannot be transferred to another person.",
        category: "subscriptions"
    },
    {
        question: "Is there a minimum commitment?",
        answer: "No, our subscriptions are commitment-free. You can cancel at any time with 30 days notice.",
        category: "subscriptions"
    },

    // Equipment and Services
    {
        question: "Do you offer personal training sessions?",
        answer: "Yes, we offer personal training sessions starting at €45 per session. Packages are available for series of sessions.",
        category: "services"
    },
    {
        question: "Are there changing rooms and showers?",
        answer: "Yes, we have men's and women's changing rooms with showers, lockers, and hair dryers. Towels are provided.",
        category: "services"
    },
    {
        question: "Can I bring my children?",
        answer: "Yes, we have a kids area for children aged 3 to 12. Childcare service is available during your workouts.",
        category: "services"
    },
    {
        question: "Is there parking available?",
        answer: "Yes, we have free parking for our members, accessible during our opening hours.",
        category: "services"
    }
];

const categories = [
    { id: "all", name: "All Questions" },
    { id: "hours", name: "Opening Hours" },
    { id: "pricing", name: "Pricing" },
    { id: "subscriptions", name: "Subscriptions" },
    { id: "services", name: "Equipment & Services" }
];

export default function FAQ() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [openItems, setOpenItems] = useState<number[]>([]);

    const filteredFAQ = selectedCategory === "all" 
        ? faqData 
        : faqData.filter(item => item.category === selectedCategory);

    const toggleItem = (index: number) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <main className="min-h-screen">
            <Header />

            <AnimatedPage>
                <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-8 bg-white min-h-screen p-6">
                    <AnimatedElement delay={0.1}>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Find quick answers to your questions about our services, hours, and pricing.
                            </p>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement delay={0.2}>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <AnimatedButton
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                                        selectedCategory === category.id
                                            ? "bg-[#FFD600] text-black"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    {category.name}
                                </AnimatedButton>
                            ))}
                        </div>
                    </AnimatedElement>

                    <AnimatedElement delay={0.3}>
                        <div className="space-y-4">
                            {filteredFAQ.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-gray-900 font-medium text-sm sm:text-base">
                                            {item.question}
                                        </span>
                                        <span className="text-[#FFD600] text-xl font-bold">
                                            {openItems.includes(index) ? "−" : "+"}
                                        </span>
                                    </button>
                                    {openItems.includes(index) && (
                                        <div className="px-6 pb-4">
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </AnimatedElement>

                    <AnimatedElement delay={0.4}>
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Can&#39;t find your answer?
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base mb-4">
                                Our team is here to help. Don&#39;t hesitate to contact us.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <AnimatedButton className="bg-[#FFD600] text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-500 transition-colors">
                                    <a href="/contact">Contact Us</a>
                                </AnimatedButton>
                                <AnimatedButton className="bg-gray-700 text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">
                                    <a href="tel:+33123456789">Call Us</a>
                                </AnimatedButton>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </AnimatedPage>
            <Footer/>
        </main>
    );
} 