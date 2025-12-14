import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, Phone, MapPin, Clock } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Visit our cafe today or send us an inquiry. We're here to help with all your digital needs — from simple printouts to complex government forms!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="accent" 
                size="lg"
                asChild
              >
                <Link to="/inquiry" className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Inquiry
                </Link>
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                asChild
              >
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary-foreground/10">
            <h3 className="text-xl font-semibold text-primary-foreground mb-6">
              Visit Us Today
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Address</p>
                  <p className="text-primary-foreground/70 text-sm">
                    123 Main Street, Near Bus Stand,<br />
                    City Center, State - 123456
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Business Hours</p>
                  <p className="text-primary-foreground/70 text-sm">
                    Monday - Saturday: 8 AM - 10 PM<br />
                    Sunday: 9 AM - 9 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">Phone</p>
                  <a href="tel:+919876543210" className="text-accent hover:underline text-sm">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
