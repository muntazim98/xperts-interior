'use client';
import {tagVariants, desVariants ,titleVariants} from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";
const page = () => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4 " >
      <div className="flex flex-col gap-4">
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={titleVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all" alt="bedroom image" 
          height={2290} width={1527}
          layout="responsive"
           src="/image/collection/badroom.jpg" />
        </motion.div >  
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={desVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={1920} height={1440}  alt=""
           src="/image/collection/gallery2.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={tagVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={1920} height={2880} alt=""
            src="/image/collection/gallery.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={titleVariants} >
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={4032} height={3024} alt=""
           src="/image/collection/employeetable3.png" />
        </motion.div >
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={desVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all" 
           layout="responsive"
           width={4032} height={3024} alt=""
          src="/image/collection/frontendoffice.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={tagVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={3648} height={5472} alt=""
           src="/image/collection/collectionimage5.jpg" />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4">
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={titleVariants} >
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all" 
           layout="responsive"
           width={4025} height={2886} alt=""
          src="/image/collection/collectionimage9.jpg" />
        </motion.div >
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={desVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={4032} height={3024} alt=""
           src="/image/collection/entrancehall.png" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={tagVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={3024} height={4032} alt=""
           src="/image/collection/floor.png" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={titleVariants} >
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive" width={3024} height={4032}  alt=""
           src="/image/collection/entrance.png" />
        </motion.div >
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={desVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={4032} height={3024} alt=""
           src="/image/collection/meetinghalloffice.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={tagVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={2160} height={3840} alt=""
           src="/image/collection/officewalk.jpg" />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4">
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={titleVariants} >
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={4032} height={3024} alt=""
           src="/image/collection/meetingroom2.png" />
        </motion.div >
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={desVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all" 
           layout="responsive"
           width={1556} height={2000} alt=""
          src="/image/collection/project1.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={tagVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={3024} height={4032} alt=""
           src="/image/collection/officehall.png" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={titleVariants} >
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={3024} height={4032} alt=""
           src="/image/collection/officecabin2.png" />
        </motion.div >
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={desVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={4436} height={6654} alt=""
           src="/image/collection/collectionimage20.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={tagVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={3400} height={3000} alt=""
           src="/image/collection/collectionimage19.jpg" />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4">
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={titleVariants} >
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={1870} height={2805} alt=""
           src="/image/collection/collectionimage17.jpg" />
        </motion.div >
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={desVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive" width={4928} height={3264} alt="" src="/image/collection/collectionimage16.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={tagVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={3872} height={2420} alt=""
           src="/image/collection/collectionimage15.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={titleVariants} >
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={3024} height={4032} alt=""
           src="/image/collection/collectionimage14.jpg" />
        </motion.div >
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={desVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all"
           layout="responsive"
           width={3648} height={5472} alt=""
           src="/image/collection/collectionimage13.jpg" />
        </motion.div>
        <motion.div
         initial="offscreen"
         whileInView="onscreen"
         variants={tagVariants}>
          <Image className="h-auto max-w-full rounded-lg hover:scale-110 transition-all" 
           layout="responsive"
           width={3631} height={4539} alt=""
          src="/image/collection/collectionimage12.jpg" />
        </motion.div>
      </div>
    </div>
  )
}
export default page