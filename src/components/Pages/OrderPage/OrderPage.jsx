import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../Fragments/Navbar/Navbar';
import CardLeftSection from '../../Layout/OrderPage/CardLeftSection';
import HeroSection from '../../Layout/OrderPage/HeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Fragments/Footer/Footer';
import CardRightSection from '../../Layout/OrderPage/CardRightSection';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../../../redux/slices/products/getProductsById';
import { useEffect } from 'react';

const OrderPage = () => {
  const { id } = useParams();

  const productData = useSelector((state) => state.oneProduct.data.payload);
  const isLoading = useSelector((state) => state.oneProduct.loading);
  const error = useSelector((state) => state.oneProduct.error);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <div className="w-[1200px] flex flex-col mt-10 gap-10">
          <Link
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 w-fit h-[30px] select-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-neutral-80" />
            <h1 className="text-[20px] font-medium text-neutral-80">Kembali</h1>
          </Link>
          <div className="flex w-full gap-8">
            {' '}
            <CardLeftSection
              img={productData?.datas.product_imgs[0].url_img}
              name={productData?.datas.name}
              id={id}
            />
            <CardRightSection
              date={productData?.datas.date}
              price={productData?.datas.price}
              quota={productData?.datas.quota}
              id={id}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderPage;
