import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart, Target, Send } from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Service" },
  { value: "5000+", label: "Happy Customers" },
  { value: "50+", label: "Services Offered" },
  { value: "7", label: "Days Open" }
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "We treat every customer like family. Your needs are our priority, whether you're a student, job seeker, or senior citizen."
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "We invest in the best equipment and maintain high standards to ensure you get reliable, professional service every time."
  },
  {
    icon: Heart,
    title: "Community Focus",
    description: "As a local business, we're committed to serving our community with honesty, integrity, and affordable prices."
  },
  {
    icon: Target,
    title: "Continuous Improvement",
    description: "We constantly update our services and technology to meet the evolving digital needs of our customers."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About NetZone
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted neighborhood Internet Cafe, serving the community for over a decade.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NetZone started in 2014 with a simple mission: to bridge the digital divide in our community. 
                  What began as a small shop with just 5 computers has grown into a full-service digital center 
                  trusted by thousands of customers.
                </p>
                <p>
                  We understand that not everyone has access to high-speed internet or knows how to navigate 
                  complex online forms. That's why we're here — to help students prepare for exams, assist 
                  job seekers with their applications, and guide seniors through government portals.
                </p>
                <p>
                  Our team treats every customer like family. Whether you need to print an urgent document 
                  at 9 PM or need help understanding an online form, we're here for you. We believe technology 
                  should be accessible to everyone, regardless of age or technical knowledge.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-6 text-center card-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 lg:p-8 card-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Note */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our friendly and experienced staff is always ready to help. From tech-savvy youngsters 
              to patient seniors, we have team members who can assist customers of all ages and 
              backgrounds. We speak the local language and understand local needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
