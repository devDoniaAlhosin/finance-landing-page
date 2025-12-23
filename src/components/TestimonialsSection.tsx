import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Portfolio Manager",
    company: "Blackrock",
    content: "This course completely transformed my approach to financial analysis. The practical case studies were invaluable, and I've already applied the valuation techniques in my work.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Investment Analyst",
    company: "Morgan Stanley",
    content: "James's teaching style makes complex concepts accessible. The financial modeling section alone was worth the investment. Highly recommend for anyone serious about finance.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Entrepreneur",
    company: "Tech Startup Founder",
    content: "As a non-finance professional, I was intimidated at first. But the structured curriculum helped me build confidence. Now I can confidently discuss financials with investors.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of professionals who have transformed their financial knowledge.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`testimonial-card group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </p>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-heading font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
