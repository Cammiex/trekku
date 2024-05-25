import FloatButton from '../../Fragments/FloatButton/FloatButton';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import OpenTripHeroSection from '../../Layout/OpenTripPage/OpenTripHeroSection';
import OpenTripList from '../../Layout/OpenTripPage/OpenTripList';

function OpenTripPage() {
  return (
    <>
      <Navbar />
      <FloatButton />
      <OpenTripHeroSection />
      <div className="flex justify-center w-full mt-[170px]">
        <OpenTripList />
      </div>
      <Footer />
    </>
  );
}

export default OpenTripPage;
