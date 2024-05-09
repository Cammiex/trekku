import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import DestinationHeroSection from '../../Layout/DestinationPage/DestinationHeroSection';
import DestinationListSection from '../../Layout/DestinationPage/DestinationListSection';

function DestinationPage() {
  return (
    <>
      <Navbar />
      <DestinationHeroSection />
      <DestinationListSection />
      <Footer />
    </>
  );
}

export default DestinationPage;
