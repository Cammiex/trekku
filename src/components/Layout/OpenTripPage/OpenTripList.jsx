import { useState } from 'react';
import { useEffect } from 'react';
import { OpenTripItem } from './OpenTripItem';

function OpenTripList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tripData = [
      {
        id: 1,
        img: 'images/OpenTripPage/OpenTripList/open-trip1.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 2,
        img: 'images/OpenTripPage/OpenTripList/open-trip2.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Kemanalagi',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 3,
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
    <section className="grid w-[1240px] grid-cols-3 gap-5">
      {data?.map((item, index) => (
        <OpenTripItem
          key={index}
          id={item.id}
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

export default OpenTripList;
