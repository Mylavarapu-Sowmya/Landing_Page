import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section id="home" className="hero-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-custom px-4 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight">
              Crafting Project Specific Solutions with Expertise.
            </h1>
            <p className="text-lg text-hero-foreground/80 max-w-lg">
              We're a creative company that focuses on establishing long-term partnership with customers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="heroOutline" size="lg">
                Explore Now
              </Button>
              <Button variant="default" size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Team collaboration in modern office"
                className="w-full h-auto object-cover"
              />
              {/* Navigation arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-colors">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-colors">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
