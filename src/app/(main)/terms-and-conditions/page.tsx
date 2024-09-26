import PageWrapper from "@/components/global/PageWrapper";
import React from "react";

interface Term {
  title: string;
  content: string;
}

const terms: Term[] = [
  {
    title: "1. Introduction",
    content:
      "Welcome to Boomzo. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.",
  },
  {
    title: "2. User Responsibilities",
    content:
      "Users must provide accurate information and comply with all applicable laws. Users are responsible for maintaining the confidentiality of their account information.",
  },
  {
    title: "3. Services Offered",
    content:
      "Boomzo connects consumers with businesses in various industries, including travel, real estate, and events. We provide results-oriented services. Agencies and freelancers failing to meet client targets will be removed based on Customer Satisfaction (CSAT) scores.",
  },
  {
    title: "4. High Demand and Limited Supply",
    content:
      "We match high demand with a limited supply of vetted service providers to ensure quality orders. This helps maintain a high standard of service.",
  },
  {
    title: "5. Platform Integrity",
    content:
      "Maintaining platform integrity is crucial. Any attempt to tarnish Boomzo’s image or share personal details outside the platform will result in immediate removal.",
  },
  {
    title: "6. Red Flag System",
    content:
      "Five red flags result in removal from the platform. Clear red flags by achieving a CSAT > 95% for the next 2 orders.",
  },
  {
    title: "7. Client Targets",
    content:
      "All targets must be agreed upon before proceeding. Project managers will ensure clear communication and track progress weekly.",
  },
  {
    title: "8. Payment Terms",
    content:
      "Payments must be made in accordance with the agreed-upon terms. Late payments may result in service suspension or additional fees.",
  },
  {
    title: "9. Confidentiality",
    content:
      "All parties must maintain the confidentiality of any proprietary information shared during the course of the project.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "Boomzo is not liable for any indirect, incidental, or consequential damages arising from the use of our platform.",
  },
  {
    title: "11. Intellectual Property",
    content:
      "All content on the platform is the property of Boomzo and protected by intellectual property laws.",
  },
  {
    title: "12. Termination",
    content:
      "Boomzo reserves the right to terminate any account that violates these terms and conditions.",
  },
  {
    title: "13. Dispute Resolution",
    content:
      "Any disputes will be resolved under the jurisdiction of Aligarh courts. These terms and conditions are governed by the laws of Aligarh Jurisdiction.",
  },
  {
    title: "14. Amendments",
    content:
      "Boomzo reserves the right to amend these terms and conditions at any time. Users will be notified of any changes.",
  },
  {
    title: "15. Contact Information",
    content: "For questions, contact us at grow@boomzo.in.",
  },
];

const TermsAndConditions: React.FC = () => {
  return (
    <PageWrapper logo="dark">
      <div className="container py-24 md:pb-40 md:pt-24 md:px-12 px-4 mx-auto ">
        <h1 className="text-4xl md:text-6xl font-bold text-center my-20 font-wixMadeforDisplay  pb-2 ">
          Terms and Conditions
        </h1>
        <p className="text-lg font-normal p-4 text-gray-700">
          Effective Date: 1st January 2024
        </p>
        <ul className="list-none space-y-4">
          {terms.map((term, index) => (
            <li key={index} className="mb-4 p-4">
              <h2 className="text-3xl font-semibold mb-2 font-wixMadeforDisplay">
                {term.title}
              </h2>
              <p className="text-lg font-normal ">{term.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
};

export default TermsAndConditions;
