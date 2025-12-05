'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { TbArrowUpRight, TbArrowDownRight } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import AnimatedImage from './AnimatedImage';
import clsx from 'clsx';

/* =========================
   Static Content Definitions
   ========================= */

const aboutSections = [
  {
    title: 'Our Journey – A Legacy of Design Excellence',
    description1: `
      At Xperts Interior Decoration LLC, we don’t just design interiors; we orchestrate experiences. 
      Every space we craft is a carefully composed story, where light, texture, and function work in harmony. 
      From sleek corporate offices to high-end residential spaces and retail environments, our work reflects 
      a balance of timeless aesthetics and practical usability.
      
      Based in Dubai, we have spent the last decade refining the art of interior fit-out and decor, 
      delivering projects that align with global standards while resonating with the local culture and lifestyle.
    `,
    description2: `
      Our portfolio spans executive office suites, industrial complexes, hospitality spaces, and premium residences. 
      We collaborate closely with clients, consultants, and contractors to ensure that every project is delivered 
      on time, within budget, and beyond expectations. 
    
      Every project is an opportunity to create environments that foster productivity, comfort, and emotional connection. 
      We believe in listening first—understanding your brand, your vision, and your operational needs—so that 
      every design decision has purpose. 
    
      With Xperts, you are not just getting an interior design company; you are partnering with a dedicated 
      team that treats your space as a long-term investment in your brand and lifestyle.
    `,
    image: '/image/about/frontendoffice.webp',
  },
  {
    title: 'The Visionary Behind the Dreams',
    subheading: 'Engr. Numair Zafar – Shaping the Future of Interior Design',
    description1: `
      Xperts Interior Decoration LLC was founded in 2014 by Engr. Numair Zafar, a visionary leader with a passion 
      for transforming ordinary spaces into elevated experiences. With a strong engineering background and a 
      refined design sensibility, he brings together structural understanding and artistic direction in every project.
      
      Under his leadership, Xperts has grown into a trusted name in Dubai’s interior fit-out and decoration industry, 
      delivering sophisticated spaces for offices, villas, apartments, and commercial environments.
    `,
    description2: `
      Engr. Numair believes in a hands-on approach—being actively involved from concept to completion. 
      He ensures that each project reflects the client’s identity while meeting strict technical, regulatory, 
      and operational requirements.
      
      His commitment to quality, attention to detail, and customer satisfaction has positioned Xperts as 
      a reliable partner for organizations and individuals seeking world-class interiors that perform as beautifully 
      as they look.
    `,
    image: '/image/about/frontendoffice.webp',
  },
];

const companyHighlights = [
  {
    label: 'Years of Experience',
    value: '10+',
    description: 'A decade of delivering tailored interior solutions across Dubai and the UAE.',
  },
  {
    label: 'Completed Projects',
    value: '130+',
    description: 'From office halls and corporate floors to luxury homes and retail spaces.',
  },
  {
    label: 'Client Retention',
    value: '90%',
    description: 'Long-term relationships built on trust, performance, and consistency.',
  },
  {
    label: 'On-Time Delivery',
    value: '100%',
    description: 'Structured project management and disciplined execution on every project.',
  },
];

const coreValues = [
  {
    title: 'Integrity & Transparency',
    description:
      'We communicate clearly, price honestly, and deliver exactly what we commit to—no hidden surprises.',
  },
  {
    title: 'Quality-First Approach',
    description:
      'From materials to craftsmanship, every detail is carefully monitored to ensure durability and excellence.',
  },
  {
    title: 'Client-Centric Design',
    description:
      'We design around your needs, brand identity, and long-term goals—not around temporary trends.',
  },
  {
    title: 'Innovation & Technology',
    description:
      'We embrace modern tools, sustainable materials, and innovative design practices to keep you ahead.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We understand your business, lifestyle, pain points, and aspirations through detailed consultations and site visits.',
  },
  {
    step: '02',
    title: 'Concept & Design Development',
    description:
      'Our designers translate your requirements into mood boards, layouts, and 3D concepts that bring your vision to life.',
  },
  {
    step: '03',
    title: 'Technical Planning & Approvals',
    description:
      'We handle technical drawings, MEP coordination, material selections, and necessary approvals where applicable.',
  },
  {
    step: '04',
    title: 'Execution & Fit-Out',
    description:
      'Our execution team ensures precise implementation on-site with strict adherence to safety, timelines, and quality standards.',
  },
  {
    step: '05',
    title: 'Handover & After-Support',
    description:
      'Once completed, we provide a seamless handover and support you with any fine-tuning required post-occupancy.',
  },
];

const sectorsWeServe = [
  'Corporate Offices & Head Offices',
  'Industrial & Utility Control Rooms',
  'Conference & Board Rooms',
  'Retail Outlets & Showrooms',
  'Hospitality & Lounges',
  'Villas, Apartments & Private Residences',
];

/* =========================
   Main Component
   ========================= */

