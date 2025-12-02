import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface GalleryLightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) => {
  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous button */}
            <button
              onClick={onPrev}
              className="absolute left-4 p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <div className="max-w-4xl max-h-[80vh] relative">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <span className="text-4xl">🖼️</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent rounded-b-xl">
                <h3 className="text-lg font-semibold text-foreground">{currentImage.title}</h3>
                <span className="text-sm text-primary">{currentImage.category}</span>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={onNext}
              className="absolute right-4 p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-muted/50 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
