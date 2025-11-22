import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={gallery1} 
          alt="Plated Moment catering" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in pt-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary mb-6 animate-scale-in">
          Plated Moment
        </h1>
        
        <p className="text-xl md:text-3xl text-foreground/90 mb-4 font-light">
          Crafted to be Remembered
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
          Elevate your events with artisanal catering that delights the senses
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-10 py-6 rounded-sm shadow-gold hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] transition-all duration-300"
          >
            Get in Touch
          </Button>
          <Button 
            onClick={scrollToGallery}
            variant="outline"
            size="lg"
            className="border-2 border-foreground/20 bg-background/20 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background font-medium text-lg px-10 py-6 rounded-sm transition-all duration-300"
          >
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
