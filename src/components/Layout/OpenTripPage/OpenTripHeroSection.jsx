import PropTypes from 'prop-types';

function OpenTripHeroSection({
  setDestinasi,
  destinasi,
  durasi,
  setDurasi,
  data,
}) {
  const bgImage = 'images/OpenTripPage/opentrip-hero.jpg';

  // Extract unique destinations and durations
  const uniqueDestinations = [...new Set(data?.map((item) => item.location))];
  const uniqueDurations = [...new Set(data?.map((item) => item.duration))];

  return (
    <div
      className="w-full h-[660px] flex items-center justify-center relative bg-cover bg-center sm:h-[196px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <h1 className="text-[80px] font-extrabold z-10 sm:text-[24px]">
        Open Trip
      </h1>
      <div
        id="search-form"
        className="absolute z-10 flex justify-center px-10 py-10 text-black -translate-x-1/2 bg-white shadow-2xl min-h-40 w-fit rounded-2xl left-1/2 -bottom-20 sm:min-h-[113px] sm:rounded-lg sm:p-4 sm:hidden"
      >
        <div className="flex gap-6">
          <div id="search-item" className="flex flex-col">
            <div id="icon" className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center bg-white rounded-full size-7 shadow-cardShadow">
                {' '}
                <img src="images/OpenTripPage/Loc.svg" alt="" />
              </div>

              <label className="">Destination</label>
            </div>

            <select
              name=""
              id=""
              value={destinasi}
              onChange={(e) => setDestinasi(e.target.value)}
              className="rounded-lg w-[214px] sm:w-[110px]"
            >
              <option value="" selected>
                Pilih Destinasi
              </option>
              {uniqueDestinations.map((location) => (
                <option value={location} key={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div id="search-item" className="flex flex-col">
            <div id="icon" className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center bg-white rounded-full size-7 shadow-cardShadow">
                <img src="images/OpenTripPage/Clock.svg" alt="" />
              </div>

              <label>Duration</label>
            </div>

            <select
              name=""
              id=""
              value={durasi}
              onChange={(e) => setDurasi(e.target.value)}
              className="rounded-lg w-[154px] sm:w-[80px]"
            >
              <option value="" selected>
                Pilih Durasi
              </option>
              {uniqueDurations.map((duration) => (
                <option value={duration} key={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

OpenTripHeroSection.propTypes = {
  data: PropTypes.array,
  setDestinasi: PropTypes.func,
  destinasi: PropTypes.string,
  durasi: PropTypes.string,
  setDurasi: PropTypes.func,
};

export default OpenTripHeroSection;
