"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedPageProps {
    children: ReactNode;
    className?: string;
}

export function AnimatedPage({ children, className = "" }: AnimatedPageProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                staggerChildren: 0.1
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedElement({ 
    children, 
    className = "",
    delay = 0,
    direction = "up"
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}) {
    const getInitialPosition = () => {
        switch (direction) {
            case "up": return { y: 30, opacity: 0 };
            case "down": return { y: -30, opacity: 0 };
            case "left": return { x: 30, opacity: 0 };
            case "right": return { x: -30, opacity: 0 };
            default: return { y: 30, opacity: 0 };
        }
    };

    const getAnimatePosition = () => {
        switch (direction) {
            case "up": return { y: 0, opacity: 1 };
            case "down": return { y: 0, opacity: 1 };
            case "left": return { x: 0, opacity: 1 };
            case "right": return { x: 0, opacity: 1 };
            default: return { y: 0, opacity: 1 };
        }
    };

    return (
        <motion.div
            initial={getInitialPosition()}
            animate={getAnimatePosition()}
            transition={{ 
                duration: 0.6, 
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedBackground({ 
    children, 
    className = "",
    backgroundImage = "",
    delay = 0
}: {
    children: ReactNode;
    className?: string;
    backgroundImage?: string;
    delay?: number;
}) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Background animé */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ 
                    duration: 1.2, 
                    delay,
                    ease: "easeOut"
                }}
            />
            
            {/* Contenu */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export function AnimatedOnScroll({ 
    children, 
    className = "",
    delay = 0,
    direction = "up",
    threshold = 0.1
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    threshold?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true, 
        amount: threshold,
        margin: "-100px 0px -100px 0px"
    });

    const getInitialPosition = () => {
        switch (direction) {
            case "up": return { y: 50, opacity: 0 };
            case "down": return { y: -50, opacity: 0 };
            case "left": return { x: 50, opacity: 0 };
            case "right": return { x: -50, opacity: 0 };
            default: return { y: 50, opacity: 0 };
        }
    };

    const getAnimatePosition = () => {
        switch (direction) {
            case "up": return { y: 0, opacity: 1 };
            case "down": return { y: 0, opacity: 1 };
            case "left": return { x: 0, opacity: 1 };
            case "right": return { x: 0, opacity: 1 };
            default: return { y: 0, opacity: 1 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitialPosition()}
            animate={isInView ? getAnimatePosition() : getInitialPosition()}
            transition={{ 
                duration: 0.8, 
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedButton({ 
    children, 
    className = "",
    onClick,
    disabled = false
}: {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </motion.button>
    );
}

export function AnimatedCard({ 
    children, 
    className = "",
    delay = 0
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay,
                ease: "easeOut"
            }}
            whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
            }}
            className={`overflow-visible ${className}`}
        >
            {children}
        </motion.div>
    );
} 