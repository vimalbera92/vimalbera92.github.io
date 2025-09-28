import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Amazon Transportation System",
      description: "Working on transportation system with Amazon e-commerce ensuring transportation carriers get their invoices paid on time, streamlining the entire payment process.",
      technologies: ["Java", "AWS", "Microservices", "Invoice Processing"],
      highlights: ["Real-time processing", "High-volume transactions", "Enterprise scale"]
    },
    {
      title: "WazirX Crypto Trading Platform",
      description: "Integrated 38 different cryptocurrencies with 60+ trading pairs, building a robust platform for cryptocurrency trading with real-time market data.",
      technologies: ["Node.js", "Real-time APIs", "Cryptocurrency", "Trading Systems"],
      highlights: ["38 cryptocurrencies", "60+ trading pairs", "Real-time trading"]
    },
    {
      title: "Crowdfire Social Media Management",
      description: "Built backend systems helping bloggers, YouTubers and Instagrammers discover and schedule content, managing all social accounts from one place.",
      technologies: ["Ruby", "Social APIs", "Content Management", "Scheduling"],
      highlights: ["Multi-platform support", "Content discovery", "Automated scheduling"]
    },
    {
      title: "Oracle HCM Cloud Platform",
      description: "Developed large-scale organization solutions for handling employee data efficiently, smoothening HR operations for enterprise clients.",
      technologies: ["Oracle Cloud", "Java", "Enterprise Solutions", "HR Systems"],
      highlights: ["Enterprise scale", "Employee data management", "Cloud-based solution"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing impactful backend solutions that drive business success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="hover:bg-primary/10">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-accent/10">
                  <span className="font-mono">{"</>"}</span>
                  <span className="ml-1">Code</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;