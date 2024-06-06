import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarked } from '@fortawesome/free-solid-svg-icons';
const apiUrl = import.meta.env.VITE_API_URL;

const WishlistCard = ({ img, organize, name, price, idProduct, idUser }) => {
  const formattedPrice = price.toLocaleString('id-ID');
  const discountPrice = (price + 200000).toLocaleString('id-ID');
  const [book, setBook] = useState(true);

  const handleRemoveWishlist = async () => {
    try {
      await axios.delete(`${apiUrl}/wishlist`, {
        params: { user_id: idUser, product_id: idProduct },
      });
      setBook(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaved = async () => {
    try {
      await axios.post(`${apiUrl}/wishlist`, {
        user_id: idUser,
        product_id: idProduct,
      });
      setBook(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[200px] h-[232px] rounded-2xl overflow-hidden flex flex-col items-center shadow-cardShadow cursor-pointer">
      <div className="w-full h-[100px]">
        <img
          src={img}
          alt=""
          className="object-cover object-center size-full"
        />
      </div>
      <Link
        to={`/open-trip/${idProduct}`}
        className="w-[176px] h-[54px] flex flex-col mt-2"
      >
        <h1 className="text-blackui text-[12px]">{organize}</h1>
        <h1 className="text-primary-90 text-[12px] font-semibold">{name}</h1>
      </Link>
      <div className="w-[176px] flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold underline text-primary-90">
            Rp{formattedPrice}
          </h1>
          <h1 className="italic font-semibold line-through text-neutral-60">
            Rp{discountPrice}
          </h1>
        </div>
        <FontAwesomeIcon
          onClick={book ? handleRemoveWishlist : handleSaved}
          icon={book ? faBookmarked : faBookmark}
          className="size-6"
        />
      </div>
    </div>
  );
};

WishlistCard.propTypes = {
  img: PropTypes.string,
  organize: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  idProduct: PropTypes.number,
  idUser: PropTypes.number,
};

const Wishlist = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/wishlist/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w-[797px] h-[630px] rounded-2xl bg-white shadow-cardShadow pl-10 pr-7 pt-8 text-black flex flex-col">
      <h1 className="text-[24px] font-semibold">Daftar Favorit</h1>
      <div
        id="wishlist-card-list"
        className="w-[640px] h-[484px] gap-5 grid grid-cols-3 mt-10 self-center custom-scrollbar"
      >
        {data.map((item) => (
          <WishlistCard
            key={item.id}
            img={item.product.product_imgs[0].url_img}
            organize={item.product.organizer}
            name={item.product.name}
            price={item.product.price}
            idProduct={item.product.id}
            idUser={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
