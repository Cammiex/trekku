import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingHeaderSection = () => {
  return (
    <div
      id="rating-and-stars"
      className="flex flex-col items-start w-[612px] h-[346px] p-8 shadow-cardShadow rounded-2xl"
    >
      <h1 className="text-[32px] font-semibold">Penilaian dan Ulasan</h1>
      <h2 className="text-[20px] font-medium text-black/50">
        Explore NTT - Open Trip Labuan Bajo
      </h2>
      <div className="flex w-full gap-[87px]">
        <div id="stars" className="flex flex-col items-center mt-[33px]">
          <h1 className="text-[80px] font-semibold leading-tight">4.7</h1>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faStar}
              className="size-6 ms-2 text-[#FFC107]"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="size-6 ms-2 text-[#FFC107]"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="size-6 ms-2 text-[#FFC107]"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="size-6 ms-2 text-[#FFC107]"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="size-6 ms-2 text-[#FFC107]"
            />
          </div>
          <h3 className="mt-2 text-[24px] text-black/50">(20 Reviews)</h3>
        </div>
        <div id="star-progress" className="w-full">
          <div className="flex items-center mt-6">
            <a href="#" className="text-sm font-medium hover:underline">
              5 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded-full">
              <div className="h-5 rounded-full bg-primary-60 w-[50%]"></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              50%
            </span>
          </div>
          <div className="flex items-center mt-4">
            <a href="#" className="text-sm font-medium hover:underline">
              4 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded-full">
              <div className="h-5 rounded-full bg-primary-60 w-[30%]"></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              30%
            </span>
          </div>
          <div className="flex items-center mt-4">
            <a href="#" className="text-sm font-medium hover:underline">
              3 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded-full">
              <div className="h-5 rounded-full bg-primary-60 w-[15%]"></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              15%
            </span>
          </div>
          <div className="flex items-center mt-4">
            <a href="#" className="text-sm font-medium hover:underline">
              2 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded-full">
              <div className="h-5 rounded-l-full bg-primary-60 w-[5%]"></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              5%
            </span>
          </div>
          <div className="flex items-center mt-4 ml-[2.5px]">
            <a href="#" className="text-sm font-medium hover:underline">
              1 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded-full">
              <div className="h-5 rounded-full bg-primary-60 w-[0%]"></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingHeaderSection;
