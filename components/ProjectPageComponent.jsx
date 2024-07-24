'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

const projects = [
  {
    id: 1,
    name: 'Drawing room for family time',
    description: 'Drawing room with a clean and comfortable design for your family.charming with a modern design.',
    image: '/image/projects/project3.jpg',
    link: '',
  },
  {
    id: 2,
    name: 'Kitchen with modern design',
    description: 'Kitchen room with clean and beautiful design for your family',
    image: '/image/projects/project2.jpg',
    link: '',
  },
  {
    id: 3,
    name: 'Modern Style Study Room',
    description: 'Study with a calm and comfortable design for your family.charming whit a modern design.',
    image: '/image/projects/project4.png',
    link: '',
  },
  {
    id: 4,
    name: 'OpenLight Living Room',
    description: 'Living room with clean and beautiful design for your family',
    image: '/image/projects/project1.jpg',
    link: '',
  },
  {
    id: 5,
    name: 'Aesthetic Guest Room',
    description: 'Guestroom with energetic ang gourgeous design for your family',
    image: '/image/projects/project5.jpg',
    link: '',
  },
  {
    id: 6,
    name: 'Perfect living room for family time',
    description: 'Livingroom with energetic ang gourgeous design for your family',
    image: '/image/projects/project6.jpg',
    link: '',
  },
  {
    id: 7,
    name: 'Royal Luxurious Dining Room',
    description: 'A Stunning Dining room with luxurious and beautiful design for your family',
    image: '/image/projects/project7.jpg',
    link: '',
  },
  {
    id: 8,
    name: 'OpenLight Kitchen For Family',
    description: 'Kitchen with open light ang beautiful design for your family',
    image: '/image/projects/project8.jpg',
    link: '',
  },
  {
    id: 9,
    name: 'OutDoor Guest Living Hall',
    description: 'Guest Living Hall with energetic ang gourgeous design for your family',
    image: '/image/projects/project9.jpg',
    link: '',
  },
  {
    id: 10,
    name: 'Modern Aesthetic Hall',
    description: 'Modern Hall with asthetic ang gourgeous design for your family',
    image: '/image/projects/project10.jpg',
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
    <div>
      <Image
        src={project.image}
        width={480}
        height={380}
        alt={project.name}
        className="w-full transition hover:scale-105"
      />
    </div>
    <div
      className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col 
      items-center justify-end w-96 gap-32 p-12 text-xl
      transition duration-300 ease-in-out translate-y-full from-transparent
      to-black group-hover:translate-y-0"
    >
      <h1 className="text-2xl font-semibold">{project.name}</h1>
      <p className="py-4 text-justify">{project.description}</p>
    </div>
  </motion.div>
);

const ProjectsPage = () => (
  <div>
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={titleVariants}
      className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover h-screen w-full"
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
