const ContentSection = () => {
  return (
    <div
      id="content"
      className="w-full mt-[71px] flex flex-col gap-10 items-center text-black"
    >
      <div id="title" className="w-[1244px]">
        <h1 className="text-[50px] font-bold text-black">
          Banda Neira, Surga di Timur Indonesia
        </h1>
        <p className="text-base font-medium text-black">
          Penulis: Imam Muzakir
        </p>
      </div>
      <div
        id="main-content"
        className="flex flex-col items-center gap-[60px] w-full"
      >
        <div id="content-wrapper" className="flex max-w-[1244px] gap-10 group">
          <div
            id="image"
            className="w-[53%] h-[336px] overflow-hidden shadow-cardShadow group-hover:scale-95 transition duration-500"
          >
            <img
              src="/images/DetailArticlePage/blog-detail-img1.png"
              alt=""
              className="object-cover object-center transition duration-500 size-full group-hover:scale-110"
            />
          </div>
          <p className="text-base font-medium w-[47%] text-justify">
            Pulau Banda Neira menyimpan sejuta keindahan alam Indonesia nan
            eksotis. Di pulau ini pula sejarah bangsa Indonesia penting pernah
            terjadi. Tidak heran bila pulau ini menjadi salah satu tujuan wisata
            memikat bagi wisatawan mancanegara maupun domestik.
            <br />
            <br />
            Banda Neira merupakan pulau di Kepulauan Banda, Maluku Tengah. Pulau
            tropis yang menawarkan lautan, hamparan pasir, terumbu karang, dan
            biota laut yang menawan. Penikmat senja dan pecinta snorkeling wajib
            mengunjungi tempat ini.
            <br />
            <br />
            Tidak berhenti pada kecantikan lautnya saja, Pulau Banda Neira
            menyajikan hamparan hutan tropis dan tumbuhan aromatik. Tidak
            ketinggalan pula di kepulauan ini wisatawan bisa menemukan gunung
            vulkanik aktif yang dapat didaki.
          </p>
        </div>
        <div
          id="content-wrapper"
          className="flex flex-row-reverse max-w-[1244px] gap-10 group"
        >
          <div
            id="image"
            className="w-[47%] h-[384px] overflow-hidden shadow-cardShadow group-hover:scale-95 transition duration-500"
          >
            <img
              src="/images/DetailArticlePage/blog-detail-img2.png"
              alt=""
              className="object-cover object-center transition duration-500 size-full group-hover:scale-110"
            />
          </div>
          <div id="text" className="w-[53%]">
            <p className="text-base font-medium text-justify">
              Berkunjung ke Banda Neira tidak lengkap bila tidak menyusuri
              sejarah peninggalan kolonial karena kepulauan ini menyimpan saksi
              bisu sejarah besar pernah terjadi. Bayangkan saja kota
              metropolitan yang dijuluki The Big Apple pernah diserahkan kepada
              Inggris demi mendapatkan salah satu pulau di kepulauan Banda ini.
              <br />
              <br />
              Keindahan alam dan sejarahnya tentu membuat orang semakin tertarik
              untuk berkunjung ke pulau Banda Neira. Tapi, tenang saja masih
              banyak fakta menarik mengenai pulau ini yang membuat kita semakin
              antusias untuk menjelajahinya.
              <br />
              <br />
              Mengutip dari laman https://kemenparekraf.go.id, Banda Neira
              merupakan salah satu dari sepuluh pulau vulkanik di Kepulauan
              Banda, Provinsi Maluku. Di balik keindahan alamnya, Banda Neira
              pernah menjadi daerah penghasil rempah pala satu-satunya di dunia.
              Sekitar 500 tahun lalu, nilai segenggam pala setara dengan
              segenggam emas.
            </p>
          </div>
        </div>
        <div className="max-w-[1244px]">
          <p className="text-base font-medium text-justify">
            Karena itu Banda Neira menjadi tempat pertama di nusantara yang
            dikuasai Belanda sebelum ke Batavia. Bahkan Banda Neira juga sempat
            menjadi wilayah yang diperebutkan Inggris, Belanda, hingga warga
            lokal untuk mempertahankan wilayah. Akibatnya pada 1609 terjadilah
            perang yang melibatkan warga lokal yang dibantu Inggris untuk
            melawan Belanda. Sayangnya, pertikaian antara Belanda dan Inggris
            tidak kunjung berhenti. Hingga akhirnya terjadilah pertukaran Pulau
            Run di Kepulauan Banda Neira, dengan Nieuw Amsterdam (sekarang
            dikenal dengan Manhattan, New York) demi memonopoli pala. Banda
            Neira juga pernah menjadi tempat pengasingan Bung Hatta dan Sutan
            Syahrir yang dilakukan oleh Belanda pada 1936. Sebelum akhirnya
            dipindahkan ke Rumah Pengasingan Hatta-Sjahrir di Sukabumi pada 1
            Februari 1942 untuk mempersiapkan proklamasi kemerdekaan Indonesia.
            Sungguh fakta sejarah yang menarik mengiringi keindahan Banda Neira.
            Lantas, bagaimana dengan keindahan alamnya? Digadang-gadang
            destinasi wisata Banda Neira, surga di timur Indonesia sebagai
            kawasan yang menjanjikan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
