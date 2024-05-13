import { Link } from 'react-router-dom';

function OpenTripRecomendSection() {
  return (
    <section
      id="opentripRecomendation"
      className="flex flex-wrap flex-col items-center mt-[100px] gap-10"
    >
      <h1 className="text-secondary text-[32px] font-bold">Open Trip</h1>
      <div id="open-trip-list" className="flex flex-grow gap-10">
        <div
          id="open-trip-card"
          className="w-[360px] h-[430px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer active:scale-95"
        >
          <img
            src="images/HomePage/OpenTripRecomendation/open-trip1.jpg"
            alt=""
            className="w-full max-h-[200px] object-cover"
          />
          <div id="card-body" className="flex flex-col py-5 px-7">
            <h2 className="text-xs font-medium">Nusantara Tour</h2>
            <h1 className="mb-4 text-base font-semibold text-secondary">
              Wisata Tur Dataran Tinggi
            </h1>
            <div id="card-information" className="flex flex-col gap-3">
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon1.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">Location</h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon2.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">
                  3 days 2 nights
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon3.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">
                  123x ordered
                </h1>
              </div>
            </div>
            <div id="price" className="self-end">
              <h1 className="text-base font-semibold underline text-black/80">
                Rp500.000
              </h1>
              <h1 className="text-base italic font-semibold text-gray-500 line-through">
                Rp600.000
              </h1>
            </div>
          </div>
        </div>

        <div
          id="open-trip-card"
          className="w-[360px] h-[430px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer active:scale-95"
        >
          <img
            src="images/HomePage/OpenTripRecomendation/open-trip2.jpg"
            alt=""
            className="w-full max-h-[200px] object-cover"
          />
          <div id="card-body" className="flex flex-col py-5 px-7">
            <h2 className="text-xs font-medium">Nusantara Tour</h2>
            <h1 className="mb-4 text-base font-semibold text-secondary">
              Open Trip Labuan Bajo
            </h1>
            <div id="card-information" className="flex flex-col gap-3">
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon1.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">Location</h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon2.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">
                  3 days 2 nights
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon3.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">
                  123x ordered
                </h1>
              </div>
            </div>
            <div id="price" className="self-end">
              <h1 className="text-base font-semibold underline text-black/80">
                Rp500.000
              </h1>
              <h1 className="text-base italic font-semibold text-gray-500 line-through">
                Rp600.000
              </h1>
            </div>
          </div>
        </div>

        <div
          id="open-trip-card"
          className="w-[360px] h-[430px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer active:scale-95"
        >
          <img
            src="images/HomePage/OpenTripRecomendation/open-trip3.jpg"
            alt=""
            className="w-full max-h-[200px] object-cover"
          />
          <div id="card-body" className="flex flex-col py-5 px-7">
            <h2 className="text-xs font-medium">Nusantara Tour</h2>
            <h1 className="mb-4 text-base font-semibold text-secondary">
              Trip Brown Canyon
            </h1>
            <div id="card-information" className="flex flex-col gap-3">
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon1.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">Location</h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon2.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">
                  3 days 2 nights
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon3.png"
                  alt=""
                  className="h-[18px]"
                />
                <h1 className="text-xs font-medium text-gray-500">
                  123x ordered
                </h1>
              </div>
            </div>
            <div id="price" className="self-end">
              <h1 className="text-base font-semibold underline text-black/80">
                Rp500.000
              </h1>
              <h1 className="text-base italic font-semibold text-gray-500 line-through">
                Rp600.000
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/open-trip"
        className="h-[54px] px-9 bg-primary rounded-xl text-xl font-medium text-white flex items-center hover:bg-primaryDark active:bg-primaryDarker"
      >
        Find Your Next Adventure
      </Link>
    </section>
  );
}

export default OpenTripRecomendSection;
