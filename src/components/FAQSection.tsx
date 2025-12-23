import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this course suitable for beginners?",
    answer: "Absolutely! Our curriculum is designed to take you from foundational concepts to advanced strategies. While some basic math skills are helpful, no prior finance experience is required. We start with the fundamentals and progressively build your knowledge.",
  },
  {
    question: "How long do I have access to the course?",
    answer: "You get lifetime access to all course materials, including any future updates and additions. Once you enroll, you can learn at your own pace and revisit materials whenever you need a refresher.",
  },
  {
    question: "What if the course isn't right for me?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course within the first 30 days, simply reach out to our support team for a full refund, no questions asked.",
  },
  {
    question: "Are there any live sessions?",
    answer: "Yes! We host weekly live Q&A sessions where you can interact directly with the instructor and get your questions answered. All live sessions are recorded and added to your course library.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes, upon successful completion of all modules and assessments, you'll receive a professional certificate that you can add to your LinkedIn profile or resume to showcase your expertise.",
  },
  {
    question: "Can I access the course on mobile devices?",
    answer: "Absolutely! Our platform is fully responsive and works seamlessly on desktop, tablet, and mobile devices. You can also download materials for offline access.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about the course and enrollment.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={isVisible ? 'animate-fade-up' : 'opacity-0'} style={{ animationDelay: '100ms' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-item"
              >
                <AccordionTrigger className="faq-trigger">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-content">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
