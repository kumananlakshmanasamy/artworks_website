import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GalleryItem } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  image: GalleryItem;
  onClose: () => void;
  galleryItems: GalleryItem[];
}

const Lightbox = ({ image, onClose, galleryItems }: LightboxProps) => {
  const [currentImage, setCurrentImage] = useState<GalleryItem>(image);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        navigatePrev();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImage, onClose]);

  const currentIndex = galleryItems.findIndex((item) => item.id === currentImage.id);

  const navigateNext = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentImage(galleryItems[nextIndex]);
  };

  const navigatePrev = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentImage(galleryItems[prevIndex]);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent 
        className={`p-0 max-w-screen-lg bg-black/95 border-none ${isFullScreen ? 'fixed inset-0 max-h-screen h-screen max-w-full rounded-none' : ''}`}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="relative h-full flex flex-col">
          {/* Top controls */}
          <div className="absolute top-4 right-4 z-50 flex gap-2">
            <Button 
              variant="ghost" 
              className="h-10 w-10 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={toggleFullScreen}
            >
              <Maximize2 size={18} />
            </Button>
            <Button 
              variant="ghost" 
              className="h-10 w-10 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={onClose}
            >
              <X size={18} />
            </Button>
          </div>

          {/* Main image */}
          <div className="flex-grow flex items-center justify-center p-4 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage.id}
                src={currentImage.imageUrl}
                alt={currentImage.title}
                className="max-h-full max-w-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>

            {/* Navigation buttons */}
            {galleryItems.length > 1 && (
              <>
                <Button 
                  variant="ghost" 
                  className="absolute left-4 h-10 w-10 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={navigatePrev}
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button 
                  variant="ghost" 
                  className="absolute right-4 h-10 w-10 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={navigateNext}
                >
                  <ChevronRight size={24} />
                </Button>
              </>
            )}
          </div>

          {/* Image info and thumbnails */}
          <div className="bg-black/80 p-4 text-white">
            <h3 className="text-xl font-medium mb-1">{currentImage.title}</h3>
            <p className="text-gray-300 mb-4">{currentImage.description}</p>
            
            {galleryItems.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {galleryItems.map((item) => (
                  <button
                    key={item.id}
                    className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden ${
                      item.id === currentImage.id ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                    }`}
                    onClick={() => setCurrentImage(item)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;
