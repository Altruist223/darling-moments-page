import { useState } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  icon: React.ReactNode;
  text: string;
  delay?: string;
}

export const FlipCard = ({ icon, text, delay = "0s" }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 h-64 sm:h-72 md:h-80 animate-fade-in" 
      style={{ animationDelay: delay }}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer touch-manipulation",
          isFlipped && "rotate-y-180"
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-xl sm:rounded-2xl border border-border shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
          <div className="text-primary scale-125 sm:scale-150 animate-float">
            {icon}
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl border border-primary/20 rotate-y-180 p-5 sm:p-6 md:p-8 flex items-center justify-center shadow-xl">
          <p className="text-center text-foreground font-inter text-xs sm:text-sm md:text-base leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
