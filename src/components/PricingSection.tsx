import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "50+ hours of HD video content",
  "Lifetime access to all materials",
  "Downloadable financial models",
  "Private community access",
  "Weekly live Q&A sessions",
  "Certificate of completion",
  "30-day money-back guarantee",
  "Free future course updates",
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Enrollment
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Invest in Your <span className="text-gradient">Future</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One comprehensive program. Everything you need to master modern finance.
          </p>
        </div>

        {/* Pricing Card */}
        <div 
          className={`pricing-card ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '100ms' }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Price */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Limited Time Offer
              </div>
              
              <div className="mb-4">
                <span className="text-muted-foreground line-through text-2xl">$1,499</span>
              </div>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-heading font-bold text-foreground">$997</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              
              <p className="text-muted-foreground mb-8">
                or 3 payments of $349
              </p>

              <a href="#enroll">
                <Button size="lg" className="hero-button w-full md:w-auto group rounded-full">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <p className="text-sm text-muted-foreground mt-4">
                🔒 Secure checkout · 30-day guarantee
              </p>
            </div>

            {/* Right - Features */}
            <div>
              <h4 className="font-heading text-xl font-semibold text-foreground mb-6">
                Everything Included:
              </h4>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
