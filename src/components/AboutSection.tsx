import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Users, Zap } from "lucide-react";

const audiences = [
  {
    icon: Target,
    title: "Career Changers",
    description: "Transition into finance or investment banking.",
  },
  {
    icon: Users,
    title: "Entrepreneurs",
    description: "Understand markets and grow your business.",
  },
  {
    icon: Zap,
    title: "Investors",
    description: "Take control of your financial portfolio.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-3">
              About
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              Your Path to{" "}
              <span className="text-gradient">Financial Mastery</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Learn practical finance skills from industry experts. 
              Build confidence to make smarter investment decisions.
            </p>
          </div>

          {/* Right - Audience cards */}
          <div className="grid gap-4">
            {audiences.map((item, index) => (
              <div
                key={item.title}
                className={`about-card group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="about-card-icon">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
