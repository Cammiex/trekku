function OurVisionSection() {
  return (
    <section
      id="trekku-vision"
      className="flex justify-center gap-10 sm:flex-col"
    >
      <div id="about-us" className="max-w-[580px] flex flex-col gap-2">
        <h1 className="text-[32px] font-bold sm:text-[16px]">Tentang Kami</h1>
        <p className="text-base font-medium text-justify sm:text-[12px]">
          Trekku adalah sahabat setia dalam menjelajahi petualangan dan menggali
          pengalaman baru di berbagai destinasi. Kami percaya bahwa petualangan
          adalah kunci untuk mengungkap keindahan dunia, dan kami hadir untuk
          mendukung setiap langkah perjalanan Anda.
        </p>
      </div>
      <div id="our-mission" className="max-w-[580px] flex flex-col">
        <h1 className="text-[32px] font-bold sm:text-[16px]">Misi Kami</h1>
        <p className="text-base font-medium text-justify sm:text-[12px]">
          Menghubungkan orang-orang dengan minat serupa dalam menjelajahi dunia.
          Kami menciptakan platform ini sebagai wadah untuk pertemuan antara
          petualang dari berbagai latar belakang, dengan harapan menciptakan
          pengalaman yang berharga dan tak terlupakan.
        </p>
      </div>
    </section>
  );
}

export default OurVisionSection;
