import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your business hours?",
    answer: "We are open 7 days a week from 8 AM to 10 PM. On Sundays, we open at 9 AM and close at 9 PM. We remain open on most public holidays from 10 AM to 6 PM."
  },
  {
    question: "What is the cost of internet browsing?",
    answer: "Internet browsing costs ₹30 per hour or ₹20 for 30 minutes. We also offer a full-day pass for ₹150. Students get special discounted rates with our monthly packages starting at ₹199."
  },
  {
    question: "Do you help with government form filling?",
    answer: "Yes! We specialize in helping customers with all types of government forms including PAN card applications, Aadhaar updates, passport applications, income tax filing, and various exam forms. Our experienced staff will guide you through the entire process."
  },
  {
    question: "What printing services do you offer?",
    answer: "We offer black & white printing (₹3/page), color printing (₹10/page), photo printing in various sizes, and large format printing. We also provide scanning, xerox copies, and lamination services."
  },
  {
    question: "Is gaming available at your cafe?",
    answer: "Yes! We have a dedicated gaming zone with high-performance PCs featuring the latest popular games. Gaming costs ₹40 per hour, with special rates for longer sessions (2 hours for ₹70, half-day for ₹120)."
  },
  {
    question: "Do you offer any student discounts?",
    answer: "Absolutely! We have a special Student Package at ₹199/month which includes 10 hours of internet access, 20 B/W prints, 5 scans, priority seating, and 10% off on additional services. Just show your student ID to avail this offer."
  }
];

export const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 card-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
