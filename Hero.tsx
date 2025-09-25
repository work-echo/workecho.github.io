import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/AI_automation_hero_background_71918df0.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark Green Matte Background */}
      <div className="absolute inset-0 z-0 bg-green-800" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="text-primary block mt-2">AI Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            I help businesses streamline operations, reduce costs, and scale efficiently through 
            intelligent AI agents and custom automation solutions.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-lg">
              <Bot className="h-6 w-6 text-primary" />
              <span>AI Agents</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Zap className="h-6 w-6 text-primary" />
              <span>Workflow Automation</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Business Growth</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}