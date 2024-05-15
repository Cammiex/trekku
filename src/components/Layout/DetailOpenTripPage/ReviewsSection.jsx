const ReviewsSection = () => {
  return (
    <section id="review" className="w-full mt-[46px]">
      <div id="review-item" className="flex gap-[82px] w-full my-6">
        <div id="reviewer-information" className="flex items-center gap-5">
          <img
            className="w-[64px] h-[64px] rounded-full object-cover object-top"
            src="/images/DetailOpenTripPage/reviewer-avatar1.jpg"
            alt="Rounded avatar"
          />
          <div id="reviewer-name" className="flex flex-col">
            <h1 className="text-xl font-semibold">Aditya Prasetyo</h1>
            <h2 className="text-xl font-normal text-black/50">
              1 hari yang lalu
            </h2>
          </div>
        </div>
        <div id="reviewer-comment" className="max-w-[820px]">
          <p>
            Saya sangat puas dengan open trip ke Labuan Bajo bersama penyedia
            ini. Semua fasilitas dan akomodasi disiapkan dengan baik. Panduan
            wisata juga ramah dan informatif. Pasti akan kembali untuk
            petualangan lainnya!
          </p>
        </div>
      </div>
      <hr className="w-full my-4 border-gray-300" />
      <div id="review-item" className="flex gap-[82px] w-full my-6">
        <div id="reviewer-information" className="flex items-center gap-5">
          <img
            className="w-[64px] h-[64px] rounded-full object-cover"
            src="/images/DetailOpenTripPage/reviewer-avatar2.jpg"
            alt="Rounded avatar"
          />
          <div id="reviewer-name" className="flex flex-col">
            <h1 className="text-xl font-semibold">Putri Cahaya</h1>
            <h2 className="text-xl font-normal text-black/50">
              3 hari yang lalu
            </h2>
          </div>
        </div>
        <div id="reviewer-comment" className="max-w-[820px]">
          <p>
            Pengalaman mengagumkan! Open trip ke Labuan Bajo dengan penyedia ini
            sangatlah luar biasa. Tim mereka sangat profesional dan membantu
            kami menjelajahi destinasi wisata dengan lancar. Sangat
            direkomendasikan!
          </p>
        </div>
      </div>
      <hr className="w-full my-4 border-gray-300" />
      <div id="review-item" className="flex gap-[82px] w-full my-6">
        <div id="reviewer-information" className="flex items-center gap-5">
          <img
            className="w-[64px] h-[64px] rounded-full object-cover"
            src="/images/DetailOpenTripPage/reviewer-avatar3.jpg"
            alt="Rounded avatar"
          />
          <div id="reviewer-name" className="flex flex-col">
            <h1 className="text-xl font-semibold">Siti Aisyah</h1>
            <h2 className="text-xl font-normal text-black/50">
              4 hari yang lalu
            </h2>
          </div>
        </div>
        <div id="reviewer-comment" className="max-w-[820px]">
          <p>
            Terima kasih kepada penyedia layanan open trip ini! Perjalanan ke
            Labuan Bajo menjadi salah satu pengalaman tak terlupakan dalam hidup
            saya. Semuanya berjalan lancar dan saya sangat terkesan dengan
            pelayanan mereka.
          </p>
        </div>
      </div>
      <hr className="w-full my-4 border-gray-300" />
      <div id="review-item" className="flex gap-[82px] w-full my-6">
        <div id="reviewer-information" className="flex items-center gap-5">
          <img
            className="w-[64px] h-[64px] rounded-full object-cover"
            src="/images/DetailOpenTripPage/reviewer-avatar4.jpg"
            alt="Rounded avatar"
          />
          <div id="reviewer-name" className="flex flex-col">
            <h1 className="text-xl font-semibold">Budi Santoso</h1>
            <h2 className="text-xl font-normal text-black/50">
              7 hari yang lalu
            </h2>
          </div>
        </div>
        <div id="reviewer-comment" className="max-w-[820px]">
          <p>
            Sangat menyenangkan! Open trip ke Labuan Bajo bersama penyedia ini
            adalah pilihan yang tepat. Tim mereka sangat ramah dan membantu,
            membuat setiap momen perjalanan menjadi menyenangkan. Terima kasih
            atas pengalaman yang luar biasa!
          </p>
        </div>
      </div>
      <hr className="w-full my-4 border-gray-300" />
    </section>
  );
};

export default ReviewsSection;
