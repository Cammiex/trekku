import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BookDetailSection = ({ location, duration, date, price }) => {
  const discountedPrice = Math.round(price - price * 0.16);
  const formattedPrice = discountedPrice.toLocaleString('id-ID');

  return (
    <div
      id="book-detail"
      className="w-[612px] h-[346px] rounded-2xl shadow-cardShadow p-8 flex flex-col gap-[21px]"
    >
      <div id="book-price" className="flex items-center gap-7">
        <h1 className="text-[40px] font-extrabold text-primary-60">
          Rp{formattedPrice}
        </h1>
        <div id="original-price" className="flex gap-[13px] items-center">
          <h1 className="italic font-bold text-[32px] line-through text-neutral-40">
            Rp{price.toLocaleString('id-ID')}
          </h1>
          <h1 className="text-base font-medium text-red-600">(-16.67%)</h1>
        </div>
      </div>
      <div id="book-information" className="grid grid-cols-2 gap-5">
        <div id="information-item" className="flex gap-[13px] items-center">
          <img
            src="/images/DetailOpenTripPage/Loc.svg"
            alt=""
            className="w-8 h-8"
          />
          <h1 className="text-[20px] text-neutral-40">{location}</h1>
        </div>
        <div id="information-item" className="flex gap-[13px] items-center">
          <img
            src="/images/DetailOpenTripPage/Date.svg"
            alt=""
            className="w-8 h-8"
          />
          <h1 className="text-[20px] text-neutral-40">{date}</h1>
        </div>{' '}
        <div id="information-item" className="flex gap-[13px] items-center">
          <img
            src="/images/DetailOpenTripPage/Clock.svg"
            alt=""
            className="w-8 h-8"
          />
          <h1 className="text-[20px] text-neutral-40">{duration}</h1>
        </div>
        <div id="information-item" className="flex gap-[13px] items-center">
          <FontAwesomeIcon icon={faUsers} className="size-8 text-neutral-40" />
          <h1 className="text-[20px] text-neutral-40">
            Sisa Kuota:{' '}
            <span className="font-bold text-[#2BC128]">6 Orang</span>
          </h1>
        </div>
      </div>
      <Link className="px-[40px] py-[15px] bg-primary-60 w-fit rounded-xl text-white text-xl font-medium self-center hover:bg-primaryDark active:bg-primaryDarker mt-[36px]">
        Pesan Sekarang
      </Link>
    </div>
  );
};

BookDetailSection.propTypes = {
  location: PropTypes.string,
  duration: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
};

export default BookDetailSection;
