"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from './ToastContext';

interface User {
    id: string;
    name: string;
    email: string;
    membership: string;
    memberSince: string;
    nextPayment: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUser: User = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    membership: "Premium",
    memberSince: "January 2024",
    nextPayment: "January 2025"
};

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const { showToast } = useToast();

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulation d'une requête d'authentification
        if (email && password) {
            // Simuler un délai de réseau
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Simuler une connexion réussie
            setUser(mockUser);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        showToast({
            type: "info",
            title: "Logged Out",
            message: "You have been successfully logged out.",
            duration: 3000
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 