import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        {/* Logo Image */}
        <div className="mb-12 flex justify-center animate-scale-in">
          <img 
            src={logo} 
            alt="Plated Moment - Crafted to be Remembered" 
            className="max-w-2xl w-full h-auto"
          />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light tracking-wide animate-slide-up">
          High-quality catering for unforgettable events
        </p>

        {/* CTA Button */}
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-10 py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:scale-105"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
