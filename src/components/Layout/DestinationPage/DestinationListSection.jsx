import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DestinationItem = ({ img, name }) => {
  return (
    <div
      id="destination-item"
      className="relative w-[228px] h-[291px] rounded-[16px] flex flex-col justify-end shadow-cardShadow bg-cover overflow-hidden group hover:shadow-lg cursor-pointer"
    >
      <div className="z-[1] w-full h-full bg-black/0 absolute group-hover:bg-black/[0.32] transition-all duration-300"></div>
      <img
        src={img}
        alt={`Foto ${name}`}
        className="z-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
      />
      <h1 className="absolute inset-x-0 bottom-0 z-10 text-2xl font-bold text-center text-white pb-9">
        {name}
      </h1>
    </div>
  );
};

function DestinationListSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const destinationData = [
      {
        id: '1',
        img: 'images/DestinationPage/sumatera.jpg',
        name: 'Sumatera',
      },
      {
        id: '2',
        img: 'images/DestinationPage/jawa.jpg',
        name: 'Jawa',
      },
      {
        id: '3',
        img: 'images/DestinationPage/kalimantan.jpg',
        name: 'Kalimantan',
      },
      {
        id: '4',
        img: 'images/DestinationPage/sulawesi.jpg',
        name: 'Sulawesi',
      },
      {
        id: '5',
        img: 'images/DestinationPage/papua.jpg',
        name: 'Papua',
      },
    ];

    setData(destinationData);
  }, []);

  return (
    <div className="w-full px-[102px] grid grid-cols-5 gap-6 mt-20 place-items-center">
      {data.map((item) => (
        <DestinationItem img={item.img} name={item.name} key={item.id} />
      ))}
    </div>
  );
}

DestinationItem.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
};

export default DestinationListSection;
