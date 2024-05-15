const RatingHeaderSection = () => {
  return (
    <div id="rating-and-stars" className="flex flex-col items-start">
      <h1 className="text-[32px] font-bold">Rating and Reviews</h1>
      <h2 className="text-[32px] font-semibold text-black/50">
        Explore NTT - Open Trip Labuan Bajo
      </h2>
      <div className="flex w-full gap-[87px]">
        <div id="stars" className="flex flex-col items-center">
          <h1 className="text-[96px] font-semibold leading-tight">4.7</h1>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-yellow-300 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-300 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-300 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-6 h-6 text-yellow-300 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-6 h-6 text-gray-300 ms-2 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <h3 className="mt-2 text-2xl font-normal text-black/50">
            (20 Reviews)
          </h3>
        </div>
        <div id="star-progress" className="w-full">
          <div className="flex items-center mt-4">
            <a href="#" className="text-sm font-medium hover:underline">
              5 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-300 rounded-full">
              <div className="h-5 rounded-full bg-primary w-[50%]"></div>
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
              <div className="h-5 rounded-full bg-primary w-[30%]"></div>
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
              <div className="h-5 rounded-full bg-primary w-[15%]"></div>
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
              <div className="h-5 rounded-l-full bg-primary w-[5%]"></div>
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
              <div className="h-5 rounded-full bg-primary w-[0%]"></div>
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
