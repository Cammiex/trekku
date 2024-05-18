import { Link } from 'react-router-dom';

function ArticleTipsSection() {
  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length > 18) {
      return words.slice(0, 18).join(' ') + '...';
    }
    return text;
  };

  return (
    <section
      id="article&tips"
      className="flex flex-col mt-[100px] gap-10 items-center"
    >
      <h1 className="text-secondary text-[32px] font-bold">Articles & Tips</h1>
      <div id="article-list" className="flex flex-wrap gap-10">
        <div
          id="article-item"
          className="w-[360px] h-[400px] shadow-cardShadow rounded-2xl overflow-hidden group"
        >
          <div className="relative overflow-hidden cursor-pointer">
            <div className="absolute z-10 flex items-center justify-center w-full h-full transition duration-300 bg-black/0 group-hover:bg-black/60 group-active:bg-black/80">
              <h1 className="text-white font-semibold text-lg shadow-2xl translate-x-[999px] group-hover:translate-x-0 transition duration-300">
                Read this article
              </h1>
            </div>
            <img
              src="images/HomePage/ArticleTips/article1.jpg"
              alt=""
              className="w-full max-h-[200px] group-hover:scale-125 transition-transform duration-300 object-cover"
            />
          </div>
          <div id="article-body" className="flex flex-col gap-3 p-5">
            <div id="article-title" className="flex flex-col">
              <h2 className="text-xs font-medium">March 13, 2024</h2>
              <h1 className="text-base font-semibold text-secondary">
                Labuan Bajo
              </h1>
            </div>
            <p id="article-text" className="text-xs font-normal text-black">
              {truncateText(
                'Labuan Bajo, sebuah surga tersembunyi di Nusa Tenggara Timur, menawarkan keindahan alam yang memukau dan pengalaman tak terlupakan. Dikelilingi oleh perairan biru kristal dan pulau-pulau kecil yang menawan, Labuan Bajo adalah pintu gerbang menuju Taman Nasional Komodo, rumah bagi komodo, hewan purba yang menakjubkan. Selain itu, Labuan Bajo juga menawarkan berbagai aktivitas menarik seperti menyelam di spot-spot indah, trekking untuk menikmati pemandangan matahari terbenam yang spektakuler, dan berlayar mengelilingi pulau-pulau sekitarnya. Keindahan alam, kekayaan budaya, dan keramahan penduduk setempat menjadikan Labuan Bajo destinasi yang sempurna bagi para petualang yang mencari pengalaman yang berbeda.'
              )}
            </p>
            <a
              href="blog-detail.html"
              className="flex items-center gap-4 mt-5 text-black/60"
            >
              <span className="text-xs font-medium">Read More</span>
              <h1 className="text-base font-semibold"></h1>
            </a>
          </div>
        </div>
        <div
          id="article-item"
          className="w-[360px] h-[400px] shadow-cardShadow rounded-2xl overflow-hidden group"
        >
          <div className="relative overflow-hidden cursor-pointer">
            <div className="absolute z-10 flex items-center justify-center w-full h-full transition duration-300 bg-black/0 group-hover:bg-black/60 group-active:bg-black/80">
              <h1 className="text-white font-semibold text-lg shadow-2xl translate-x-[999px] group-hover:translate-x-0 transition duration-300">
                Read this article
              </h1>
            </div>
            <img
              src="images/HomePage/ArticleTips/article2.jpg"
              alt=""
              className="w-full max-h-[200px] group-hover:scale-125 transition-transform duration-300 object-cover"
            />
          </div>
          <div id="article-body" className="flex flex-col gap-3 p-5">
            <div id="article-title" className="flex flex-col">
              <h2 className="text-xs font-medium">March 13, 2024</h2>
              <h1 className="text-base font-semibold text-secondary">
                Air Terjun Niagara
              </h1>
            </div>
            <p id="article-text" className="text-xs font-normal text-black">
              {truncateText(
                'Air Terjun Niagara, salah satu keajaiban alam yang paling terkenal di dunia, menawarkan pemandangan yang spektakuler dan mempesona. Terletak di perbatasan antara Amerika Serikat dan Kanada, air terjun ini merupakan salah satu destinasi wisata utama yang menarik jutaan pengunjung setiap tahunnya. Dengan ketinggian lebih dari 50 meter dan lebar mencapai 1.200 meter, Air Terjun Niagara merupakan sumber air terbesar kedua di dunia berdasarkan volume air yang jatuh setiap detiknya. Pengunjung dapat menikmati keindahan air terjun ini dari berbagai sudut, baik dari sisi Amerika maupun Kanada. Selain itu, terdapat berbagai aktivitas menarik yang bisa dilakukan di sekitar Air Terjun Niagara, seperti berperahu mendekati air terjun, menjelajahi taman-taman di sekitarnya, hingga menikmati pemandangan malam hari yang diterangi oleh lampu-lampu warna-warni.'
              )}
            </p>
            <a
              href="blog-detail.html"
              className="flex items-center gap-4 mt-5 text-black/60"
            >
              <span className="text-xs font-medium">Read More</span>
              <h1 className="text-base font-semibold"></h1>
            </a>
          </div>
        </div>
        <div
          id="article-item"
          className="w-[360px] h-[400px] shadow-cardShadow rounded-2xl overflow-hidden group"
        >
          <div className="relative overflow-hidden cursor-pointer">
            <div className="absolute z-10 flex items-center justify-center w-full h-full transition duration-300 bg-black/0 group-hover:bg-black/60 group-active:bg-black/80">
              <h1 className="text-white font-semibold text-lg shadow-2xl translate-x-[999px] group-hover:translate-x-0 transition duration-300">
                Read this article
              </h1>
            </div>
            <img
              src="images/HomePage/ArticleTips/article3.jpg"
              alt=""
              className="w-full max-h-[200px] group-hover:scale-125 transition-transform duration-300 object-cover"
            />
          </div>
          <div id="article-body" className="flex flex-col gap-3 p-5">
            <div id="article-title" className="flex flex-col">
              <h2 className="text-xs font-medium">March 13, 2024</h2>
              <h1 className="text-base font-semibold text-secondary">
                Cappadocia
              </h1>
            </div>
            <p id="article-text" className="text-xs font-normal text-black">
              {truncateText(
                'Cappadocia, sebuah wilayah yang terletak di jantung Turki, terkenal dengan pemandangan alamnya yang unik dan menakjubkan. Wilayah ini dipenuhi dengan formasi batu yang disebut sebagai "chimneys" yang terbentuk dari erosi selama ribuan tahun. Selain itu, Cappadocia juga terkenal dengan kota bawah tanahnya yang luas, gereja-gereja kuno yang diukir dalam batu, dan penerbangan balon udara yang menawarkan pemandangan luar biasa dari udara. Keindahan alam dan kekayaan sejarahnya menjadikan Cappadocia sebagai destinasi yang harus dikunjungi bagi para wisatawan yang ingin mengalami kombinasi petualangan, sejarah, dan budaya.'
              )}
            </p>
            <a
              href="blog-detail.html"
              className="flex items-center gap-4 mt-5 text-black/60"
            >
              <span className="text-xs font-medium">Read More</span>
              <h1 className="text-base font-semibold"></h1>
            </a>
          </div>
        </div>
      </div>
      <Link
        to="https://www.hipwee.com/tag/destinasi-wisata/"
        className="h-[54px] px-9 bg-primary-60 rounded-xl text-xl font-medium text-white flex items-center hover:bg-primaryDark active:bg-primaryDarker"
      >
        Read the Article
      </Link>
    </section>
  );
}

export default ArticleTipsSection;
