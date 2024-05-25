import PropTypes from 'prop-types';

const ReviewItem = ({ name, createdAt, img, comment }) => {
  return (
    <div
      id="review-item"
      className="flex gap-[46px] w-full justify-between items-center"
    >
      <div id="reviewer-information" className="flex items-center gap-5">
        <img
          className="size-[87px] rounded-full object-cover object-top"
          src={img}
          alt="Rounded avatar"
        />
        <div id="reviewer-name" className="flex flex-col">
          <h1 className="text-[24px] font-semibold text-neutral-80">{name}</h1>
          <h2 className="text-[20px] text-black/50">{createdAt}</h2>
        </div>
      </div>
      <div id="reviewer-comment" className="max-w-[883px] w-[883px]">
        <p>{comment}</p>
      </div>
    </div>
  );
};

ReviewItem.propTypes = {
  name: PropTypes.string,
  createdAt: PropTypes.string,
  img: PropTypes.string,
  comment: PropTypes.string,
};

const ReviewsSection = () => {
  return (
    <section
      id="review"
      className="flex flex-col items-center w-full gap-10 mt-10"
    >
      <div id="review-list" className="flex flex-col w-full gap-8">
        <ReviewItem
          name="Aditya Prasetyo"
          createdAt="1 hari yang lalu"
          img="/images/DetailOpenTripPage/reviewer-avatar1.jpg"
          comment="Saya sangat puas dengan open trip ke Labuan Bajo bersama penyedia ini.
          Semua fasilitas dan akomodasi disiapkan dengan baik. Panduan wisata
          juga ramah dan informatif. Pasti akan kembali untuk petualangan
          lainnya!"
        />
        <ReviewItem
          name="Putri Cahaya"
          createdAt="3 hari yang lalu"
          img="/images/DetailOpenTripPage/reviewer-avatar2.jpg"
          comment="Pengalaman mengagumkan! Open trip ke Labuan Bajo dengan penyedia ini
        sangatlah luar biasa. Tim mereka sangat profesional dan membantu
        kami menjelajahi destinasi wisata dengan lancar. Sangat
        direkomendasikan!"
        />
        <ReviewItem
          name="Siti Aisyah"
          createdAt="4 hari yang lalu"
          img="/images/DetailOpenTripPage/reviewer-avatar3.jpg"
          comment="Terima kasih kepada penyedia layanan open trip ini! Perjalanan ke
        Labuan Bajo menjadi salah satu pengalaman tak terlupakan dalam hidup
        saya. Semuanya berjalan lancar dan saya sangat terkesan dengan
        pelayanan mereka."
        />
        <ReviewItem
          name="Budi Santoso"
          createdAt="7 hari yang lalu"
          img="/images/DetailOpenTripPage/reviewer-avatar4.jpg"
          comment="Sangat menyenangkan! Open trip ke Labuan Bajo bersama penyedia ini
        adalah pilihan yang tepat. Tim mereka sangat ramah dan membantu,
        membuat setiap momen perjalanan menjadi menyenangkan. Terima kasih
        atas pengalaman yang luar biasa!"
        />
      </div>
      <button className="rounded-xl size-fit px-5 py-3 bg-primary-60 text-[20px] font-medium text-white hover:bg-primaryDark active:scale-[0.9] transition-all duration-200">
        Lihat ulasan lain
      </button>
    </section>
  );
};

export default ReviewsSection;
