"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Edit } from "lucide-react";
import { sendFormData, FormPayload } from "@/api/sendFormData";
import { motion, AnimatePresence } from "framer-motion";
import { useFormContext } from "@/context/FormContext";
import Link from "next/link";

const ContactForm = ({ 
  submitText, 
  onSubmitFn = sendFormData
}: { 
  submitText: string,
  onSubmitFn?: (payload: FormPayload) => Promise<void>
}) => {
  const { state } = useFormContext();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: "",
    countryCode: "+91",
    message: "",
  });

  const COUNTRY_CODES = [
    { code: "+91", label: "IND" },
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" },
    { code: "+971", label: "UAE" },
    { code: "+61", label: "AUS" },
    { code: "+65", label: "SGP" },
    { code: "+49", label: "GER" },
    { code: "+33", label: "FRA" },
    { code: "+81", label: "JPN" },
    { code: "+86", label: "CHN" },
  ];

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Combine country code with phone number if phone number is provided
    const finalPhoneNo = form.phoneNo ? `${form.countryCode} ${form.phoneNo}` : "";

    const {...formWithoutCountryCode } = form;

    // Combine local form state with context state
    const fullPayload = {
      ...formWithoutCountryCode,
      phoneNo: finalPhoneNo,
      plan: state.plan,
      category: state.category,
      budget: state.budget,
      role: state.role,
      type: state.type,
    };

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

    console.log("Sending data:", fullPayload);
    console.log("Total fields sent:", Object.keys(fullPayload).length);

    try {
      await onSubmitFn(fullPayload);
      setStatus("success");
      setForm({ 
        name: "", 
        email: "", 
        phoneNo: "", 
        countryCode: "+91",
        message: "", 
      });
      // Context state is usually kept or reset depending on UX preference.
      // We'll keep it for now as it reflects the UI selections.
      
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
            <div className="flex gap-4">
              <select
                value={form.countryCode}
                onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                className="bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium text-sm w-24 appearance-none cursor-pointer"
              >
                {COUNTRY_CODES.map((item) => (
                  <option key={item.code} value={item.code} className="bg-background text-foreground">
                    {item.label} ({item.code})
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={form.phoneNo}
                onChange={(e) => setForm({ ...form, phoneNo: e.target.value })}
                className="flex-1 bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium"
                placeholder="98765 43210"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-primary">
              Project Details
            </label>
            <textarea
              rows={4}
              value={form.message}
              required
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

            {state.plan && (
              <div className="flex items-center justify-between gap-3 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-sm font-medium"> 
                  Selected Plan: <span className="text-primary uppercase font-bold">{state.plan}</span>
                </p>
                </div>
                <Link href="/pricing">
                  <Edit/>
                  </Link>
              </div>
            )}

            {(state.category || state.budget || state.role || state.type) && (
              <div className="space-y-3 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                {state.category && (
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-sm font-medium"> 
                      Category: <span className="text-primary uppercase font-bold">{state.category}</span>
                    </p>
                  </div>
                )}
                {state.budget && (
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-sm font-medium"> 
                      Budget: <span className="text-primary uppercase font-bold">{state.budget}</span>
                    </p>
                  </div>
                )}
                {state.role && (
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-sm font-medium"> 
                      Role: <span className="text-primary uppercase font-bold">{state.role}</span>
                    </p>
                  </div>
                )}
                {state.type && (
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-sm font-medium"> 
                      Type: <span className="text-primary uppercase font-bold">{state.type}</span>
                    </p>
                  </div>
                )}
              </div>
            )}

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
