import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface Props {
  images: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: Props) {
  const current = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && current && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20"
            >
              <X size={26} />
            </button>

            <button
              onClick={onPrev}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20"
            >
              <ChevronLeft size={26} />
            </button>

            <div className="max-w-6xl max-h-[85vh] w-full flex flex-col items-center">
              <img
                src={current.image}
                alt={current.title}
                className="rounded-xl object-contain w-full h-[75vh]"
              />

              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{current.title}</h3>
                <p className="text-primary text-sm">{current.category}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20"
            >
              <ChevronRight size={26} />
            </button>

            <div className="absolute bottom-4 px-4 py-2 rounded-full bg-white/10">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
