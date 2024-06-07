import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const apiUrl = import.meta.env.VITE_API_URL;

const RatingHeaderSection = ({ id, name }) => {
  const [data, setData] = useState([]);

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

  const totalReview = data.length;

  const countReviewsByRating = (rating) => {
    return data.filter((review) => review.rating === rating).length;
  };

  const ratings = [5, 4, 3, 2, 1];
  const reviewCounts = ratings.map(countReviewsByRating);

  const calculatePercentage = (count) => {
    return totalReview === 0 ? 0 : (count / totalReview) * 100;
  };

  const calculateAverageRating = () => {
    if (totalReview === 0) return 0;
    const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / totalReview).toFixed(1);
  };

  const averageRating = calculateAverageRating();

  const renderStars = () => {
    const fullStars = Math.floor(averageRating);
    const halfStar = averageRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array.from({ length: fullStars }).map((_, index) => (
          <FontAwesomeIcon
            key={`full-${index}`}
            icon={faStar}
            className="size-6 ms-2 text-[#FFC107]"
          />
        ))}
        {halfStar && (
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            className="size-6 ms-2 text-[#FFC107]"
          />
        )}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <FontAwesomeIcon
            key={`empty-${index}`}
            icon={faStarEmpty}
            className="size-6 ms-2 text-neutral-10"
          />
        ))}
      </>
    );
  };

  return (
    <div
      id="rating-and-stars"
      className="flex flex-col items-start w-[612px] h-[346px] p-8 shadow-cardShadow rounded-2xl"
    >
      <h1 className="text-[32px] font-semibold">Penilaian dan Ulasan</h1>
      <h2 className="text-[20px] font-medium text-black/50">{name}</h2>
      <div className="flex w-full gap-[87px]">
        <div id="stars" className="flex flex-col items-center mt-[33px]">
          <h1 className="text-[80px] font-semibold leading-tight">
            {averageRating}
          </h1>
          <div className="flex items-center">{renderStars()}</div>
          <h3 className="mt-2 text-[24px] text-black/50">
            ({totalReview} Ulasan)
          </h3>
        </div>
        <div id="star-progress" className="w-full">
          {ratings.map((rating, index) => (
            <div key={rating} className="flex items-center mt-4">
              <a href="#" className="text-sm font-medium hover:underline">
                {rating} star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded-full">
                <div
                  className="h-5 rounded-full bg-primary-60"
                  style={{
                    width: `${calculatePercentage(reviewCounts[index])}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {calculatePercentage(reviewCounts[index]).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

RatingHeaderSection.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

export default RatingHeaderSection;
