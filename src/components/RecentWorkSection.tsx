interface RecentWorkSectionProps {
  workImages: string[];
}

const RecentWorkSection = ({ workImages }: RecentWorkSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Our Recent Work
          </h2>
          <div className="underline-gradient w-24 mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore some of our successfully implemented systems across various industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;
