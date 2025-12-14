import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  FileText, 
  Printer, 
  Gamepad2, 
  Briefcase, 
  Building2,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Internet Browsing",
    description: "High-speed internet access for research, social media, and entertainment.",
    color: "primary"
  },
  {
    icon: FileText,
    title: "Online Form Filling",
    description: "Expert help with government forms, applications, and online submissions.",
    color: "accent"
  },
  {
    icon: Printer,
    title: "Print / Scan / Xerox",
    description: "Quality printing in color or B/W, scanning, and photocopying services.",
    color: "success"
  },
  {
    icon: Gamepad2,
    title: "Gaming Zone",
    description: "Latest PC games with powerful computers for an immersive experience.",
    color: "primary"
  },
  {
    icon: Briefcase,
    title: "Resume & Job Help",
    description: "Professional resume creation and job application assistance.",
    color: "accent"
  },
  {
    icon: Building2,
    title: "Govt. Online Services",
    description: "Help with PAN, Aadhaar, passport, and other government portals.",
    color: "success"
  }
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success"
};

export const PopularServices = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Everything you need for your digital tasks, all in one convenient location
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-14 w-14 rounded-xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
