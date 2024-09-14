import dynamic from "next/dynamic";
const DynamicCollaboratePageComponent=dynamic(()=>import("@/components/CollaboratePageComponent"),{ssr:false});

export default function partner() {
  return (
    <>
    <DynamicCollaboratePageComponent/>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Partner with us - Xperts Interiors | One of the Trusted Interior Design Company to partner",
    description: "partner with us to build your dream interior design. one of the trustworthy interior design company of dubai",
  };
}