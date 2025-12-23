import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import ServicesSection from "@/components/ServicesSection";
import MainServicesSection from "@/components/MainServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Import images
import heroTeam from "@/assets/hero-team.jpg";
import workAnalytics from "@/assets/work-analytics.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workMobile from "@/assets/work-mobile.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workMeeting from "@/assets/work-meeting.jpg";
import illustrationVideo from "@/assets/illustration-video.png";
import illustrationCrm from "@/assets/illustration-crm.png";
import illustrationWeb from "@/assets/illustration-web.png";
import illustrationWhyUs from "@/assets/illustration-why-us.png";
import illustrationSolutions from "@/assets/illustration-solutions.png";

const workImages = [
  workAnalytics,
  workDashboard,
  workMobile,
  workRestaurant,
  workMeeting,
  workAnalytics,
];

const mainServices = [
  {
    title: "Elevate Your Content with Professional",
    subtitle: "Video Editing",
    description:
      "In today's digital world, high-quality videos are essential for capturing attention and driving engagement. Our expert video editing services ensure that your content stands out with seamless transitions, dynamic effects, and polished storytelling. Whether you need YouTube videos, social media clips, corporate presentations, or cinematic edits, we tailor each project to meet your unique vision. Let us bring your ideas to life with professional editing that enhances clarity, creativity, and impact.",
    link: "Discover the future of content with our video editing solutions.",
    illustration: illustrationVideo,
    cardTitle: "Elevate Your Videos with Expert Editing.",
    cardDescription:
      "Enhance your brand with professional video editing that captivates and engages your audience.",
    cardButton: "Start Creating",
  },
  {
    title: "Streamline Your Business with Custom",
    subtitle: "CRM & ERP Solutions",
    description:
      "Empower your business with scalable, efficient, and fully customized CRM and ERP systems designed to match your exact needs. Whether you're managing operations, tracking sales, or optimizing workflows, our solutions are crafted to simplify complexity and drive growth. At Sammunat, we specialize in building tailored business systems — from customer relationship management platforms to comprehensive enterprise resource planning software. Our goal is to help you automate processes, enhance productivity, and make informed decisions with real-time data.",
    link: "Discover the competitive edge with technology that's built around you — reliable, flexible, and designed for success.",
    illustration: illustrationCrm,
    cardTitle: "Custom Systems for Growing Businesses",
    cardDescription:
      "From CRMs to full-scale ERPs, we build software that adapts to your business needs and scales as you grow.",
    cardButton: "Explore Solutions",
  },
  {
    title: "Build Powerful Digital Experiences with Expert",
    subtitle: "Web Development",
    description:
      "In the modern digital era, a high-performing website is the foundation of any successful business. Our expert web development services ensure that your website is not only visually stunning but also fast, secure, and user-friendly. From sleek business websites to complex web applications, we craft solutions tailored to your needs. Whether you need a responsive design, SEO-optimized pages, or an e-commerce store, we bring your vision to life with cutting-edge technologies.",
    link: "Experience the future of innovation with our cutting-edge web development solutions.",
    illustration: illustrationWeb,
    cardTitle: "Discover Our Web Solutions",
    cardDescription:
      "Elevate your brand with top-tier web design, innovative development, and strategic marketing.",
    cardButton: "Build with Us",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection heroImage={heroTeam} />
      <StatsSection />
      <PartnersSection />
      <RecentWorkSection workImages={workImages} />
      <ServicesSection />
      <MainServicesSection services={mainServices} />
      <WhyChooseUsSection illustration={illustrationWhyUs} />
      <SolutionsSection illustration={illustrationSolutions} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
