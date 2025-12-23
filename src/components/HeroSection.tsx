import { ArrowRight, Play, Users, Star, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "2,500+", label: "Students Enrolled", color: "from-blue-500 to-cyan-500" },
  { icon: Star, value: "4.9", label: "Average Rating", color: "from-amber-500 to-orange-500" },
  { icon: Clock, value: "50+", label: "Hours of Content", color: "from-violet-500 to-purple-500" },
  { icon: Award, value: "98%", label: "Completion Rate", color: "from-emerald-500 to-teal-500" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-24 md:pt-32 overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-primary/5 rounded-full" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Now Enrolling
          </span>
        </div>

        <h1 className="animate-fade-up font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6" style={{ animationDelay: '100ms' }}>
          Master{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Modern Finance</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg -rotate-1 scale-105" />
          </span>
        </h1>

        <p className="animate-fade-up text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed" style={{ animationDelay: '200ms' }}>
          Learn investment strategies and market analysis from industry experts.
        </p>

        <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '300ms' }}>
          <a href="#enroll">
            <Button size="lg" className="hero-button group rounded-full">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Button size="lg" variant="outline" className="hero-button-outline group rounded-full">
            <Play className="mr-2 h-4 w-4" />
            Watch Preview
          </Button>
        </div>

        {/* Enhanced Stats Section */}
        <div className="animate-fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" style={{ animationDelay: '400ms' }}>
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="group relative p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              
              {/* Value */}
              <div className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>

              {/* Subtle glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
