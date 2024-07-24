// components/SocialMediaLinks.js
'use client';
import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { desVariants, titleVariants } from '@/utils/animation';

const socialMediaLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com', icon: <FaFacebook className="w-8 h-8" /> },
  { name: 'YouTube', href: 'https://www.youtube.com', icon: <FaYoutube className="w-8 h-8" /> },
  { name: 'Instagram', href: 'https://www.instagram.com', icon: <FaInstagram className="w-8 h-8" /> },
  { name: 'Twitter', href: 'https://www.twitter.com', icon: <FaTwitter className="w-8 h-8" /> },
  { name: 'Whatsapp', href: 'https://wa.me/', icon: <FaWhatsapp className="w-8 h-8" /> },
  
];

const SocialMediaLinks = () => (
  <motion.div
        initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
   className="absolute top-0 right-8  p-4 flex space-x-6">
    {socialMediaLinks.map(link => (
      <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white 
      transition hover:scale-110">
        {link.icon}
      </a>
    ))}
  </motion.div>
);

export default SocialMediaLinks;
