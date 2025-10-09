import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  language: 'en' | 'ar';
  onToggle: () => void;
}

export const LanguageSwitcher = ({ language, onToggle }: LanguageSwitcherProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="gap-2 font-medium border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
    >
      <Globe className="w-4 h-4" />
      {language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};
