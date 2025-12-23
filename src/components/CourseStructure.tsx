import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const modules = [
  {
    phase: "01",
    title: "Foundation",
    duration: "Weeks 1-3",
    topics: ["Financial Basics", "Market Structure", "Reading Financial Statements"],
  },
  {
    phase: "02",
    title: "Analysis",
    duration: "Weeks 4-6",
    topics: ["Valuation Methods", "Financial Modeling", "Ratio Analysis"],
  },
  {
    phase: "03",
    title: "Strategy",
    duration: "Weeks 7-9",
    topics: ["Portfolio Theory", "Risk Management", "Asset Allocation"],
  },
  {
    phase: "04",
    title: "Advanced",
    duration: "Weeks 10-12",
    topics: ["Derivatives", "Alternative Investments", "Market Psychology"],
  },
];

const CourseStructure = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
          Course Structure
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            12-Week <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A structured journey designed to build your expertise progressively, 
            from fundamentals to advanced strategies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => (
              <div
                key={module.phase}
                className={`relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Phase indicator */}
                <div className="structure-card group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-heading text-primary/20 font-bold group-hover:text-primary/40 transition-colors">
                      {module.phase}
                    </span>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {module.duration}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;
