"use client";

import {H3} from "@/components/typo/H3";
import {useAuth} from "@/contexts/AuthContext";
import {Card} from "@/components/ui/Card";
import {Badge} from "@/components/ui/Badge";
import {useToast} from "@/contexts/ToastContext";

interface Benefit {
    name: string;
    included: boolean;
}

const membershipBenefits: Record<string, Benefit[]> = {
    "Basic": [
        { name: "Access to fitness center", included: true },
        { name: "Group classes (2/week)", included: true },
        { name: "Wellness area", included: false },
        { name: "Personal trainer", included: false },
        { name: "Guest passes", included: false }
    ],
    "Premium": [
        { name: "Access to fitness center", included: true },
        { name: "Unlimited group classes", included: true },
        { name: "Wellness area", included: true },
        { name: "Personal trainer (1/month)", included: true },
        { name: "Guest passes (2/month)", included: true }
    ],
    "Elite": [
        { name: "Access to fitness center", included: true },
        { name: "Unlimited group classes", included: true },
        { name: "Wellness area", included: true },
        { name: "Personal trainer (4/month)", included: true },
        { name: "Guest passes (4/month)", included: true },
        { name: "Priority booking", included: true },
        { name: "Nutrition consultation", included: true }
    ]
};

export function Membership() {
    const { user } = useAuth();
    const { showToast } = useToast();

    if (!user) return null;

    const benefits = membershipBenefits[user.membership] || membershipBenefits["Basic"];

    const handleUpgradeMembership = () => {
        showToast({
            type: "info",
            title: "Upgrade Membership",
            message: "Redirecting to membership upgrade page...",
            duration: 4000
        });
    };

    return (
        <Card>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <H3 className="text-gray-800">Membership</H3>
                    <Badge variant="primary">{user.membership}</Badge>
                </div>
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <p className="text-gray-500">Member since</p>
                            <p className="text-gray-800 font-medium">{user.memberSince}</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-500">Next payment</p>
                            <p className="text-gray-800 font-medium">{user.nextPayment}</p>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-gray-800 font-medium mb-3">Benefits included:</h4>
                        <div className="space-y-2">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <svg 
                                        className={`w-5 h-5 ${benefit.included ? 'text-green-500' : 'text-gray-400'}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        {benefit.included ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        )}
                                    </svg>
                                    <span className={`${benefit.included ? 'text-gray-800' : 'text-gray-500'}`}>
                                        {benefit.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <button 
                            onClick={handleUpgradeMembership}
                            className="w-full bg-[#0A4D68] hover:bg-[#0A4D68]/80 text-white py-2 px-4 rounded-lg transition-colors"
                        >
                            Upgrade Membership
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
} 