import { Check } from "lucide-react";

interface SolutionsSectionProps {
  illustration: string;
}

const checkpoints = [
  {
    title: "Every project is customized to fit your brand's unique needs.",
  },
  {
    title: "We blend innovation with the latest trends for outstanding results.",
  },
  {
    title: "Transparent communication and real-time updates ensure a smooth workflow.",
  },
  {
    title: "From concept to execution, we deliver top-notch quality in every detail.",
  },
];

const SolutionsSection = ({ illustration }: SolutionsSectionProps) => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              We make your spending stress-free for you to have the perfect control.
            </h2>
            <p className="text-muted-foreground mb-8">
              We provide seamless, high-quality services that eliminate the hassle of project management. With our expertise, you get top-tier video editing, web design, and development solutions without the stress giving you complete control over your vision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checkpoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">{point.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="relative">
            <img
              src={illustration}
              alt="Digital solutions illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
