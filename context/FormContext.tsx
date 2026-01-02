"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useSearchParams } from "next/navigation";

interface FormState {
  plan: string;
  category: string;
  budget: string;
  role: string;
  type: string;
}

interface FormContextType {
  state: FormState;
  setPlan: (plan: string) => void;
  setCategory: (category: string) => void;
  setBudget: (budget: string) => void;
  setRole: (role: string) => void;
  setType: (type: string) => void;
  resetSelections: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "";

  const [state, setState] = useState<FormState>({
    plan: initialPlan,
    category: "",
    budget: "",
    role: "",
    type: "",
  });

  // Sync plan from query params if it changes
  useEffect(() => {
    if (initialPlan && state.plan !== initialPlan) {
      Promise.resolve().then(() => setState((prev) => ({ ...prev, plan: initialPlan })));
    }
  }, [initialPlan, state.plan]);

  const setPlan = (plan: string) => setState((prev) => ({ ...prev, plan }));
  const setCategory = (category: string) => setState((prev) => ({ ...prev, category }));
  const setBudget = (budget: string) => setState((prev) => ({ ...prev, budget }));
  const setRole = (role: string) => setState((prev) => ({ ...prev, role }));
  const setType = (type: string) => setState((prev) => ({ ...prev, type }));
  const resetSelections = () => setState({ plan: "", category: "", budget: "", role: "", type: "" });

  return (
    <FormContext.Provider value={{ state, setPlan, setCategory, setBudget, setRole, setType, resetSelections }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
