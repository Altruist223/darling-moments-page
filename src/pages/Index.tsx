import { useState } from "react";
import { Heart, Sparkles, Coffee } from "lucide-react";
import { FlipCard } from "@/components/FlipCard";
import { GalleryModal } from "@/components/GalleryModal";
import heroImage from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  const timelineEvents = [
    { date: "22 October 2023", title: "The Day We Met", description: "The universe brought us together on this magical day, and my life changed forever." },
    { date: "16 March 2024", title: "I Proposed You", description: "On bended knee, I asked you to be mine forever. Your 'yes' made me the happiest person alive." },
    { date: "9 January 2025", title: "The Moment I Knew", description: "This was when I truly realized you are my soulmate, my everything." },
  ];

  const reasons = [
    { icon: <Heart className="h-16 w-16" />, text: "Your smile lights up my entire world. Every time I see you happy, my heart feels complete. You bring joy to even the darkest days." },
    { icon: <Sparkles className="h-16 w-16" />, text: "The way you make ordinary moments magical. With you, even simple things become extraordinary memories that I treasure forever." },
    { icon: <Coffee className="h-16 w-16" />, text: "Our quiet mornings together, sharing coffee and conversations. These simple moments with you are what I cherish most in life." },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            For <span className="text-primary animate-glow">Jagriti</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white/90 font-light tracking-wide drop-shadow-lg">
            Our Story So Far
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full mx-auto animate-float" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Journey
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative mb-16 animate-fade-in ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto md:text-left"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <span className="text-primary font-semibold text-sm tracking-wide">
                    {event.date}
                  </span>
                  <h3 className="font-playfair text-2xl font-bold mt-2 mb-3 text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background animate-glow" />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          A Few of My Favorite Moments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Why You're My Everything
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <FlipCard
              key={index}
              icon={reason.icon}
              text={reason.text}
              delay={`${index * 0.2}s`}
            />
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 italic">
          Click each card to read more
        </p>
      </section>

      {/* Music Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Soundtrack
        </h2>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border animate-fade-in">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                Add your favorite playlist here
              </p>
              <p className="text-sm text-muted-foreground">
                (Spotify/YouTube embed URL)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-border">
        <p className="font-playfair text-lg text-muted-foreground">
          Made with <Heart className="inline h-5 w-5 text-primary animate-pulse" fill="currentColor" /> by Ayush
        </p>
      </footer>

      <GalleryModal
        image={selectedImage || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Index;
