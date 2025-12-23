const stats = [
  { value: "300+", label: "Completed Projects" },
  { value: "900+", label: "Happy Customers" },
  { value: "100+", label: "Expert Employees" },
  { value: "4+", label: "Average Rating" },
];

const StatsSection = () => {
  return (
    <section className="hero-gradient py-8">
      <div className="container-custom px-4 md:px-8">
        <div className="stats-gradient rounded-2xl py-12 px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-hero-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-hero-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
