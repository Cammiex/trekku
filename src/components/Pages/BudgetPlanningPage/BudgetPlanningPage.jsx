import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/BudgetPlanningPage/HeroSection';
import ProductHeaderSection from '../../Layout/BudgetPlanningPage/ProductHeaderSection';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import BudgetFormSection from '../../Layout/BudgetPlanningPage/BudgetFormSection';
import FloatButton from '../../Fragments/FloatButton/FloatButton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../../../redux/slices/products/getProductsById';

const BudgetPlanningPage = () => {
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
      <main className="flex flex-col items-center">
        <HeroSection />
        <ProductHeaderSection
          name={productData?.datas.itemName}
          location={productData?.datas.location}
          image1={productData?.datas.product_imgs[0].url_img}
          image2={productData?.datas.product_imgs[1].url_img}
          image3={productData?.datas.product_imgs[2].url_img}
          image4={productData?.datas.product_imgs[3].url_img}
          image5={productData?.datas.product_imgs[4].url_img}
        />
        <BudgetFormSection
          price={productData?.datas.price}
          date={productData?.datas.date}
        />
      </main>
      <Footer />
    </>
  );
};

export default BudgetPlanningPage;
