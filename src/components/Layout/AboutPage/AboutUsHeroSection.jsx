function AboutUsHeroSection() {
  const bgImage = 'images/AboutPage/aboutus-hero.jpg';

  return (
    <div
      className="w-full h-[660px] flex items-center justify-center relative bg-cover bg-center sm:h-[196px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="flex flex-col items-center">
        <h1 className="text-[40px] font-extrabold z-10 sm:text-[16px] text-center">
          Kami adalah Trekku: Teman Petualangan Terhebatmu
        </h1>
        <h1 className="text-[28px] font-semibold z-10 sm:text-[8px]">
          Petualangan Menarik dengan Trekku
        </h1>
      </div>
    </div>
  );
}

export default AboutUsHeroSection;
