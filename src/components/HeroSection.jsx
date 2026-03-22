import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-start justify-center px-4 md:px-24"
    >
      <div className="container max-w-6xl z-10 text-left">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
            <span className="block opacity-0 animate-fade-in text-white">
              Engineering
            </span>
            <span className="block opacity-0 animate-fade-in-delay-1 text-white">
              Intelligence.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-2 font-light">
            Building the bridge between data and logic.
            <br />
            ML Intern @ Planto.ai / Student @ IIIT Una
          </p>

          <div className="pt-8 opacity-0 animate-fade-in-delay-3 flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Showcase
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 animate-bounce hidden md:block">
        <ArrowDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
};
