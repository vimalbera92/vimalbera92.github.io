import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Globe, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      label: "Email",
      value: "vimalbera92@gmail.com",
      icon: <Mail className="w-5 h-5 text-primary" />,
      href: "mailto:vimalbera92@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vimalbera92",
      icon: <Linkedin className="w-5 h-5 text-primary" />,
      href: "https://linkedin.com/in/vimalbera92",
    },
    {
      label: "Website",
      value: "vimalbera.in",
      icon: <Globe className="w-5 h-5 text-primary" />,
      href: "https://vimalbera.in",
    },
    {
      label: "Current Role",
      value: "Backend Developer at Amazon",
      icon: <Building2 className="w-5 h-5 text-primary" />,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || "Portfolio Contact"
    );
    const body = encodeURIComponent(
      `Hi Vimal,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:vimalbera92@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
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
            Ready to bring your backend vision to life? Let's discuss your
            project requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8">
              Currently working at Amazon on transportation systems. Always
              interested in discussing new opportunities, backend architecture
              challenges, and innovative tech solutions.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`shadow-elegant hover:shadow-glow transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
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
                      className="flex items-center space-x-3 p-4 hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      {info.icon}
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium text-foreground">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 p-4">
                      {info.icon}
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium text-foreground">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`p-6 shadow-elegant transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground mb-1 block"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground mb-1 block"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-foreground mb-1 block"
                >
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  placeholder="Project discussion"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground mb-1 block"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
