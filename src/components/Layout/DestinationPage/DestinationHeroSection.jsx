function DestinationHeroSection() {
  const bgImage = 'images/DestinationPage/destination-hero.jpg';

  return (
    <div
      className="w-full h-[660px] flex items-center justify-center relative bg-cover bg-top"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <h1 className="text-[80px] font-extrabold z-10">Destinations</h1>
    </div>
  );
}

export default DestinationHeroSection;
