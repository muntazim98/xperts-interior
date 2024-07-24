import dynamic from "next/dynamic";
const DynamicAboutPageComponent=dynamic(()=>import("@/components/AboutPageComponent"),{ssr:false});

export default function about() {
  return (
    <>
    <DynamicAboutPageComponent/>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "About - Xperts Interior | Best Interior Design Company",
    description: "All about the Xperts Interior company. one of the best interior design company",
  };
}