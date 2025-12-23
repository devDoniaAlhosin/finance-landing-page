import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import CourseStructure from "@/components/CourseStructure";
import FeaturesSection from "@/components/FeaturesSection";
import InstructorSection from "@/components/InstructorSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import EnrollmentSection from "@/components/EnrollmentSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="curriculum">
        <CurriculumSection />
      </section>
      <CourseStructure />
      <FeaturesSection />
      <section id="instructor">
        <InstructorSection />
      </section>
      <BenefitsSection />
      <TestimonialsSection />
      <section id="pricing">
        <PricingSection />
      </section>
      <FAQSection />
      <EnrollmentSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
