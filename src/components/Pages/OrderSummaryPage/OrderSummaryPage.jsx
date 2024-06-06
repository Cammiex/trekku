import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/OrderPage/HeroSection';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import LeftFormSection from '../../Layout/OrderSummaryPage/LeftFormSection';
import FloatingCardSection from '../../Layout/OrderSummaryPage/FloatingCardSection';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../../../redux/slices/products/getProductsById';
import { useEffect } from 'react';

const OrderSummaryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const quantity = localStorage.getItem('ticket_quantity');

  const productData = useSelector((state) => state.oneProduct.data.payload);
  const isLoading = useSelector((state) => state.oneProduct.loading);
  const error = useSelector((state) => state.oneProduct.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
          <div className="flex gap-10">
            {' '}
            <LeftFormSection
              price={productData?.datas.price}
              quantity={quantity}
              location={productData?.datas.location}
              id={id}
              url_lokasi={productData?.datas.url_location}
            />
            <FloatingCardSection
              name={productData?.datas.name}
              date={productData?.datas.date}
              img={productData?.datas.product_imgs[0].url_img}
              quantity={quantity}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderSummaryPage;
