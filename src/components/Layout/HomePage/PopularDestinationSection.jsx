function PopularDestinationSection() {
  return (
    <section
      id="popularRecomendation"
      className="flex flex-wrap flex-col mt-[190px] items-center gap-10"
    >
      <h1 className="text-secondary text-[32px] font-bold">
        Popular Destination
      </h1>
      <div id="destination-card-list" className="flex flex-wrap gap-8">
        <a href="guest-destination-detail.html">
          <div
            id="destination-item"
            className="relative w-[260px] h-[332px] rounded-[20px] flex flex-col justify-end shadow-cardShadow bg-cover overflow-hidden group group-hover:shadow-lg cursor-pointer"
          >
            <div className="z-[1] w-full h-full bg-black/0 absolute group-hover:bg-black/[0.32] transition-all duration-300"></div>
            <img
              src="images/HomePage/PopularDestination/popular-item1.jpg"
              alt=""
              className="z-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
            />
            <h1 className="absolute inset-x-0 bottom-0 z-10 text-2xl font-bold text-center text-white pb-9">
              Gunung Merapi
            </h1>
          </div>
        </a>
        <a href="guest-destination-detail.html">
          <div
            id="destination-item"
            className="relative w-[260px] h-[332px] rounded-[20px] flex flex-col justify-end shadow-cardShadow bg-cover overflow-hidden group group-hover:shadow-lg cursor-pointer"
          >
            <div className="z-[1] w-full h-full bg-black/0 absolute group-hover:bg-black/[0.32] transition-all duration-300"></div>
            <img
              src="images/HomePage/PopularDestination/popular-item2.jpg"
              alt=""
              className="z-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
            />
            <h1 className="absolute inset-x-0 bottom-0 z-10 text-2xl font-bold text-center text-white pb-9">
              Gunung Rinjani
            </h1>
          </div>
        </a>
        <a href="guest-destination-detail.html">
          <div
            id="destination-item"
            className="relative w-[260px] h-[332px] rounded-[20px] flex flex-col justify-end shadow-cardShadow bg-cover overflow-hidden group group-hover:shadow-lg cursor-pointer"
          >
            <div className="z-[1] w-full h-full bg-black/0 absolute group-hover:bg-black/[0.32] transition-all duration-300"></div>
            <img
              src="images/HomePage/PopularDestination/popular-item3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
            />
            <h1 className="absolute inset-x-0 bottom-0 z-10 text-2xl font-bold text-center text-white pb-9">
              Gunung Kerinci
            </h1>
          </div>
        </a>
        <a href="guest-destination-detail.html">
          <div
            id="destination-item"
            className="relative w-[260px] h-[332px] rounded-[20px] flex flex-col justify-end shadow-cardShadow bg-cover overflow-hidden group group-hover:shadow-lg cursor-pointer"
          >
            <div className="z-[1] w-full h-full bg-black/0 absolute group-hover:bg-black/[0.32] transition-all duration-300"></div>
            <img
              src="images/HomePage/PopularDestination/popular-item4.jpg"
              alt=""
              className="z-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
            />
            <h1 className="absolute inset-x-0 bottom-0 z-10 text-2xl font-bold text-center text-white pb-9">
              Pantai Kuta
            </h1>
          </div>
        </a>
      </div>

      <a
        href="guest-destination.html"
        className="flex h-[54px] w-[204px] justify-center items-center bg-primary rounded-xl gap-[10px] px-5 hover:bg-primaryDark active:bg-primaryDarker"
      >
        <img src="images/HomePage/PopularDestination/search.png" alt="" />
        <h1 className="text-xl font-medium text-white">View More</h1>
      </a>
    </section>
  );
}

export default PopularDestinationSection;
