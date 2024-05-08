import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CarouselSection() {
  const images = [
    'images/HomePage/slide1.jpg',
    'images/HomePage/slide2.jpg',
    'images/HomePage/slide3.jpg',
    'images/HomePage/slide4.jpg',
    'images/HomePage/slide5.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <div className="relative w-full h-[660px] transition duration-300">
      <div className="absolute inset-0 overflow-hidden transition duration-300 size-full">
        <motion.img
          key={currentImageIndex}
          src={currentImage}
          alt={`Slide ${currentImageIndex + 1}`}
          initial={{ opacity: 0.9, x: 0, y: 0, scale: 1 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1.5 }}
          transition={{ ease: 'linear', duration: 5 }}
          className="object-cover transition duration-300 size-full"
        />
      </div>
      <div className="z-[5] absolute left-1/2 -translate-x-1/2 top-[40%] flex justify-center items-center">
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
        className="z-10 absolute min-h-40 w-[942px] bg-white shadow-2xl rounded-2xl left-1/2 -translate-x-1/2 -bottom-[80px] py-10 px-20 flex justify-center"
      ></div>
    </div>
  );
}

export default CarouselSection;
