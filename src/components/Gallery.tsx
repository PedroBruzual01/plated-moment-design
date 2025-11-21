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
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-4">
            Our Creations
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-px bg-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
