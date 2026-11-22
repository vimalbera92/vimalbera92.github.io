import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Globe, Building2, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      label: "Email",
      value: "vimalbera92@gmail.com",
      icon: <Mail className="w-6 h-6 text-primary" />,
      href: "mailto:vimalbera92@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vimalbera92",
      icon: <Linkedin className="w-6 h-6 text-primary" />,
      href: "https://linkedin.com/in/vimalbera92",
    },
    {
      label: "Website",
      value: "vimalbera.in",
      icon: <Globe className="w-6 h-6 text-primary" />,
      href: "https://vimalbera.in",
    },
    {
      label: "Current Role",
      value: "Backend Developer at Amazon",
      icon: <Building2 className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently working at Amazon on transportation systems. Always
            interested in discussing new opportunities, backend architecture
            challenges, and innovative tech solutions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`p-6 shadow-elegant hover:shadow-glow transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  target={
                    info.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    info.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                </a>
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="font-semibold text-foreground">
                      {info.value}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
