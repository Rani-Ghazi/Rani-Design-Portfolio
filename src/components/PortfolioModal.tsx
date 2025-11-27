import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  projects: Array<{
    image: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    category: string;
  }>;
  onNavigate: (direction: 'prev' | 'next') => void;
  language: 'en' | 'ar';
}

export const PortfolioModal = ({
  isOpen,
  onClose,
  currentIndex,
  projects,
  onNavigate,
  language
}: PortfolioModalProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const currentProject = projects[currentIndex];

  if (!currentProject) return null;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      onNavigate('prev');
      setIsZoomed(false);
    } else if (e.key === 'ArrowRight' && currentIndex < projects.length - 1) {
      onNavigate('next');
      setIsZoomed(false);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[98vw] lg:max-w-[95vw] w-[95vw] sm:w-[90vw] lg:w-[95vw] h-[90vh] sm:h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-border/50 overflow-hidden shadow-2xl"
        onKeyDown={handleKeyPress}
      >
        <DialogTitle className="sr-only">
          {language === 'en' ? currentProject.title : currentProject.titleAr}
        </DialogTitle>
        
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-background/90 backdrop-blur-md hover:bg-background shadow-lg transition-all duration-300 hover:scale-110"
          onClick={onClose}
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        {/* Zoom Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-12 top-2 sm:right-16 sm:top-4 z-50 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-background/90 backdrop-blur-md hover:bg-background shadow-lg transition-all duration-300 hover:scale-110"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {isZoomed ? <ZoomOut className="h-4 w-4 sm:h-5 sm:w-5" /> : <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5" />}
        </Button>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-background/90 backdrop-blur-md hover:bg-background shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              onNavigate('prev');
              setIsZoomed(false);
            }}
          >
            <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
          </Button>
        )}

        {currentIndex < projects.length - 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-background/90 backdrop-blur-md hover:bg-background shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              onNavigate('next');
              setIsZoomed(false);
            }}
          >
            <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
          </Button>
        )}

        <div className="flex flex-col h-full">
          {/* Image Container */}
          <div className="flex-1 relative overflow-auto bg-muted/30 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full flex items-center justify-center p-2 sm:p-4 lg:p-8"
              >
                <motion.img
                  src={currentProject.image}
                  alt={language === 'en' ? currentProject.title : currentProject.titleAr}
                  decoding="async"
                  className={`block max-w-[92vw] max-h-[80vh] md:max-h-[85vh] object-contain rounded-md sm:rounded-lg shadow-xl transition-all duration-500 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                  animate={{
                    scale: isZoomed ? (window.innerWidth < 640 ? 1.8 : 1.5) : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  onClick={() => setIsZoomed(!isZoomed)}
                  style={{ 
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  } as any}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Details Bar */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-card/95 backdrop-blur-md border-t border-border/50 px-3 py-3 sm:px-6 sm:py-5 md:px-8 md:py-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
              <div className="flex-1 space-y-1 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent truncate">
                  {language === 'en' ? currentProject.title : currentProject.titleAr}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-1">
                  {language === 'en' ? currentProject.description : currentProject.descriptionAr}
                </p>
              </div>
              
              {/* Counter */}
              <div className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  {currentIndex + 1}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">/</span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {projects.length}
                </span>
              </div>
            </div>
            
            {/* Keyboard Hints */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-muted-foreground/70">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-muted rounded text-xs">←</kbd>
                <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-muted rounded text-xs">→</kbd>
                <span className="hidden sm:inline">{language === 'en' ? 'Navigate' : 'التنقل'}</span>
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-muted rounded text-xs">ESC</kbd>
                <span className="hidden sm:inline">{language === 'en' ? 'Close' : 'إغلاق'}</span>
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-muted rounded text-xs">
                  {language === 'en' ? 'Click' : 'اضغط'}
                </kbd>
                <span className="hidden sm:inline">{language === 'en' ? 'Zoom' : 'تكبير'}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
