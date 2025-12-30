"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { sendFormData } from "@/api/sendFormData";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = ({ submitText }: { submitText: string }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name || !form.email) {
      setStatus("error");
      setErrorMessage("Please fill in both your name and email address.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await sendFormData(form);
      setStatus("success");
      setForm({ name: "", email: "", phoneNo: "", message: "" });
      
      // Reset success status after 5 seconds to allow for new submissions
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <div className="lg:col-span-3">
      <div className="bg-foreground/5 p-8 md:p-12 border border-foreground/10 relative overflow-hidden">
        <form className="space-y-12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-primary">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                required
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (status === "error") setStatus("idle");
                }}
                className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-primary">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                required
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (status === "error") setStatus("idle");
                }}
                className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-primary">
              Phone Number (Optional)
            </label>
            <input
              type="text"
              value={form.phoneNo}
              onChange={(e) => setForm({ ...form, phoneNo: e.target.value })}
              className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-primary">
              Project Details
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium resize-none"
              placeholder="Tell us about your project goals, timeline, and requirements..."
            />
          </div>

          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-green-500 font-medium bg-green-500/10 p-4 rounded-lg border border-green-500/20"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-red-500 font-medium bg-red-500/10 p-4 rounded-lg border border-red-500/20"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-6">
              <Button 
                className="w-full relative overflow-hidden" 
                type="submit" 
                disabled={status === "loading"}
              >
                <span className={status === "loading" ? "opacity-0" : "flex items-center"}>
                  {submitText}
                  <ArrowRight className="ml-3 w-6 h-6" />
                </span>
                
                {status === "loading" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
