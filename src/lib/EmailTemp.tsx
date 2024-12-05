import * as React from 'react';
import { Tailwind, Html, Container, Text, Heading, Section, Img, Button } from "@react-email/components";

interface EmailTempProps {
  email: string;
}

export const EmailTemp: React.FC<Readonly<EmailTempProps>> = ({ email }) => {

  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Thanks For Subscribing!
          </Heading>

          <Section className="my-[16px]">
            <Img
              alt="Herman Miller Chair"
              className="w-full rounded-[12px] object-cover"
              height="120"
              src="https://img.freepik.com/premium-vector/congratulation-banner-vector-with-confetti_501443-423.jpg"
            />
            <Section className="mt-[32px] text-center">
              <Text className="my-[16px] text-[18px] font-semibold leading-[28px] text-orange-600">
                {email} subscribed to our exclusive version!
              </Text>
              <Heading
                as="h1"
                className="m-0 mt-[8px] text-[36px] font-semibold leading-[36px] text-gray-900"
              >
               Boomzo!
              </Heading>
              <Text className="text-[16px] leading-[24px] text-gray-500">
              Prepare to connect with top services effortlessly. Say goodbye to the hassle and hello to convenience! Exciting Features Await!
              </Text>
              <Button
                className="mt-[16px] rounded-[8px] bg-orange-600 px-[40px] py-[12px] font-semibold text-white"
                href="https://www.boomzo.in/"
              >
                Get Started
              </Button>
             {/* <Section className='flex justify-center my-4'> <SocialIcons showMail /></Section> */}
            </Section>
          </Section>

    
        </Container>
      </Html>
    </Tailwind>
  );
};

