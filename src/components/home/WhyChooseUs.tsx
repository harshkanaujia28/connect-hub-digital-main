import { Zap, IndianRupee, Users, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "High-Speed Internet",
    description: "Experience blazing fast 100 Mbps broadband connection for smooth browsing and downloads."
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Best rates in the area with special discounts for students and regular customers."
  },
  {
    icon: Users,
    title: "Experienced Staff",
    description: "Friendly team ready to help with forms, applications, and technical support."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Privacy screens, secure browsing, and protected data for your peace of mind."
  },
  {
    icon: Clock,
    title: "Open All Days",
    description: "Convenient hours from 8 AM to 10 PM, seven days a week including holidays."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose NetZone?
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by thousands of customers for reliable and affordable internet services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
