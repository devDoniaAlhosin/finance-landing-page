import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().max(20, "Phone number too long").optional(),
  message: z.string().trim().max(500, "Message too long").optional(),
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@financeacademy.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Location", value: "New York, NY" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const EnrollmentSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Received!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsLoading(false);
  };

  return (
    <section id="enroll" ref={ref} className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Get Started
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Ready to <span className="text-gradient">Enroll?</span>
          </h2>
          <p className="text-muted-foreground">
            Fill out the form and our team will reach out to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div 
            className={`bg-card rounded-2xl p-8 border border-border ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`rounded-xl ${errors.name ? 'border-destructive' : ''}`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`rounded-xl ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals..."
                  className="rounded-xl min-h-[100px] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="hero-button w-full rounded-full group"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Application"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div 
            className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '200ms' }}
          >
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Have questions? Reach out to us directly.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by professionals from:</p>
              <div className="flex flex-wrap gap-4 text-muted-foreground/60 text-sm font-medium">
                {["Goldman Sachs", "Morgan Stanley", "BlackRock", "JPMorgan"].map((company) => (
                  <span key={company} className="px-3 py-1.5 rounded-full bg-muted">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
