import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Core Languages",
      skills: ["Java", "JavaScript", "Go", "Ruby", "Scala", "Node.js"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "Frameworks & Platforms",
      skills: [
        "Spring Boot",
        "Express.js",
        "Ruby on Rails",
        "Amazon Web Services",
        "Oracle Cloud",
      ],
      color: "bg-accent/10 text-accent-foreground border-accent/20",
    },
    {
      title: "Specializations",
      skills: [
        "Backend Development",
        "Transportation Systems",
        "E-commerce",
        "Crypto Trading",
        "Algorithm Design",
      ],
      color: "bg-secondary/10 text-secondary-foreground border-secondary/20",
    },
    {
      title: "Industry Experience",
      skills: [
        "Amazon",
        "Oracle",
        "WazirX",
        "Crowdfire",
        "Fractal Analytics",
        "Capgemini",
      ],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "System Design",
      skills: [
        "Complex Architecture",
        "Scalable Systems",
        "Invoice Processing",
        "Order Tracking",
        "Social Media",
      ],
      color: "bg-accent/10 text-accent-foreground border-accent/20",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the modern backend development stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-6 shadow-elegant hover:shadow-glow transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`${category.color} hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
