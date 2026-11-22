import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-400/15 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Vimal Bera
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-indigo-200">
            Backend Developer
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100/80 mb-8 max-w-2xl mx-auto font-light">
            Backend specialist currently working at Amazon, building
            transportation systems and scalable e-commerce solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <Button
              size="lg"
              className="font-semibold transition-all duration-300 shadow-md bg-gradient-primary text-white hover:opacity-95 hover:shadow-glow dark:bg-none dark:bg-white dark:text-indigo-950 dark:hover:bg-indigo-50 border-0"
              asChild
            >
              <a
                href="https://raw.githubusercontent.com/vimalbera92/vimalbera92.github.io/refs/heads/master/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              className="font-semibold transition-all duration-300 shadow-md bg-white text-indigo-900 hover:bg-indigo-50 border-0 dark:border dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:shadow-none backdrop-blur-sm"
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/vimalbera92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/vimalbera92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:vimalbera92@gmail.com"
              className="text-white/60 hover:text-white transition-colors p-2"
              aria-label="Send Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
