import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseMobile } from "@/components/WhyChooseMobile";
import { ServicesSection } from "@/components/ServicesSection";
import { TransformationSection } from "@/components/TransformationSection";
import { ServiceHighlight } from "@/components/ServiceHighlight";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseMobile />
      <ServicesSection />
      <TransformationSection />
	  <ServiceHighlight />
      <CTASection />
    </Layout>
  );
}
