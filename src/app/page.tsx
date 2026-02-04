import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ServicesSection,
  StatsSection,
  FeaturesSection,
  HowItWorksSection,
  CoursesSection,
  TestimonialsSection,
  PartnersSection,
  BlogPreviewSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CoursesSection />
        <TestimonialsSection />
        <PartnersSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
