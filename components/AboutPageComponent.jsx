'use client';
import React, { useState} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { TbArrowUpRight, TbArrowDownRight } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import AnimatedImage from './AnimatedImage';
import clsx from 'clsx';

const AboutPage = () => {
  const [expanded, setExpanded] = useState(Array(2).fill(false)); // State to track expanded sections

  const toggleExpand = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };
  const aboutSections = [
    {
      title: "Our Journey A Legacy of Design Excellence",
      description1: `
           At Xperts Interior Decoration LLC, we don’t just design interiors; we orchestrate experiences. Each room we craft is like a symphony, harmonizing form and function, where every element resonates with purpose. Natural light filters through sheer curtains, creating an ethereal ambiance that whispers stories of elegance and innovation.
           Our design palette is boundless—ranging from soft blushes that evoke tranquility, to bold midnight blues that inspire creativity, complemented by the warm textures of aged oak.
      `,
      description2: `
        Our spaces are more than just physical structures; they embody the essence of life, laughter, and love. We believe in the power of listening, allowing our clients’ dreams and aspirations to guide our design process. Join us in creating magic that transforms everyday moments into extraordinary experiences, reflecting the legacy we aspire to uphold in the realm of interior design.
      `,
      image: '/image/about/frontendoffice.webp',
    },
    {
      title: "The Visionary Behind the Dreams",
      subheading: "Engr. Numair Zafar: Shaping the Future of Interior Design",
      description1: `
        Founded in 2014 by Engr. Numair Zafar, Xperts Interior Decoration LLC has emerged as a visionary force in the vibrant interior design landscape of the UAE region. With a relentless focus on innovation and luxury, we have successfully transformed an array of spaces, adapting to the distinct needs and desires of our diverse clientele. Each project we undertake is a testament to our commitment to excellence, where we blend artistic vision with practical execution.
      `,
      description2: `
        At Xperts, we believe in delivering excellence from concept to completion, ensuring that every detail aligns with our clients' visions. Our reputation in the industry is built on a steadfast commitment to quality, meticulous attention to detail, and an unwavering dedication to unparalleled customer service, establishing us as trusted partners in the journey of transforming spaces.
      `,
      image: '/image/about/frontendoffice.webp',
    },
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className="bg-[url('/image/about/whoweare.webp')] bg-center bg-cover h-screen w-full"
      >
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="container py-16 sm:py-24 md:py-32 text-6xl font-semibold text-gray-800 tracking-widest text-center lg:py-64"
        >
          Know About Us!!!
        </motion.h1>
      </motion.div>

      {/* About Us Section */}
      <div className="container mx-auto px-4">
        <div className="px-4 pt-8">
        <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl  font-semibold text-gray-600 dark:text-gray-300 text-center p-10  tracking-widest uppercase
           shadow-lg ring-2 ring-gray-600 dark:ring-gray-300 rounded-lg"
          >
            "Infinite Ideas by You
            <br/>Infinite Solutions by Us"
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-xl md:text-xl text-gray-700  dark:text-gray-200   mt-14 text-justify"
          >
            Xperts Interior Decoration LLC is a leading interior design company with a decade of proven experience in the all types of interior fit-out and interior decoration industry in Dubai.
            <br/>Our company provides interior design services for offices, apartments, villas, homes and others. We provide the highest quality interior design services in Dubai on top of all others in this industry. We have a team that is well experienced in this field and we are always ready to help you.
          </motion.p>
        </div>






 {/* About Us Section */}
 <div className="container mx-auto px-4">
        {aboutSections.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 my-10"
          >
            {/* Image Section */}
            <div className={clsx(
                'w-full h-full',
                index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'
              )}>
              <AnimatedImage
                src={section.image}
                alt={section.title}
                width={700}
                height={1400}
                className="w-full h-auto lg:h-[550px] object-cover rounded-lg"
              />
            </div>

           {/* Text Section */}
<div className="relative w-full h-full">
  <motion.h2
    initial="offscreen"
    whileInView="onscreen"
    variants={titleVariants}
    className="absolute top-4   mb-6 text-2xl text-primary font-semibold text-left lg:text-3xl"
  >
    {section.title} :
  </motion.h2>

  {/* Conditional Subheading */}
  {section.subheading && (
    <motion.h3
      initial="offscreen"
      whileInView="onscreen"
      variants={desVariants}
      className="absolute top-24 sm:top-16 md:top-16 lg:top-16 xl:top-16   text-xl font-bold tracking-wider text-left uppercase justify-center"
    >
      {section.subheading}
    </motion.h3>
  )}

  <motion.p
    initial="offscreen"
    whileInView="onscreen"
    variants={desVariants}
    className={clsx('tracking-wide text-justify pb-6', section.subheading ? 'mt-48 md:mt-36 lg:mt-36 xl:mt-36' : 'mt-28' )} // Add sufficient margin-top
  >
    {section.description1}
    {expanded[index] && (
      <>
        <br />
        <br />
        {section.description2}
      </>
    )}
  </motion.p>

  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={desVariants}
  >
    <Button
      onClick={() => toggleExpand(index)}
      className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
    >
      {expanded[index] ? 'Show Less' : 'Show More'} 
      {expanded[index] ? (
        <TbArrowUpRight className="w-5 h-5 ml-2" />
      ) : (
        <TbArrowDownRight className="w-5 h-5 ml-2" />
      )}
    </Button>
  </motion.div>
</div>

          </div>
        ))}
      </div>

        {/* Team Section */}
        <div className="lg:py-4">
          <div className="px-4 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="text-4xl font-bold tracking-wider text-left justify-center uppercase"
            >
              Our Team :
            </motion.h1>
          </div>
          <div className="grid px-4 py-8 gap-16 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                className="border-2 border-primary"
              >
                <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                  <Image src={member.image} width={200} height={200} alt={member.name} className="mx-auto rounded-full" 
                  unoptimized />
                  <h2 className="py-4 text-2xl font-semibold uppercase">{member.role}</h2>
                  <p className="text-sm text-justify">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    image: "/image/teammembers/profile3.webp",
    name: "Project Manager",
    role: "Project Manager",
    description: "Project Manager combines creative flair with strategic project management skills."
  },
  {
    image: "/image/teammembers/profile1.webp",
    name: "Project Architect",
    role: "Project Architect",
    description: "Project Architect oversees architectural aspects of projects."
  },
  {
    image: "/image/teammembers/profile2.webp",
    name: "Team Lead",
    role: "Team Lead",
    description: "Team Leader oversees employees and foster positive communication within the team."
  },
  {
    image: "/image/people/person7.webp",
    name: "Building Surveys",
    role: "Building Surveys",
    description: "Bulding Serveys includes the survey of location , map and place for project."
  },
  {
    image: "/image/people/person8.webp",
    name: "Design Surveys",
    role: "Design Surveys",
    description: "Design Serveys Consist of project design and other Measurements."
  },
  {
    image: "/image/people/person9.webp",
    name: "Quality Surveys",
    role: "Quality Surveys",
    description: "For Quality Serveys they check the raw material quality for Project."
  }
];

export default AboutPage;

