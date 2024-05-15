import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  'images/HomePage/slide1.jpg',
  'images/HomePage/slide2.jpg',
  'images/HomePage/slide3.jpg',
  'images/HomePage/slide4.jpg',
  'images/HomePage/slide5.jpg',
];

function CarouselSection() {
  const [isOdd, setIsOdd] = useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsOdd((prevState) => !prevState);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <div className="relative w-full h-[660px] transition-all duration-1000 ease-linear">
      <div className="absolute inset-0 overflow-hidden transition-all duration-1000 ease-linear size-full">
        <motion.div
          style={{ backgroundImage: `url(${currentImage})` }}
          alt=""
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
            Exciting Adventures with Trekku
          </h2>
        </div>
      </div>
      <div
        id="search-form"
        className="z-10 absolute min-h-40 w-[942px] bg-white shadow-2xl rounded-2xl left-1/2 -translate-x-1/2 -bottom-[80px] py-10 px-20 flex justify-center text-black"
      >
        <form action="#" className="flex flex-wrap gap-6">
          <div id="search-item" className="flex flex-col">
            <div id="icon" className="flex items-center gap-2 mb-3">
              <img src="/images/HomePage/Loc.svg" alt="" />
              <label>Destination</label>
            </div>

            <select name="" id="" className="rounded-lg min-w-[214px]">
              <option value="" disabled selected hidden>
                Any Destination
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div id="search-item" className="flex flex-col">
            <div id="icon" className="flex items-center gap-2 mb-3">
              <img src="/images/HomePage/Date.svg" alt="" />
              <label>Month</label>
            </div>

            <select name="" id="" className="rounded-lg min-w-[165px]">
              <option value="" disabled selected hidden>
                Any Month
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div id="search-item" className="flex flex-col">
            <div id="icon" className="flex items-center gap-2 mb-3">
              <img src="/images/HomePage/Clock.svg" alt="" />
              <label>Duration</label>
            </div>

            <select name="" id="" className="rounded-lg min-w-[154px]">
              <option value="" disabled selected hidden>
                Any Day
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <button className="flex h-[54px] justify-center items-center bg-primary rounded-xl gap-[10px] px-5 self-end">
            <img src="/images/HomePage/search.png" alt="" />
            <h1 className="text-white">Search</h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CarouselSection;
