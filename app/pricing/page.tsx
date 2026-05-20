import { redirect } from "next/navigation";

// Pricing page temporarily disabled — redirect to contact for consultations
export default function PricingPage() {
  redirect("/contact");
}

/* Previous implementation:
import Pricing from '@/components/pricing/Pricing'

export default function Page() {
  return <Pricing />
}
*/
