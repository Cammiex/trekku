import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';

const BookDetailSection = ({ location, duration, date, price, quota }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const expire = localStorage.getItem('expire');
    if (userId || token || expire) {
      setIsLoggedIn(true);
    }
  }, []);

  console.log(isLoggedIn);

  const formattedPrice = Number(price).toLocaleString('id-ID');
  const beforePrice = Number(price + 200000).toLocaleString('id-ID');

  const { id } = useParams();

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
            Rp{beforePrice}
          </h1>
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
          <h1 className="text-[20px] text-neutral-40">
            {moment(date).format('DD MMMM YYYY')}
          </h1>
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
            <span className="font-bold text-[#2BC128]">{quota} Orang</span>
          </h1>
        </div>
      </div>
      <Link
        to={isLoggedIn ? `/order/${id}` : '/login'}
        className="px-[40px] py-[15px] bg-primary-60 w-fit rounded-xl text-white text-xl font-medium self-center hover:bg-primaryDark active:bg-primaryDarker mt-[12px]"
      >
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
  quota: PropTypes.number,
};

export default BookDetailSection;
