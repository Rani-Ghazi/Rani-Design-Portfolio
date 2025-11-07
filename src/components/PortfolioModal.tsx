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
        className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-border/50 overflow-hidden shadow-2xl"
        onKeyDown={handleKeyPress}
      >
        <DialogTitle className="sr-only">
          {language === 'en' ? currentProject.title : currentProject.titleAr}
        </DialogTitle>
        
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full bg-background/90 backdrop-blur-md hover:bg-background shadow-lg transition-all duration-300 hover:scale-110"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Zoom Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-16 top-4 z-50 rounded-full bg-background/90 backdrop-blur-md hover:bg-background shadow-lg transition-all duration-300 hover:scale-110"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
        </Button>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-background/90 backdrop-blur-md hover:bg-background shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              onNavigate('prev');
              setIsZoomed(false);
            }}
          >
            <ChevronLeft className="h-7 w-7" />
          </Button>
        )}

        {currentIndex < projects.length - 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-background/90 backdrop-blur-md hover:bg-background shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              onNavigate('next');
              setIsZoomed(false);
            }}
          >
            <ChevronRight className="h-7 w-7" />
          </Button>
        )}

        <div className="flex flex-col h-full">
          {/* Image Container */}
          <div className="flex-1 relative overflow-hidden bg-muted/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center p-4"
              >
                <motion.img
                  src={currentProject.image}
                  alt={language === 'en' ? currentProject.title : currentProject.titleAr}
                  className={`max-w-full max-h-full object-contain rounded-lg shadow-xl transition-all duration-500 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                  animate={{
                    scale: isZoomed ? 1.5 : 1,
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
            className="bg-card/95 backdrop-blur-md border-t border-border/50 px-8 py-6"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1 space-y-1">
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {language === 'en' ? currentProject.title : currentProject.titleAr}
                </h3>
                <p className="text-muted-foreground text-base">
                  {language === 'en' ? currentProject.description : currentProject.descriptionAr}
                </p>
              </div>
              
              {/* Counter */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-semibold text-primary">
                  {currentIndex + 1}
                </span>
                <span className="text-sm text-muted-foreground">/</span>
                <span className="text-sm text-muted-foreground">
                  {projects.length}
                </span>
              </div>
            </div>
            
            {/* Keyboard Hints */}
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground/70">
              <span className="flex items-center gap-1.5">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">←</kbd>
                <kbd className="px-2 py-1 bg-muted rounded text-xs">→</kbd>
                {language === 'en' ? 'Navigate' : 'التنقل'}
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">ESC</kbd>
                {language === 'en' ? 'Close' : 'إغلاق'}
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-2 py-1 bg-muted rounded text-xs">
                  {language === 'en' ? 'Click' : 'اضغط'}
                </kbd>
                {language === 'en' ? 'Zoom' : 'تكبير'}
              </span>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
