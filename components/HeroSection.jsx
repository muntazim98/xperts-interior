'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb"
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"
import { motion } from "framer-motion";
const HeroSection = () => {
  return (

    <div className='container py-6 xl:py-12 h-[auto] text-center lg:py-0 
    lg:text-left lg:flex lg:justify-between'>
      {/* left Section*/}
      <div className='lg:w-1/2 xl:py-4 lg:py-4'>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className='tracking-widest uppercase'>
          Witness the fabulous interior offer
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className='h1'>
          Where Dreams Take Shape,By Magic of Arts.
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className='pb-6 text-muted-foreground xl:pb-10 text-justify'>
          At Artful Spaces, we believe that every room is a canvas waiting to be transformed. Our passion lies in weaving stories through design, where colors harmonize, textures whisper, and furniture dances to its own rhythm. Whether it’s a cozy nook or a sprawling penthouse, we curate spaces that reflect your personality, aspirations, and dreams.
          <br/>Feel free to explore our portfolio, connect with our team, and embark on a journey of transformation. Welcome home! 🏠✨
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}>
            <a href="/contact">
          <Button className="inline-flex items-center justify-center px-8 py-3 mt-4
           text-white rounded-full shadow-lg
           hover:bg-gray-800 hover:ring-2 hover-ring-gray-950 ring-offset-2"
            >
            Book now<TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
          </a>
        </motion.div>

      </div>
      {/* Right Image Section*/}
      <div className='w-1/2'>
        <Image src="/image/hall.png"
          width={2291}
          height={1529}
          alt=""
          className="absolute right-20 xl:h-[448px] xl:w[770px] lg:h-[400px] lg:w-[500px] hidden 
          lg:block  transition hover:scale-105 transform duration-500 ease-in-out" 
        />
      </div>
    </div>
  )
}

export default HeroSection
