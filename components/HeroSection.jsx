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
      <div className='lg:w-1/2 xl:py-0 lg:py-0'>
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
          Where Dream Take Infinity Shapes By Magic of Infinity Arts.
        </motion.h1>
        <motion.p 
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className='pb-6 text-muted-foreground xl:pb-10 text-justify'>
          At Xperts Interior Decoration LLC, we believe that every place is a canvas waiting to be transformed. Our passion lies in weaving stories through design, where colors harmonize, textures whisper, and furniture dances to its own rhythm. Whether it’s a cozy nook or a sprawling penthouse, we curate spaces that reflect your personality, aspirations, and dreams.
          <br/>Feel free to explore our portfolio, connect with our team, and embark on a journey of transformation. Welcome to Xperts Interior Decoration LLC ! ✨
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}>
            <a href="/contact">
          <Button className="inline-flex items-center justify-center px-8 py-2 mt-2
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
        <Image src="/image/homepage/hall.webp"
          width={2291}
          height={1529}
          alt="home image"
          objectFit="contain"
          className="absolute right-10 xl:h-[520px] xl:w[1050px] lg:h-[400px] lg:w-[500px] hidden 
          lg:block  transition hover:scale-105 transform duration-500 ease-in-out" 
          
        />
      </div>
    </div>
  )
}

export default HeroSection
