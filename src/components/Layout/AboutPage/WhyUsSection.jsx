function WhyUsSection() {
  return (
    <>
      <section id="why-us" className="flex flex-col items-center mt-[100px]">
        <h1 className="text-[32px] font-bold sm:text-[16px]">
          Mengapa Memilih Trekku?
        </h1>
        <p className="text-base font-medium w-[800px] text-center sm:text-[12px] sm:w-[312px] text-pretty">
          Dengan komunitas yang solid, pengalaman yang dikelola dengan
          profesional, dan akses ke destinasi tersembunyi, Trekku adalah pilihan
          terbaik untuk menjelajahi dunia dan menciptakan pengalaman petualangan
          yang tak terlupakan.
        </p>
      </section>

      <section
        id="why-us2"
        className="flex gap-[60px] justify-center mt-10 sm:flex-col sm:gap-6"
      >
        <div id="reason-item" className="flex flex-col items-center gap-5">
          <img
            src="images/AboutPage/maps.png"
            alt=""
            className="w-[200px] h-[200px] sm:size-[100px]"
          />
          <div id="reason-body" className="flex flex-col items-center">
            <h1 className="text-2xl font-bold sm:text-[16px]">Komunitas</h1>
            <p className="text-base font-medium text-center w-[372px] sm:text-[12px]">
              Koneksi dengan sesama petualang, berbagi pengalaman, dan
              merencanakan petualangan bersama.
            </p>
          </div>
        </div>
        <div id="reason-item" className="flex flex-col items-center gap-5">
          <img
            src="images/AboutPage/car.png"
            alt=""
            className="w-[200px] h-[200px] sm:size-[100px]"
          />
          <div id="reason-body" className="flex flex-col items-center">
            <h1 className="text-2xl font-bold sm:text-[16px]">Profesional</h1>
            <p className="text-base font-medium text-center w-[372px] sm:text-[12px]">
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
            className="w-[200px] h-[200px] sm:size-[100px]"
          />
          <div id="reason-body" className="flex flex-col items-center">
            <h1 className="text-2xl font-bold sm:text-[16px]">Aksesibilitas</h1>
            <p className="text-base font-medium text-center w-[372px] sm:text-[12px]">
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
