'use client';
import Link from "next/link";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import SocialMediaLinks from "./SocialMediaLinks";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleButtonClick = () => {
    if (!email)  return;
    // Logic for your button action (e.g., sending email)
    // Assuming action is successful, show success message
    setShowSuccessMessage(true);
    // Reset the input field value
    setEmail('');
    // Reset the success message after a delay (optional)
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000); // Reset after 3 seconds (3000 milliseconds)
  };
  return (
    <div className="bg-tertiary">
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-left lg:gb-0 lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">Quick Links</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">About Us</Link>
              <Link href="/" className="py-1 hover:underline">Press</Link>
              <Link href="/" className="py-1 hover:underline">Career</Link>
              <Link href="/" className="py-1 hover:underline">Partnerships</Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">Developement</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">Documentation</Link>
              <Link href="/" className="py-1 hover:underline">Reference</Link>
              <Link href="/" className="py-1 hover:underline">Changelog</Link>
              <Link href="/" className="py-1 hover:underline">Status</Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}>
            <h2 className="pb-4 text-xl font-semibold uppercase">Our Services</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">Design Consultancy</Link>
              <Link href="/" className="py-1 hover:underline">Furniture Solution</Link>
              <Link href="/" className="py-1 hover:underline">Fitout Services</Link>
              <Link href="/" className="py-1 hover:underline">Villa Extension and Renovation</Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}>
          <p className="pb-4 text-xl font-semibold">Stay Updated</p>
          <div className="relative lg:max-w-sm">
            <Input
             onChange={(e) => setEmail(e.target.value)}
             type='email' value={email} id='emailId' placeholder="Email Address" />
            <button
              onClick={handleButtonClick}
              className="absolute bg-primary text-white rounded-full h-10 px-3 text-sm
              top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black
              dark:hover:bg-primary">
              Subscribe
            </button>
            {showSuccessMessage && (
              <p className="text-green-500 mt-4">successfully subscribed !</p>
            )}
          </div>
          <p className="pt-4 text-gray-500 text-justify">
            By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
      {/* Copyright */}
      <div className="relative py-10 bg-gray-700 dark:bg-primary">
        <SocialMediaLinks />
        <div className="container py-6 text-white text-center lg:justify-between">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="pb-4 lg:pb-0">
            <p>Xperts Interiors Decoration L.L.C &copy; 2024 Interior. All Rights Reserved</p>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants} className="flex justify-center space-x-2">
            <Link className=" hover:underline" href='/'>Privacy Hub</Link>
            <p>|</p>
            <Link className=" hover:underline" href='/'>Terms</Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}