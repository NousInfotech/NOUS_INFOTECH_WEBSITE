"use client"
import InquiryLayout from "../common/InquiryLayout";

const categories = ["Web Development", "UI/UX Design", "Branding", "Mobile App", "Other"];
const budgets = ["₹50k - ₹1L", "₹1L - ₹2.5L", "₹2.5L - ₹5L", "₹5L+"];

const Hire = () => {
  return (
    <InquiryLayout
      heroTitle={<>Hire <span className="text-primary">Us</span></>}
      heroDescription="Describe your custom project and let's build something extraordinary together."
      sidebarSubtitle={<>Custom <span className="text-primary">Inquiry</span></>}
      sidebarDescription="Have a specific project in mind that doesn't fit into our standard packages? Tell us about it below."
      submitText="Submit Inquiry"
      sections={[
        {
          title: "Service Categories",
          items: categories,
          type: "category",
        },
        {
          title: "Estimated Budget",
          items: budgets,
          type: "budget",
        },
      ]}
    />
  );
}

export default Hire;
