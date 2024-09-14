'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { desVariants, titleVariants } from '@/utils/animation';
import { TbArrowUpRight } from 'react-icons/tb';
import { Button } from '@/components/ui/button';

const ServicePage = () => {
  const serviceImages = [
    '/image/services/interior-fit-out.jpg', // Image for Interior Fit-Out & On-Site Supervision
    '/image/services/space-transformation.jpg', // Image for Space Transformation & Quality Supervision
    '/image/services/design-implementation.jpg' // Image for Design Implementation & Project Monitoring
  ];
  const scrollRefs = [useRef(null), useRef(null), useRef(null)]; // Create refs for each image
  const scales = scrollRefs.map(ref => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    return useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  });

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className="relative bg-[url('/image/services1.jpg')] bg-center bg-cover bg-no-repeat h-screen w-full"
      >
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariants}
        className="absolute top-48 inset-0 flex items-center justify-center"
        >
<h1 className="container  text-xs font-semibold text-gray-600 tracking-widest text-center sm:text-xl  md:text-2xl lg:text-2xl xl:text-2xl rotate-3.5"
>Transform your dream space into reality !!!
</h1>
        </motion.div>
       

      </motion.div>

      {/* About Us Section */}
      <div className="container mx-auto px-4">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
           We Provide Services That Suit Your Needs
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-lg lg:text-2xl font-medium  mt-2 text-justify"
          >
            Xperts Interior Decoration LLC, with a decade of proven experience in the fit-out and interior decoration services in Dubai.

          </motion.p>
        </div>

        {/* Gallery Sections */}
        {['Interior Fit-Out & On-Site Supervision', 'Space Transformation & Quality Supervision', 'Design Implementation & Project Monitoring'].map((title, index) => (
          <div key={index} className={`items-center lg:flex gap-x-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} my-4`}>
            <motion.div style={{ scale: scales[index] }} ref={scrollRefs[index]} 
            className="w-full h-[500px] lg:h-[600px] overflow-hidden mb-6 lg:mb-0">
              <Image
               src={serviceImages[index]} // Use the image path corresponding to the service
               layout="fill"
               objectFit="cover"
               alt={`Gallery Image for ${title}`}
               className="rounded-lg"
              />
            </motion.div>
            <div>
              <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                className="text-2xl text-primary font-semibold text-left lg:p-8 lg:text-3xl"
              >
                {title}:
              </motion.h2>
              <motion.p
                initial="offscreen"
                whileInView="onscreen"
                variants={desVariants}
                className="pb-4 tracking-wide mt-2 text-justify text-lg lg:text-xl"
              >
                🌟 The Alchemy of Space: We orchestrate rooms like symphonies, each note resonating with purpose. Light dances through sheer curtains, casting shadows that tell stories. A vintage armchair cradles memories, while a hand-painted mural whispers secrets.
                <br />🎨 Brushstrokes of Elegance: Our palette is boundless—soft blushes, midnight blues, and the warmth of aged oak. We layer textures like sonnets: velvet against linen, brass against marble. Every detail, deliberate; every corner, a sonnet waiting to be read.
                <br />🏡 Homecoming: Your home is more than walls—it’s where laughter echoes, where love unfurls. We listen intently, sketching dreams into blueprints. From the cozy reading nook to the grand foyer, we craft spaces that breathe life into your story.
                <br />Step inside Artful Spaces, where design is an invitation—to linger, to dream, to find solace. Let’s create magic together.
                <br /><br />
                <span className="text-xl font-extrabold tracking-tight">
                  The backpiperARCH, we share a belief in the transformational power of people united in a common purpose.
                </span>
              </motion.p>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={desVariants}
              >
                <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                  Read More <TbArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
