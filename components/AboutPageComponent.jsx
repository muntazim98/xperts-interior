'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { TbArrowUpRight } from 'react-icons/tb';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover h-screen w-full"
      >
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64"
        >
          Know About Us!!!
        </motion.h1>
      </motion.div>

      {/* About Us Section */}
      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            We have great ideas & Interior Design
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-2xl font-medium pb-10 mt-5 text-justify"
          >
            Our interior design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
          </motion.p>
        </div>

        {/* Gallery Section */}
        <div className="items-center lg:flex gap-x-8">
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image src="/image/gallery1123.jpg" width={700} height={900} alt="Gallery Image" />
          </motion.div>
          <div>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="pb-8 tracking-wide mt-6 text-justify"
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

        {/* Team Section */}
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="text-4xl font-bold tracking-wider text-center uppercase"
            >
              Our Team
            </motion.h1>
          </div>
          <div className="grid py-8 gap-20 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                className="border-2 border-primary"
              >
                <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
                  <Image src={member.image} width={200} height={200} alt={member.name} className="mx-auto rounded-full" />
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
    image: "/image/profile3.jpg",
    name: "Project Manager",
    role: "Project Manager",
    description: "Project Manager combines creative flair with strategic project management skills."
  },
  {
    image: "/image/profile1.jpg",
    name: "Project Architect",
    role: "Project Architect",
    description: "Project Architect oversees architectural aspects of projects."
  },
  {
    image: "/image/profile2.jpg",
    name: "Team Lead",
    role: "Team Lead",
    description: "Team Leader oversees employees and foster positive communication within the team."
  },
  {
    image: "/image/people/person7.jpg",
    name: "Building Surveys",
    role: "Building Surveys",
    description: "Bulding Serveys includes the survey of location , map and place for project."
  },
  {
    image: "/image/people/person8.jpg",
    name: "Design Surveys",
    role: "Design Surveys",
    description: "Design Serveys Consist of project design and other Measurements."
  },
  {
    image: "/image/people/person9.jpg",
    name: "Quality Surveys",
    role: "Quality Surveys",
    description: "For Quality Serveys they check the raw material quality for Project."
  }
];

export default AboutPage;