const AboutPage = () => {
  // Expanded state for each about section
  const [expanded, setExpanded] = useState(() =>
    Array(aboutSections.length).fill(false)
  );

  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className="bg-[url('/image/about/whoweare.webp')] bg-center bg-cover h-[75vh] sm:h-[80vh] lg:h-screen w-full flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-700 tracking-[0.25em] text-center lg:text-left drop-shadow-lg"
          >
            Know About Us
            <span className="block text-sm sm:text-base lg:text-lg tracking-[0.3em] mt-6 uppercase">
              Xperts Interior Decoration LLC
            </span>
          </motion.h1>
        </div>
      </motion.div>

      {/* ============== INTRO SECTION ============== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-10 sm:pt-14 lg:pt-16">
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 text-center px-4 py-8 tracking-widest uppercase shadow-lg ring-2 ring-gray-600 dark:ring-gray-300 rounded-lg"
          >
            “Infinite Ideas by You
            <br />
            Infinite Solutions by Us”
          </motion.h2>

          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-10 sm:mt-12 text-justify leading-relaxed"
          >
            Xperts Interior Decoration LLC is a leading interior design and fit-out company
            with over a decade of proven experience in delivering high-quality interior
            solutions in Dubai and across the UAE.
            <br />
            <br />
            We specialize in creating functional, aesthetically refined spaces for corporate
            offices, apartments, villas, and industrial environments. Our expert team brings
            together designers, engineers, and project managers who work collaboratively to
            deliver end-to-end solutions—from concept and visualization to execution and
            handover.
          </motion.p>
        </div>

        {/* ============== COMPANY HIGHLIGHTS GRID ============== */}
        <section className="py-10 sm:py-12 lg:py-16">
          <motion.h3
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="text-center text-lg sm:text-xl uppercase tracking-[0.25em] text-primary mb-6"
          >
            Company at a Glance
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {companyHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial="offscreen"
                whileInView="onscreen"
                variants={desVariants}
                className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 sm:p-5 lg:p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-sm text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  {item.label}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============== ABOUT SECTIONS (IMAGE + TEXT) ============== */}
        <section className="py-6 sm:py-10 lg:py-12">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 my-10 lg:my-14"
            >
              {/* Image Section */}
              <div
                className={clsx(
                  'w-full h-full',
                  index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'
                )}
              >
                <AnimatedImage
                  src={section.image}
                  alt={section.title}
                  width={700}
                  height={1400}
                  className="w-full h-auto lg:h-[520px] xl:h-[560px] object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Text Section */}
              <div className="relative w-full h-full">
                <motion.h2
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={titleVariants}
                  className="mb-4 text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold text-left leading-snug"
                >
                  {section.title}
                </motion.h2>

                {/* Conditional Subheading */}
                {section.subheading && (
                  <motion.h3
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={desVariants}
                    className="mb-4 text-base sm:text-lg md:text-xl font-bold tracking-wider text-left uppercase"
                  >
                    {section.subheading}
                  </motion.h3>
                )}

                <motion.p
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={desVariants}
                  className={clsx(
                    'tracking-wide text-justify pb-6 text-sm sm:text-base md:text-lg leading-relaxed',
                    section.subheading ? 'mt-2' : 'mt-4'
                  )}
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
                    className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
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
        </section>

        {/* ============== VISION & MISSION ============== */}
        <section className="py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-gray-900/80 shadow-md"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed text-gray-700 dark:text-gray-200">
                To be recognized as one of the most reliable and innovative interior decoration
                companies in the UAE—known for creating spaces that elevate the way people work,
                live, and interact.
              </p>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-gray-900/80 shadow-md"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-primary">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed text-gray-700 dark:text-gray-200">
                To deliver end-to-end interior solutions that combine design excellence, technical
                precision, and project discipline—ensuring every space we build supports our
                clients’ goals, brand identity, and long-term growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ============== CORE VALUES ============== */}
        <section className="py-8 sm:py-10 lg:py-14">
          <motion.h3
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="text-center text-lg sm:text-xl uppercase tracking-[0.25em] text-primary mb-8"
          >
            What We Stand For
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial="offscreen"
                whileInView="onscreen"
                variants={desVariants}
                className="h-full border border-gray-300 dark:border-gray-700 rounded-2xl p-5 sm:p-6 bg-white/80 dark:bg-gray-900/80 shadow-sm flex flex-col"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-primary">
                  {value.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 text-justify flex-1">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============== OUR PROCESS ============== */}
        <section className="py-10 sm:py-12 lg:py-16">
          <motion.h3
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="text-center text-lg sm:text-xl uppercase tracking-[0.25em] text-primary mb-8"
          >
            Our Project Delivery Process
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((stepItem, idx) => (
              <motion.div
                key={idx}
                initial="offscreen"
                whileInView="onscreen"
                variants={desVariants}
                className="border border-gray-300 dark:border-gray-700 rounded-2xl p-5 sm:p-6 bg-white/80 dark:bg-gray-900/80 shadow-sm flex flex-col"
              >
                <div className="text-sm font-semibold text-primary mb-2">
                  {stepItem.step}
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-2">
                  {stepItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 text-justify">
                  {stepItem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============== SECTORS WE SERVE ============== */}
        <section className="py-8 sm:py-10 lg:py-14">
          <motion.h3
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="text-center text-lg sm:text-xl uppercase tracking-[0.25em] text-primary mb-6"
          >
            Sectors We Serve
          </motion.h3>

          <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {sectorsWeServe.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={desVariants}
                  className="flex items-start gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-200"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============== FINAL CTA ============== */}
        <section className="py-10 sm:py-12 lg:py-16">
          <div className="border border-dashed border-primary rounded-2xl p-6 sm:p-8 lg:p-10 text-center bg-primary/5 dark:bg-primary/10">
            <motion.h3
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4"
            >
              Ready to Transform Your Space?
            </motion.h3>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-6"
            >
              Whether you are planning a new office, renovating an existing facility, or designing 
              your dream home, Xperts Interior Decoration LLC is here to guide you at every step. 
              Let’s collaborate and turn your vision into a space that truly represents you.
            </motion.p>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="flex justify-center"
            >
              <a href="/contact">
                <Button className="inline-flex items-center justify-center px-8 py-3 mt-2 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                  Discuss Your Project
                  <TbArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
