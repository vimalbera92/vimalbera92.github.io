import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const stats = [
    { number: "9+", label: "Years Experience" },
    { number: "8+", label: "Organizations Impacted" },
    { number: "5+", label: "Core Technologies" },
    { number: "Amazon", label: "Current Role" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate backend developer with expertise in building scalable,
            high-performance applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Hey, I'm Vimal - But friends call me Batman
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Backend Developer born &amp; raised in India, currently
                working on amazing stuff at Amazon. I specialize in backend
                development with expertise in transportation systems and
                e-commerce solutions.
              </p>
              <p>
                Fluent in Java, NodeJS, Go, Ruby, and Scala. Algorithm design
                and building complex systems with straightforward architecture
                is my forte. I've worked with industry leaders like Amazon,
                Oracle, WazirX, and many others.
              </p>
              <p>
                Currently at Amazon (Jan 2020 - Present), I work on
                transportation systems ensuring carriers get their invoices paid
                on time, making e-commerce operations smoother and more
                efficient.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
