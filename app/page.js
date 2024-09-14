import dynamic from "next/dynamic";
const DynamicHeroSection=dynamic(()=>import("@/components/HeroSection"),{ssr:false});
const DynamicCompanySection=dynamic(()=>import("@/components/CompanySection"),{ssr:false});
const DynamicAuthoritySection=dynamic(()=>import("@/components/AuthorityApproval"),{ssr:false});
const DynamicAboutSection=dynamic(()=>import("@/components/AboutComponent"),{ssr:false});
const DynamicCatalogueSection=dynamic(()=>import("@/components/CatalogueSection"),{ssr:false});
const DynamicCatalogSwiperSection=dynamic(()=>import("@/components/CatalogSwiperSection"),{ssr:false});
const DynamicContactSection=dynamic(()=>import("@/components/ContactSection"),{ssr:false});

export default function Home() {
  return (
    <>
    <DynamicHeroSection/>
    <DynamicCompanySection/>
    <DynamicAuthoritySection/>
    <DynamicAboutSection/>
    <DynamicCatalogueSection/>
    <DynamicCatalogSwiperSection/>
    <DynamicContactSection/>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Home - Xperts Interior | Best Interior Design Company",
    description: "Home page of Xperts Interior company. one of the best interior design company",
  };
}
