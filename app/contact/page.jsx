import dynamic from "next/dynamic";
const DynamicContactPageComponent=dynamic(()=>import("@/components/ContactPageComponent"),{ssr:false});

export default function collection() {
  return (
    <>
    <DynamicContactPageComponent/>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Contact - Xperts Interior | Best Interior Design Company",
    description: "Contact details of the Xperts Interior company. one of the best interior design company",
  };
}