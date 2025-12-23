import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-24 bg-secondary/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative text-center">
        <div className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Start Your Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className="text-gradient">Financial Future?</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join over 2,500 professionals who have already taken control of their 
            financial destiny. Your journey to mastery starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#enroll">
              <Button size="lg" className="hero-button group text-lg px-8 py-6 rounded-full">
                Enroll Now — $997
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            30-day money-back guarantee · Lifetime access · Secure checkout
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
