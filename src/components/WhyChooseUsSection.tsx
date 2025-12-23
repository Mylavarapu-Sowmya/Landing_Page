import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface WhyChooseUsSectionProps {
  illustration: string;
}

const features = [
  {
    title: "Professional Design",
    content:
      "Stand out with stunning visuals and a sleek, user-friendly design. Our professional design services ensure a seamless blend of aesthetics and functionality, creating impactful experiences that captivate and engage your audience.",
  },
  {
    title: "Top-Notch Support",
    content:
      "Our dedicated support team is available 24/7 to assist you with any questions or concerns. We prioritize your success and ensure quick response times.",
  },
  {
    title: "Exclusive Assets",
    content:
      "Get access to premium resources, templates, and tools that are exclusively available to our clients. These assets help accelerate your project delivery.",
  },
];

const WhyChooseUsSection = ({ illustration }: WhyChooseUsSectionProps) => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="relative">
            <img
              src={illustration}
              alt="Team collaboration illustration"
              className="w-full max-w-lg mx-auto animate-float"
            />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              WHY CHOOSE US?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
              We bring solutions to make life easier for our clients.
            </h2>

            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {features.map((feature, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-2">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {feature.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
