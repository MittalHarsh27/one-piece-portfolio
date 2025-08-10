"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your.email@example.com",
    color: "hover:text-red-500",
    description: "Send a direct message"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
    color: "hover:text-gray-800",
    description: "Check out my code"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-600",
    description: "Let&apos;s connect professionally"
  }
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: ""
  });

  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending transmission..." });

    // Simulate form submission
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus({
          type: "success",
          message: "Message received! The transponder snail is happy! 🐌"
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Play success sound if enabled
        if (soundEnabled) {
          // You can add actual sound here
          console.log("🎵 Transponder snail sound effect!");
        }
      } else {
        setStatus({
          type: "error",
          message: "Please fill in all required fields!"
        });
      }
    }, 2000);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-ocean-blue to-ocean-blue-800 text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating transponder snails */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            🐌
          </motion.div>
        ))}
        
        {/* Signal waves */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-96 h-96 border-2 border-white rounded-full" />
          <div className="absolute top-8 left-8 w-80 h-80 border-2 border-white rounded-full" />
          <div className="absolute top-16 left-16 w-64 h-64 border-2 border-white rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-manga text-4xl sm:text-5xl lg:text-6xl text-blue-800 mb-6"
            animate={{
              textShadow: [
                "0 0 10px #F0B90B",
                "0 0 20px #F0B90B", 
                "0 0 10px #F0B90B"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Send a Transponder Snail
          </motion.h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to join the crew or start a new adventure? Drop me a message through the 
            transponder snail network. I&apos;m always excited to discuss new projects and opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              {/* Transponder Snail Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="text-4xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🐌
                  </motion.div>
                  <div>
                    <h3 className="font-manga text-2xl text-blue-800">Transponder Snail</h3>
                    <p className="text-white/70 text-sm">Status: Ready to transmit</p>
                  </div>
                </div>
                
                {/* Sound toggle */}
                <motion.button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    soundEnabled ? "bg-straw-hat text-black" : "bg-white/20 text-white"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={`Sound effects ${soundEnabled ? "enabled" : "disabled"}`}
                >
                  <span className="text-lg">{soundEnabled ? "🔊" : "🔇"}</span>
                </motion.button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Captain&apos;s Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-straw-hat focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Transponder Frequency *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-straw-hat focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
                    Mission Type
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-straw-hat focus:border-transparent transition-all"
                    placeholder="e.g., New Project, Job Opportunity, Collaboration"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                    Transmission Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-straw-hat focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project, idea, or just say hello! I&apos;m always excited to hear from fellow adventurers."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.type === "loading"}
                  className={cn(
                    "w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300",
                    "flex items-center justify-center space-x-2",
                    status.type === "loading"
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-straw-hat text-black hover:bg-straw-hat/90 hover:scale-105"
                  )}
                  whileHover={status.type !== "loading" ? { scale: 1.05 } : {}}
                  whileTap={status.type !== "loading" ? { scale: 0.95 } : {}}
                >
                  {status.type === "loading" ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Transmission</span>
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={cn(
                        "flex items-center space-x-2 p-4 rounded-lg",
                        status.type === "success"
                          ? "bg-green-500/20 text-green-200 border border-green-500/30"
                          : status.type === "error"
                          ? "bg-red-500/20 text-red-200 border border-red-500/30"
                          : "bg-blue-500/20 text-blue-200 border border-blue-500/30"
                      )}
                    >
                      {status.type === "success" && <CheckCircle className="w-5 h-5" />}
                      {status.type === "error" && <AlertCircle className="w-5 h-5" />}
                      <span>{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                          <h3 className="font-manga text-2xl text-blue-800 mb-6">
              Alternative Communication Routes
            </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-800" />
                  <span className="text-white/90">Sailing the Grand Line (Remote)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-800" />
                  <span className="text-white/90">Available via transponder snail</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4">Social Channels</h4>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center space-x-3 p-3 rounded-lg transition-all duration-300",
                        "hover:bg-white/10 hover:scale-105 group"
                      )}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <link.icon className={cn("w-5 h-5 text-white/70 transition-colors", link.color)} />
                      <div>
                        <div className="text-white font-medium">{link.name}</div>
                        <div className="text-white/60 text-sm">{link.description}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Quote */}
            <motion.div
              className="bg-gradient-to-r from-haki-purple/20 to-straw-hat/20 backdrop-blur-md rounded-xl p-8 border border-straw-hat/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  ⚓
                </motion.div>
                <blockquote className="text-lg font-medium text-white/90 mb-4 italic">
                  &ldquo;The sea is vast, and there are still many things in this world that I don&apos;t know about. 
                  But right now, I have the strongest crew in the world!&rdquo;
                </blockquote>
                <cite className="text-blue-800 font-bold">- Monkey D. Luffy</cite>
                <p className="text-white/70 text-sm mt-2">
                  Let&apos;s build something amazing together! 🏴‍☠️
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
