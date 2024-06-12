import {
  faChevronLeft,
  faChevronRight,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const FeedbackCard = ({ avatar, name, comment, rating }) => {
  return (
    <div
      id="feedback-item"
      className="flex flex-col items-center min-w-[358px] h-[409px] max-w-[380px] gap-5 p-4 shadow-md group transition-all duration-300 rounded-2xl bg-white sm:min-w-[215px] sm:h-[243px] sm:rounded-[9px]"
    >
      <div id="avatar" className="flex flex-col items-center gap-2">
        {avatar ? (
          <img
            src={avatar}
            alt=""
            className="w-[95px] h-[95px] sm:size-[57px] rounded-full object-cover"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUserCircle}
            className="w-[95px] h-[95px] sm:size-[57px] rounded-full object-cover text-[#5D5D5D]"
          />
        )}
        <div id="avatar-text" className="text-center">
          <h1
            id="name"
            className="text-[20px] font-semibold text-black sm:text-[12px]"
          >
            {name}
          </h1>
        </div>
        <div className="flex items-center">
          {[...Array(rating)].map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-300 sm:size-3 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
      </div>
      <div id="commentar" className="">
        <p className="text-center text-black max-w-[310px] max-h-[144px] sm:text-[9px] sm:max-w-[187px] sm:max-h-[84px]">
          &quot;{comment}&quot;
        </p>
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.number,
};

function TouristFeedbackSection() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/review`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % Math.ceil(data?.length / itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(data.length / itemsPerPage)) %
        Math.ceil(data.length / itemsPerPage)
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedData = data?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section
      id="touristFeedback"
      className="flex flex-wrap flex-col items-center mt-[100px] sm:mt-10 gap-10 w-full"
    >
      <h1 className="text-secondary text-[32px] font-bold sm:text-[16px]">
        Ulasan Pengguna
      </h1>
      <div
        id="feedback-list"
        className="flex items-center justify-center w-full gap-8 sm:flex-col"
      >
        <button
          onClick={handlePrev}
          className="p-2 size-[44px] rounded-full shadow-md group sm:hidden"
          disabled={currentPage === 0}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-neutral-70 group-disabled:text-neutral-70/50"
          />
        </button>
        {selectedData?.map((item, index) => (
          <FeedbackCard
            key={index}
            name={item.name}
            avatar={item.user.url_profile_img}
            comment={item.comment}
            rating={item.rating}
          />
        ))}
        <button
          onClick={handleNext}
          className="p-2 size-[44px] rounded-full shadow-md group sm:hidden"
          disabled={startIndex + itemsPerPage >= data?.length}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-neutral-70 group-disabled:text-neutral-70/50"
          />
        </button>
      </div>
      <div className="flex gap-4"></div>
    </section>
  );
}

export default TouristFeedbackSection;
