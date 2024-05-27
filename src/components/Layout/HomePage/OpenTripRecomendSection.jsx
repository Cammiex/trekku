import { Link } from 'react-router-dom';

function OpenTripRecomendSection() {
  return (
    <section
      id="opentripRecomendation"
      className="flex flex-wrap flex-col items-center mt-[190px] gap-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="text-secondary text-[32px] font-bold">
        Rekomendasi Open Trip
      </h1>
      <div id="open-trip-list" className="flex flex-grow gap-10">
        <div
          id="open-trip-card"
          className="w-[400px] h-[481px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer active:scale-95"
        >
          <img
            src="images/HomePage/OpenTripRecomendation/open-trip1.jpg"
            alt=""
            className="w-full max-h-[200px] object-cover"
          />
          <div id="card-body" className="flex flex-col py-5 px-7">
            <h2 className="text-[14px] font-medium text-blackui">
              Nusantara Tour
            </h2>
            <h1 className="mb-4 text-[20px] font-semibold text-secondary">
              Wisata Tur Dataran Tinggi
            </h1>
            <div id="card-information" className="flex flex-col gap-3">
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon1.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  Dieng, Jawa Tengah
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon2.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  3 hari 2 malam
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon3.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  47x ordered
                </h1>
              </div>
            </div>
            <div id="price" className="self-end">
              <h1 className="text-[24px] font-semibold underline text-primary-90">
                Rp500.000
              </h1>
              <h1 className="text-base italic font-semibold text-right text-gray-500 line-through">
                Rp600.000
              </h1>
            </div>
          </div>
        </div>
        <div
          id="open-trip-card"
          className="w-[400px] h-[481px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer active:scale-95"
        >
          <img
            src="images/HomePage/OpenTripRecomendation/open-trip2.png"
            alt=""
            className="w-full max-h-[200px] object-cover"
          />
          <div id="card-body" className="flex flex-col py-5 px-7">
            <h2 className="text-[14px] font-medium text-blackui">
              Seasidee Escape
            </h2>
            <h1 className="mb-4 text-[20px] font-semibold text-secondary">
              Wisata Tur Pulau Belitung
            </h1>
            <div id="card-information" className="flex flex-col gap-3">
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon1.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  Belitung, Kepulauan Bangka Belitung
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon2.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  3 hari 2 malam
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon3.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  123x ordered
                </h1>
              </div>
            </div>
            <div id="price" className="self-end">
              <h1 className="text-[24px] font-semibold underline text-primary-90">
                Rp1.800.000
              </h1>
              <h1 className="text-base italic font-semibold text-right text-gray-500 line-through">
                Rp2.300.000
              </h1>
            </div>
          </div>
        </div>
        <div
          id="open-trip-card"
          className="w-[400px] h-[481px] rounded-2xl shadow-cardShadow flex flex-col overflow-hidden hover:-translate-y-3 transition-transform duration-300 cursor-pointer active:scale-95"
        >
          <img
            src="images/HomePage/OpenTripRecomendation/open-trip3.png"
            alt=""
            className="w-full max-h-[200px] object-cover"
          />
          <div id="card-body" className="flex flex-col py-5 px-7">
            <h2 className="text-[14px] font-medium text-blackui">
              Wonders of Nusantara
            </h2>
            <h1 className="mb-4 text-[20px] font-semibold text-secondary">
              Bromo Peak Sunrise Trip
            </h1>
            <div id="card-information" className="flex flex-col gap-3">
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon1.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  Malang, Jawa Timur
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon2.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  1 hari
                </h1>
              </div>
              <div id="information-item" className="flex items-center gap-2">
                <img
                  src="images/HomePage/OpenTripRecomendation/open-trip-icon3.png"
                  alt=""
                  className="size-6"
                />
                <h1 className="text-[14px] font-medium text-gray-500">
                  47x ordered
                </h1>
              </div>
            </div>
            <div id="price" className="self-end">
              <h1 className="text-[24px] font-semibold underline text-primary-90">
                Rp250.000
              </h1>
              <h1 className="text-base italic font-semibold text-right text-gray-500 line-through">
                Rp300.000
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/open-trip"
        className="h-[54px] px-9 bg-primary-60 rounded-xl text-xl font-medium text-white flex items-center hover:bg-primaryDark active:bg-primaryDarker"
      >
        Cari petualangan berikutnya
      </Link>
    </section>
  );
}

export default OpenTripRecomendSection;
