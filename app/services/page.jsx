import dynamic from "next/dynamic";
const DynamicServicePageComponent=dynamic(()=>import("@/components/ServicePageComponent"),{ssr:false});

export default function about() {
  return (
    <>
    <DynamicServicePageComponent/>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Services - Xperts Interior | Best Interior Design Service Company",
    description: "All about the  services ofXperts Interior company. one of the best interior design company",
  };
}