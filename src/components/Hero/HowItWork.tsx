import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
}

const features: Feature[] = [
  {
    title: 'Business Analysis',
    description:
      'We begin by thoroughly analyzing your business to understand your unique strengths and goals.',
    icon: '📊',
    image: '/howitwork/1.webp',
    imageAlt: 'Image for Business Analysis',
  },
  {
    title: 'Strategy Development',
    description:
      'Together, we create a tailored marketing and sales strategy that aligns with your vision.',
    icon: '📝',
    image: '/howitwork/2.webp',
    imageAlt: 'Image for Strategy Development',
  },
  {
    title: 'Lead Generation',
    description:
      'We generate high-quality leads, attracting potential clients interested in your offerings.',
    icon: '🚀',
    image: '/howitwork/3.webp',
    imageAlt: 'Image for Lead Generation',
  },
  {
    title: 'Engaging Prospects',
    description:
      'Our team engages with leads, building relationships and nurturing them towards conversion.',
    icon: '🤝',
    image: '/howitwork/4.webp',
    imageAlt: 'Image for Engaging Prospects',
  },
  {
    title: 'Client Conversion',
    description:
      'We convert prospects into clients, ensuring you earn revenue. We only take a commission on deals we close, so we earn when you earn.',
    icon: '💼',
    image: '/howitwork/5.webp',
    imageAlt: 'Image for Client Conversion',
  },
];

const HowItWork: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(null);
  const [delayedIndex, setDelayedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeFeatureIndex !== null) {
      const delayTimer = setTimeout(() => {
        setDelayedIndex(activeFeatureIndex);
      }, 150); // Add a slight delay for smooth transition
      return () => clearTimeout(delayTimer);
    } else {
      setDelayedIndex(null);
    }
  }, [activeFeatureIndex]);

  const activeFeature =
    delayedIndex !== null ? features[delayedIndex] : features[0];

  return (
    <div>
      <h1 className="text-3xl font-bold mt-8 flex justify-center">
        How it{' '}
        <span className="text-transparent bg-gradient-to-r from-[#542daf] via-purple-500 to-[#ff9100] bg-clip-text px-1">
          Work
        </span>
        ?
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
        {/* Left Side: Image and Description */}
        <div className="flex-1 flex flex-col items-center md:items-start space-y-4 mb-2 md:mb-0">
          {activeFeature && (
            <motion.div
              key={activeFeature.image} // Ensures animation runs on key change
              initial={{ opacity: 0, scale: 0.95, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 50 }}
              transition={{ duration: 0.5, ease: 'easeOut', type: 'spring' }}
            >
              <Image
                className="md:w-[40rem] md:h-[40rem] transition-all duration-300 md:p-5 transform scale-105"
                src={activeFeature.image}
                alt={activeFeature.imageAlt}
                height={1000}
                width={1000}
              />
            </motion.div>
          )}
        </div>

        {/* Right Side: Feature List */}
        <div className="flex-1 space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md flex hover:duration-300 delay-150 transition-all items-start cursor-pointer ${
                activeFeatureIndex === index
                  ? 'border-teal-500 border-2 transition'
                  : ''
              }`}
              onMouseEnter={() => setActiveFeatureIndex(index)}
              onMouseLeave={() => setActiveFeatureIndex(null)}
            >
              <div className="text-teal-500 mr-4">{feature.icon}</div>
              <div>
                <h3 className="font-bold">{feature.title}</h3>
                {delayedIndex === index && (
                  <p className="text-sm text-gray-600">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
