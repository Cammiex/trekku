import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/DetailVoucherPage/HeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import VoucherSection from '../../Layout/DetailVoucherPage/VoucherSection';
import Footer from '../../Fragments/Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const DetailVoucherPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/voucher/${id}`);
        setData(response.data);
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
        <div className="flex flex-col w-[973px] mt-10 sm:w-[320px]">
          <Link
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 w-fit h-[30px] select-none sm:hidden"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-neutral-80" />
            <h1 className="text-[20px] font-medium text-neutral-80">Kembali</h1>
          </Link>
          <VoucherSection
            name={data?.voucher_name}
            img={data?.url_img}
            code={data?.code}
            discount={data?.discount}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailVoucherPage;
