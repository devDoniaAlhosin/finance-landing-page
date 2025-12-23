import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  TrendingUp, 
  Briefcase, 
  Brain, 
  Network, 
  Award, 
  Target 
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Investment Confidence",
    description: "Make informed investment decisions backed by solid analytical frameworks and market understanding.",
  },
  {
    icon: Briefcase,
    title: "Career Advancement",
    description: "Gain credentials and skills valued by top financial institutions and investment firms.",
  },
  {
    icon: Brain,
    title: "Financial Literacy",
    description: "Develop a deep understanding of how markets work and how to navigate economic cycles.",
  },
  {
    icon: Network,
    title: "Professional Network",
    description: "Connect with like-minded professionals and industry experts in our exclusive community.",
  },
  {
    icon: Award,
    title: "Recognized Certification",
    description: "Earn a certificate that demonstrates your expertise to employers and clients.",
  },
  {
    icon: Target,
    title: "Practical Skills",
    description: "Build real financial models, analyze actual companies, and develop actionable strategies.",
  },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Benefits
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Transform Your <span className="text-gradient">Financial Future</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Gain the knowledge, skills, and confidence to excel in finance 
            and take control of your financial destiny.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`benefit-card group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 75}ms` }}
            >
              <div className="benefit-icon">
                <benefit.icon className="w-6 h-6 text-primary transition-all duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
