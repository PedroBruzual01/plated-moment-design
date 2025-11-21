import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Gallery />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2 text-foreground">
              <span className="font-serif text-xl">Plated Moment</span>
              <Heart className="w-5 h-5 text-primary fill-primary" />
            </div>
            <p className="text-muted-foreground">
              Crafted to be Remembered
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Plated Moment. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
