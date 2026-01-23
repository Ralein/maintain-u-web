"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// Adding custom CSS for smooth infinite scroll
const marqueeStyles = `
  @keyframes marquee-left {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @keyframes marquee-right {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }
  .animate-marquee-left {
    animation: marquee-left 45s linear infinite;
  }
  .animate-marquee-right {
    animation: marquee-right 45s linear infinite;
  }
  .paused {
    animation-play-state: paused !important;
  }
`;

const clients = [
    { name: 'HONDA', color: '#cc0000' },
    { name: 'TEAL', color: '#2c5f2d' },
    { name: 'Blubee', color: '#0066cc' },
    { name: 'VE', color: '#1a1a1a' },
    { name: 'DB Santasalo', color: '#d32f2f' },
    { name: 'CUMI', color: '#1976d2' },
    { name: 'PSP', color: '#0288d1' },
    { name: 'MAN', color: '#e53935' },
    { name: 'MAGTORQ', color: '#f57c00' },
    { name: 'OSRT', color: '#0097a7' },
    { name: 'VINIR', color: '#c62828' },
    { name: 'BPS', color: '#1565c0' }
];

const firstRow = clients.slice(0, 6);
const secondRow = clients.slice(6, 12);

export default function ClientLogos() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <motion.div
                className="container mx-auto px-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-center text-4xl font-bold text-[#3d4f6d]" style={{ fontFamily: 'cursive' }}>
                    Our Clients
                </h2>
            </motion.div>

            <div className="flex flex-col gap-16">
                <MarqueeRow clients={firstRow} direction="right" speed={45} />
                <MarqueeRow clients={secondRow} direction="left" speed={45} />
            </div>
        </section>
    );
}

function MarqueeRow({ clients, direction, speed }: { clients: { name: string, color: string }[], direction: "left" | "right", speed: number }) {
    const [isPaused, setIsPaused] = useState(false);
    // Duplicate content enough times to ensure smooth loop
    const content = [...clients, ...clients, ...clients, ...clients];

    return (
        <div
            className="relative w-full overflow-hidden flex"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <style>{marqueeStyles}</style>
            <div className="absolute inset-y-0 left-0 w-12 lg:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 lg:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
                className={`flex gap-8 lg:gap-24 flex-shrink-0 items-center px-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
                    } ${isPaused ? 'paused' : ''}`}
                style={{
                    willChange: "transform",
                    animationDuration: `${speed}s`
                }}
            >
                {content.map((client, index) => (
                    <ClientCard key={`${client.name}-${index}`} client={client} isPaused={isPaused} />
                ))}
            </div>
        </div>
    )
}

function ClientCard({ client, isPaused }: { client: { name: string, color: string }, isPaused: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="flex-shrink-0 flex items-center justify-center p-4 min-w-[120px] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                scale: 1.15,
                y: -8,
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
        >
            <motion.div
                className="relative"
                animate={{
                    filter: isHovered ? "brightness(1.2)" : "brightness(1)"
                }}
            >
                <motion.h3
                    className="text-2xl lg:text-3xl font-bold whitespace-nowrap relative z-10"
                    style={{ color: client.color }}
                    animate={{
                        textShadow: isHovered
                            ? `0 0 20px ${client.color}40, 0 0 40px ${client.color}20`
                            : "0 0 0px transparent"
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {client.name}
                </motion.h3>

                {/* Animated underline */}
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 rounded-full"
                    style={{ backgroundColor: client.color }}
                    initial={{ width: 0 }}
                    animate={{
                        width: isHovered ? "100%" : "0%",
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                />

                {/* Glow effect on hover */}
                <motion.div
                    className="absolute inset-0 rounded-lg blur-xl -z-10"
                    style={{ backgroundColor: client.color }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: isHovered ? 0.2 : 0,
                        scale: isHovered ? 1.2 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    );
}