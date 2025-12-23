import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  Wallet, 
  Building2, 
  TrendingUp,
  Shield,
  Calculator,
  ChevronRight,
  Play,
  FileText,
  Clock
} from "lucide-react";

const categories = [
  { id: "all", label: "All Topics" },
  { id: "analysis", label: "Analysis" },
  { id: "investment", label: "Investment" },
  { id: "strategy", label: "Strategy" },
];

const topics = [
  { 
    icon: BarChart3, 
    title: "Financial Analysis", 
    description: "Master ratio analysis, financial modeling, and valuation techniques",
    category: "analysis",
    lessons: 12,
    duration: "4.5 hrs",
    level: "Beginner"
  },
  { 
    icon: PieChart, 
    title: "Portfolio Management", 
    description: "Learn asset allocation, diversification, and risk management strategies",
    category: "investment",
    lessons: 15,
    duration: "6 hrs",
    level: "Intermediate"
  },
  { 
    icon: LineChart, 
    title: "Market Analysis", 
    description: "Understand technical and fundamental analysis for informed decisions",
    category: "analysis",
    lessons: 10,
    duration: "5 hrs",
    level: "Beginner"
  },
  { 
    icon: Wallet, 
    title: "Investment Strategies", 
    description: "Explore value investing, growth strategies, and alternative investments",
    category: "investment",
    lessons: 18,
    duration: "7 hrs",
    level: "Advanced"
  },
  { 
    icon: Building2, 
    title: "Corporate Finance", 
    description: "Capital structure, M&A fundamentals, and corporate valuation",
    category: "strategy",
    lessons: 14,
    duration: "5.5 hrs",
    level: "Intermediate"
  },
  { 
    icon: TrendingUp, 
    title: "Derivatives & Options", 
    description: "Understanding futures, options, and hedging strategies",
    category: "strategy",
    lessons: 16,
    duration: "6.5 hrs",
    level: "Advanced"
  },
  { 
    icon: Shield, 
    title: "Risk Management", 
    description: "Quantify and mitigate financial risks across portfolios",
    category: "strategy",
    lessons: 11,
    duration: "4 hrs",
    level: "Intermediate"
  },
  { 
    icon: Calculator, 
    title: "Financial Modeling", 
    description: "Build professional Excel models for analysis and forecasting",
    category: "analysis",
    lessons: 20,
    duration: "8 hrs",
    level: "Advanced"
  },
];

const CurriculumSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);

  const filteredTopics = activeCategory === "all" 
    ? topics 
    : topics.filter(t => t.category === activeCategory);

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Beginner": return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Advanced": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Curriculum
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            What You'll <span className="text-gradient">Learn</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive curriculum designed to take you from fundamentals 
            to advanced financial concepts.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tab-button ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTopics.map((topic, index) => (
            <div
              key={topic.title}
              className={`curriculum-card group ${hoveredTopic === topic.title ? 'active' : ''} ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 75}ms` }}
              onMouseEnter={() => setHoveredTopic(topic.title)}
              onMouseLeave={() => setHoveredTopic(null)}
            >
              {/* Level badge */}
              <div className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border mb-4 ${getLevelColor(topic.level)}`}>
                {topic.level}
              </div>

              <div className="curriculum-icon">
                <topic.icon className="w-6 h-6 text-primary transition-all duration-300" />
              </div>
              
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {topic.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {topic.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  {topic.lessons} lessons
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {topic.duration}
                </div>
              </div>

              {/* Hover action */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className={`mt-16 flex flex-wrap justify-center gap-8 md:gap-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {[
            { value: "116+", label: "Video Lessons" },
            { value: "50+", label: "Hours of Content" },
            { value: "8", label: "Core Modules" },
            { value: "∞", label: "Lifetime Access" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-heading font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
