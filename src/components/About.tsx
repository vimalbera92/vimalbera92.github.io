import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "9+", label: "Years Experience" },
    { number: "8+", label: "Companies Worked" },
    { number: "5+", label: "Core Technologies" },
    { number: "Amazon", label: "Current Role" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate backend developer with expertise in building scalable, high-performance applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Hey, I'm Vimal - But friends call me Batman
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Full Stack Developer born & raised in India, currently working on amazing stuff at Amazon. 
                I specialize in backend development with expertise in transportation systems and e-commerce solutions.
              </p>
              <p>
                Fluent in Java, NodeJS, Go, Ruby, and Scala. Algorithm design and building complex systems 
                with straightforward architecture is my forte. I've worked with industry leaders like Amazon, 
                Oracle, WazirX, and many others.
              </p>
              <p>
                Currently at Amazon (Jan 2020 - Present), I work on transportation systems ensuring 
                carriers get their invoices paid on time, making e-commerce operations smoother and more efficient.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;