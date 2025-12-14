import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const pricingCategories = [
  {
    title: "Internet Browsing",
    items: [
      { service: "Internet (1 Hour)", price: "₹30" },
      { service: "Internet (30 Minutes)", price: "₹20" },
      { service: "Internet (Full Day Pass)", price: "₹150" },
      { service: "WiFi Access (1 Hour)", price: "₹25" }
    ]
  },
  {
    title: "Printing Services",
    items: [
      { service: "Black & White Print (per page)", price: "₹3" },
      { service: "Color Print (per page)", price: "₹10" },
      { service: "Photo Print (4x6)", price: "₹15" },
      { service: "Photo Print (A4)", price: "₹40" }
    ]
  },
  {
    title: "Scanning & Copy",
    items: [
      { service: "Scan (per page)", price: "₹5" },
      { service: "Scan to Email", price: "₹10" },
      { service: "Xerox B/W (per page)", price: "₹2" },
      { service: "Xerox Color (per page)", price: "₹8" }
    ]
  },
  {
    title: "Gaming",
    items: [
      { service: "Gaming (1 Hour)", price: "₹40" },
      { service: "Gaming (2 Hours)", price: "₹70" },
      { service: "Gaming (Half Day)", price: "₹120" },
      { service: "Gaming (Full Day)", price: "₹200" }
    ]
  },
  {
    title: "Other Services",
    items: [
      { service: "Lamination (A4)", price: "₹20" },
      { service: "Lamination (ID Card)", price: "₹10" },
      { service: "Resume Creation", price: "₹100" },
      { service: "ID Card Printing", price: "₹50" }
    ]
  }
];

const studentPackage = {
  title: "Student Special Package",
  price: "₹199",
  period: "per month",
  features: [
    "10 Hours Internet Access",
    "20 B/W Prints included",
    "5 Scans included",
    "Priority seating",
    "10% off additional services"
  ]
};

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Affordable rates for all our services. No hidden charges, no surprises.
          </p>
        </div>
      </section>

      {/* Student Package */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground card-shadow animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="text-sm font-medium text-primary-foreground/80">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{studentPackage.title}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold">{studentPackage.price}</span>
              <span className="text-primary-foreground/70">{studentPackage.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {studentPackage.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-primary-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="accent" className="w-full" asChild>
              <Link to="/inquiry">Get This Package</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Individual Service Rates
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pricingCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden card-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <tbody>
                      {category.items.map((item, idx) => (
                        <tr key={item.service} className={idx !== category.items.length - 1 ? "border-b border-border/30" : ""}>
                          <td className="py-3 text-muted-foreground text-sm">
                            {item.service}
                          </td>
                          <td className="py-3 text-right font-semibold text-foreground">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12">
            * Prices may vary. Contact us for bulk orders and custom requirements.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
