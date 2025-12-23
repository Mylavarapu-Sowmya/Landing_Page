import { Phone, ShieldCheck, FileText, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "24/7 Support",
    description: "We're always available to assist you with any queries or technical issues, ensuring seamless service and uninterrupted support.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "We prioritize your security with encrypted transactions, ensuring safe and hassle-free payments every time and evry time.",
  },
  {
    icon: FileText,
    title: "Progress Reports",
    description: "We keep you informed with regular updates, ensuring transparency at every stage. Stay updated on developments and revisions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "We stay updated with the latest trends and technologies, ensuring cutting-edge solutions for your success.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            WHAT WE DO?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            The service we offer is specifically<br />designed to meet your needs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <a
                href="#"
                className="text-primary font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
