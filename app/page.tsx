"use client";

import { useState } from "react";
import { FaTools, FaRegLightbulb } from "react-icons/fa";
import AnimatedButton from "@/components/ui/AnimatedButton";
import WorldMapSection from "@/components/WorldMapSection";
import ClientLogos from "@/components/ClientLogos";
import SuccessModal from "@/components/ui/SuccessModal";

import { sendContactEmail } from "@/lib/actions";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <main>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message Sent!"
        message="Thank you for your message! We will get back to you soon."
      />
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-[#f0f4f8] via-[#e8f5e9] to-[#f3e5f5] py-24 min-h-[600px] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#3d4f6d] leading-tight">
                Hire experts &<br />
                Get your job done
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to <span className="font-semibold text-[#3d4f6d]">MaintainU</span>. We are dedicated to providing a
                comprehensive range of maintenance services tailored for the industrial sector.
              </p>
              <div className="pt-4">
                <AnimatedButton text="Get Started" href="#contact" />
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="/hero.svg"
                alt="Industrial maintenance services"
                className="w-full h-auto max-h-[600px] object-contain scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        {/* Background Image with reduced opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hifi.jpg')",
            opacity: 0.55,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-blue-50/90 to-purple-50/90" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-title text-center">WHY CHOOSE US?</p>
            <h2 className="heading-medium mb-10">About us</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At <span className="font-semibold text-[#3d4f6d]">MaintainU</span>, we specialize in comprehensive maintenance services for the industrial
                sector. Our experienced team brings extensive expertise in engineering and process industries.
              </p>
              <p>
                We provide electrical and mechanical maintenance and installations, ensuring your
                systems and machinery operate efficiently and reliably.
              </p>
              <p>
                Our mission is to deliver fast, efficient, safe, and cost-effective services. We are committed
                to exceeding your expectations with top-quality solutions at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal Layout */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-title text-center">OUR SERVICES</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3d4f6d] leading-tight">
              All kind of solutions for you
            </h2>
            <div className="w-16 h-1 bg-[#e85d75] mx-auto mt-6"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

              {/* Mechanical Services - Left */}
              <div className="flex flex-col items-center text-center flex-shrink-0">
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-[5px] border-[#e85d75] flex items-center justify-center mb-4">
                  <FaTools className="w-14 h-14 lg:w-16 lg:h-16 text-[#e85d75]" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#3d4f6d]">Mechanical<br />Services</h3>
              </div>

              {/* Service Pills - Center (Staggered Layout) */}
              <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 py-6">
                <div className="flex flex-col gap-5 items-center lg:items-end">
                  <div className="bg-[#5fcc6f] text-white px-6 py-5 rounded-full text-center font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer min-w-[160px lg:mr-6">
                    Overhaul and Repair
                  </div>
                  <div className="bg-[#5fcc6f] text-white px-6 py-5 rounded-full text-center font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer min-w-[160px] lg:-mr-6">
                    Parts Replacement
                  </div>
                </div>

                <div className="bg-[#5fcc6f] text-white px-6 py-5 rounded-full text-center font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer min-w-[180px] lg:mt-2">
                  Preventive Maintenance
                </div>

                <div className="flex flex-col gap-5 items-center lg:items-start">
                  <div className="bg-[#5fcc6f] text-white px-6 py-5 rounded-full text-center font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer min-w-[160px] lg:ml-6">
                    Machine Installations
                  </div>
                  <div className="bg-[#5fcc6f] text-white px-6 py-5 rounded-full text-center font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer min-w-[160px] lg:-ml-6">
                    Labour Contracting
                  </div>
                </div>
              </div>

              {/* Electrical Services - Right */}
              <div className="flex flex-col items-center text-center flex-shrink-0">
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-[5px] border-[#e85d75] flex items-center justify-center mb-4">
                  <FaRegLightbulb className="w-14 h-14 lg:w-16 lg:h-16 text-[#e85d75]" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#3d4f6d]">Electrical<br />Services</h3>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-title text-center">GET IN TOUCH</p>
            <h2 className="heading-medium">Contact us</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-10">
                <h3 className="text-2xl font-bold text-[#3d4f6d] mb-8">Send us a message</h3>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  if (resultMessage) setResultMessage(null); // Clear previous messages

                  try {
                    const result = await sendContactEmail(formData);
                    if (result.success) {
                      setShowSuccessModal(true); // Trigger Popup
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    } else {
                      setResultMessage({ type: "error", text: result.error || "Failed to send message." });
                    }
                  } catch (err) {
                    setResultMessage({ type: "error", text: "An unexpected error occurred." });
                  } finally {
                    setIsSubmitting(false);
                  }
                }} className="space-y-6">
                  {/* Only show error messages inline */}
                  {resultMessage && resultMessage.type === 'error' && (
                    <div className="p-4 rounded-lg mb-4 bg-red-50 text-red-700 border border-red-100">
                      {resultMessage.text}
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-700 font-medium mb-3 text-[15px]">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e85d75] focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e85d75] focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e85d75] focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-3 text-[15px]">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e85d75] focus:border-transparent transition-all resize-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-[#3d4f6d] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-5 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#e85d75] to-[#d54d65] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3d4f6d] mb-2 text-lg">Address</h4>
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
                      <h4 className="font-bold text-[#3d4f6d] mb-2 text-lg">Phone</h4>
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
                      <h4 className="font-bold text-[#3d4f6d] mb-2 text-lg">Email</h4>
                      <p className="text-gray-600">maintainu.in@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with World Map */}
      <WorldMapSection />
    </main>
  );
}
