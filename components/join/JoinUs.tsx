"use client"
import { FormPayload } from "@/api/sendFormData";
import InquiryLayout from "../common/InquiryLayout";
import { sendJoinData } from "@/api/sendJoinData";

const roles = ["Designer", "Developer", "Marketing", "Project Manager", "Other"];
const types = ["Full-time", "Freelance", "Internship", "Partnership"];

const JoinUs = () => {
  const handleJoinSubmit = async (payload: FormPayload) => {
    await sendJoinData(payload);
  };

  return (
    <InquiryLayout
      heroTitle={<>Team <span className="text-primary">Up</span></>}
      heroDescription="We're always looking for talented individuals to collaborate with. Let's build the future together."
      sidebarSubtitle={<>Join The <span className="text-primary">Collective</span></>}
      sidebarDescription="Whether you are a freelancer looking for a partnership or a professional seeking a full-time role, we want to hear from you."
      submitText="Send Application"
      onSubmitFn={handleJoinSubmit}
      sections={[
        {
          title: "Role Interest",
          items: roles,
          type: "role",
        },
        {
          title: "Engagement Type",
          items: types,
          type: "type",
        },
      ]}
    />
  );
}

export default JoinUs;
