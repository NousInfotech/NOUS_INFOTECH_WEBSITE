"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import { CALENDLY_BASE_URL } from "@/lib/calendly";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

interface CalendlyEmbedProps {
  url?: string;
  minHeight?: number;
  className?: string;
}

export default function CalendlyEmbed({
  url = CALENDLY_BASE_URL,
  minHeight = 700,
  className = "",
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const initWidget = useCallback(() => {
    const parent = containerRef.current;
    if (!parent || !window.Calendly) return;

    parent.innerHTML = "";
    window.Calendly.initInlineWidget({
      url,
      parentElement: parent,
    });
  }, [url]);

  useEffect(() => {
    initWidget();
  }, [initWidget]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onReady={initWidget}
      />
      <div
        ref={containerRef}
        className={`calendly-inline-widget w-full rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/[0.02] ${className}`}
        style={{ minWidth: 320, minHeight }}
      />
    </>
  );
}
