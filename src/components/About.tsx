const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center animate-fade-in">
          {/* Section Header */}
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-8">
            About Us
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-12" />

          {/* Content */}
          <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p>
              At <span className="text-primary font-serif">Plated Moment</span>, we believe every event deserves 
              to be unforgettable. Our philosophy centers on creating exquisite culinary experiences that not 
              only satisfy the palate but also captivate the eye.
            </p>
            <p>
              We specialize in artisanal catering services, offering meticulously curated selections from 
              gourmet charcuterie boards to elaborate dessert displays. Each presentation is crafted with 
              attention to detail, using only the finest ingredients and techniques.
            </p>
            <p>
              Whether it's an intimate gathering or a grand celebration, we transform your vision into a 
              luxurious culinary moment that your guests will remember long after the last bite.
            </p>
          </div>

          {/* Decorative element */}
          <div className="mt-12 flex justify-center items-center gap-4">
            <div className="w-16 h-px bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="w-16 h-px bg-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
