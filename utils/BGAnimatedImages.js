import { motion } from 'framer-motion';

const AboutBackgroundImage = () => {
    return (
      <motion.div
        className="bg-[url('/image/whoweare.jpg')] bg-cover bg-center"
        initial={{ scale: 0.8, opacity: 0 }} // Initial state (scaled down and hidden)
        animate={{ scale: 1, opacity: 1 }} // Zoomed-in state (full size and visible)
        transition={{ duration: 1, ease: 'easeInOut' }} // Animation duration and easing
      >
        {/* Your other content */}
      </motion.div>
    );
  };
  
  export default AboutBackgroundImage;