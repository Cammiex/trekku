import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeaderContentSection from '../../Layout/DetailOpenTripPage/HeaderContentSection';
import HeroSection from '../../Layout/DetailOpenTripPage/HeroSection';
import InformationSection from '../../Layout/DetailOpenTripPage/InformationSection';
import RatingHeaderSection from '../../Layout/DetailOpenTripPage/RatingHeaderSection';
import BookDetailSection from '../../Layout/DetailOpenTripPage/BookDetailSection';
import ReviewsSection from '../../Layout/DetailOpenTripPage/ReviewsSection';
import BudgetPlanningSection from '../../Layout/DetailOpenTripPage/BudgetPlanningSection';

const OpenTripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    // Fetch data based on the trip ID
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
      <main className="flex flex-wrap justify-center">
        <HeroSection />
        <div
          id="content"
          className="w-full mt-[71px] flex flex-col items-center max-w-[1240px] text-black"
        >
          {' '}
          <HeaderContentSection
            name={trip?.itemName}
            location={trip?.location}
            image1={trip?.image1}
            image2={trip?.image2}
            image3={trip?.image3}
            image4={trip?.image4}
            image5={trip?.image5}
          />
          <InformationSection
            information={trip?.information}
            destination={trip?.destination}
            facility={trip?.facility}
            accommodation={trip?.accommodation}
            preparation={trip?.preparation}
          />
          <div className="flex gap-4 mt-6">
            <RatingHeaderSection />
            <BookDetailSection
              location={trip?.location}
              duration={trip?.duration}
              price={trip?.price}
              date={trip?.date}
            />
          </div>
          <BudgetPlanningSection />
          <ReviewsSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OpenTripDetail;
