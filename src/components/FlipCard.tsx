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
      className="perspective-1000 h-64 animate-fade-in" 
      style={{ animationDelay: delay }}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer",
          isFlipped && "rotate-y-180"
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-card rounded-2xl border border-border shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
          <div className="text-primary scale-150 animate-float">
            {icon}
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 rotate-y-180 p-6 flex items-center justify-center shadow-xl">
          <p className="text-center text-foreground font-inter text-sm leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
