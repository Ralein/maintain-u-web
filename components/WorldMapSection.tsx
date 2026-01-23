"use client";
import { WorldMap } from "@/components/ui/world-map";
import Link from "next/link";

export default function WorldMapSection() {
    return (
        <section className="py-10 md:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden min-h-[350px] md:min-h-[550px]">
            {/* Background Map - Full section coverage */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="max-w-[350%] md:max-w-[130%] lg:max-w-[110%] w-[350%] md:w-[130%] lg:w-[110%] md:max-w-[1600px] opacity-50">
                    <WorldMap
                        lineColor="#e57373"
                        dots={[
                            {
                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                            },
                            {
                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            },
                               {
                                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                            },
                            {
                                start: { lat: 51.5074, lng: -0.1278 }, // London
                                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            },
                            {
                                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                            },
                            {
                                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                            },
                        ]}
                    />
                </div>
            </div>

            {/* Content overlay */}
            <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center min-h-[250px] md:min-h-[350px]">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3d4f6d] mb-8 leading-tight drop-shadow-sm">
                    Interested To<br />
                    Get Our Service?
                </h2>
                <Link
                    href="/#contact"
                    className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
