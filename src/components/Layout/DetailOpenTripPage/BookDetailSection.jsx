import PropTypes from 'prop-types';

const BookDetailSection = ({ location, duration, date, price }) => {
  const discountedPrice = Math.round(price - price * 0.16);
  const formattedPrice = discountedPrice.toLocaleString('id-ID');

  return (
    <div
      id="book-detail"
      className="w-[610px] h-[309px] rounded-xl shadow-cardShadow py-[33px] px-[38px] flex flex-col gap-[21px]"
    >
      <div id="book-price" className="flex items-center gap-7">
        <h1 className="text-[40px] font-extrabold text-primary">
          Rp{formattedPrice}
        </h1>
        <div id="original-price" className="flex gap-[13px] items-center">
          <h1 className="italic font-bold text-[32px] line-through text-slate-500">
            Rp{price.toLocaleString('id-ID')}
          </h1>
          <h1 className="text-base font-medium text-red-600">(-16.67%)</h1>
        </div>
      </div>
      <div id="book-information" className="flex flex-wrap gap-5">
        <div id="information-item" className="flex gap-[13px] items-center">
          <img
            src="/images/DetailOpenTripPage/Loc.svg"
            alt=""
            className="w-8 h-8"
          />
          <h1 className="text-[20px] text-slate-500">{location}</h1>
        </div>
        <div id="information-item" className="flex gap-[13px] items-center">
          <img
            src="/images/DetailOpenTripPage/Clock.svg"
            alt=""
            className="w-8 h-8"
          />
          <h1 className="text-[20px] text-slate-500">{duration}</h1>
        </div>
        <div id="information-item" className="flex gap-[13px] items-center">
          <img
            src="/images/DetailOpenTripPage/Date.svg"
            alt=""
            className="w-8 h-8"
          />
          <h1 className="text-[20px] text-slate-500">{date}</h1>
        </div>
      </div>
      <a className="px-[72px] py-[15px] bg-primary w-fit rounded-xl text-white text-xl font-medium self-center hover:bg-primaryDark active:bg-primaryDarker">
        Book Now
      </a>
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
