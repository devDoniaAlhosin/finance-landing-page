import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Twitter } from "lucide-react";

const InstructorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className={`relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <span className="text-4xl font-heading text-primary">JM</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Instructor Photo</p>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -right-4 top-1/4 bg-background border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-heading text-gradient">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="absolute -left-4 bottom-1/4 bg-background border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-heading text-gradient">$2B+</div>
              <div className="text-sm text-muted-foreground">Assets Managed</div>
            </div>
          </div>

          {/* Content */}
          <div className={isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: '100ms' }}>
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Your Instructor
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              James <span className="text-gradient">Mitchell</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Former Managing Director at Goldman Sachs
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 15 years of experience in investment banking and portfolio management, 
              James has managed portfolios exceeding $2 billion and advised Fortune 500 companies 
              on strategic financial decisions. He holds a CFA charter and an MBA from Wharton.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              James's teaching philosophy focuses on practical application, ensuring students 
              can immediately apply concepts to real-world scenarios. His unique blend of 
              academic rigor and street-smart insights has helped thousands of professionals 
              advance their careers in finance.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["CFA Charterholder", "Wharton MBA", "Series 7 & 63", "15+ Years Experience"].map((cred) => (
                <span key={cred} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
                  {cred}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="social-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
