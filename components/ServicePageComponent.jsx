'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { desVariants, titleVariants } from '@/utils/animation';
import { TbArrowDownRight, TbArrowUpRight } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import AnimatedImage from './AnimatedImage';
import clsx from 'clsx';

const ServicePage = () => {
  const [expanded, setExpanded] = useState(Array(3).fill(false)); // State to track expanded services
  
  const toggleExpand = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  const services = [
    {
      title: "Interior Fit-Out & On-Site Supervision",
      description1: `
        At Xperts Interior Decoration LLC, our interior fit-out service is designed to transform your workspace into an inspiring and functional environment. We take pride in delivering end-to-end solutions, from concept development to the final execution. Our team of experts works closely with you to understand your specific requirements and create a space that reflects your brand identity while enhancing functionality. Whether it’s office buildings, conference halls, or industrial complexes, we ensure that every detail is meticulously planned and executed to perfection.
      `,
      description2: `
        Our on-site supervision service provides you with the peace of mind that your project is in the hands of experienced professionals. We manage every phase of the construction process, ensuring that timelines are met, budgets are maintained, and the highest standards of quality are adhered to. By closely monitoring the project from start to finish, we guarantee that the final outcome aligns with your expectations, providing a seamless and stress-free experience for all our clients.
      `
    },
    {
      title: "Space Transformation & Quality Supervision",
      description1: `
        Our space transformation service focuses on creating dynamic, functional spaces that cater to your business needs. We go beyond aesthetics, ensuring that the transformed environment not only looks impressive but also works efficiently for daily operations. Our designers and engineers collaborate to ensure that every corner of your space is optimized for comfort and productivity.
      `,
      description2: `
        With our quality supervision, we ensure that every aspect of your project is carried out to the highest standards. From materials to workmanship, our team conducts rigorous checks at every stage, ensuring that nothing is overlooked. The result is a space that not only meets but exceeds your expectations in terms of both functionality and visual appeal.
      `
    },
    {
      title: "Design Implementation & Project Monitoring",
      description1: `
        At Xperts Interior Decoration LLC, design implementation is at the core of bringing your vision to life. Our team ensures that every element of the design is executed flawlessly, maintaining the integrity of the original concept. From material selection to layout execution, we work closely with clients and architects to ensure every design element is realized to perfection.
      `,
      description2: `
        Project monitoring is a crucial part of our process, where we ensure the entire project stays on track from inception to completion. We monitor timelines, budgets, and quality to make sure every phase is completed efficiently and meets the desired standards. Our project managers provide regular updates and are proactive in addressing any challenges, ensuring a smooth and successful project completion.
      `
    }
  ];

  const serviceImages = [
    '/image/services/interior-fit-out.webp',
    '/image/services/space-transformation.webp',
    '/image/services/design-implementation.webp'
  ];


  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className="relative bg-[url('/image/services/services1.webp')] bg-center bg-cover bg-no-repeat h-screen w-full"
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="absolute top-80 sm:top-80 md:top-80 lg:top-56 xl:top-56  inset-0 flex items-center justify-center"
        >
          <h1 className="container text-xs font-semibold text-gray-600 tracking-widest text-center sm:text-xl md:text-xl lg:text-xl xl:text-2xl rotate-3.5">
            Transform your dream space into reality !!!
          </h1>
        </motion.div>
      </motion.div>

      {/* About Us Section */}
      <div className="container mx-auto px-4">
        <div className="px-4 pt-8">
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl  font-semibold text-gray-600 dark:text-gray-300 text-center p-10 tracking-widest uppercase
           shadow-lg ring-2 ring-gray-600 dark:ring-gray-300 rounded-lg"
          >
            "Xcellence is our standard
            <br/>Quality is our promise"
          </motion.h2>
         
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-xl mt-14 text-gray-700 dark:text-gray-200 text-justify"
          >
            Xperts Interior Decoration LLC brings over a decade of excellence in delivering premier fit-out and interior decoration services in Dubai.
          <br/>Our expertise transforms spaces into functional and aesthetically stunning environments, reflecting our commitment to quality, innovation, and client satisfaction. From concept to completion, we specialize in creating tailored solutions that redefine interiors, setting new standards in design and functionality.
          <br/>Feel free to modify it if you'd like to emphasize specific services or values further.
          </motion.p>
        </div>

        {/* Gallery Sections */}
        <div className="container mx-auto px-4">
        {services.map((service, index) => (
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
                src={serviceImages[index]}
                alt="Service Image"
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
                className="absolute top-4 text-2xl text-primary font-semibold text-left lg:text-3xl"
              >
                {service.title} :
              </motion.h2>
              
              <motion.p
                initial="offscreen"
                whileInView="onscreen"
                variants={desVariants}
                className="pb-4 tracking-wide mt-24 text-justify"
              >
                {service.description1}
                {expanded[index] && (
                  <>
                    <br />
                    <br />
                    {service.description2}
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
      </div>
    </div>
  );
};

export default ServicePage;
