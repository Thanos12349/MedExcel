
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeroBanner from "../Components/HeroBanner";
import FooterCTA from "../Components/FooterCTA";
import QuickHighlights from "../Components/QuickHighlights";
import ProgramsSnapshot from "../Components/ProgramsSnapshot";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";
import Partners from "../Components/Partners";
import CoursesSection from "../Components/CoursesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CoursesSection />
      <QuickHighlights />
      <ProgramsSnapshot />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
