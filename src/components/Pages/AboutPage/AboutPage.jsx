import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import AboutUsHeroSection from '../../Layout/AboutPage/AboutUsHeroSection';
import OurVisionSection from '../../Layout/AboutPage/OurVisionSection';
import WhyUsSection from '../../Layout/AboutPage/WhyUsSection';
import OurTeamSection from '../../Layout/AboutPage/OurTeamSection';
import ContactSection from '../../Layout/AboutPage/ContactSection';
import FloatButton from '../../Fragments/FloatButton/FloatButton';

function AboutPage() {
  return (
    <>
      <Navbar />
      <FloatButton />
      <AboutUsHeroSection />
      <div
        id="main-content"
        className="w-full mt-20 px-[120px] flex flex-col justify-center text-black"
      >
        <OurVisionSection />
        <WhyUsSection />
        <OurTeamSection />
        <ContactSection />
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;
