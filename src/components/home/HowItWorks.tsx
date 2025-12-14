import { MapPin, Monitor, Headphones, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MapPin,
    title: "Visit Our Cafe",
    description: "Walk into our conveniently located cafe near the bus stand. We're open 7 days a week."
  },
  {
    step: "02",
    icon: Monitor,
    title: "Choose Your Service",
    description: "Tell us what you need — browsing, printing, gaming, or help with forms. We've got it all."
  },
  {
    step: "03",
    icon: Headphones,
    title: "Get Expert Help",
    description: "Our friendly staff will assist you with any technical help you need. No question is too simple."
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Done & Dusted",
    description: "Complete your task quickly and affordably. Pay only for what you use. It's that simple!"
  }
];

export const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting your digital tasks done is easy as 1-2-3-4
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 border-2 border-primary/20 mb-5 relative">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                  <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-accent-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
