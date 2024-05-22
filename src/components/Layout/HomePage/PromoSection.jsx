const PromoSection = () => {
  return (
    <section className="mt-[100px] flex flex-col gap-8 items-center">
      <h1 className="text-[32px] font-bold text-[#152B5A]">Promo Terbaru</h1>
      <div className="max-w-full p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
        <div className="carousel-item w-[523px] h-[225px] shadow-cardShadow2 overflow-hidden rounded-2xl cursor-pointer active:scale-90 transition duration-300">
          <img
            src="/images/HomePage/PromoSection/promo-1.png"
            className="object-cover rounded-box size-full"
          />
        </div>
        <div className="carousel-item w-[523px] h-[225px] shadow-cardShadow2 overflow-hidden rounded-2xl cursor-pointer active:scale-90 transition duration-300">
          <img
            src="/images/HomePage/PromoSection/promo-2.png"
            className="object-cover rounded-box size-full"
          />
        </div>
        <div className="carousel-item w-[523px] h-[225px] shadow-cardShadow2 overflow-hidden rounded-2xl cursor-pointer active:scale-90 transition duration-300">
          <img
            src="/images/HomePage/PromoSection/promo-3.png"
            className="object-cover rounded-box size-full"
          />
        </div>
        <div className="carousel-item w-[523px] h-[225px] shadow-cardShadow2 overflow-hidden rounded-2xl cursor-pointer active:scale-90 transition duration-300">
          <img
            src="/images/HomePage/PromoSection/promo-4.png"
            className="object-cover rounded-box size-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
