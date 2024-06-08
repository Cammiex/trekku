import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import PropTypes from 'prop-types';

const FeedbackCard = ({ avatar, name, job, comment }) => {
  return (
    <div
      id="feedback-item"
      className="flex flex-col items-center min-w-[358px] h-[409px] max-w-[380px] gap-5 p-4 shadow-md group transition-all duration-300 rounded-2xl bg-white sm:min-w-[215px] sm:h-[243px] sm:rounded-[9px]"
    >
      <div id="avatar" className="flex flex-col items-center gap-2">
        <img
          className="w-[95px] h-[95px] sm:size-[57px] rounded-full object-cover"
          src={avatar}
          alt="Rounded avatar"
        />
        <div id="avatar-text" className="text-center">
          <h1
            id="name"
            className="text-[20px] font-semibold text-black sm:text-[12px]"
          >
            {name}
          </h1>
          <h2 id="job" className="text-black sm:text-[9px]">
            {job}
          </h2>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
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
          {comment}
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
};

function TouristFeedbackSection() {
  const feedbacks = [
    {
      avatar: 'images/HomePage/TouristFeedback/avatar1.jpg',
      name: 'Christine Patricia',
      job: 'Photografer',
      comment:
        'Pengalaman open trip ini luar biasa! Layanan prima, destinasi menakjubkan, dan organisasi trip yang rapi. Sangat merekomendasikan untuk mereka yang mencari petualangan tak terlupakan.',
    },
    {
      avatar: 'images/HomePage/TouristFeedback/avatar2.jpg',
      name: 'Muhammad Fulan',
      job: 'Backpacker',
      comment:
        'Menawarkan pengalaman terbaik untuk perjalanan saya! Lokasi luar biasa, pemandu wisata yang ramah, dan layanan yang luar biasa.',
    },
    {
      avatar: 'images/HomePage/TouristFeedback/avatar3.jpg',
      name: 'Rizky Aditya',
      job: 'Penulis Blog',
      comment:
        'Open trip yang diselenggarakan sangat memuaskan! Pemandu sangat ramah dan berpengalaman, akomodasi nyaman, dan itinerary menarik.',
    },
    {
      avatar: 'images/HomePage/TouristFeedback/avatar3.jpg',
      name: 'Rizky Aditya',
      job: 'Penulis Blog',
      comment:
        'Open trip yang diselenggarakan sangat memuaskan! Pemandu sangat ramah dan berpengalaman, akomodasi nyaman, dan itinerary menarik.',
    },
    {
      avatar: 'images/HomePage/TouristFeedback/avatar3.jpg',
      name: 'Rizky Aditya',
      job: 'Penulis Blog',
      comment:
        'Open trip yang diselenggarakan sangat memuaskan! Pemandu sangat ramah dan berpengalaman, akomodasi nyaman, dan itinerary menarik.',
    },
    {
      avatar: 'images/HomePage/TouristFeedback/avatar3.jpg',
      name: 'Rizky Aditya',
      job: 'Penulis Blog',
      comment:
        'Open trip yang diselenggarakan sangat memuaskan! Pemandu sangat ramah dan berpengalaman, akomodasi nyaman, dan itinerary menarik.',
    },
    {
      avatar: 'images/HomePage/TouristFeedback/avatar3.jpg',
      name: 'Rizky Aditya',
      job: 'Penulis Blog',
      comment:
        'Open trip yang diselenggarakan sangat memuaskan! Pemandu sangat ramah dan berpengalaman, akomodasi nyaman, dan itinerary menarik.',
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % Math.ceil(feedbacks.length / itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(feedbacks.length / itemsPerPage)) %
        Math.ceil(feedbacks.length / itemsPerPage)
    );
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedFeedbacks = feedbacks.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
        {selectedFeedbacks.map((feedback, index) => (
          <FeedbackCard key={index} {...feedback} />
        ))}
        <button
          onClick={handleNext}
          className="p-2 size-[44px] rounded-full shadow-md group sm:hidden"
          disabled={startIndex + itemsPerPage >= feedbacks.length}
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
