import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Palette, Package, Sparkles, Instagram } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const projects = [
    {
      image: project1,
      title: "Brand Identity Design",
      titleAr: "تصميم هوية تجارية",
      description: "Complete branding package",
      descriptionAr: "حزمة كاملة للهوية البصرية"
    },
    {
      image: project2,
      title: "Social Media Graphics",
      titleAr: "تصميم منشورات التواصل الاجتماعي",
      description: "Engaging visual content",
      descriptionAr: "محتوى بصري جذاب"
    },
    {
      image: project3,
      title: "Packaging Design",
      titleAr: "تصميم العبوات",
      description: "Elegant product packaging",
      descriptionAr: "تغليف أنيق للمنتجات"
    },
    {
      image: project4,
      title: "Poster Design",
      titleAr: "تصميم الملصقات",
      description: "Bold creative posters",
      descriptionAr: "ملصقات إبداعية جريئة"
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      titleAr: "الهوية التجارية",
      description: "Complete visual identity systems—from logo to brand guidelines—designed to create recognition and trust.",
      descriptionAr: "أنظمة هوية بصرية متكاملة من الشعار إلى دليل الهوية، مصممة لبناء الوعي والثقة."
    },
    {
      icon: Instagram,
      title: "Social Media Design",
      titleAr: "تصميم السوشيال ميديا",
      description: "Consistent, engaging visuals that speak to your audience and strengthen your online presence.",
      descriptionAr: "تصاميم متسقة وجذابة تتحدث مع جمهورك وتعزز حضورك الرقمي."
    },
    {
      icon: Package,
      title: "Packaging Design",
      titleAr: "تصميم العبوات",
      description: "Thoughtful packaging design that reflects quality and connects with local market expectations.",
      descriptionAr: "تصميم عبوات مدروس يعكس الجودة ويتواصل مع توقعات السوق المحلي."
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      titleAr: "التوجيه الإبداعي",
      description: "Strategic visual direction to align your brand message across all touchpoints.",
      descriptionAr: "توجيه بصري استراتيجي لتوحيد رسالة علامتك عبر جميع نقاط التواصل."
    }
  ];

  return (
    <div className="min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-display font-bold bg-gradient-warm bg-clip-text text-transparent">
              {language === 'en' ? 'Rani Design Studio' : 'راني ديزاين ستوديو'}
            </h1>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="hidden md:flex gap-6">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {language === 'en' ? 'About' : 'عني'}
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {language === 'en' ? 'Portfolio' : 'أعمالي'}
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {language === 'en' ? 'Services' : 'خدماتي'}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {language === 'en' ? 'Contact' : 'تواصل'}
                </button>
              </div>
              <LanguageSwitcher language={language} onToggle={toggleLanguage} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        <div className="relative z-10 text-center px-4 md:px-6 py-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            {language === 'en' ? (
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Visual Identity Designer
              </span>
            ) : (
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                مصممة هويات بصرية
              </span>
            )}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Building identities and designs crafted for the Gulf audience'
              : 'تصميم هويات بصرية تتحدث لغة الجمهور الخليجي'
            }
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl animate-float shadow-glow"
          >
            {language === 'en' ? 'View My Work' : 'شاهد أعمالي'}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              {language === 'en' ? 'About Me' : 'من أنا'}
            </h3>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full"></div>
          </div>
          <Card className="p-6 md:p-10 shadow-medium hover:shadow-glow transition-all duration-500 animate-scale-in border-0 bg-card/50 backdrop-blur">
            <p className="text-base md:text-lg leading-relaxed text-center">
              {language === 'en' 
                ? "I'm Rani, an independent designer specializing in visual identities tailored for the Omani and Gulf market. My work is rooted in creativity, clarity, and trust—building brands that truly connect."
                : "أنا راني، مصمم مستقل متخصص في بناء الهويات البصرية للسوق العماني والخليجي. أعمل بإبداع ووضوح لتصميم علامات تجارية تُبنى على الثقة وتتواصل بصدق."
              }
            </p>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              {language === 'en' ? 'Portfolio' : 'معرض الأعمال'}
            </h3>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Selected work in branding, packaging, and social media design'
                : 'أعمال منتقاة في الهوية البصرية، تصميم العبوات، والسوشيال ميديا'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-medium hover:shadow-glow transition-all duration-500 cursor-pointer animate-scale-in border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={language === 'en' ? project.title : project.titleAr}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                    <h4 className="text-background font-bold text-lg md:text-xl mb-1">
                      {language === 'en' ? project.title : project.titleAr}
                    </h4>
                    <p className="text-background/90 text-sm">
                      {language === 'en' ? project.description : project.descriptionAr}
                    </p>
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h4 className="font-semibold text-base md:text-lg">
                    {language === 'en' ? project.title : project.titleAr}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === 'en' ? project.description : project.descriptionAr}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              {language === 'en' ? 'Services' : 'الخدمات'}
            </h3>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'Clear services built around your brand needs'
                : 'خدمات واضحة تُبنى حول احتياجات علامتك'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 md:p-8 text-center shadow-medium hover:shadow-glow transition-all hover:-translate-y-2 duration-500 animate-scale-in border-0 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-warm rounded-xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <service.icon className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-3">
                  {language === 'en' ? service.title : service.titleAr}
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {language === 'en' ? service.description : service.descriptionAr}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              {language === 'en' ? "Let's Work Together" : 'لنبدأ العمل معًا'}
            </h3>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground mb-10 md:mb-12">
              {language === 'en' 
                ? "Have a project in mind? Reach out and let's collaborate."
                : 'لديك مشروع في ذهنك؟ تواصل معي ولنبدأ.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center max-w-2xl mx-auto">
              <Button 
                variant="hero" 
                size="lg" 
                className="gap-2 text-base px-6 py-6 rounded-xl w-full sm:w-auto"
                asChild
              >
                <a href="mailto:developerrani98@gmail.com">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">developerrani98@gmail.com</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 text-base px-6 py-6 rounded-xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary w-full sm:w-auto"
                asChild
              >
                <a href="https://wa.me/96895454284" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4" />
                  {language === 'en' ? 'WhatsApp' : 'واتساب'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10 px-4 md:px-6 border-t border-border/50 bg-gradient-subtle">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm md:text-base">
            {language === 'en' 
              ? '© 2025 Rani Design Studio. All rights reserved.'
              : '© 2025 راني ديزاين ستوديو. جميع الحقوق محفوظة.'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
