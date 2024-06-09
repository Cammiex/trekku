const HeroSection = () => {
  const bgImage = '/images/DetailOpenTripPage/open-trip-hero.jpg';

  return (
    <div
      className="w-full h-[354px] flex items-center justify-center relative bg-cover bg-center sm:h-[196px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <h1 className="text-[80px] font-extrabold z-10 sm:text-[24px]">Blog</h1>
    </div>
  );
};

export default HeroSection;
