"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message: string;
}

export default function SuccessModal({ isOpen, onClose, title = "Success!", message }: SuccessModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-[#4a9d5f] to-[#6bc97f] opacity-10 rounded-t-3xl -z-10" />

                        {/* Icon */}
                        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#4a9d5f] to-[#6bc97f] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                            <motion.svg
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-10 h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </motion.svg>
                        </div>

                        <h3 className="text-2xl font-bold text-[#3d4f6d] mb-3">{title}</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {message}
                        </p>

                        <button
                            onClick={onClose}
                            className="w-full py-3.5 bg-[#3d4f6d] hover:bg-[#2c3b52] text-white rounded-xl font-semibold transition-all transform active:scale-95 shadow-lg hover:shadow-xl"
                        >
                            Continue
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
