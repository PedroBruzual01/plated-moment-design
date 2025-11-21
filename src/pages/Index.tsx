import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Gallery />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Plated Moment. Crafted to be Remembered.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
