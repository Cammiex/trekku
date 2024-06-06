const HeroSection = () => {
  return (
    <div className="w-full h-[354px] relative flex items-center justify-center">
      <img
        src="/images/DetailOpenTripPage/open-trip-hero.jpg"
        alt=""
        className="absolute inset-0 object-cover object-center size-full z-[-1]"
      />
      <h1 className="text-[49px] font-extrabold">Syarat dan Ketentuan Promo</h1>
    </div>
  );
};

export default HeroSection;
