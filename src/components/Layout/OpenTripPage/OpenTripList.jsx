import { useState, useEffect } from 'react';
import { OpenTripItem } from './OpenTripItem';

function OpenTripList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
      {
        id: 4,
        img: 'images/OpenTripPage/OpenTripList/open-trip3.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 5,
        img: 'images/OpenTripPage/OpenTripList/open-trip3.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 6,
        img: 'images/OpenTripPage/OpenTripList/open-trip3.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 7,
        img: 'images/OpenTripPage/OpenTripList/open-trip3.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 8,
        img: 'images/OpenTripPage/OpenTripList/open-trip3.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 9,
        img: 'images/OpenTripPage/OpenTripList/open-trip3.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 9,
        img: 'images/OpenTripPage/OpenTripList/open-trip1.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 9,
        img: 'images/OpenTripPage/OpenTripList/open-trip2.jpg',
        itemName: 'Open Trip Labuan Bajo',
        organizer: 'Nusantara Tour',
        location: 'NTT',
        duration: '3 days 2 nights',
        order: '123',
      },
      {
        id: 9,
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

  useEffect(() => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section
        id="open-trip-list"
        className="grid w-[1240px] grid-cols-3 gap-5"
      >
        {currentItems.map((item, index) => (
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
      <div className="flex justify-center gap-4 mt-[52px]">
        <button
          className="btn"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>

        <button className="join-item btn">{`Halaman ${currentPage}`}</button>
        <button
          className="btn"
          onClick={() => {
            paginate(currentPage + 1);
          }}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default OpenTripList;
