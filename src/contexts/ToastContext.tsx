"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast, ToastProps } from "@/components/ui/Toast";

interface ToastContextType {
    showToast: (toast: Omit<ToastProps, "id" | "onClose">) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const showToast = useCallback((toast: Omit<ToastProps, "id" | "onClose">) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast: ToastProps = {
            ...toast,
            id,
            onClose: removeToast,
        };
        setToasts(prev => [...prev, newToast]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast, removeToast }}>
            {children}
            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-[9999] space-y-2 max-w-sm">
                {toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
} 