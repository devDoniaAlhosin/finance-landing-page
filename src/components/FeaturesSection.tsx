import { useEffect, useRef, useState } from "react";
import { 
  GraduationCap, 
  TrendingUp, 
  BookOpen, 
  Download, 
  Clock, 
  Award 
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: GraduationCap,
    title: "Expert-Led Curriculum",
    description: "Learn from industry veterans with decades of experience in investment banking, portfolio management, and financial analysis.",
  },
  {
    icon: TrendingUp,
    title: "Real-World Case Studies",
    description: "Apply your knowledge through meticulously crafted case studies from actual market scenarios and corporate finance decisions.",
  },
  {
    icon: BookOpen,
    title: "Structured Learning Path",
    description: "Progress through a carefully designed curriculum that builds your expertise from foundational concepts to advanced strategies.",
  },
  {
    icon: Download,
    title: "Premium Resources & Tools",
    description: "Access exclusive financial models, templates, and analytical tools used by top-tier professionals in the industry.",
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "Enjoy unlimited access to all course materials, including future updates and newly added content at no extra cost.",
  },
  {
    icon: Award,
    title: "Professional Certification",
    description: "Earn a recognized certificate upon completion, validating your expertise and enhancing your professional credentials.",
  },
];

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Everything You Need to{" "}
            <span className="text-gradient">Master Finance</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our comprehensive program equips you with practical skills and deep knowledge 
            to excel in the world of finance and investment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={isVisible ? 'animate-fade-up' : 'opacity-0'}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
