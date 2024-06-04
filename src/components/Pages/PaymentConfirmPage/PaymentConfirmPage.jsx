import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/PaymentConfirmPage/HeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import LeftPaymentConfirmSection from '../../Layout/PaymentConfirmPage/LeftPaymentConfirmSection';
import FloatingCardSection from '../../Layout/PaymentConfirmPage/FloatingCardSection';
import { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const PaymentConfirmPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [orderData, setOrderData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/order/${id}`);
        setOrderData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <HeroSection />
        <div className="w-[1200px] flex flex-col mt-10">
          <Link
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 w-fit h-[30px] select-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-neutral-80" />
            <h1 className="text-[20px] font-medium text-neutral-80">Kembali</h1>
          </Link>
          <div className="flex gap-10 mt-8">
            <LeftPaymentConfirmSection
              bank_name={orderData?.payment_method.payment_name}
              bank_number={orderData?.payment_method.account_number}
              price={orderData?.total_price}
              idOrder={id}
            />
            <FloatingCardSection
              name={orderData?.product.name}
              date={orderData?.product.date}
              img={orderData?.product.product_imgs[0].url_img}
              quantity={orderData?.quantity}
              id={orderData?.product.id}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentConfirmPage;
