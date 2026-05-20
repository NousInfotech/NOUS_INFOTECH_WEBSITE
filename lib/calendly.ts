export const CALENDLY_BASE_URL = "https://calendly.com/nousinfotechq";

export function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function getCalendlyEmbedUrl(options?: {
  utmCampaign?: string;
  utmSource?: string;
  utmMedium?: string;
}) {
  const url = new URL(CALENDLY_BASE_URL);
  url.searchParams.set("hide_gdpr_banner", "1");

  if (options?.utmCampaign) {
    url.searchParams.set("utm_campaign", options.utmCampaign);
  }
  if (options?.utmSource) {
    url.searchParams.set("utm_source", options.utmSource);
  }
  if (options?.utmMedium) {
    url.searchParams.set("utm_medium", options.utmMedium);
  }

  return url.toString();
}

/** Map site inquiry types to Calendly UTM campaign labels */
export function getCalendlyUrlForInquiry(type?: string | null) {
  if (!type) return getCalendlyEmbedUrl({ utmSource: "website", utmMedium: "book-call" });

  const normalized = type.toLowerCase();
  if (normalized.includes("demo") || normalized.includes("digitalize")) {
    return getCalendlyEmbedUrl({
      utmCampaign: "digitalize-demo",
      utmSource: "website",
      utmMedium: "nda-demo-section",
    });
  }

  return getCalendlyEmbedUrl({
    utmCampaign: type.replace(/\s+/g, "-").toLowerCase(),
    utmSource: "website",
    utmMedium: "book-call",
  });
}

/** Default booking link for CTAs (opens Calendly in a new tab) */
export const CALENDLY_BOOKING_URL = getCalendlyEmbedUrl({
  utmSource: "website",
  utmMedium: "cta",
});
