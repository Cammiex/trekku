import { Link } from 'react-router-dom';
import Navbar from '../../Fragments/Navbar/Navbar';
import CardLeftSection from '../../Layout/OrderPage/CardLeftSection';
import HeroSection from './HeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Fragments/Footer/Footer';
import CardRightSection from '../../Layout/OrderPage/CardRightSection';

const OrderPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <div className="w-[1200px] flex flex-col mt-10 gap-10">
          <Link
            to="/open-trip"
            className="flex items-center gap-5 w-fit h-[30px] select-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-neutral-80" />
            <h1 className="text-[20px] font-medium text-neutral-80">Kembali</h1>
          </Link>
          <div className="flex w-full gap-8">
            {' '}
            <CardLeftSection />
            <CardRightSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderPage;
