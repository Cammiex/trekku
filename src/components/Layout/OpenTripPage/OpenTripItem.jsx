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
  price,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/open-trip/${id}`);
  };
  return (
    <div
      id="open-trip-card"
      className="w-[400px] h-[481px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer active:scale-95"
      onClick={handleClick}
    >
      <img src={img} alt="" className="w-full max-h-[200px] object-cover" />
      <div id="card-body" className="flex flex-col py-5 px-7">
        <h2 className="text-[14px] font-medium text-blackui">{organizer}</h2>
        <h1 className="mb-4 text-[20px] font-semibold text-secondary">
          {itemName}
        </h1>
        <div id="card-information" className="flex flex-col gap-3">
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/OpenTripPage/OpenTripList/open-trip-icon1.png"
              alt=""
              className="size-6"
            />
            <h1 className="text-[14px] font-medium text-gray-500">
              {location}
            </h1>
          </div>
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/OpenTripPage/OpenTripList/open-trip-icon2.png"
              alt=""
              className="size-6"
            />
            <h1 className="text-[14px] font-medium text-gray-500">
              {duration}
            </h1>
          </div>
          <div id="information-item" className="flex items-center gap-2">
            <img
              src="images/OpenTripPage/OpenTripList/open-trip-icon3.png"
              alt=""
              className="size-6"
            />
            <h1 className="text-[14px] font-medium text-gray-500">
              {order}x dipesan
            </h1>
          </div>
        </div>
        <div id="price" className="self-end">
          <h1 className="text-[24px] font-semibold underline text-primary-90">
            Rp{Number(price).toLocaleString('id-ID')}
          </h1>
          <h1 className="text-base italic font-semibold text-right text-gray-500 line-through">
            Rp{Number(price + 200000).toLocaleString('id-ID')}
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
  order: PropTypes.number,
  id: PropTypes.number.isRequired,
  price: PropTypes.number,
};
