import { redirect } from "next/navigation";
import { CALENDLY_BASE_URL } from "@/lib/calendly";

/** Legacy route — send users directly to Calendly */
export default function BookCallPage() {
  redirect(CALENDLY_BASE_URL);
}
