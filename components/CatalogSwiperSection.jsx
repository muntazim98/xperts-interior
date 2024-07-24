'use client';
import { TbArrowUpRight } from "react-icons/tb";    
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import { useState } from 'react';

export default function CatalogSwiperSection() {
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleMouseEnter = () => {
        if (swiperInstance) {
            swiperInstance.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperInstance) {
            swiperInstance.autoplay.start();
        }
    };

    return (
        <div className="lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-1">
                <div className="text-left">
                    <motion.h1
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={titleVariants}
                        className="py-4 text-4xl font-medium lg:text-6xl lg:py-0"
                    >
                        Modern Classic
                    </motion.h1>
                    <motion.h2 
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={desVariants}
                        className="pb-6 py-2 text-xl font-bold tracking-wider mg-5"
                    >
                        LUXURY DECOR TO CREATE COMFORT IN OUR HOME
                    </motion.h2> 
                </div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                    className="grid grid-cols-2 text-gray-500 gap-x-8"
                >
                    <p className="text-justify">
                        “At Artful Spaces, our passion is the heartbeat of our work. With every brushstroke, fabric choice, and spatial arrangement, we breathe life into homes. Our designs are more than aesthetics; they’re a symphony of functionality, comfort, and dreams realized. Crafting spaces that resonate with individual stories—this is our purpose, our joy.”
                        <br/>
                        Our team of visionary designers, artisans, and architects approaches each project with unwavering dedication. We listen intently to our clients’ aspirations, understanding that a home is more than walls and furniture.it’s an extension of their soul. From minimalist chic to opulent grandeur, we curate spaces that reflect unique personalities and lifestyles.
                    </p>
                    <p className="text-justify">
                        Functionality is our guiding star. We optimize layouts, ensuring seamless flow and practicality. Whether it’s a cozy nook or a sprawling penthouse, we consider how each room will be used, how light will dance across surfaces, and how textures will evoke emotions. Our designs are purposeful, enhancing daily life.
                        <br/>
                        Comfort is non-negotiable. Soft throws on sofas, inviting reading corners, and ergonomic furniture—these details matter. We create sanctuaries where memories are etched, where laughter echoes, and where families gather to celebrate life’s milestones.
                    </p>
                </motion.div>
                <motion.a 
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={desVariants}
                    href="/collection"
                >
                    <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover-ring-gray-950 ring-offset-2">
                        View Collection
                        <TbArrowUpRight className="w-5 h-5 ml-2"/>
                    </Button>
                </motion.a>
            </div>
            {/* Swiper */}
            <Swiper
                onSwiper={setSwiperInstance}
                slidesPerView={1}
                breakpoints={{ 
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 50 },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {[1, 2, 3, 4, 5].map((index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={`/image/swiper${index}.jpg`}
                            alt={`Slide ${index}`}
                            width={520}
                            height={220}
                            className="w-full transition hover:scale-110 transform duration-700 ease-in-out"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
