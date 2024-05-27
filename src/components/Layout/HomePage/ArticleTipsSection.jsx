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
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="text-secondary text-[32px] font-bold">Artikel</h1>
      <div id="article-list" className="flex flex-wrap gap-10">
        <div
          id="article-item"
          className="w-[400px] h-[465px] shadow-cardShadow2 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <div className="absolute z-10 flex items-center justify-center w-full h-full transition duration-300 bg-black/0 group-hover:bg-black/60 group-active:bg-black/80">
              <h1 className="text-white font-semibold text-lg shadow-2xl translate-x-[999px] group-hover:translate-x-0 transition duration-300">
                Read this article
              </h1>
            </div>
            <img
              src="/images/HomePage/ArticleTips/article1.png"
              alt=""
              className="w-full max-h-[200px] group-hover:scale-125 transition-transform duration-300 object-cover"
            />
          </div>
          <div id="article-body" className="flex flex-col gap-3 p-5">
            <div id="article-title" className="flex flex-col">
              <h2 className="text-[14px] font-medium text-neutral-80">
                Imam Muzakir
              </h2>
              <h1 className="text-[20px] font-semibold text-secondary">
                Banda Neira, Surga di Timur Indonesia
              </h1>
            </div>
            <p
              id="article-text"
              className="text-xs font-normal text-neutral-500"
            >
              {truncateText(
                'Labuan Bajo, sebuah surga tersembunyi di Nusa Tenggara Timur, menawarkan keindahan alam yang memukau dan pengalaman tak terlupakan. Dikelilingi oleh perairan biru kristal dan pulau-pulau kecil yang menawan, Labuan Bajo adalah pintu gerbang menuju Taman Nasional Komodo, rumah bagi komodo, hewan purba yang menakjubkan. Selain itu, Labuan Bajo juga menawarkan berbagai aktivitas menarik seperti menyelam di spot-spot indah, trekking untuk menikmati pemandangan matahari terbenam yang spektakuler, dan berlayar mengelilingi pulau-pulau sekitarnya. Keindahan alam, kekayaan budaya, dan keramahan penduduk setempat menjadikan Labuan Bajo destinasi yang sempurna bagi para petualang yang mencari pengalaman yang berbeda.'
              )}
            </p>
            <a href="blog-detail.html" className="flex items-center gap-4 mt-5">
              <span className="text-[14px] font-normal text-black">
                30 Jan 2022
              </span>
            </a>
          </div>
        </div>
        <div
          id="article-item"
          className="w-[400px] h-[465px] shadow-cardShadow2 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <div className="absolute z-10 flex items-center justify-center w-full h-full transition duration-300 bg-black/0 group-hover:bg-black/60 group-active:bg-black/80">
              <h1 className="text-white font-semibold text-lg shadow-2xl translate-x-[999px] group-hover:translate-x-0 transition duration-300">
                Read this article
              </h1>
            </div>
            <img
              src="/images/HomePage/ArticleTips/article2.png"
              alt=""
              className="w-full max-h-[200px] group-hover:scale-125 transition-transform duration-300 object-cover"
            />
          </div>
          <div id="article-body" className="flex flex-col gap-3 p-5">
            <div id="article-title" className="flex flex-col">
              <h2 className="text-[14px] font-medium text-neutral-80">
                Imam Muzakir
              </h2>
              <h1 className="text-[20px] font-semibold text-secondary">
                Banda Neira, Surga di Timur Indonesia
              </h1>
            </div>
            <p
              id="article-text"
              className="text-xs font-normal text-neutral-500"
            >
              {truncateText(
                'Labuan Bajo, sebuah surga tersembunyi di Nusa Tenggara Timur, menawarkan keindahan alam yang memukau dan pengalaman tak terlupakan. Dikelilingi oleh perairan biru kristal dan pulau-pulau kecil yang menawan, Labuan Bajo adalah pintu gerbang menuju Taman Nasional Komodo, rumah bagi komodo, hewan purba yang menakjubkan. Selain itu, Labuan Bajo juga menawarkan berbagai aktivitas menarik seperti menyelam di spot-spot indah, trekking untuk menikmati pemandangan matahari terbenam yang spektakuler, dan berlayar mengelilingi pulau-pulau sekitarnya. Keindahan alam, kekayaan budaya, dan keramahan penduduk setempat menjadikan Labuan Bajo destinasi yang sempurna bagi para petualang yang mencari pengalaman yang berbeda.'
              )}
            </p>
            <a href="blog-detail.html" className="flex items-center gap-4 mt-5">
              <span className="text-[14px] font-normal text-black">
                30 Jan 2022
              </span>
            </a>
          </div>
        </div>
        <div
          id="article-item"
          className="w-[400px] h-[465px] shadow-cardShadow2 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <div className="absolute z-10 flex items-center justify-center w-full h-full transition duration-300 bg-black/0 group-hover:bg-black/60 group-active:bg-black/80">
              <h1 className="text-white font-semibold text-lg shadow-2xl translate-x-[999px] group-hover:translate-x-0 transition duration-300">
                Read this article
              </h1>
            </div>
            <img
              src="/images/HomePage/ArticleTips/article3.png"
              alt=""
              className="w-full max-h-[200px] group-hover:scale-125 transition-transform duration-300 object-cover"
            />
          </div>
          <div id="article-body" className="flex flex-col gap-3 p-5">
            <div id="article-title" className="flex flex-col">
              <h2 className="text-[14px] font-medium text-neutral-80">
                Imam Muzakir
              </h2>
              <h1 className="text-[20px] font-semibold text-secondary">
                Banda Neira, Surga di Timur Indonesia
              </h1>
            </div>
            <p
              id="article-text"
              className="text-xs font-normal text-neutral-500"
            >
              {truncateText(
                'Labuan Bajo, sebuah surga tersembunyi di Nusa Tenggara Timur, menawarkan keindahan alam yang memukau dan pengalaman tak terlupakan. Dikelilingi oleh perairan biru kristal dan pulau-pulau kecil yang menawan, Labuan Bajo adalah pintu gerbang menuju Taman Nasional Komodo, rumah bagi komodo, hewan purba yang menakjubkan. Selain itu, Labuan Bajo juga menawarkan berbagai aktivitas menarik seperti menyelam di spot-spot indah, trekking untuk menikmati pemandangan matahari terbenam yang spektakuler, dan berlayar mengelilingi pulau-pulau sekitarnya. Keindahan alam, kekayaan budaya, dan keramahan penduduk setempat menjadikan Labuan Bajo destinasi yang sempurna bagi para petualang yang mencari pengalaman yang berbeda.'
              )}
            </p>
            <a href="blog-detail.html" className="flex items-center gap-4 mt-5">
              <span className="text-[14px] font-normal text-black">
                30 Jan 2022
              </span>
            </a>
          </div>
        </div>
      </div>
      <Link
        to="https://www.hipwee.com/tag/destinasi-wisata/"
        className="h-[54px] px-9 bg-primary-60 rounded-xl text-xl font-medium text-white flex items-center hover:bg-primaryDark active:bg-primaryDarker"
      >
        Baca Artikel Lain
      </Link>
    </section>
  );
}

export default ArticleTipsSection;
