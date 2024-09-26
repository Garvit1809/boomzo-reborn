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
      "Boomzo is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.",
  },
  {
    title: "2. Information Collection",
    content:
      "We collect personal information such as your name, email address, phone number, and other contact details when you register or contact us. We also collect usage data on how you interact with our platform to improve our services.",
  },
  {
    title: "3. Use of Information",
    content:
      "We use your personal information to provide and improve our services, communicate with you, and comply with legal obligations. Usage data helps us analyze trends and enhance user experience.",
  },
  {
    title: "4. Data Storage and Security",
    content:
      "We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "5. User Rights",
    content:
      "Access: You have the right to access the personal information we hold about you.\nCorrection: You can request corrections to any inaccurate or incomplete information.\nDeletion: You may request the deletion of your personal information, subject to certain conditions. Contact us at grow@boomzo.in for assistance.",
  },
  {
    title: "6. Cookies",
    content:
      "Our platform uses cookies to enhance your experience. You can control cookie settings through your browser.",
  },
  {
    title: "7. Third-Party Services",
    content:
      "We may share information with third-party service providers to facilitate our services. We do not share your personal information with third parties unless required by law or as necessary to provide our services.",
  },
  {
    title: "8. Changes to Policy",
    content:
      "Boomzo may update this Privacy Policy from time to time. Users will be notified of significant changes by posting the updated policy on our platform.",
  },
  {
    title: "9. Jurisdiction",
    content:
      "This Privacy Policy is governed by the laws of Aligarh Jurisdiction.",
  },
  {
    title: "10. Contact Information",
    content:
      "For privacy-related inquiries, please contact us at grow@boomzo.in.",
  },
  {
    title: "11. Limitation of Liability",
    content:
      "Boomzo is not liable for any indirect, incidental, or consequential damages arising from the use of our platform.",
  },
  {
    title: "12. Intellectual Property",
    content:
      "All content on the Boomzo platform, including text, graphics, logos, and software, is the property of Boomzo and protected by intellectual property laws.",
  },
  {
    title: "13. Dispute Resolution",
    content:
      "Any disputes arising from this Privacy Policy or the use of Boomzo will be resolved under the jurisdiction of Aligarh courts.",
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
            <li key={policy.title} className="mb-4 p-4">
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
