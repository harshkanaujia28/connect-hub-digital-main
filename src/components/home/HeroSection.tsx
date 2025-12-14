import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Send, Wifi, CheckCircle } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";

const highlights = [
  "100 Mbps High-Speed Internet",
  "7 Days Open (8 AM - 10 PM)",
  "10+ Years of Trusted Service",
  "5000+ Happy Customers"
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCafe}
          alt="NetZone Internet Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-in border border-primary/30">
            <Wifi className="h-4 w-4" />
            Your Trusted Neighborhood Internet Cafe
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Fast, Reliable Internet & Digital Services{" "}
            <span className="text-accent">Near You</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-background/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Printing, Scanning, Online Forms, Gaming, Browsing & More — All under one roof at affordable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" asChild>
              <Link to="/inquiry" className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send Inquiry
              </Link>
            </Button>
            <Button 
              variant="heroOutline" 
              className="border-background/30 text-background hover:bg-background/10"
              asChild
            >
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: +91 98765 43210
              </a>
            </Button>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-background/90 text-sm">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Stats Card - Desktop Only */}
      <div className="hidden xl:block absolute bottom-12 right-12 z-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 card-shadow border border-border/50">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
