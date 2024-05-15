import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const OpenTripItem = ({
  img,
  itemName,
  organizer,
  location,
  duration,
  order,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trip/${id}`);
  };
  return (
    <div
      id="open-trip-card"
      className="w-[360px] h-[430px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <img src={img} alt="" className="w-full max-h-[200px] object-cover" />
      <div id="card-body" className="flex flex-col py-5 px-7">
        <h2 className="text-xs font-medium text-black">{organizer}</h2>
        <h1 className="mb-4 text-base font-semibold text-secondary">
          {itemName}
        </h1>
        <div id="card-information" className="flex flex-col gap-3">
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/OpenTripPage/OpenTripList/open-trip-icon1.png"
              alt=""
              className="h-[18px]"
            />
            <h1 className="text-xs font-medium text-gray-500">{location}</h1>
          </div>
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/OpenTripPage/OpenTripList/open-trip-icon2.png"
              alt=""
              className="h-[18px]"
            />
            <h1 className="text-xs font-medium text-gray-500">{duration}</h1>
          </div>
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/OpenTripPage/OpenTripList/open-trip-icon3.png"
              alt=""
              className="h-[18px]"
            />
            <h1 className="text-xs font-medium text-gray-500">
              {order}x ordered
            </h1>
          </div>
        </div>
        <div id="price" className="self-end">
          <h1 className="text-base font-semibold underline text-black/80">
            Rp500.000
          </h1>
          <h1 className="text-base italic font-semibold text-gray-500 line-through">
            Rp600.000
          </h1>
        </div>
      </div>
    </div>
  );
};

OpenTripItem.propTypes = {
  img: PropTypes.string,
  itemName: PropTypes.string,
  organizer: PropTypes.string,
  location: PropTypes.string,
  duration: PropTypes.string,
  order: PropTypes.string,
  id: PropTypes.number.isRequired,
};
