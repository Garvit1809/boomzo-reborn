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
      "Welcome to Boomzo. By using our services, you agree to these Terms and Conditions. Please read them carefully.",
  },
  {
    title: "2. Services",
    content:
      "Boomzo provides marketing and sales management services. Our services are offered under two models: Client Funded and Boomzo Funded.",
  },
  {
    title: "3. Payment Terms",
    content:
      "Client Funded: You are responsible for ad spend. Lower commission rates apply.\n\nBoomzo Funded: We cover ad spend. Higher commission rates apply.",
  },
  {
    title: "4. User Responsibilities",
    content:
      "You agree to provide accurate information and comply with all applicable laws.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "Boomzo is not liable for any indirect, incidental, or consequential damages.",
  },
  {
    title: "6. Termination",
    content:
      "We reserve the right to terminate services if you violate these terms.",
  },
  {
    title: "7. Governing Law",
    content:
      "These terms are governed by the laws of Aligarh, Uttar Pradesh.",
  },
  {
    title: "8. Contact Information",
    content: "For questions, contact us at Grow@Boomzo.in.",
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
