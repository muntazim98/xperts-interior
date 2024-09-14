import dynamic from "next/dynamic";
const DynamicContactPageComponent=dynamic(()=>import("@/components/ContactPageComponent"),{ssr:false});

export default function contact() {
  return (
    <>
    <DynamicContactPageComponent/>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Connect - Xperts Interior | Best Afforable Interior Design Company",
    description: "Cnnect with our sales to build your dream interior design. one of the affordable interior design company of dubai. We provide service for all kind of interior design with value for money",
  };
}