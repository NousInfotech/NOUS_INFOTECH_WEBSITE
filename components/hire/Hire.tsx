"use client"
import InquiryLayout from "../common/InquiryLayout";

const categories = ["Web Development", "UI/UX Design", "Branding", "Mobile App", "Other"];
const budgets = ["₹50k - ₹1L", "₹1L - ₹2.5L", "₹2.5L - ₹5L", "₹5L+"];

const Hire = () => {
  return (
    <InquiryLayout
      heroTitle={<>Start a <span className="text-primary">Project</span></>}
      heroDescription="Need a website, app, branding, or custom digital solution? Tell us about your project—we deliver with the same premium quality as our long-term partnerships."
      sidebarSubtitle={<>Project <span className="text-primary">Inquiry</span></>}
      sidebarDescription="Share your goals, timeline, and requirements. Whether it's a one-off build or the start of a bigger digital journey, we're here to help."
      submitText="Submit Inquiry"
      redirectTo="/thank-you/hire-us"
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
