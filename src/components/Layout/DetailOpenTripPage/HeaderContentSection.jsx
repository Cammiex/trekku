import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeAmericas,
  faBookmark,
  faStar,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderContentSection = ({
  name,
  location,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  const [saved, setSaved] = useState(false);

  const handleSaved = () => {
    setSaved(!saved);
  };

  return (
    <section>
      <Link
        to="/open-trip"
        className="flex items-center gap-5 mb-5 w-fit h-[30px] select-none"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        <h1 className="text-[20px] font-medium text-neutral-80">Kembali</h1>
      </Link>
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="font-bold text-[50px] mb-[9px]">{name}</h1>
          <div id="title-information" className="flex gap-[22px] mb-[34px]">
            <div className="flex gap-1.5 items-center">
              {/* <img src="/images/DetailOpenTripPage/Loc.svg" alt="" /> */}
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                className="text-neutral-40 size-6"
              />
              <h3 className="text-[20px] font-medium text-neutral-80">
                {location}
              </h3>
            </div>
            <div className="flex gap-1.5 items-center">
              <FontAwesomeIcon
                icon={faStar}
                className="text-[#FFC107] size-6"
              />
              <h3 className="text-[20px] font-medium text-neutral-80">
                4.7 (20 Reviews)
              </h3>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={saved ? faBookmark : faBookmarkRegular}
          className={
            saved
              ? `w-10 h-[50px] text-[#FFC107] cursor-pointer active:scale-90 transition-all duration-300`
              : `w-10 h-[50px] text-neutral-40 cursor-pointer active:scale-90 transition-all duration-300 hover:text-[#FFC107]`
          }
          onClick={handleSaved}
        />
      </div>

      <div id="image-detail" className="grid grid-cols-4 gap-5 mb-10">
        <div className="w-[610px] h-[472px] col-span-2 row-span-2 overflow-hidden">
          <img
            src={image1}
            alt=""
            className="w-full h-full transition duration-500 hover:scale-125"
          />
        </div>
        <div className="w-[295px] h-[226px] overflow-hidden">
          <img
            src={image2}
            alt=""
            className="w-full h-full transition duration-500 hover:scale-125"
          />
        </div>
        <div className="w-[295px] h-[226px] overflow-hidden">
          <img
            src={image3}
            alt=""
            className="w-full h-full transition duration-500 hover:scale-125"
          />
        </div>
        <div className="w-[295px] h-[226px] overflow-hidden">
          <img
            src={image4}
            alt=""
            className="w-full h-full transition duration-500 hover:scale-125"
          />
        </div>
        <div className="w-[295px] h-[226px] overflow-hidden">
          <img
            src={image5}
            alt=""
            className="w-full h-full transition duration-500 hover:scale-125"
          />
        </div>
      </div>
    </section>
  );
};

HeaderContentSection.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
};

export default HeaderContentSection;
