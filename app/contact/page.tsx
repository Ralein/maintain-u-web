"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main>
      {/* Contact Header Section */}
      <section className="py-24 bg-gradient-to-br from-[#f0f4f8] via-[#e8f5e9] to-[#f3e5f5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#3d4f6d] leading-tight mb-6">Contact us</h1>
            <p className="text-gray-600 text-lg">
              Get in touch with us for all your maintenance needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-10">
                <h2 className="text-3xl font-bold text-[#3d4f6d] mb-8">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-3 text-[15px]">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e85d75] focus:border-transparent transition-all bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-3 text-[15px]">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e85d75] focus:border-transparent transition-all bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-3 text-[15px]">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e85d75] focus:border-transparent transition-all bg-white"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-3 text-[15px]">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e85d75] focus:border-transparent transition-all resize-none bg-white"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#3d4f6d] mb-10">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-5 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#e85d75] to-[#d54d65] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3d4f6d] mb-2 text-lg">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        MaintainU, Plot-15, Phase-2,<br />
                        Mahalakshmi Nagar, Hosur-635109
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#e85d75] to-[#d54d65] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3d4f6d] mb-2 text-lg">Phone</h3>
                      <p className="text-gray-600">
                        +91 8778835471<br />
                        +91 9486739127
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#e85d75] to-[#d54d65] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3d4f6d] mb-2 text-lg">Email</h3>
                      <p className="text-gray-600">maintainu.in@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, #3d4f6d 2px, transparent 2px)', 
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d4f6d] mb-6 leading-tight">
            Interested To<br />
            Get Our Service?
          </h2>
          <Link href="/contact" className="btn-primary text-lg mt-4">
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
