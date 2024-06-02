import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../../../redux/slices/products/getProductsById';

import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeaderContentSection from '../../Layout/DetailOpenTripPage/HeaderContentSection';
import HeroSection from '../../Layout/DetailOpenTripPage/HeroSection';
import InformationSection from '../../Layout/DetailOpenTripPage/InformationSection';
import RatingHeaderSection from '../../Layout/DetailOpenTripPage/RatingHeaderSection';
import BookDetailSection from '../../Layout/DetailOpenTripPage/BookDetailSection';
import ReviewsSection from '../../Layout/DetailOpenTripPage/ReviewsSection';
import BudgetPlanningSection from '../../Layout/DetailOpenTripPage/BudgetPlanningSection';
import FloatButton from '../../Fragments/FloatButton/FloatButton';

const OpenTripDetail = () => {
  const { id } = useParams();

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
      <FloatButton />
      <main
        onClick={() => console.log(productData)}
        className="flex flex-wrap justify-center"
      >
        <HeroSection />
        <div
          id="content"
          className="w-full mt-[71px] flex flex-col items-center max-w-[1240px] text-black"
        >
          {' '}
          <HeaderContentSection
            name={productData?.datas.name}
            location={productData?.datas.location}
            image1={productData?.datas.product_imgs[0].url_img}
            image2={productData?.datas.product_imgs[1].url_img}
            image3={productData?.datas.product_imgs[2].url_img}
            image4={productData?.datas.product_imgs[3].url_img}
            image5={productData?.datas.product_imgs[4].url_img}
          />
          <InformationSection
            information={productData?.datas.desc_information}
            destination={productData?.datas.desc_destination}
            facility={productData?.datas.desc_facility}
            accommodation={productData?.datas.desc_accommodation}
            preparation={productData?.datas.desc_preparation}
          />
          <div className="flex gap-4 mt-6">
            <RatingHeaderSection />
            <BookDetailSection
              location={productData?.datas.location}
              duration={productData?.datas.duration}
              price={productData?.datas.price}
              date={productData?.datas.date}
              quota={productData?.datas.quota}
            />
          </div>
          <BudgetPlanningSection id={productData?.datas.id} />
          <ReviewsSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OpenTripDetail;
