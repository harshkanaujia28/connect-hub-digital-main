import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    value: "+91 98765 43210",
    action: "tel:+919876543210",
    buttonText: "Call Now"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Message us on WhatsApp",
    value: "+91 98765 43210",
    action: "https://wa.me/919876543210",
    buttonText: "Chat on WhatsApp"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email",
    value: "hello@netzone.com",
    action: "mailto:hello@netzone.com",
    buttonText: "Send Email"
  }
];

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 10:00 PM" },
  { day: "Sunday", hours: "9:00 AM - 9:00 PM" },
  { day: "Public Holidays", hours: "10:00 AM - 6:00 PM" }
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-card rounded-2xl p-6 text-center card-shadow hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <method.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-foreground font-medium mb-4">
                  {method.value}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={method.action} target={method.title === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer">
                    {method.buttonText}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map & Address */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                Our Location
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden">
                <iframe
                  title="NetZone Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d72.8!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA1JzI0LjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">Full Address</h3>
                <p className="text-muted-foreground">
                  NetZone Internet Cafe<br />
                  123 Main Street, Near Bus Stand<br />
                  City Center, State - 123456<br />
                  India
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=123+Main+Street+City+Center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                Business Hours
              </h2>
              
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden card-shadow">
                <table className="w-full">
                  <tbody>
                    {businessHours.map((schedule, index) => (
                      <tr 
                        key={schedule.day} 
                        className={index !== businessHours.length - 1 ? "border-b border-border/50" : ""}
                      >
                        <td className="px-6 py-4 font-medium text-foreground">
                          {schedule.day}
                        </td>
                        <td className="px-6 py-4 text-right text-muted-foreground">
                          {schedule.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Have a Question?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Fill out our inquiry form and we'll get back to you within 24 hours.
                </p>
                <Button asChild>
                  <Link to="/inquiry" className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Inquiry
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
