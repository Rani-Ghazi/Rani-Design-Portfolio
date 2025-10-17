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
import raniPortrait from "@/assets/rani-portrait.jpg";

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
      title: "Brand Identity Design",
      titleAr: "تصميم الهوية التجارية",
      description: "From logo to full brand guidelines—create instant recognition and lasting trust. Your brand, built to stand out in the Gulf market.",
      descriptionAr: "من الشعار إلى دليل الهوية الكامل—بناء تميز فوري وثقة دائمة. علامتك، مصممة للتميز في السوق الخليجي."
    },
    {
      icon: Instagram,
      title: "Social Media Design",
      titleAr: "تصميم السوشيال ميديا",
      description: "Stop scrolling, start connecting. Visuals that capture attention, speak your brand language, and drive real engagement.",
      descriptionAr: "أوقف التمرير، ابدأ التواصل. تصاميم تلفت الانتباه، تتحدث بلغة علامتك، وتحقق تفاعلًا حقيقيًا."
    },
    {
      icon: Package,
      title: "Packaging Design",
      titleAr: "تصميم العبوات",
      description: "Packaging that sells before it's opened—premium, shelf-ready designs that reflect your product's quality and your market's expectations.",
      descriptionAr: "تغليف يبيع قبل أن يُفتح—تصاميم راقية جاهزة للأرفف تعكس جودة منتجك وتوقعات سوقك."
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      titleAr: "التوجيه الإبداعي",
      description: "One vision, every touchpoint. Strategic direction that unifies your brand message and amplifies your impact across all platforms.",
      descriptionAr: "رؤية واحدة، في كل نقطة تواصل. توجيه استراتيجي يوحد رسالة علامتك ويضخم تأثيرك عبر جميع المنصات."
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
              {language === 'en' ? 'Trusted by Gulf Brands' : 'موثوق به من العلامات الخليجية'}
            </span>
          </div>

          {/* Main heading with enhanced typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {language === 'en' ? (
              <>
                <span className="block bg-gradient-hero bg-clip-text text-transparent mb-2">
                  Premium Design
                </span>
                <span className="block text-foreground">
                  For the Gulf Market
                </span>
              </>
            ) : (
              <>
                <span className="block text-foreground mb-2">
                  تصميم راقي
                </span>
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  للسوق الخليجي
                </span>
              </>
            )}
          </h1>

          {/* Description with elegant styling */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {language === 'en' 
              ? 'Crafting visual identities that resonate with Omani and Gulf audiences—where culture meets contemporary design.'
              : 'صناعة هويات بصرية تلامس الجمهور العماني والخليجي—حيث تلتقي الأصالة بالتصميم المعاصر.'
            }
          </p>

          {/* CTA Button with enhanced styling */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(12_88%_65%/0.4)] hover:scale-105 transition-all duration-300 font-semibold"
            >
              {language === 'en' ? 'Discover My Work' : 'اكتشف أعمالي'}
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

      {/* About Section - Moved Higher */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 md:gap-16 items-center">
            {/* Photo Column */}
            <div className="animate-on-scroll order-2 md:order-1">
              <div className="relative max-w-md mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-warm rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-glow border-4 border-background group">
                  <img 
                    src={raniPortrait} 
                    alt={language === 'en' ? 'Rani - Visual Identity Designer' : 'راني - مصمم هويات بصرية'}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="animate-on-scroll stagger-1 order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">
                  {language === 'en' ? 'Independent Designer' : 'مصمم مستقل'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                {language === 'en' ? 'Design That Speaks Your Language' : 'تصميم يتحدث لغتك'}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                {language === 'en' 
                  ? "I'm Rani—a visual identity designer focused exclusively on the Omani and Gulf market. I create brands that feel right at home in our culture while standing out in today's competitive landscape."
                  : "أنا راني—مصمم هويات بصرية متخصص في السوق العماني والخليجي. أصمم علامات تجارية تنتمي لثقافتنا وتتميز في سوق اليوم التنافسي."
                }
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
                {language === 'en' 
                  ? "Whether you're launching a startup or refreshing an established business, I deliver clarity, confidence, and visual impact—crafted specifically for Gulf audiences."
                  : "سواء كنت تطلق مشروعًا جديدًا أو تجدد علامة قائمة، أقدم وضوحًا وثقة وتأثيرًا بصريًا—مصمم خصيصًا للجمهور الخليجي."
                }
              </p>
              
              {/* Credibility badges */}
              <div className="space-y-4 mb-8">
                <Card className="p-4 border-0 bg-background/50 backdrop-blur shadow-soft hover:shadow-medium transition-all duration-300">
                  <h4 className="font-bold text-base mb-2 text-primary">{language === 'en' ? 'Trusted By' : 'موثوق من'}</h4>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{language === 'en' ? 'Gulf Startups' : 'الشركات الناشئة الخليجية'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{language === 'en' ? 'Local Retailers' : 'تجار التجزئة المحليون'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{language === 'en' ? 'Service Providers' : 'مقدمو الخدمات'}</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Approach highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-primary">{language === 'en' ? 'My Approach' : 'منهجي'}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === 'en'
                      ? 'Market research, cultural insight, visual excellence.'
                      : 'بحث السوق، فهم ثقافي، تميز بصري.'
                    }
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-primary">{language === 'en' ? 'Why Gulf-Focused?' : 'لماذا التركيز الخليجي؟'}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === 'en'
                      ? 'Because our market deserves designs that truly connect.'
                      : 'لأن سوقنا يستحق تصاميم تتواصل بصدق.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              {language === 'en' ? 'Selected Work' : 'أعمال منتقاة'}
            </h3>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Real projects for real Gulf brands—from concept to completion'
                : 'مشاريع حقيقية لعلامات خليجية—من الفكرة إلى التنفيذ'
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
              </Card>
            ))}
          </div>
          
          {/* CTA after portfolio */}
          <div className="text-center mt-12 md:mt-16 animate-on-scroll">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-glow hover:shadow-[0_0_60px_hsl(12_88%_65%/0.4)] hover:scale-105 transition-all duration-300 font-semibold"
            >
              {language === 'en' ? "Let's Work Together" : 'لنعمل معًا'}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              {language === 'en' ? 'What I Offer' : 'ما أقدمه'}
            </h3>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-4"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'Focused services designed to elevate your brand in the Gulf market'
                : 'خدمات مركزة مصممة لرفع مستوى علامتك في السوق الخليجي'
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
              {language === 'en' ? "Ready to Elevate Your Brand?" : 'مستعد لرفع مستوى علامتك؟'}
            </h3>
            <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-foreground/80 mb-4 font-medium">
              {language === 'en' 
                ? "Let's talk about your next project."
                : 'لنتحدث عن مشروعك القادم.'
              }
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Whether you're building something new or refreshing what you have, I'm here to help make it stand out."
                : 'سواء كنت تبني شيئًا جديدًا أو تجدد ما لديك، أنا هنا لمساعدتك على التميز.'
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
