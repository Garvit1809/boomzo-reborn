import PageWrapper from "@/components/global/PageWrapper";
import React from "react";

interface PrivacyPolicy {
  title: string;
  content: string;
}

const PRIVACY_POLICY: PrivacyPolicy[] = [
  {
    title: "1. Introduction",
    content:
      "Boomzo is committed to protecting your privacy. This policy explains how we collect, use, and share your information.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect information you provide directly, such as contact details and business information.",
  },
  {
    title: "3. How We Use Information",
    content:
      "We use your information to provide and improve our services, communicate with you, and comply with legal obligations.",
  },
  {
    title: "4. Sharing Information",
    content:
      "We do not share your personal information with third parties except as required by law or to provide our services.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement security measures to protect your information.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information.",
  },
  {
    title: "7. Changes to This Policy",
    content:
      "We may update this policy. We will notify you of significant changes.",
  },
];


const PrivacyPolicy: React.FC = () => {
  return (
    <PageWrapper logo="dark">
      <div className="container py-24 md:pb-40 md:pt-24 md:px-12 px-4 mx-auto ">
        <h1 className="text-4xl md:text-6xl font-bold text-center my-20 font-wixMadeforDisplay  pb-2 ">
          Privacy Policy
        </h1>
        <p className="text-lg font-normal p-4 text-gray-700">
          Effective Date: 1st January 2024
        </p>
        <ul className="list-none space-y-4">
          {PRIVACY_POLICY.map((policy, index) => (
            <li key={index} className="mb-4 p-4">
              <h2 className="text-3xl font-semibold mb-2 font-wixMadeforDisplay">
                {policy.title}
              </h2>
              <p className="text-lg font-normal ">{policy.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
