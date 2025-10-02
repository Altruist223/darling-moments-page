import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GalleryModalProps {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryModal = ({ image, isOpen, onClose }: GalleryModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <img
          src={image}
          alt="Gallery"
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};
