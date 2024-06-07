import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import CarouselSection from '../../Layout/HomePage/CarouselSection';
// import PopularDestinationSection from '../../Layout/HomePage/PopularDestinationSection';
import OpenTripRecomendSection from '../../Layout/HomePage/OpenTripRecomendSection';
import TouristFeedbackSection from '../../Layout/HomePage/TouristFeedbackSection';
import ArticleTipsSection from '../../Layout/HomePage/ArticleTipsSection';
import FloatButton from '../../Fragments/FloatButton/FloatButton';
import PromoSection from '../../Layout/HomePage/PromoSection';
import { useState } from 'react';
import { OpenTripCard } from '../../Layout/HomePage/OpenTripRecomendSection';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const apiUrl = import.meta.env.VITE_API_URL;

const SearchResult = ({ filteredData }) => {
  return (
    <section
      id="opentripRecomendation"
      className="flex flex-wrap flex-col items-center mt-[190px] gap-10 -mb-[80px]"
    >
      <h1 className="text-secondary text-[32px] font-bold">
        Hasil Pencarian Open Trip
      </h1>
      <div id="open-trip-list" className="flex gap-10">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item) => (
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
          ))
        ) : (
          <p className="text-neutral-500">Hasil pencarian tidak ditemukan.</p>
        )}
      </div>
      <Link
        to="/open-trip"
        className="h-[54px] px-9 bg-primary-60 rounded-xl text-xl font-medium text-white flex items-center hover:bg-primaryDark active:bg-primaryDarker"
      >
        Cari petualangan yang lain
      </Link>
    </section>
  );
};

SearchResult.propTypes = {
  filteredData: PropTypes.array,
};

function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(false);

  const handleSearch = async () => {
    try {
      if (!searchValue) return;
      const response = await axios.get(`${apiUrl}/products`);
      const filtered = response.data.produk.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {' '}
      <Navbar />
      <div className="flex flex-col mx-auto">
        <FloatButton />
        <CarouselSection
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
        />
        {filteredData ? <SearchResult filteredData={filteredData} /> : ''}
        {/* <PopularDestinationSection /> */}
        <OpenTripRecomendSection />
        <PromoSection />
        <TouristFeedbackSection />
        <ArticleTipsSection />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
