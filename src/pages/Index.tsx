import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Palette, Package, Sparkles, Instagram } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AuroraBackground } from "@/components/ui/aurora-background";
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
      title: "Complete Brand Identity",
      titleAr: "الهوية البصرية الشاملة",
      description: "From logo to full brand guidelines—create instant recognition and lasting trust. Your brand, built to lead in the Gulf market.",
      descriptionAr: "من الشعار إلى الدليل الكامل—تميز فوري وثقة دائمة. علامتك، مهيأة للريادة في السوق الخليجي."
    },
    {
      icon: Instagram,
      title: "Social Media Design",
      titleAr: "تصميم محتوى التواصل الاجتماعي",
      description: "Stop scrolling, start connecting. Designs that capture eyes, speak your brand language, and drive real engagement.",
      descriptionAr: "أوقف التمرير، ابدأ التواصل. تصاميم تلفت الأنظار، تتحدث بلسان علامتك، وتقود إلى تفاعل حقيقي."
    },
    {
      icon: Package,
      title: "Premium Packaging",
      titleAr: "تصميم العبوات والتغليف الفاخر",
      description: "Your product's first impression is your first sale opportunity. Premium, shelf-ready designs that reflect quality and meet market taste.",
      descriptionAr: "واجهة منتجك هي فرصتك الأولى للبيع. تصاميم راقية وجاهزة للأرفف تعكس جودة منتجك وتفهم ذوق جمهورك."
    },
    {
      icon: Sparkles,
      title: "Product Retouching",
      titleAr: "تحسين وعرض المنتجات",
      description: "Transform ordinary products into premium presentations. Professional retouching for e-commerce, retail, and marketing—making modest quality look luxurious.",
      descriptionAr: "نحول منتجاتك العادية إلى منتجات فاخرة. تحسين احترافي للصور (حتى المتواضعة) لتظهر في أفضل شكل مرتب وفاخر."
    },
    {
      icon: Palette,
      title: "Print & Marketing Materials",
      titleAr: "حلول المطبوعات والتسويق المادي",
      description: "Make your brand tangible. Creative stickers, business cards, flyers—everything you need for physical presence with unmatched print quality.",
      descriptionAr: "لنجعل علامتك ملموسة. من الاستيكرات الإبداعية إلى المطبوعات الاحترافية (بطاقات عمل، فلايرات) بجودة طباعة لا تُضاهى."
    },
    {
      icon: Sparkles,
      title: "Strategic Creative Direction",
      titleAr: "التوجيه الإبداعي والاستراتيجي",
      description: "One unified message, across every platform. Strategic direction that ensures brand consistency and amplifies your visual impact everywhere.",
      descriptionAr: "رسالة موحدة، في كل منصة. توجيه استراتيجي يضمن تماسك صورة علامتك ويضاعف تأثيرها البصري عبر جميع قنوات التواصل."
    }
  ];

  return (
    <div className="min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-xl z-50 border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-4 md:px-6 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              {language === 'en' ? 'Rani Portfolio' : 'راني بورتفوليو'}
            </h1>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex gap-6 md:gap-8">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {language === 'en' ? 'About' : 'عني'}
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {language === 'en' ? 'Portfolio' : 'أعمالي'}
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {language === 'en' ? 'Services' : 'خدماتي'}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-sm font-medium hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {language === 'en' ? 'Contact' : 'تواصل'}
                </button>
              </div>
              <LanguageSwitcher language={language} onToggle={toggleLanguage} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-5xl mx-auto py-12 md:py-16"
        >
          {/* Subtitle badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 backdrop-blur-sm border border-primary/20 shadow-soft">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-semibold text-primary tracking-wide">
              {language === 'en' ? 'Trusted by Gulf Brands' : 'موثوق به من العلامات الخليجية'}
            </span>
          </div>

          {/* Main heading with enhanced typography */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1] text-center">
            {language === 'en' ? (
              <>
                <span className="block bg-gradient-hero bg-clip-text text-transparent mb-2">
                  Premium Design
                </span>
                <span className="block text-foreground">
                  Authentic Renewal
                </span>
                <span className="block text-foreground/80 text-xl md:text-2xl lg:text-3xl mt-3">
                  For the Omani Market
                </span>
              </>
            ) : (
              <>
                <span className="block text-foreground mb-2">
                  تصميم راقٍ
                </span>
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  أصالة متجددة
                </span>
                <span className="block text-foreground/80 text-xl md:text-2xl lg:text-3xl mt-3">
                  للسوق العماني
                </span>
              </>
            )}
          </h1>

          {/* Description with elegant styling */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-medium text-center">
            {language === 'en' 
              ? 'We celebrate visual identity that touches Omani and Gulf hearts—where deep cultural roots meet the pinnacle of contemporary design.'
              : 'نحتفل بالهوية البصرية التي تلامس الوجدان العماني والخليجي—حيث تلتقي جذور الثقافة العريقة بقمة التصميم المعاصر.'
            }
          </p>

          {/* CTA Button with enhanced styling */}
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('about')}
            className="relative overflow-hidden text-sm md:text-base px-6 md:px-8 py-4 md:py-5 rounded-xl shadow-large hover:shadow-glow-strong hover:scale-105 transition-all duration-500 font-semibold bg-gradient-primary group"
          >
            <span className="relative z-10">{language === 'en' ? "Unleash Your Brand's Distinction" : 'أطلق تميز علامتك'}</span>
            <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
          </Button>

          {/* Scroll indicator */}
          <div className="mt-12 animate-float">
            <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-gradient-primary rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* About Section - Moved Higher */}
      <section id="about" className="py-24 md:py-32 px-4 md:px-6 bg-gradient-subtle overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 md:gap-16 items-center">
            {/* Photo Column */}
            <div className="animate-on-scroll order-2 md:order-1">
              <div className="relative max-w-md mx-auto group">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-large hover:shadow-glow-strong transition-all duration-700 border-2 border-transparent group-hover:border-primary/30">
                  <img 
                    src={raniPortrait} 
                    alt={language === 'en' ? 'Rani - Visual Identity Designer' : 'راني - مصمم هويات بصرية'}
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="animate-on-scroll stagger-1 order-1 md:order-2 space-y-8">
              <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 to-accent/15 backdrop-blur-sm rounded-full border border-primary/20 shadow-soft">
                <span className="text-sm font-semibold text-primary tracking-wide">
                  {language === 'en' ? 'Independent Designer' : 'مصمم مستقل'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-tight">
                {language === 'en' ? "Design That Speaks Your Audience's Language" : 'التصميم الذي يتحدث لغة جمهورك'}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                {language === 'en' 
                  ? "I'm Rani—a visual identity designer specialized in the Omani and Gulf market. I don't just design logos, I craft brands that dominate today's competitive landscape."
                  : "أنا راني—مصمم هويات بصرية متخصص في السوق العماني والخليجي. لا أصمم مجرد شعارات، بل أصنع علامات تجارية تتصدر المشهد التنافسي اليوم."
                }
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                {language === 'en' 
                  ? "Whether you're launching a pioneering project or refreshing an established brand, I deliver clarity, confidence, and visual impact—designed specifically to resonate with your audience."
                  : "سواء كنت تطلق مشروعًا رائدًا أو تجدد علامة قائمة، أقدم لك وضوحًا، ثقة، وتأثيرًا بصريًا مصممًا خصيصًا ليتردد صداه لدى جمهورك."
                }
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                {language === 'en' 
                  ? "I work with ambitious startups, local retailers and markets, and specialized service providers."
                  : "أتعامل مع الشركات الناشئة الطموحة، تجار التجزئة والأسواق المحلية، ومقدمي الخدمات المتخصصين."
                }
              </p>
              
              {/* Credibility badges */}
              <div className="pt-6 space-y-4">
                <p className="text-foreground font-bold text-lg">{language === 'en' ? 'Trusted By' : 'موثوق من'}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 bg-card rounded-xl text-sm font-medium border border-border hover:border-primary hover:shadow-soft transition-all duration-300 hover:scale-105 cursor-default shadow-elegant">
                    {language === 'en' ? 'Gulf Startups' : 'الشركات الناشئة الخليجية'}
                  </span>
                  <span className="px-5 py-2.5 bg-card rounded-xl text-sm font-medium border border-border hover:border-primary hover:shadow-soft transition-all duration-300 hover:scale-105 cursor-default shadow-elegant">
                    {language === 'en' ? 'Local Retailers' : 'تجار التجزئة المحليون'}
                  </span>
                  <span className="px-5 py-2.5 bg-card rounded-xl text-sm font-medium border border-border hover:border-primary hover:shadow-soft transition-all duration-300 hover:scale-105 cursor-default shadow-elegant">
                    {language === 'en' ? 'Service Providers' : 'مقدمو الخدمات'}
                  </span>
                </div>
              </div>

              {/* Approach highlights */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-primary">{language === 'en' ? 'My Approach: From Vision to Impactful Reality' : 'منهجي: من الرؤية إلى الواقع المؤثر'}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {language === 'en'
                      ? 'Every project is a journey that starts with deep understanding of your market, audience, and vision. This understanding fuels the design that delivers tangible results.'
                      : 'كل مشروع هو رحلة تبدأ بفهم عميق لسوقك، جمهورك، ورؤيتك. هذا الفهم هو الوقود الذي نترجمه إلى تصميم يحقق نتائج ملموسة.'
                    }
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-primary">{language === 'en' ? 'Why Gulf-Focused?' : 'لماذا التركيز على الخليج؟'}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {language === 'en'
                      ? "Because I believe successful design here requires cultural insight that goes beyond technical skill. I know what touches our audience's heart and mind."
                      : 'لأنني أؤمن أن التصميم الناجح هنا يتطلب بصيرة ثقافية لا تكتفي بالمهارة التقنية. أعرف ما يلامس قلب جمهورنا وعقله.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-32 px-4 md:px-6 overflow-hidden bg-background relative">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll space-y-6">
            <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 to-accent/15 backdrop-blur-sm rounded-full mb-4 border border-primary/20 shadow-soft">
              <p className="text-primary font-semibold text-sm tracking-wide">{language === 'en' ? 'Portfolio' : 'أعمالي'}</p>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              {language === 'en' ? 'Selected Work' : 'أعمال منتقاة'}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              {language === 'en' 
                ? 'A legacy of creativity. Real projects for Gulf brands—from idea to achievement'
                : 'إرث من الإبداع. مشاريع حقيقية لعلامات خليجية—من الفكرة إلى الإنجاز'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-3xl shadow-large hover:shadow-glow-strong transition-all duration-700 bg-card animate-on-scroll border border-border/50 hover:border-primary/30`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={language === 'en' ? project.title : project.titleAr}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                  <h4 className="text-3xl font-display font-bold text-foreground mb-3">
                    {language === 'en' ? project.title : project.titleAr}
                  </h4>
                  <p className="text-lg text-muted-foreground font-medium">
                    {language === 'en' ? project.description : project.descriptionAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA after portfolio */}
          <div className="text-center mt-16 md:mt-20 animate-on-scroll">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-large hover:shadow-glow-strong hover:scale-105 transition-all duration-500 font-semibold bg-gradient-primary group"
            >
              <span className="relative z-10">{language === 'en' ? "Let's Work Together" : 'لنعمل معًا'}</span>
              <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-4 md:px-6 bg-gradient-subtle overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 animate-on-scroll space-y-6">
            <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 to-accent/15 backdrop-blur-sm rounded-full mb-4 border border-primary/20 shadow-soft">
              <p className="text-primary font-semibold text-sm tracking-wide">{language === 'en' ? 'Services' : 'خدماتي'}</p>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              {language === 'en' ? "Let's Work Together" : 'لنعمل معًا'}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              {language === 'en'
                ? "Focused services designed to elevate your brand's position in the Gulf market"
                : 'خدمات مركزة ومصممة لرفع مكانة علامتك في السوق الخليجي'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-10 bg-card rounded-3xl shadow-large hover:shadow-glow-strong transition-all duration-700 border border-border/50 hover:border-primary/30 animate-on-scroll group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="space-y-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-medium">
                    <service.icon className="w-8 h-8 text-primary-foreground transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {language === 'en' ? service.title : service.titleAr}
                  </h4>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-medium">
                    {language === 'en' ? service.description : service.descriptionAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-4 md:px-6 overflow-hidden relative bg-background">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-on-scroll space-y-16">
            <div className="space-y-8">
              <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 to-accent/15 backdrop-blur-sm rounded-full mb-4 border border-primary/20 shadow-soft">
                <p className="text-primary font-semibold text-sm tracking-wide">{language === 'en' ? 'Contact' : 'تواصل'}</p>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                {language === 'en' ? "Ready for Excellence?" : 'مستعد للتميز؟'}
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                {language === 'en' 
                  ? "Let's unleash your brand's next potential. Whether you're at the creation or renewal stage, I'm here to help you stand out."
                  : 'دعنا نُطلق العنان لإمكانيات علامتك القادمة. سواء كنت في مرحلة الإنشاء أو التجديد، أنا هنا لمساعدتك على التميز.'
                }
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll">
              <a 
                href="mailto:developerrani98@gmail.com"
                className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-primary text-primary-foreground rounded-2xl hover:shadow-glow-strong transition-all duration-500 font-semibold text-lg shadow-large group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10 truncate">developerrani98@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/96895454284"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-card border-2 border-primary text-primary rounded-2xl hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all duration-500 font-semibold text-lg shadow-large hover:shadow-glow-strong group hover:scale-105"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                {language === 'en' ? 'WhatsApp' : 'واتساب'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground font-medium">
              {language === 'en' 
                ? '© 2025 Rani Portfolio. All rights reserved.'
                : '© 2025 راني بورتفوليو. جميع الحقوق محفوظة.'
              }
            </p>
            <div className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
              {language === 'en' ? 'Rani Portfolio' : 'راني بورتفوليو'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
