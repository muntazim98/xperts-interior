'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
const AboutComponent = () => {
  return (
    <div className="container py-12 xl-py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 items-center">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}>
          <Image src="/image/aboutfront.png"
            alt="About"
            width={1217}
            height={900}
            className="max-md:hidden transition hover:scale-105 transform duration-500 ease-in-out"
          />
        </motion.div>
        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg-text-5xl">
            Celebrating Excellence :<br/>Our Award-Winning Journey
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="px-12 tracking-wider uppercase text-gray-400 mt-3">Design Excellence Award</motion.p>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="px-12 pb-4 mt-4 text-justify">
            At Artful Spaces, our passion for design knows no bounds. We pour our creativity, dedication, and expertise into every project, transforming spaces into living works of art.
            Recently, we had the honor of receiving the “Design Excellence Award” from the International Interior Design Association (IIDA). This prestigious award celebrates innovation, functionality, and aesthetics—the very pillars on which we build our designs.
            <br />Thank you for being part of our journey a journey that continues to inspire and elevate.
            Here’s to more beautiful spaces, more dreams realized, and more awards to come! 🎨✨
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
