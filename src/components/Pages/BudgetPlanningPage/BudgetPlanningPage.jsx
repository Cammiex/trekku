import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/BudgetPlanningPage/HeroSection';
import ProductHeaderSection from '../../Layout/BudgetPlanningPage/ProductHeaderSection';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BudgetFormSection from '../../Layout/BudgetPlanningPage/BudgetFormSection';
import FloatButton from '../../Fragments/FloatButton/FloatButton';

const BudgetPlanningPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = [
        {
          id: 1,
          img: 'images/OpenTripPage/OpenTripList/open-trip1.jpg',
          itemName: 'Open Trip Labuan Bajo',
          organizer: 'Nusantara Tour',
          location: 'NTT',
          duration: '3 days 2 nights',
          order: '123',
          image1: '/images/DetailOpenTripPage/opentrip-detail-img1.jpg',
          image2: '/images/DetailOpenTripPage/opentrip-detail-img2.jpg',
          image3: '/images/DetailOpenTripPage/opentrip-detail-img3.jpg',
          image4: '/images/DetailOpenTripPage/opentrip-detail-img4.jpg',
          image5: '/images/DetailOpenTripPage/opentrip-detail-img5.jpg',
          information:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          destination:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          facility:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          accommodation:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          preparation:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n',
          date: '22-24 March 2024',
          price: 600000,
        },
        {
          id: 2,
          img: 'images/OpenTripPage/OpenTripList/open-trip1.jpg',
          itemName: 'Open Trip Labuan Bajo',
          organizer: 'Nusantara Tour',
          location: 'NTT',
          duration: '3 days 2 nights',
          order: '123',
          image1: '/images/DetailOpenTripPage/opentrip-detail-img1.jpg',
          image2: '/images/DetailOpenTripPage/opentrip-detail-img2.jpg',
          image3: '/images/DetailOpenTripPage/opentrip-detail-img3.jpg',
          image4: '/images/DetailOpenTripPage/opentrip-detail-img4.jpg',
          image5: '/images/DetailOpenTripPage/opentrip-detail-img5.jpg',
          information:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          destination:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          facility:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          accommodation:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          preparation:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n',
          date: '22-24 March 2024',
          price: 600000,
        },
        {
          id: 3,
          img: 'images/OpenTripPage/OpenTripList/open-trip1.jpg',
          itemName: 'Bojo Galak',
          organizer: 'Nusantara Tour',
          location: 'NTT',
          duration: '3 days 2 nights',
          order: '123',
          image1: '/images/DetailOpenTripPage/opentrip-detail-img1.jpg',
          image2: '/images/DetailOpenTripPage/opentrip-detail-img2.jpg',
          image3: '/images/DetailOpenTripPage/opentrip-detail-img3.jpg',
          image4: '/images/DetailOpenTripPage/opentrip-detail-img4.jpg',
          image5: '/images/DetailOpenTripPage/opentrip-detail-img5.jpg',
          information:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          destination:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          facility:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          accommodation:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n' +
            'Di bawah sinar matahari yang cerah, keindahan alam bawah laut Labuan Bajo terungkap dalam keajaiban warna-warni terumbu karang dan kehidupan laut yang berlimpah. Menyelam di perairannya adalah seperti terjun ke dalam dunia fantasi yang penuh dengan keragaman hayati yang menakjubkan.\n' +
            'Namun, pesona Labuan Bajo tidak hanya terbatas pada keindahan bawah lautnya. Dari puncak bukit-bukit yang menjulang, panorama luas Teluk Labuan Bajo mengejutkan dengan keindahan alamnya yang menakjubkan. Di tengah perjalanan ke bukit, mata kita akan dimanjakan dengan hamparan hutan hijau dan pegunungan yang megah, menciptakan lanskap yang memukau.\n' +
            'Selain itu, Labuan Bajo juga menawarkan peluang untuk menjelajahi kebudayaan dan sejarah lokal. Desa-desa nelayan tradisional di sekitar wilayah ini menyambut wisatawan dengan ramah, sementara situs-situs arkeologi kuno memberikan wawasan tentang masa lalu yang kaya akan cerita.\n' +
            'Dengan segala pesonanya, Labuan Bajo adalah tempat yang memikat hati para petualang, pelancong, dan pencinta alam dari seluruh penjuru dunia. Itulah keajaiban dari Labuan Bajo, tempat di mana alam dan kehidupan manusia bersatu dalam harmoni yang indah.',
          preparation:
            'Labuan Bajo, sebuah surga tersembunyi di ujung barat Pulau Flores, Indonesia, merangkul pengunjungnya dengan keindahan tak terlukiskan. Saat matahari memancarkan sinarnya yang lembut di langit biru, deretan perahu phinisi berlabuh di pelabuhan, siap membawa petualang ke petualangan yang menakjubkan. Angin sepoi-sepoi laut meniup lembut, membawa aroma segar dari lautan yang memikat.\n',
          date: '20240824',
          price: 500000,
        },
      ];

      const foundTrip = tripData.find((trip) => trip.id === parseInt(id));
      setTrip(foundTrip);
    };

    fetchTrip();
  }, [id]);

  if (!trip) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <FloatButton />
      <main className="flex flex-col items-center">
        <HeroSection />
        <ProductHeaderSection
          name={trip?.itemName}
          location={trip?.location}
          image1={trip?.image1}
          image2={trip?.image2}
          image3={trip?.image3}
          image4={trip?.image4}
          image5={trip?.image5}
        />
        <BudgetFormSection price={trip?.price} date={trip?.date} />
      </main>
      <Footer />
    </>
  );
};

export default BudgetPlanningPage;
