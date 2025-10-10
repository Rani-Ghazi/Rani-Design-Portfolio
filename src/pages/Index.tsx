import { useState, useEffect } from "react";
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

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-display font-bold bg-gradient-warm bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              {language === 'en' ? 'Rani Design Studio' : 'راني ديزاين ستوديو'}
            </h1>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="hidden md:flex gap-6">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-warm after:transition-all after:duration-300 hover:after:w-full"
                >
                  {language === 'en' ? 'About' : 'عني'}
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-warm after:transition-all after:duration-300 hover:after:w-full"
                >
                  {language === 'en' ? 'Portfolio' : 'أعمالي'}
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-warm after:transition-all after:duration-300 hover:after:w-full"
                >
                  {language === 'en' ? 'Services' : 'خدماتي'}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-warm after:transition-all after:duration-300 hover:after:w-full"
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
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Sophisticated overlay with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 text-center px-4 md:px-6 py-20 max-w-5xl mx-auto">
          {/* Subtitle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 backdrop-blur-md border border-primary/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/90">
              {language === 'en' ? 'Independent Design Studio' : 'استوديو تصميم مستقل'}
            </span>
          </div>

          {/* Main heading with enhanced typography */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {language === 'en' ? (
              <>
                <span className="block bg-gradient-hero bg-clip-text text-transparent mb-2">
                  Visual Identity
                </span>
                <span className="block text-foreground">
                  Designer
                </span>
              </>
            ) : (
              <>
                <span className="block text-foreground mb-2">
                  مصمم
                </span>
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  هويات بصرية
                </span>
              </>
            )}
          </h2>

          {/* Description with elegant styling */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {language === 'en' 
              ? 'Building identities and designs crafted for the Gulf audience'
              : 'تصميم هويات بصرية تتحدث لغة الجمهور الخليجي'
            }
          </p>

          {/* CTA Button with enhanced styling */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(12_88%_65%/0.4)] hover:scale-105 transition-all duration-300 font-semibold"
            >
              {language === 'en' ? 'View My Work' : 'شاهد أعمالي'}
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-gradient-warm rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              {language === 'en' ? 'About Me' : 'من أنا'}
            </h3>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full"></div>
          </div>
          <Card className="p-6 md:p-10 shadow-medium hover:shadow-glow transition-all duration-700 animate-on-scroll stagger-1 border-0 bg-card/50 backdrop-blur hover:scale-[1.02] group">
            <p className="text-base md:text-lg leading-relaxed text-center transition-all duration-500 group-hover:text-foreground">
              {language === 'en' 
                ? "I'm Rani, an independent designer specializing in visual identities tailored for the Omani and Gulf market. My work is rooted in creativity, clarity, and trust—building brands that truly connect."
                : "أنا راني، مصمم مستقل متخصص في بناء الهويات البصرية للسوق العماني والخليجي. أعمل بإبداع ووضوح لتصميم علامات تجارية تُبنى على الثقة وتتواصل بصدق."
              }
            </p>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
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
                className={`group overflow-hidden shadow-medium hover:shadow-glow transition-all duration-700 cursor-pointer border-0 animate-on-scroll stagger-${(index % 4) + 1}`}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={language === 'en' ? project.title : project.titleAr}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-6 translate-y-4 group-hover:translate-y-0">
                    <h4 className="text-background font-bold text-lg md:text-xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {language === 'en' ? project.title : project.titleAr}
                    </h4>
                    <p className="text-background/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {language === 'en' ? project.description : project.descriptionAr}
                    </p>
                  </div>
                </div>
                <div className="p-4 md:p-5 group-hover:bg-gradient-warm/5 transition-colors duration-500">
                  <h4 className="font-semibold text-base md:text-lg transition-colors duration-300 group-hover:text-primary">
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
      <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
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
                className={`p-6 md:p-8 text-center shadow-medium hover:shadow-glow transition-all hover:-translate-y-3 duration-700 border-0 bg-card/50 backdrop-blur group cursor-pointer animate-on-scroll stagger-${(index % 4) + 1}`}
              >
                <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-warm rounded-xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:animate-glow-pulse">
                  <service.icon className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  {language === 'en' ? service.title : service.titleAr}
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {language === 'en' ? service.description : service.descriptionAr}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-on-scroll">
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
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center max-w-2xl mx-auto animate-on-scroll stagger-1">
              <Button 
                variant="hero" 
                size="lg" 
                className="gap-2 text-base px-6 py-6 rounded-xl w-full sm:w-auto shadow-glow hover:shadow-[0_0_60px_hsl(12_88%_65%/0.5)] hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:developerrani98@gmail.com">
                  <Mail className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="truncate">developerrani98@gmail.com</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 text-base px-6 py-6 rounded-xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 w-full sm:w-auto transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/96895454284" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  {language === 'en' ? 'WhatsApp' : 'واتساب'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10 px-4 md:px-6 border-t border-border/50 bg-gradient-subtle">
        <div className="container mx-auto text-center text-muted-foreground animate-fade-in">
          <p className="text-sm md:text-base hover:text-foreground transition-colors duration-300">
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
