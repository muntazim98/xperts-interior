import dynamic from "next/dynamic";
const DynamicCollectionPageComponent=dynamic(()=>import("@/components/CollectionPageComponent"),{ssr:false});

export default function collection() {
  return (
    <>
    <DynamicCollectionPageComponent/>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Collection - Xperts Interior | Best Interior Design Company",
    description: "All collections of design of the Xperts Interior company. one of the best interior design company",
  };
}