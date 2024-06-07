import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

const ReviewItem = ({ name, createdAt, img, comment }) => {
  return (
    <div
      id="review-item"
      className="flex gap-[46px] w-full justify-between items-center"
    >
      <div id="reviewer-information" className="flex items-center gap-5">
        <div className="size-[87px] rounded-full bg-neutral-20 overflow-hidden flex items-center justify-center">
          {' '}
          {img ? (
            <img
              className="object-cover object-top rounded-full size-full"
              src={img}
            />
          ) : (
            <FontAwesomeIcon
              icon={faUserCircle}
              className="size-[87px] object-cover object-center text-neutral-40"
            />
          )}
        </div>

        <div id="reviewer-name" className="flex flex-col">
          <h1 className="text-[24px] font-semibold text-neutral-80">{name}</h1>
          <h2 className="text-[20px] text-black/50">
            {moment(createdAt).startOf().fromNow()}
          </h2>
        </div>
      </div>
      <p className="w-[883px] text-justify overflow-hidden">{comment}</p>
    </div>
  );
};

ReviewItem.propTypes = {
  name: PropTypes.string,
  createdAt: PropTypes.string,
  img: PropTypes.string,
  comment: PropTypes.string,
};

const ReviewsSection = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/review/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section
      id="review"
      className="flex flex-col items-center w-full gap-10 mt-10"
    >
      <div id="review-list" className="flex flex-col w-full gap-8">
        {data?.map((item) => (
          <ReviewItem
            key={item.id}
            name={item?.name}
            createdAt={item?.createdAt}
            img={item?.user.url_profile_img}
            comment={item?.comment}
          />
        ))}
      </div>
      <button className="rounded-xl size-fit px-5 py-3 bg-primary-60 text-[20px] font-medium text-white hover:bg-primaryDark active:scale-[0.9] transition-all duration-200">
        Lihat ulasan lain
      </button>
    </section>
  );
};

ReviewsSection.propTypes = {
  id: PropTypes.number,
};

export default ReviewsSection;
