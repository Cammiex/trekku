import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const apiUrl = import.meta.env.VITE_API_URL;

const VoucherCard = ({ img, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/voucher/${id}`)}
      className="carousel-item w-[523px] h-[225px] shadow-cardShadow overflow-hidden rounded-2xl cursor-pointer active:scale-90 transition duration-300"
    >
      <img src={img} className="object-cover rounded-box size-full" />
    </div>
  );
};

VoucherCard.propTypes = {
  img: PropTypes.string,
  id: PropTypes.number,
};

const PromoSection = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/voucher`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="mt-[100px] flex flex-col gap-8 items-center">
      <h1 className="text-[32px] font-bold text-[#152B5A]">Promo Terbaru</h1>
      <div className="max-w-full p-4 space-x-5 carousel carousel-center">
        {data?.map((item) => (
          <VoucherCard key={item.id} img={item.url_img} id={item.id} />
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
