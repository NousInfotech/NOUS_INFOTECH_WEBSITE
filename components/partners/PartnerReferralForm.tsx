"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { sendFormData } from "@/api/sendFormData";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const BUSINESS_TYPES = [
  "Accounting Firm",
  "Agency",
  "Startup",
  "Other",
] as const;

const PROBLEMS = [
  "Manual operations",
  "Need internal software",
  "Scaling issues",
  "Need tech team",
] as const;

const selectClass =
  "w-full rounded-2xl bg-background border border-foreground/15 px-4 py-3 text-sm text-foreground " +
  "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 " +
  "transition-shadow appearance-none cursor-pointer " +
  "[&>option]:bg-background [&>option]:text-foreground";

const inputClass =
  "w-full rounded-2xl bg-background border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 " +
  "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-shadow";

const PartnerReferralForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState<string>(BUSINESS_TYPES[0]);
  const [problem, setProblem] = useState<string>(PROBLEMS[0]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setErrorMessage("Please add a name and email.");
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email.");
      return;
    }

    const message = [
      "[Partner referral]",
      company.trim() ? `Company: ${company.trim()}` : "",
      `Business type: ${businessType}`,
      `Problem: ${problem}`,
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("loading");
    setErrorMessage("");
    try {
      await sendFormData({
        name: name.trim(),
        email: email.trim(),
        phoneNo: "",
        message,
      });
      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
      setBusinessType(BUSINESS_TYPES[0]);
      setProblem(PROBLEMS[0]);
      
      router.push("/thank-you/partner-referral");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="ref-name"
          className="block text-xs uppercase tracking-widest text-foreground/55 mb-2 font-semibold"
        >
          Name
        </label>
        <input
          id="ref-name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="ref-company"
          className="block text-xs uppercase tracking-widest text-foreground/55 mb-2 font-semibold"
        >
          Company
        </label>
        <input
          id="ref-company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
          placeholder="Referred company"
        />
      </div>
      <div>
        <label
          htmlFor="ref-email"
          className="block text-xs uppercase tracking-widest text-foreground/55 mb-2 font-semibold"
        >
          Email
        </label>
        <input
          id="ref-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="ref-biz"
          className="block text-xs uppercase tracking-widest text-foreground/55 mb-2 font-semibold"
        >
          Business type
        </label>
        <select
          id="ref-biz"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className={selectClass}
        >
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="ref-problem"
          className="block text-xs uppercase tracking-widest text-foreground/55 mb-2 font-semibold"
        >
          Problem
        </label>
        <select
          id="ref-problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className={selectClass}
        >
          {PROBLEMS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <AnimatePresence mode="wait">
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm text-red-500 dark:text-red-400"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            {errorMessage}
          </motion.p>
        )}
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            Referral received — we&apos;ll be in touch shortly.
          </motion.p>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        className="w-full mt-2"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Sending…
          </>
        ) : (
          "Submit referral"
        )}
      </Button>
    </form>
  );
};

export default PartnerReferralForm;
