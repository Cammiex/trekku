import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../../redux/slices/products/getProducts';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const OpenTripCard = ({
  img,
  name,
  organizer,
  location,
  duration,
  order,
  id,
  price,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/open-trip/${id}`)}
      id="open-trip-card"
      className="w-[400px] h-[481px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer active:scale-95 sm:w-[320px] sm:h-[385px] "
    >
      <img
        src={img}
        alt=""
        className="w-full max-h-[200px] object-cover sm:max-h-[160px]"
      />
      <div id="card-body" className="flex flex-col py-5 px-7">
        <h2 className="text-[14px] font-medium text-blackui sm:text-[12px]">
          {organizer}
        </h2>
        <h1 className="mb-4 text-[20px] sm:text-[16px] font-semibold text-secondary">
          {name}
        </h1>
        <div id="card-information" className="flex flex-col gap-3">
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/HomePage/OpenTripRecomendation/open-trip-icon1.png"
              alt=""
              className="size-6 sm:size-[14px]"
            />
            <h1 className="text-[14px] font-medium text-gray-500 sm:text-[11px]">
              {location}
            </h1>
          </div>
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/HomePage/OpenTripRecomendation/open-trip-icon2.png"
              alt=""
              className="size-6 sm:size-[14px]"
            />
            <h1 className="text-[14px] font-medium text-gray-500 sm:text-[11px]">
              {duration}
            </h1>
          </div>
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/HomePage/OpenTripRecomendation/open-trip-icon3.png"
              alt=""
              className="size-6 sm:size-[14px]"
            />
            <h1 className="text-[14px] font-medium text-gray-500 sm:text-[11px]">
              {order}x dipesan
            </h1>
          </div>
        </div>
        <div id="price" className="self-end">
          <h1 className="text-[24px] font-semibold underline text-primary-90 sm:text-[19px]">
            Rp{Number(price).toLocaleString('id-ID')}
          </h1>
          <h1 className="text-base italic font-semibold text-right text-gray-500 line-through text-[12px]">
            Rp{Number(price + 200000).toLocaleString('id-ID')}
          </h1>
        </div>
      </div>
    </div>
  );
};

OpenTripCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  organizer: PropTypes.string,
  location: PropTypes.string,
  duration: PropTypes.string,
  order: PropTypes.number,
  id: PropTypes.number,
  price: PropTypes.number,
};

function OpenTripRecomendSection() {
  const productData = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  // const productDataList = productData.produk;

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  if (isLoading) return <div>Loading...</div>;
  if (
    !productData ||
    !productData.produk ||
    !Array.isArray(productData.produk)
  ) {
    return <div>No products available</div>;
  }

  // Buat salinan array sebelum melakukan sort
  const productDataList = [...productData.produk];

  // Sortir data berdasarkan jumlah pesanan terbanyak dan ambil 3 teratas
  const topProducts = productDataList
    .sort((a, b) => b.many_ordered - a.many_ordered)
    .slice(0, 3);

  return (
    <section
      id="opentripRecomendation"
      className="flex flex-wrap w-full flex-col items-center mt-[190px] gap-10 sm:mt-[117px] sm:max-w-full overflow-hidden"
    >
      <h1 className="text-secondary text-[32px] font-bold sm:text-[16px]">
        Rekomendasi Open Trip
      </h1>
      <div
        id="open-trip-list"
        className="flex items-center gap-10 sm:flex-col sm:max-w-full sm:gap-3"
      >
        {topProducts.map((item) => (
          <OpenTripCard
            key={item.id}
            id={item.id}
            img={item.product_imgs[0].url_img}
            name={item.name}
            organizer={item.organizer}
            location={item.location}
            duration={item.duration}
            order={item.many_ordered}
            price={item.price}
          />
        ))}
      </div>
      <Link
        to="/open-trip"
        className="h-[54px] px-9 bg-primary-60 rounded-xl text-xl font-medium text-white flex items-center hover:bg-primaryDark active:bg-primaryDarker sm:h-[30px] sm:px-[11px] sm:rounded-[6px] sm:text-[11px]"
      >
        Cari petualangan berikutnya
      </Link>
    </section>
  );
}

export default OpenTripRecomendSection;
