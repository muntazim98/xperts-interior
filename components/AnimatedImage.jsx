// components/AnimatedImage.jsx
'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedImage = ({ src, alt, width, height, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div ref={ref} style={{ scale }} className='overflow-hidden h-full w-full' >
      <Image src={src} width={width} height={height} className={className} alt={alt} objectFit="contain" 
      unoptimized/>
    </motion.div>
  );
};

export default AnimatedImage;
