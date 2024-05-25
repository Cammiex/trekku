const HeroSection = () => {
  const bgImage = '/images/OpenTripPage/opentrip-hero.jpg';

  return (
    <div
      className="w-full h-[660px] flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <h1 className="text-[80px] font-extrabold z-10">Perencanaan Anggaran</h1>
    </div>
  );
};

export default HeroSection;
