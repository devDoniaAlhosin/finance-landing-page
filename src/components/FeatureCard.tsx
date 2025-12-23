import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="icon-wrapper">
        <Icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
