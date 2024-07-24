'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
const posts = [
    {
        id: 1,
        title: 'Grow Your Business with Interior Design',
        href: '#',
        description:
            'Discover how innovative interior design can boost your business growth, enhance your brand, and improve customer experience.',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: '4.7', href: '#' },
        author: {
            name: 'Adam Safiq',
            role: 'Interior Design Consultant',
            href: '#',
            imageUrl: '/image/people/person1.jpg',
            imageHeight: 4123,
            imageWidth:4532
        },
    },
    {
        id: 2,
        title: 'Transform Your Business Space',
        href: '#',
        description:
            'Learn how transforming your business space with interior design can lead to increased productivity and customer satisfaction.',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: '4.9', href: '#' },
        author: {
            name: 'Michael Henderson',
            role: 'Chief Design Officer',
            href: '#',
            imageUrl: '/image/people/person2.jpg',
            imageHeight: 3148,
            imageWidth:3249
        },
    },
    {
        id: 3,
        title: 'Enhancing Business Growth through Design',
        href: '#',
        description:
            'Explore the impact of aesthetic and functional interior design on your business growth, business  mobility, and overall success.',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: '4.6', href: '#' },
        author: {
            name: 'Kevin Miller',
            role: 'Lead Interior Designer',
            href: '#',
            imageUrl: '/image/people/person3.jpg',
            imageHeight: 3596,
            imageWidth:3973
        },
    },
    {
        id: 4,
        title: 'Designing for Business Success',
        href: '#',
        description:
            'Understand the principles of designing a business space that attracts customers and fosters a productive work environment.',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: '4.4', href: '#' },
        author: {
            name: 'Matt Clark',
            role: 'Head of Design Strategy',
            href: '#',
            imageUrl: '/image/people/person4.jpg',
            imageHeight: 1750,
            imageWidth:1867
        },
    },
    {
        id: 5,
        title: 'Interior Design for Business Growth',
        href: '#',
        description:
            'Learn how strategic interior design can enhance your business operations, increase revenue, business growth and customer engagement.',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: '4.7', href: '#' },
        author: {
            name: 'Shaikh Ismail',
            role: 'Senior Design Consultant',
            href: '#',
            imageUrl: '/image/people/person5.jpg',
            imageHeight: 2046,
            imageWidth:3069
        },
    },
    {
        id: 6,
        title: 'The Role of Design in Business Expansion',
        href: '#',
        description:
            'Discover the crucial role that interior design plays in business expansion, buisiness growth, modernization of business and long-term success.',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: '4.9', href: '#' },
        author: {
            name: 'Dan Smith',
            role: 'Director of Interior Design',
            href: '#',
            imageUrl: '/image/people/person6.jpg',
            imageHeight: 2991,
            imageWidth:4486
        },
    },
];


export default function ContactSection() {
    return (
        <div className="pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                    className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Customer Reviews :
                </motion.h2>
                <motion.p
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={desVariants}
                    className="mt-2 text-lg leading-8 text-muted-foreground"
                >
                    Learn how to grow your business with our experts advice.
                </motion.p>
                <div
                    className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 low:max-w-none lg:mx-0 sm:py-16
                sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16">
                    {
                        posts.map((post) => (
                            <article key={post.id}
                                className="flex max-w-xl flex-col items-start justify-between">
                                <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={titleVariants}
                                 className="flex items-center gap-x-4 text-xs">
                                    <time dateTime="{post.datetime}">
                                        <Image src="/image/star.svg"
                                            alt=""
                                            width={80}
                                            height={5}
                                        ></Image>
                                    </time>
                                    <a href={post.category.href}
                                        className="relative z-10 bg-primary rounded-full text-white
                                        px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black
                                        transition-all">
                                        {post.category.title}
                                    </a>
                                </motion.div>
                                <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={tagVariants}
                                 className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                                        <a href="{post.href}">
                                            <span>
                                                {post.title}
                                            </span>
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground text-justify">
                                        {post.description}
                                    </p>
                                </motion.div>
                                <motion.div 
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={desVariants}
                                className="relative mt-8 flex items-center gap-x-4">
                                    <Image src={post.author.imageUrl} alt="reviewer image" 
                                    layout="intrinsic"
                                    height={post.author.imageHeight}
                                    width={post.author.imageWidth}
                                      className="h-20 w-20 rounded-full bg-gray-50 transition hover:scale-125"/>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold">
                                            <a href="{post.author.href}">
                                                <span />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-muted-foreground">
                                            {post.author.role}
                                        </p>
                                    </div>
                                </motion.div>
                            </article>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
