import dynamic from "next/dynamic";
const DynamicProjectPageComponent=dynamic(()=>import("@/components/ProjectPageComponent"),{ssr:false});

export default function projects() {
  return (
    <>
    <DynamicProjectPageComponent/>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Projects - Xperts Interior | Best Interior Design Company",
    description: "All the projects done by Xperts Interior company. one of the best interior design company",
  };
}