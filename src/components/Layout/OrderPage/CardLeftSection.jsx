import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardLeftSection = ({ name, img, id }) => {
  return (
    <div className="w-[300px] h-[421px] rounded-2xl bg-white shadow-cardShadow flex flex-col overflow-hidden items-center text-black">
      <div className="w-full h-[186px] bg-red-500">
        <img
          src={img}
          alt=""
          className="object-cover object-center size-full"
        />
      </div>
      <div className="w-[268px] h-[203px] flex flex-col mt-3">
        <h1 className="mb-6 font-semibold">{name}</h1>
        <div className="flex flex-col gap-2 pb-5 border-b-2 border-dashed border-neutral-20">
          <div className="w-full h-fit rounded-lg py-2 px-4 text-primary-100 text-[14px] font-medium bg-neutral-10">
            Tidak Bisa Reschedule
          </div>
          <div className="w-full h-fit rounded-lg py-2 px-4 text-primary-100 text-[14px] font-medium bg-neutral-10">
            Tidak Bisa Refund
          </div>
        </div>
        <Link
          to={`/open-trip/${id}`}
          className="flex items-center justify-center w-full py-2 mt-4 rounded-lg h-fit bg-primary-60 text-white text-[14px] font-medium"
        >
          Lihat Detail Open Trip
        </Link>
      </div>
    </div>
  );
};

CardLeftSection.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
};

export default CardLeftSection;
