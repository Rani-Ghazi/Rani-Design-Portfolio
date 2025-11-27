import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Instagram, Sparkles } from "lucide-react";
import visualIdentityIcon from "@/assets/icons/visual-identity.png";
import booksPrintIcon from "@/assets/icons/books-print.png";
import advertisingMarketingIcon from "@/assets/icons/advertising-marketing.png";
import cardsSchoolIcon from "@/assets/icons/cards-school.png";
import packagingIcon from "@/assets/icons/packaging.png";
import photoEnhancementIcon from "@/assets/icons/photo-enhancement.png";
import otherServicesIcon from "@/assets/icons/other-services.png";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { PortfolioModal } from "@/components/PortfolioModal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import social1 from "@/assets/social-1.png";
import social2 from "@/assets/social-2.png";
import social3 from "@/assets/social-3.png";
import social4 from "@/assets/social-4.png";
import social5 from "@/assets/social-5.png";
import social6 from "@/assets/social-6.png";
import social7 from "@/assets/social-7.png";
import social8 from "@/assets/social-8.png";
import social9 from "@/assets/social-9.png";
import social10 from "@/assets/social-10.png";
import social11 from "@/assets/social-11.png";
import social12 from "@/assets/social-12.png";
import social13 from "@/assets/social-13.png";
import social14 from "@/assets/social-14.png";
import social15 from "@/assets/social-15.png";
import social16 from "@/assets/social-16.png";
import social17 from "@/assets/social-17.png";
import social18 from "@/assets/social-18.png";
import social19 from "@/assets/social-19.png";
import social20 from "@/assets/social-20.png";
import social21 from "@/assets/social-21.png";
import social22 from "@/assets/social-22.png";
import social23 from "@/assets/social-23.png";
import social24 from "@/assets/social-24.png";
import social25 from "@/assets/social-25.png";
import social26 from "@/assets/social-26.png";
import social27 from "@/assets/social-27.png";
import brand1 from "@/assets/brand-1.png";
import brand2 from "@/assets/brand-2.png";
import brand3 from "@/assets/brand-3.png";
import book1 from "@/assets/book-1.png";
import book2 from "@/assets/book-2.png";
import book3 from "@/assets/book-3.png";
import businesscard1 from "@/assets/businesscard-1.png";
import businesscard2 from "@/assets/businesscard-2.png";
import businesscard3 from "@/assets/businesscard-3.png";
import flyer4 from "@/assets/flyer-4.png";
import flyer5 from "@/assets/flyer-5.png";
import flyer6 from "@/assets/flyer-6.png";
import raniPortrait from "@/assets/rani-portrait.jpg";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('social');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    } else if (direction === 'next' && selectedProjectIndex < filteredProjects.length - 1) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  };

  // Scroll animation observer (ensure new elements after tab change are observed)
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
  }, [selectedCategory]);

  const projects = [
    {
      image: book1,
      title: "Atlas of the Solar System",
      titleAr: "أطلس المجموعة الشمسية",
      description: "Educational astronomy book cover with cosmic design",
      descriptionAr: "غلاف كتاب تعليمي علم الفلك بتصميم كوني",
      category: "print"
    },
    {
      image: book2,
      title: "Chemistry Reference Book",
      titleAr: "كتاب مرجع الكيمياء",
      description: "Scientific textbook with elegant traditional design",
      descriptionAr: "كتاب علمي مدرسي بتصميم تقليدي أنيق",
      category: "print"
    },
    {
      image: book3,
      title: "Life Skills Book",
      titleAr: "كتاب المهارات الحياتية",
      description: "Educational book with illustrated cultural scenes",
      descriptionAr: "كتاب تعليمي بمشاهد ثقافية مصورة",
      category: "print"
    },
    {
      image: businesscard1,
      title: "Educational Flyer Design",
      titleAr: "تصميم منشور تعليمي",
      description: "Engaging A5 flyer for school activities and events",
      descriptionAr: "منشور A5 جذاب للأنشطة والفعاليات المدرسية",
      category: "print"
    },
    {
      image: businesscard2,
      title: "Healthcare Flyer",
      titleAr: "منشور صحي",
      description: "Pink-themed educational healthcare information flyer",
      descriptionAr: "منشور معلومات صحية تعليمي بتصميم وردي",
      category: "print"
    },
    {
      image: businesscard3,
      title: "Social Media Business Card",
      titleAr: "بطاقة عمل وسائل التواصل",
      description: "Modern contact card with QR codes and social media",
      descriptionAr: "بطاقة تواصل عصرية مع رموز QR ووسائل التواصل",
      category: "print"
    },
    {
      image: flyer4,
      title: "Student Guidance Flyer",
      titleAr: "منشور إرشاد الطلاب",
      description: "Educational A5 flyer for student support and guidance",
      descriptionAr: "منشور A5 تعليمي لدعم وإرشاد الطلاب",
      category: "print"
    },
    {
      image: flyer5,
      title: "Health Awareness Flyer",
      titleAr: "منشور توعية صحية",
      description: "Pink healthcare educational information flyer",
      descriptionAr: "منشور معلومات صحية تعليمي بتصميم وردي",
      category: "print"
    },
    {
      image: flyer6,
      title: "Contact & QR Code Card",
      titleAr: "بطاقة التواصل ورموز QR",
      description: "Business contact card with social media QR codes",
      descriptionAr: "بطاقة تواصل تجارية مع رموز QR لوسائل التواصل",
      category: "print"
    },
    {
      image: social1,
      title: "AMINOLEAN Campaign",
      titleAr: "حملة أمينولين",
      description: "Social media design for sports drink",
      descriptionAr: "تصميم سوشيال ميديا لمشروب رياضي",
      category: "social"
    },
    {
      image: social2,
      title: "Maxtella Creative",
      titleAr: "إبداع ماكستيلا",
      description: "Product photography and design",
      descriptionAr: "تصوير وتصميم منتج",
      category: "social"
    },
    {
      image: social3,
      title: "Maggi Brand Content",
      titleAr: "محتوى علامة ماجي",
      description: "Premium food product campaign",
      descriptionAr: "حملة منتج غذائي فاخر",
      category: "social"
    },
    {
      image: social4,
      title: "Cofftea Brand",
      titleAr: "علامة كوفتي",
      description: "Tea product lifestyle design",
      descriptionAr: "تصميم نمط حياة لمنتج الشاي",
      category: "social"
    },
    {
      image: social5,
      title: "Monster Energy",
      titleAr: "مونستر إنرجي",
      description: "Bold energy drink campaign",
      descriptionAr: "حملة جريئة لمشروب الطاقة",
      category: "social"
    },
    {
      image: social6,
      title: "Maxtella Chocolate",
      titleAr: "شوكولاتة ماكستيلا",
      description: "Premium chocolate brand campaign",
      descriptionAr: "حملة علامة شوكولاتة فاخرة",
      category: "social"
    },
    {
      image: social7,
      title: "Food Campaign",
      titleAr: "حملة طعام",
      description: "Appetizing food photography and design",
      descriptionAr: "تصوير وتصميم طعام شهي",
      category: "social"
    },
    {
      image: social8,
      title: "Sports Energy",
      titleAr: "طاقة رياضية",
      description: "Dynamic sports drink campaign",
      descriptionAr: "حملة ديناميكية لمشروب رياضي",
      category: "social"
    },
    {
      image: social9,
      title: "Premium Product",
      titleAr: "منتج فاخر",
      description: "Luxury product presentation",
      descriptionAr: "عرض منتج فاخر",
      category: "social"
    },
    {
      image: social10,
      title: "Creative Campaign",
      titleAr: "حملة إبداعية",
      description: "Innovative social media design",
      descriptionAr: "تصميم سوشيال ميديا مبتكر",
      category: "social"
    },
    {
      image: social11,
      title: "Brand Story",
      titleAr: "قصة العلامة",
      description: "Engaging brand storytelling",
      descriptionAr: "سرد قصة العلامة بشكل جذاب",
      category: "social"
    },
    {
      image: social12,
      title: "Ford Ramadan Campaign",
      titleAr: "حملة فورد رمضان",
      description: "Ramadan special automotive campaign",
      descriptionAr: "حملة سيارات خاصة برمضان",
      category: "social"
    },
    {
      image: social13,
      title: "Real Estate Marketing",
      titleAr: "تسويق عقاري",
      description: "Construction project social media",
      descriptionAr: "سوشيال ميديا لمشروع إنشائي",
      category: "social"
    },
    {
      image: social14,
      title: "Sohar Banking App",
      titleAr: "تطبيق بنك صحار",
      description: "Financial app promotional design",
      descriptionAr: "تصميم ترويجي لتطبيق مالي",
      category: "social"
    },
    {
      image: social15,
      title: "Ooredoo Brand",
      titleAr: "علامة أوريدو",
      description: "Telecommunications campaign design",
      descriptionAr: "تصميم حملة اتصالات",
      category: "social"
    },
    {
      image: social16,
      title: "Delivery Service",
      titleAr: "خدمة توصيل",
      description: "E-commerce delivery promotion",
      descriptionAr: "ترويج خدمة التوصيل الإلكتروني",
      category: "social"
    },
    {
      image: social17,
      title: "Digital Life Campaign",
      titleAr: "حملة الحياة الرقمية",
      description: "Technology and digital services",
      descriptionAr: "التكنولوجيا والخدمات الرقمية",
      category: "social"
    },
    {
      image: social18,
      title: "Saudi Tourism Campaign",
      titleAr: "حملة السياحة السعودية",
      description: "Journey to the peaceful flight",
      descriptionAr: "جناح إلى السكينة - الطيران العماني",
      category: "social"
    },
    {
      image: social19,
      title: "Oman National Day",
      titleAr: "اليوم الوطني العماني",
      description: "National day celebration design",
      descriptionAr: "تصميم احتفال اليوم الوطني",
      category: "social"
    },
    {
      image: social20,
      title: "Grande Beauty Studio",
      titleAr: "استوديو غراندي للتجميل",
      description: "Beauty without filters campaign",
      descriptionAr: "حملة جمالك من غير فلاتر",
      category: "social"
    },
    {
      image: social21,
      title: "Dental Care Campaign",
      titleAr: "حملة العناية بالأسنان",
      description: "Say goodbye to selfie anxiety",
      descriptionAr: "ودعي قلقك من السيلفي",
      category: "social"
    },
    {
      image: social22,
      title: "Oman Football Team",
      titleAr: "منتخب عمان لكرة القدم",
      description: "Always together forever - National team support",
      descriptionAr: "كلنا معاك إلى الأبد",
      category: "social"
    },
    {
      image: social23,
      title: "Oman Vision Campaign",
      titleAr: "حملة رؤية عمان",
      description: "Soar to new heights - National pride campaign",
      descriptionAr: "ارتق إلى آفاق جديدة - حملة فخر وطني",
      category: "social"
    },
    {
      image: social24,
      title: "Oman Realty",
      titleAr: "عمان للعقارات",
      description: "Coming soon - New properties campaign",
      descriptionAr: "قريباً - حملة عقارات جديدة",
      category: "social"
    },
    {
      image: social25,
      title: "Omantel 1GB Promotion",
      titleAr: "عرض عمانتل 1 جيجا",
      description: "Social and data promotion campaign",
      descriptionAr: "حملة ترويجية لعرض البيانات",
      category: "social"
    },
    {
      image: social26,
      title: "Chips Oman",
      titleAr: "بطاطس عمان",
      description: "Spicy snack product campaign",
      descriptionAr: "حملة منتج وجبات خفيفة حارة",
      category: "social"
    },
    {
      image: social27,
      title: "Hawas Fragrance",
      titleAr: "عطر هواس",
      description: "Fire fragrance for him - Luxury perfume campaign",
      descriptionAr: "رشة تكفي والباقي موس - حملة عطر فاخر",
      category: "social"
    },
    {
      image: brand1,
      title: "Lamsa Brand Identity",
      titleAr: "هوية لمسة",
      description: "Complete brand identity with elegant gold aesthetic",
      descriptionAr: "هوية بصرية شاملة بتصميم ذهبي أنيق",
      category: "brand"
    },
    {
      image: brand2,
      title: "Al-Sabil Contracting",
      titleAr: "هوية السبيل للمقاولات",
      description: "Bold construction company branding with modern design",
      descriptionAr: "هوية شركة مقاولات جريئة بتصميم عصري",
      category: "brand"
    },
    {
      image: brand3,
      title: "Premium Jewelry Brand",
      titleAr: "هوية مجوهرات راقية",
      description: "Luxury jewelry brand identity with sophisticated styling",
      descriptionAr: "هوية علامة مجوهرات فاخرة بأسلوب راقي",
      category: "brand"
    }
  ];

  const categories = [
    { id: 'social', labelEn: 'Social Media', labelAr: 'سوشيال ميديا' },
    { id: 'print', labelEn: 'Print', labelAr: 'المطبوعات' },
    { id: 'brand', labelEn: 'Brand Identity', labelAr: 'الهوية البصرية' }
  ];

  const filteredProjects = projects.filter(p => p.category === selectedCategory);

  const services = [
    {
      icon: visualIdentityIcon,
      title: "Visual Identity & Logos",
      titleAr: "هوية بصرية وشعارات",
      description: "Building modern, clear identities that reflect your brand's values and present it professionally.",
      descriptionAr: "بناء هويات حديثة واضحة تعكس قيم علامتك وتُظهرها بمظهر احترافي."
    },
    {
      icon: Instagram,
      title: "Social Media Design",
      titleAr: "تصميم السوشيال ميديا",
      description: "Engaging posts and ads that convey your message instantly and boost your audience interaction.",
      descriptionAr: "بوستات وإعلانات جذابة تنقل رسالتك فورًا وتزيد تفاعل جمهورك."
    },
    {
      icon: booksPrintIcon,
      title: "Books & Print Design",
      titleAr: "تصميم الكتب والمطبوعات",
      description: "School books, children's books, covers, flyers, brochures, reports, booklets, and more.",
      descriptionAr: "كتب مدرسية، كتب أطفال، أغلفة، فلايرات، بروشورات، تقارير، مطويات وغيرها."
    },
    {
      icon: advertisingMarketingIcon,
      title: "Advertising & Marketing Design",
      titleAr: "تصميم الإعلانات والتسويق",
      description: "Posters, roll-ups, brochures, presentations—everything you need to showcase your project at its best.",
      descriptionAr: "ملصقات، رول أب، كتيبات تعريفية، عروض تقديمية—كل ما تحتاجه ليظهر مشروعك بأفضل صورة."
    },
    {
      icon: cardsSchoolIcon,
      title: "Cards & School Materials",
      titleAr: "تصميم البطاقات ومنشورات المدارس",
      description: "Educational publications, contact cards, guidance posters, health flyers.",
      descriptionAr: "منشورات تعليمية، بطاقات تواصل، ملصقات إرشادية، منشورات صحية."
    },
    {
      icon: packagingIcon,
      title: "Packaging Design",
      titleAr: "تصميم التغليف والعبوات",
      description: "Professional packaging that highlights your product and enhances its appeal on the shelf.",
      descriptionAr: "تغليف احترافي يُبرز منتجك ويرفع من جاذبيته على الرف."
    },
    {
      icon: photoEnhancementIcon,
      title: "Photo Enhancement & Product Display",
      titleAr: "تحسين الصور وعرض المنتجات",
      description: "Professional image processing and mockups to showcase your products with higher appeal.",
      descriptionAr: "معالجة صور احترافية وموك أب لعرض منتجاتك بجاذبية أعلى."
    },
    {
      icon: otherServicesIcon,
      title: "Other Graphic Services on Request",
      titleAr: "خدمات غرافيك أخرى عند الطلب",
      description: "Because the design field is vast, I offer flexible solutions based on your project's needs.",
      descriptionAr: "لأن مجال التصميم واسع، أقدم لك حلولًا مرنة حسب احتياج مشروعك."
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
                  ? "I'm Rani—an independent graphic designer specializing in innovative design solutions that meet the needs of Gulf projects across various fields."
                  : "أنا راني—مصمم غرافيك مستقل متخصص في ابتكار حلول تصميم تلبي احتياجات المشاريع الخليجية بمختلف مجالاتها."
                }
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                {language === 'en' 
                  ? "I don't offer ordinary design, but create professional visuals that carry a clear message and leave a strong impression on your audience."
                  : "لا أقدّم تصميماً عادياً، بل أبتكر مرئيات احترافية تحمل رسالة واضحة وتترك انطباعًا قويًا لدى جمهورك."
                }
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                {language === 'en' 
                  ? "I work with: Startups • Local Merchants • Educational Institutions • Service Providers • Personal & Community Projects"
                  : "أعمل مع: الشركات الناشئة • التجار المحليين • المؤسسات التعليمية • مقدمي الخدمات • المشاريع الشخصية والمجتمعية"
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
                  <h4 className="font-bold text-base text-primary">{language === 'en' ? 'Why Design for the Gulf Market?' : 'لماذا التصميم للسوق الخليجي؟'}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {language === 'en'
                      ? "Because success in design here depends on deep visual and cultural understanding. I know what suits the Gulf audience's taste, and how to make your message stand out with clarity and elegance."
                      : 'لأن نجاح التصميم هنا يعتمد على فهم بصري وثقافي عميق. أعرف ما يناسب ذوق الجمهور الخليجي، وكيف نجعل رسالتك تبرز بوضوح وأناقة.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Main Showcase */}
      <section id="portfolio" className="py-32 md:py-40 px-4 md:px-6 overflow-hidden bg-gradient-subtle relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20 animate-on-scroll space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full border border-primary/30 shadow-glow">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <p className="text-primary font-bold text-sm tracking-wide uppercase">{language === 'en' ? 'Featured Work' : 'الأعمال المميزة'}</p>
            </div>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              {language === 'en' ? (
                <>
                  <span className="block bg-gradient-hero bg-clip-text text-transparent mb-2">Creative Excellence</span>
                  <span className="block text-foreground">That Drives Results</span>
                </>
              ) : (
                <>
                  <span className="block text-foreground mb-2">الإبداع المتميز</span>
                  <span className="block bg-gradient-hero bg-clip-text text-transparent">الذي يحقق النتائج</span>
                </>
              )}
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              {language === 'en' 
                ? 'Discover authentic designs that resonate with Gulf audiences—where cultural heritage meets contemporary vision'
                : 'اكتشف تصاميم أصيلة تلامس قلوب الجمهور الخليجي—حيث يلتقي التراث الثقافي بالرؤية العصرية'
              }
            </p>

            {/* Enhanced Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="lg"
                  className={`px-8 py-6 rounded-2xl text-base font-bold transition-all duration-300 ${
                    selectedCategory === cat.id 
                      ? 'bg-gradient-primary shadow-glow-strong scale-110 text-white border-transparent' 
                      : 'bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-glow hover:scale-105 hover:bg-card'
                  }`}
                >
                  {language === 'en' ? cat.labelEn : cat.labelAr}
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => openModal(index)}
                className={`group relative overflow-hidden rounded-3xl shadow-large hover:shadow-glow-strong transition-all duration-700 bg-card animate-on-scroll border-2 border-border/50 hover:border-primary/50 cursor-pointer hover:scale-[1.02]`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square overflow-hidden relative bg-muted">
                  <img 
                    src={project.image} 
                    alt={language === 'en' ? project.title : project.titleAr}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Colored accent overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 transition-opacity duration-500 mix-blend-multiply" />
                </div>
                
                {/* Project info - appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500 backdrop-blur-xl bg-background/90">
                  <h4 className="text-base md:text-lg font-display font-bold text-foreground mb-1 truncate">
                    {language === 'en' ? project.title : project.titleAr}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium line-clamp-2">
                    {language === 'en' ? project.description : project.descriptionAr}
                  </p>
                </div>

                {/* Click indicator icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-glow">
                  <Sparkles className="w-5 h-5 text-primary" />
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
                    {typeof service.icon === 'string' ? (
                      <img src={service.icon} alt="" className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" style={{ filter: 'brightness(0) invert(1)' }} />
                    ) : (
                      <service.icon className="w-8 h-8 text-primary-foreground transition-transform duration-500 group-hover:scale-110" />
                    )}
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

      {/* Portfolio Modal */}
      <PortfolioModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentIndex={selectedProjectIndex}
        projects={filteredProjects}
        onNavigate={navigateModal}
        language={language}
      />
    </div>
  );
};

export default Index;
