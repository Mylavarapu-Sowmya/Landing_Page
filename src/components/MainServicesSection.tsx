import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  illustration: string;
  title: string;
  description: string;
  buttonText: string;
}

const ServiceCard = ({ illustration, title, description, buttonText }: ServiceCardProps) => (
  <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
    <img src={illustration} alt={title} className="w-full h-48 object-contain mb-6" />
    <h4 className="font-bold text-foreground mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm mb-6">{description}</p>
    <Button variant="gradient" size="default">
      {buttonText}
    </Button>
  </div>
);

interface MainService {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  illustration: string;
  cardTitle: string;
  cardDescription: string;
  cardButton: string;
}

interface MainServicesSectionProps {
  services: MainService[];
}

const MainServicesSection = ({ services }: MainServicesSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Emphasizing Our Main Services:
          </h2>
          <div className="underline-gradient w-32 mx-auto" />
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <span className="text-2xl md:text-3xl font-bold gradient-text">
                  {service.subtitle}
                </span>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-primary font-medium mt-4 inline-block hover:underline"
                >
                  {service.link}
                </a>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <ServiceCard
                  illustration={service.illustration}
                  title={service.cardTitle}
                  description={service.cardDescription}
                  buttonText={service.cardButton}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServicesSection;
