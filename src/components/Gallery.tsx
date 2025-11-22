import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";

const Gallery = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  const images = [
    { src: gallery1, alt: "Gourmet desserts in elegant glass jars" },
    { src: gallery2, alt: "Artisanal charcuterie boards with decorative presentation" },
    { src: gallery3, alt: "Luxurious grazing table spread" },
    { src: gallery4, alt: "Rustic bread and charcuterie display" },
    { src: gallery5, alt: "Italian meatballs with premium presentation" },
    { src: gallery6, alt: "Elegant cheese and charcuterie board" },
    { src: gallery7, alt: "Premium charcuterie board with artisanal selections" },
    { src: gallery8, alt: "Elaborate dessert table with pastries and treats" },
    { src: gallery9, alt: "Gourmet cheese and charcuterie platter" },
  ];

  return (
    <section 
      id="gallery" 
      ref={ref}
      className={`py-20 md:py-32 px-6 bg-gradient-to-b from-background to-card/50 transition-all duration-1000 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-4">
            Our Culinary Artistry
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-4" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every dish is a masterpiece, crafted with passion and presented with elegance
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-gold transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Gold border glow on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-2xl transition-all duration-300" />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
