import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Elegant gold accent orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Subtle gold lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        {/* Logo Image */}
        <div className="mb-8 flex justify-center animate-scale-in">
          <div className="relative">
            <img 
              src={logo} 
              alt="Plated Moment - Crafted to be Remembered" 
              className="max-w-xl md:max-w-2xl w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto animate-slide-up">
          Elevate your events with artisanal catering that delights the senses and creates lasting memories
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8 py-6 rounded-full shadow-gold hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] transition-all duration-300"
          >
            Get in Touch
          </Button>
          <Button 
            onClick={scrollToGallery}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-lg px-8 py-6 rounded-full transition-all duration-300"
          >
            View Our Work
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
