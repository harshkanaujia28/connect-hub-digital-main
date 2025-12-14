import { Users, Monitor, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Customers",
    description: "Trusted by families, students & businesses"
  },
  {
    icon: Monitor,
    value: "20+",
    label: "Computer Stations",
    description: "High-performance PCs with latest specs"
  },
  {
    icon: Clock,
    value: "10+",
    label: "Years of Service",
    description: "Serving the community since 2014"
  },
  {
    icon: Award,
    value: "50+",
    label: "Services Offered",
    description: "Complete digital solutions under one roof"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10 mb-4">
                <stat.icon className="h-7 w-7 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/70 text-sm hidden md:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
