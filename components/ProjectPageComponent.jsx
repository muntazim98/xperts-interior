'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

const projects = [
  {
    id: 1,
    name: 'Executive Office Space Design',
    description: 'Office space with a modern, functional design tailored for productivity.',
    image: '/image/projectimage/projectimage1.webp',
    link: '',
  },
  {
    id: 2,
    name: 'Contemporary Commercial Kitchen',
    description: 'A sleek and efficient kitchen design for commercial environments.',
    image: '/image/projectimage/projectimage2.webp',
    link: '',
  },
  {
    id: 3,
    name: 'Modern Corporate Conference Room',
    description: 'A stylish and comfortable design for a professional conference space.',
    image: '/image/projectimage/projectimage3.webp',
    link: '',
  },
  {
    id: 4,
    name: 'Spacious Office Lounge',
    description: 'A relaxing lounge area designed for modern offices and workspaces.',
    image: '/image/projectimage/projectimage4.webp',
    link: '',
  },
  {
    id: 5,
    name: 'Luxurious Hotel Guest Room',
    description: 'An elegant guest room designed for a premium hotel experience.',
    image: '/image/projectimage/projectimage5.webp',
    link: '',
  },
  {
    id: 6,
    name: 'Premium Office Meeting Room',
    description: 'A vibrant meeting room design for corporate discussions.',
    image: '/image/projectimage/projectimage6.webp',
    link: '',
  },
  {
    id: 7,
    name: 'High-End Restaurant Dining Room',
    description: 'A luxurious dining room for a top-tier restaurant.',
    image: '/image/projectimage/projectimage7.webp',
    link: '',
  },
  {
    id: 8,
    name: 'Bright and Open Commercial Kitchen',
    description: 'A well-lit and functional kitchen for a commercial setup.',
    image: '/image/projectimage/projectimage8.webp',
    link: '',
  },
  {
    id: 9,
    name: 'Outdoor Commercial Seating Area',
    description: 'A vibrant outdoor seating area for a commercial setting.',
    image: '/image/projectimage/projectimage9.webp',
    link: '',
  },
  {
    id: 10,
    name: 'Modern Corporate Event Hall',
    description: 'An aesthetic and functional hall for corporate events.',
    image: '/image/projectimage/projectimage10.webp',
    link: '',
  },
];


const ProjectSection = ({ project }) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={desVariants}
    key={project.id}
    className="relative overflow-hidden rounded-xl group"
  >
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <Image
        src={project.image}
        layout="fill" // Ensures image covers the parent container
        objectFit="cover" // Ensures image scales and fits nicely within its container
        objectPosition="center" // Centers the image within the container 
        alt={project.name}
        className="transition-transform duration-500 group-hover:scale-105"
        
      />
    </div>
    <div
      className="absolute bottom-0 right-0 bg-white/80 dark:bg-black/60 flex-col 
      items-center justify-end w-96 gap-32 p-10  text-xl
      transition duration-300 ease-in-out translate-y-full from-transparent
      to-black group-hover:translate-y-0"
    >
      <h1 className="ml-4 text-xl lg:2xl md:text-2xl xl:text-3xl  font-semibold">{project.name}</h1>
      <p className="ml-4 py-4 lg:text-xl md:text-xl xl:text-2xl text-lg text-justify">{project.description}</p>
    </div>
  </motion.div>
);

const ProjectsPage = () => (
  <div>
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={titleVariants}
      className="bg-[url('/image/projects/backgroundproject.webp')] bg-center bg-cover h-screen w-full"
    >
      <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className="container py-64 text-5xl font-semibold tracking-widest uppercase text-white"
      >
        Witness Our Fabulous Projects
      </motion.h1>
    </motion.div>
    <div className="container grid lg:grid-cols-2 gap-8 py-8">
      {projects.map(project => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectsPage;
