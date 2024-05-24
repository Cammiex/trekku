import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import AccordionSection from '../../Layout/HelpPage/AccordionSection';
import HelpHeroSection from '../../Layout/HelpPage/HelpHeroSection';

const HelpPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HelpHeroSection />
        <AccordionSection />
      </main>
      <Footer />
    </>
  );
};

export default HelpPage;
