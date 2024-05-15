import PropTypes from 'prop-types';

const HeaderContentSection = ({
  name,
  location,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  return (
    <section>
      <h1 className="font-bold text-[50px] mb-[9px]">{name}</h1>
      <div id="title-information" className="flex gap-[22px] mb-[34px]">
        <div className="flex gap-1.5 items-center">
          <img src="/images/DetailOpenTripPage/Loc.svg" alt="" />
          <h3 className="text-base font-medium">{location}</h3>
        </div>
        <div className="flex gap-1.5 items-center">
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <h3 className="text-base font-medium">4.7 (20 Reviews)</h3>
        </div>
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
