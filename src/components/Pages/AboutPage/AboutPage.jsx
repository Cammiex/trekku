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
        className="flex flex-col justify-center w-full mt-20 sm:mt-[29px] text-black sm:px-6"
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
