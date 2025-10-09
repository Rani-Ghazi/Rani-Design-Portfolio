import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Palette, Package, Sparkles, Instagram } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent">
              Design Studio | ديزاين ستوديو
            </h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                About | عني
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
                Portfolio | أعمالي
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Services | خدماتي
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                Contact | تواصل
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90"></div>
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block mb-2">Crafting Visual Stories</span>
            <span className="block text-3xl md:text-5xl bg-gradient-warm bg-clip-text text-transparent">
              نصنع قصصًا بصرية
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Graphic designer passionate about creating meaningful designs
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" dir="rtl">
            مصمم جرافيك شغوف بإنشاء تصاميم ذات معنى
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="text-lg px-8 py-6 animate-float"
          >
            View My Work | شاهد أعمالي
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              About Me | من أنا
            </h3>
            <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-soft hover:shadow-medium transition-all animate-slide-in">
              <p className="text-lg leading-relaxed">
                I'm a passionate graphic designer who believes that every brand has a unique story to tell. 
                With creativity and attention to detail, I transform ideas into visual experiences that 
                resonate with audiences and leave lasting impressions.
              </p>
            </Card>
            <Card className="p-8 shadow-soft hover:shadow-medium transition-all animate-slide-in" dir="rtl">
              <p className="text-lg leading-relaxed">
                أنا مصمم جرافيك شغوف أؤمن بأن كل علامة تجارية لديها قصة فريدة لترويها.
                بالإبداع والاهتمام بالتفاصيل، أحول الأفكار إلى تجارب بصرية تلامس الجمهور
                وتترك انطباعات دائمة.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Portfolio | معرض الأعمال
            </h3>
            <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Selected works showcasing creativity and passion
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2" dir="rtl">
              أعمال مختارة تعرض الإبداع والشغف
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-background font-bold text-xl mb-1">{project.title}</h4>
                    <p className="text-background/80 text-sm mb-2">{project.description}</p>
                    <p className="text-background/80 text-sm" dir="rtl">{project.descriptionAr}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
                  <p className="text-sm text-muted-foreground" dir="rtl">{project.titleAr}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Services | الخدمات
            </h3>
            <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional design solutions tailored to your needs
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2" dir="rtl">
              حلول تصميم احترافية مصممة خصيصًا لاحتياجاتك
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 text-center shadow-soft hover:shadow-medium transition-all hover:-translate-y-2 duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground mb-3" dir="rtl">{service.titleAr}</p>
                <p className="text-sm leading-relaxed mb-3">{service.description}</p>
                <p className="text-sm leading-relaxed" dir="rtl">{service.descriptionAr}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Create Together | لنبدع معًا
            </h3>
            <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground mb-4">
              Ready to bring your vision to life? Let's talk!
            </p>
            <p className="text-lg text-muted-foreground mb-12" dir="rtl">
              مستعد لتحقيق رؤيتك؟ لنتحدث!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="hero" size="lg" className="gap-2 text-lg">
                <Mail className="w-5 h-5" />
                designer@email.com
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-lg border-2 hover:border-primary">
                <Phone className="w-5 h-5" />
                WhatsApp | واتساب
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 Design Studio. All rights reserved.</p>
          <p dir="rtl">© 2024 ديزاين ستوديو. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
