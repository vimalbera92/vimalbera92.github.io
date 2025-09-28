import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "vimalbera92@gmail.com",
      icon: "✉️"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vimalbera92",
      icon: "💼"
    },
    {
      label: "Website",
      value: "vimalbera.in",
      icon: "🌐"
    },
    {
      label: "Current Role",
      value: "Backend Developer at Amazon",
      icon: "🏢"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your backend vision to life? Let's discuss your project requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8">
              Currently working at Amazon on transportation systems. Always interested in discussing 
              new opportunities, backend architecture challenges, and innovative tech solutions.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-4 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 shadow-elegant animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Send Me a Message
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Subject
                </label>
                <Input placeholder="Project discussion" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project requirements..."
                  rows={5}
                />
              </div>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
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