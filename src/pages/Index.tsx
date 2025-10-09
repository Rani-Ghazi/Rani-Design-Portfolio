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
      description: "Creating memorable logos and complete brand systems that tell your story.",
      descriptionAr: "إنشاء شعارات مميزة وأنظمة علامات تجارية متكاملة تروي قصتك."
    },
    {
      icon: Instagram,
      title: "Social Media Design",
      titleAr: "تصميم السوشيال ميديا",
      description: "Eye-catching posts and stories that engage your audience.",
      descriptionAr: "منشورات وقصص لافتة للنظر تجذب جمهورك."
    },
    {
      icon: Package,
      title: "Packaging Design",
      titleAr: "تصميم التعبئة والتغليف",
      description: "Beautiful packaging that makes your products stand out.",
      descriptionAr: "تغليف جميل يجعل منتجاتك متميزة."
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      titleAr: "الإخراج الإبداعي",
      description: "Strategic visual concepts that bring your vision to life.",
      descriptionAr: "مفاهيم بصرية استراتيجية تحيي رؤيتك."
    }
  ];

  return (
    <div className="min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-display font-bold bg-gradient-warm bg-clip-text text-transparent">
              {language === 'en' ? 'Design Studio' : 'ديزاين ستوديو'}
            </h1>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-8">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {language === 'en' ? 'About' : 'عني'}
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {language === 'en' ? 'Portfolio' : 'أعمالي'}
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {language === 'en' ? 'Services' : 'خدماتي'}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
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
        <div className="relative z-10 text-center px-6 py-20 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
            {language === 'en' ? (
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Crafting Visual Stories
              </span>
            ) : (
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                نصنع قصصًا بصرية
              </span>
            )}
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Graphic designer passionate about creating meaningful designs that tell your unique story'
              : 'مصمم جرافيك شغوف بإنشاء تصاميم ذات معنى تروي قصتك الفريدة'
            }
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="text-lg px-10 py-7 rounded-xl animate-float"
          >
            {language === 'en' ? 'View My Work' : 'شاهد أعمالي'}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {language === 'en' ? 'About Me' : 'من أنا'}
            </h3>
            <div className="w-32 h-1.5 bg-gradient-warm mx-auto rounded-full"></div>
          </div>
          <Card className="p-10 md:p-16 shadow-medium hover:shadow-glow transition-all duration-500 animate-scale-in border-0 bg-card/50 backdrop-blur">
            <p className="text-xl md:text-2xl leading-relaxed text-center font-light">
              {language === 'en' 
                ? "I'm a passionate graphic designer who believes that every brand has a unique story to tell. With creativity and attention to detail, I transform ideas into visual experiences that resonate with audiences and leave lasting impressions."
                : "أنا مصمم جرافيك شغوف أؤمن بأن كل علامة تجارية لديها قصة فريدة لترويها. بالإبداع والاهتمام بالتفاصيل، أحول الأفكار إلى تجارب بصرية تلامس الجمهور وتترك انطباعات دائمة."
              }
            </p>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {language === 'en' ? 'Portfolio' : 'معرض الأعمال'}
            </h3>
            <div className="w-32 h-1.5 bg-gradient-warm mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Selected works showcasing creativity and passion'
                : 'أعمال مختارة تعرض الإبداع والشغف'
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-background font-bold text-xl mb-2">
                      {language === 'en' ? project.title : project.titleAr}
                    </h4>
                    <p className="text-background/90">
                      {language === 'en' ? project.description : project.descriptionAr}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg">
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
      <section id="services" className="py-32 px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {language === 'en' ? 'Services' : 'الخدمات'}
            </h3>
            <div className="w-32 h-1.5 bg-gradient-warm mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Professional design solutions tailored to your needs'
                : 'حلول تصميم احترافية مصممة خصيصًا لاحتياجاتك'
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-10 text-center shadow-medium hover:shadow-glow transition-all hover:-translate-y-3 duration-500 animate-scale-in border-0 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-soft">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-xl mb-4">
                  {language === 'en' ? service.title : service.titleAr}
                </h4>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {language === 'en' ? service.description : service.descriptionAr}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {language === 'en' ? "Let's Create Together" : 'لنبدع معًا'}
            </h3>
            <div className="w-32 h-1.5 bg-gradient-warm mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16">
              {language === 'en' 
                ? "Ready to bring your vision to life? Let's talk!"
                : 'مستعد لتحقيق رؤيتك؟ لنتحدث!'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="hero" size="lg" className="gap-3 text-lg px-8 py-7 rounded-xl">
                <Mail className="w-5 h-5" />
                designer@email.com
              </Button>
              <Button variant="outline" size="lg" className="gap-3 text-lg px-8 py-7 rounded-xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <Phone className="w-5 h-5" />
                {language === 'en' ? 'WhatsApp' : 'واتساب'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50 bg-gradient-subtle">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-base">
            {language === 'en' 
              ? '© 2024 Design Studio. All rights reserved.'
              : '© 2024 ديزاين ستوديو. جميع الحقوق محفوظة.'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
