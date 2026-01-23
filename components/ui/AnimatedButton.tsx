"use client";

import { useState, useEffect } from "react";

interface AnimatedButtonProps {
    text?: string;
    href?: string;
    onClick?: () => void;
}

export default function AnimatedButton({
    text = "Get Started",
    href = "#contact",
    onClick,
}: AnimatedButtonProps) {
    const [animationPhase, setAnimationPhase] = useState(0);
    const [currentDiagonal, setCurrentDiagonal] = useState(-1);

    const rows = 5;
    const cols = 7;
    const totalDots = rows * cols;
    const totalDiagonals = rows + cols - 1;

    useEffect(() => {
        let animTimer: NodeJS.Timeout;
        let phaseTimer: NodeJS.Timeout;

        const runAnimation = () => {
            setAnimationPhase(0);
            setCurrentDiagonal(-1);

            let diag = 0;
            animTimer = setInterval(() => {
                if (diag < totalDiagonals) {
                    setCurrentDiagonal(diag);
                    diag++;
                } else {
                    clearInterval(animTimer);
                    phaseTimer = setTimeout(() => {
                        setAnimationPhase(1);
                        phaseTimer = setTimeout(() => {
                            runAnimation();
                        }, 1000);
                    }, 600);
                }
            }, 100); // Slower interval for diagonal waves
        };

        runAnimation();

        return () => {
            clearInterval(animTimer);
            clearTimeout(phaseTimer);
        };
    }, [totalDiagonals]);

    const getDotStyle = (index: number) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const diagonalIndex = row + col;

        const isVisible = diagonalIndex <= currentDiagonal;
        const isFading = animationPhase === 1;

        return {
            opacity: isFading ? 0 : isVisible ? 0.8 : 0,
            transform: isVisible && !isFading ? "scale(1)" : "scale(0)",
            transition: isFading
                ? "opacity 0.6s ease-out, transform 0.6s ease-out"
                : "opacity 0.2s ease-out, transform 0.2s ease-out",
        };
    };

    const isGlowing = currentDiagonal > 2 && animationPhase === 0;

    const ButtonInner = (
        <>
            {text}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </>
    );

    const buttonClasses = `
        relative z-10
        bg-gradient-to-r from-[#e85d75] to-[#d54d65]
        text-white font-semibold text-lg
        px-10 py-4 rounded-full
        shadow-lg
        transition-all duration-300
        inline-flex items-center gap-2
        hover:shadow-xl hover:-translate-y-0.5
        ${isGlowing ? "shadow-[0_0_25px_rgba(232,93,117,0.4)]" : ""}
    `;

    return (
        <div className="relative inline-block">
            {/* Button positioned at top-left (a1 position) */}
            {href ? (
                <a href={href} onClick={onClick} className={buttonClasses}>
                    {ButtonInner}
                </a>
            ) : (
                <button onClick={onClick} className={buttonClasses}>
                    {ButtonInner}
                </button>
            )}

            {/* Dot Grid extending to the right and below the button */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "15px",
                    left: "25px",
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    rowGap: "10px",
                    width: "220px",
                    height: "auto",
                    zIndex: 0,
                }}
            >
                {Array.from({ length: totalDots }).map((_, index) => (
                    <div
                        key={index}
                        className="w-1 h-1 rounded-full bg-black/50"
                        style={getDotStyle(index)}
                    />
                ))}
            </div>
        </div>
    );
}
