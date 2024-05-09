function WhyUsSection() {
  return (
    <>
      <section id="why-us" className="flex flex-col items-center mt-[100px]">
        <h1 className="text-[32px] font-bold">Why Choose Us?</h1>
        <p className="text-base font-medium w-[800px] text-center">
          Dengan komunitas yang solid, pengalaman yang dikelola dengan
          profesional, dan akses ke destinasi tersembunyi, Trekku adalah pilihan
          terbaik untuk menjelajahi dunia dan menciptakan pengalaman petualangan
          yang tak terlupakan.
        </p>
      </section>

      <section id="why-us2" className="flex gap-[60px] justify-center mt-10">
        <div id="reason-item" className="flex flex-col items-center gap-5">
          <img
            src="images/AboutPage/maps.png"
            alt=""
            className="w-[200px] h-[200px]"
          />
          <div id="reason-body" className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="text-base font-medium text-center w-[372px]">
              Koneksi dengan sesama petualang, berbagi pengalaman, dan
              merencanakan petualangan bersama.
            </p>
          </div>
        </div>
        <div id="reason-item" className="flex flex-col items-center gap-5">
          <img
            src="images/AboutPage/car.png"
            alt=""
            className="w-[200px] h-[200px]"
          />
          <div id="reason-body" className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Professional</h1>
            <p className="text-base font-medium text-center w-[372px]">
              Manajemen yang cermat dari penyusunan rute hingga penginapan dan
              transportasi, memberikan ketenangan untuk sepenuhnya menikmati
              petualangan.
            </p>
          </div>
        </div>
        <div id="reason-item" className="flex flex-col items-center gap-5">
          <img
            src="images/AboutPage/money.png"
            alt=""
            className="w-[200px] h-[200px]"
          />
          <div id="reason-body" className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Accessibility</h1>
            <p className="text-base font-medium text-center w-[372px]">
              Akses ke tempat-tempat unik dan belum terjamah, menyediakan
              pengalaman autentik yang jauh dari keramaian wisata massal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUsSection;
