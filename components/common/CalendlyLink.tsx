import type { ReactNode } from "react";
import Link from "next/link";
import { getCalendlyUrlForInquiry } from "@/lib/calendly";

interface CalendlyLinkProps {
  children: ReactNode;
  className?: string;
  /** Inquiry label for UTM tracking, e.g. "Digitalize Demo" */
  inquiryType?: string | null;
  href?: string;
  onClick?: () => void;
}

/** Opens Calendly in a new tab */
export default function CalendlyLink({
  children,
  className,
  inquiryType,
  href,
  onClick,
}: CalendlyLinkProps) {
  const url = href ?? getCalendlyUrlForInquiry(inquiryType);

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
