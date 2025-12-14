import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  FileText, 
  Printer, 
  Gamepad2, 
  Briefcase, 
  Building2,
  ScanLine,
  Layers,
  CreditCard,
  GraduationCap,
  Send
} from "lucide-react";

const allServices = [
  {
    icon: Globe,
    title: "High-Speed Internet Access",
    description: "Browse the web with our 100 Mbps fiber connection. Perfect for research, streaming, video calls, and downloads.",
    features: ["100 Mbps speed", "Multiple browsers available", "Private browsing option"]
  },
  {
    icon: FileText,
    title: "Online Exam & Form Assistance",
    description: "Expert help with filling online forms for exams, government services, and applications.",
    features: ["Bank exams", "Railway forms", "SSC applications", "College admissions"]
  },
  {
    icon: Printer,
    title: "Printing (Color & B/W)",
    description: "High-quality printing services for documents, photos, and projects at affordable rates.",
    features: ["Color printing", "Black & white", "Photo quality", "Large format available"]
  },
  {
    icon: ScanLine,
    title: "Scanning & Xerox",
    description: "Quick and clear scanning and photocopying for all your document needs.",
    features: ["High resolution scans", "PDF conversion", "Multiple copies", "ID card copying"]
  },
  {
    icon: Layers,
    title: "Lamination",
    description: "Protect your important documents with our lamination service.",
    features: ["Various sizes", "Matte & glossy", "ID cards", "Certificates"]
  },
  {
    icon: Gamepad2,
    title: "Gaming (PC Games)",
    description: "Enjoy the latest PC games on our high-performance gaming computers.",
    features: ["Latest game titles", "High-end PCs", "Gaming peripherals", "Hourly rates"]
  },
  {
    icon: Briefcase,
    title: "Resume / ID Card Printing",
    description: "Professional resume creation and ID card printing for job seekers and students.",
    features: ["Modern templates", "Expert formatting", "Quick turnaround", "Affordable rates"]
  },
  {
    icon: Building2,
    title: "PAN / Aadhaar / Govt Portals",
    description: "Complete assistance with government online services and portal navigation.",
    features: ["PAN card application", "Aadhaar updates", "Passport services", "Income tax filing"]
  },
  {
    icon: CreditCard,
    title: "Online Payments",
    description: "Help with online bill payments, recharges, and money transfers.",
    features: ["Utility bills", "Mobile recharge", "DTH payments", "Money transfers"]
  },
  {
    icon: GraduationCap,
    title: "Student Support",
    description: "Special assistance for students with projects, assignments, and online learning.",
    features: ["Project printing", "Assignment help", "Online class access", "Student discounts"]
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete digital services under one roof. From basic browsing to government form assistance, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 card-shadow hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Help With a Service?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Send us an inquiry and we'll get back to you with pricing and availability.
          </p>
          <Button size="lg" asChild>
            <Link to="/inquiry" className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Send Inquiry
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
