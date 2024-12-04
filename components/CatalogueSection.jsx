import Image from "next/image"
import { TbArrowRight } from "react-icons/tb"
export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      catagory: "OFFICEROOM SETUP",
      title: "Cozy Officeroom Setup",
      image: "/image/collection/badroom.webp",
      description: "Officeroom with cozy and comfortable design for Better Working Environment"
    },
    {
      id: "02",
      catagory: "KITCHEN SETUP",
      title: "Beautiful Kitchen Setup",
      image: "/image/kitchen1.jpg",
      description: "kitchen room with clean and beautiful design for amazing Kitchen Environment"
    },
    {
      id: "03",
      catagory: "CONFERENCEROOM SETUP",
      title: "Aesthetic Conferenceroom Setup",
      image: "/image/drowing.jpg",
      description: "Conference room with aesthetic and elegant design for better Conference Environment"
    },
    {
      id: "04",
      catagory: "OFFICEHALL SETUP",
      title: "Energetic Hallroom Setup",
      image: "/image/living.jpg",
      description: "Office  Hallroom with energetic and gorgeous design for better Office Environment"
    }
  ]
  return (
    <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
      {
        items.map((item) => (
          <div key={item.id}
            className="relative overflow-hidden group" >
            <div>
              <Image
                src={item.image}
                width={380}
                height={100}
                alt=""
                className="w-full rounded-lg transition  hover:scale-105"
                
              />
            </div>
            <div className="absolute top-0  p-8 bg-white text-black bg-opacity-50 backdrop-blur m-4">

              <div className="flex justify-between pb-4">
                <p className="text-sm">
                  {item.catagory}
                </p>
                <span className="text-sm">
                  {item.id}
                </span>
              </div>
              <a href="" className="block text-xl font-semibold">{item.title}</a>
              <p className="py-4 text-justify">
                {item.description}
              </p>
              <a className="inline-flex items-center font-medium">
                See Details
                <TbArrowRight className="ml-2"/>
              </a>
            </div>
            <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex
            md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2
            group-hover:translate-y-full md:border-b-0 hidden">
            <p className="-rotate-90">{item.catagory}</p>
            <span>{item.id}</span>
            </div>

          </div>
        ))
      }
    </div>
  )

}
