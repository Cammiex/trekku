import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const OpenTripItem = ({
  img,
  itemName,
  organizer,
  location,
  duration,
  order,
}) => {
  return (
    <div
      id="open-trip-card"
      className="w-[360px] h-[430px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer"
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

function OpenTripList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tripData = [
      {
        img: 'images/OpenTripPage/OpenTripList/open-trip1.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        img: 'images/OpenTripPage/OpenTripList/open-trip2.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Kemanalagi',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        img: 'images/OpenTripPage/OpenTripList/open-trip3.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
    ];

    setData(tripData);
  }, []);

  console.log(data);
  return (
    <section className="grid w-[1160px] grid-cols-3 gap-10">
      {data?.map((item, index) => (
        <OpenTripItem
          key={index}
          img={item.img}
          itemName={item.itemName}
          organizer={item.organizer}
          location={item.location}
          duration={item.duration}
          order={item.order}
        />
      ))}
    </section>
  );
}

OpenTripItem.propTypes = {
  img: PropTypes.string,
  itemName: PropTypes.string,
  organizer: PropTypes.string,
  location: PropTypes.string,
  duration: PropTypes.string,
  order: PropTypes.string,
};

export default OpenTripList;
