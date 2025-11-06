import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const currentProject = projects[currentIndex];

  if (!currentProject) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-card border-border overflow-hidden">
        <DialogTitle className="sr-only">
          {language === 'en' ? currentProject.title : currentProject.titleAr}
        </DialogTitle>
        
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={() => onNavigate('prev')}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={() => onNavigate('next')}
          disabled={currentIndex === projects.length - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Image */}
        <div className="w-full aspect-square bg-muted">
          <img
            src={currentProject.image}
            alt={language === 'en' ? currentProject.title : currentProject.titleAr}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-bold">
            {language === 'en' ? currentProject.title : currentProject.titleAr}
          </h3>
          <p className="text-muted-foreground">
            {language === 'en' ? currentProject.description : currentProject.descriptionAr}
          </p>
          <p className="text-sm text-muted-foreground/70">
            {currentIndex + 1} / {projects.length}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
