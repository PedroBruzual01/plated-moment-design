import { Heart, Award, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  const features = [
    {
      icon: Heart,
      title: "Crafted with Passion",
      description: "Every dish is prepared with care and attention to detail, using only the finest ingredients",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source artisanal products and create presentations that exceed expectations",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Your vision becomes reality with our tailored approach to every event",
    },
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 md:py-32 px-6 bg-card transition-all duration-1000 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-6xl text-primary mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-px bg-primary mx-auto mb-4" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're passionate about creating unforgettable culinary experiences that make your events truly special
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-gold transition-all duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-secondary to-background border border-border/50 rounded-3xl p-8 md:p-12 shadow-soft">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                At <span className="font-serif text-primary font-semibold">Plated Moment</span>, we believe 
                that food is more than sustenance—it's an experience, a conversation starter, and a memory in the making.
              </p>
              <p>
                From intimate gatherings to grand celebrations, we specialize in creating stunning charcuterie boards, 
                elegant dessert displays, and customized culinary arrangements that reflect your unique style and vision.
              </p>
              <p>
                Our commitment to quality, creativity, and exceptional service ensures that every event we cater 
                becomes a moment to remember—beautifully plated and thoughtfully crafted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
