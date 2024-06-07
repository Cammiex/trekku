import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropType from 'prop-types';

const imageSources = [
  'images/HomePage/slide1.jpg',
  'images/HomePage/slide2.jpg',
  'images/HomePage/slide3.jpg',
  'images/HomePage/slide4.jpg',
  'images/HomePage/slide5.jpg',
];

function CarouselSection({ setSearchValue, searchValue, handleSearch }) {
  const [isOdd, setIsOdd] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const preloadImages = imageSources.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    setImages(preloadImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsOdd((prevState) => !prevState);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images[currentImageIndex]?.src || '';

  return (
    <div className="relative w-full h-[660px] transition-all duration-1000 ease-linear">
      <div className="absolute inset-0 overflow-hidden transition-all duration-1000 ease-linear size-full">
        <motion.div
          style={{ backgroundImage: `url(${currentImage})` }}
          initial={
            isOdd ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1.5 }
          }
          animate={
            isOdd ? { opacity: 1, scale: 1.5 } : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 7, ease: 'linear' }}
          className="w-full h-full transition-all duration-1000 ease-linear bg-top bg-no-repeat bg-cover "
        />
      </div>
      <div className="z-[5] absolute left-1/2 -translate-x-1/2 top-[40%] flex justify-center items-center select-none">
        <span className="text-[240px] text-white/[0.24] font-extrabold absolute">
          TREKKU
        </span>
        <div
          id="jumbotron-text"
          className="z-10 flex flex-col items-center justify-center text-white"
        >
          <h1 className="text-[80px] font-extrabold leading-none">Trekku</h1>
          <h2 className="text-[28px] font-semibold leading-none">
            Petualangan menarik dengan Trekku
          </h2>
        </div>
      </div>
      <div
        id="search-form"
        className="z-10 absolute min-h-[206px] w-[815px] bg-white shadow-2xl rounded-2xl left-1/2 -translate-x-1/2 -bottom-[103px] py-10 px-20 flex flex-col gap-6 items-center text-black"
      >
        <h1 className="text-[32px] font-semibold">
          Cari Petualanganmu Disini!
        </h1>
        <div className="flex items-center gap-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Labuan Bajo"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="py-3 rounded-md h-[48px] w-[427px] shadow-inputShadow border-none"
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-center w-[204px] h-fit bg-primary-60 text-white gap-[10px] py-3 rounded-xl"
          >
            <FontAwesomeIcon icon={faSearch} className="size-5" />
            <h1 className="font-medium text-[20px]">Cari</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

CarouselSection.propTypes = {
  setSearchValue: PropType.func,
  searchValue: PropType.string,
  handleSearch: PropType.func,
};

export default CarouselSection;
