import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-col w-full">
      <div
        id="footer-content"
        className="flex flex-col px-[100px] sm:p-4 py-10 w-full h-fit bg-[#383838] items-center mt-[120px]"
      >
        <div className="w-full">
          <h1 className="text-white font-extrabold text-[68px] sm:text-[32px]">
            Trekku
          </h1>
        </div>
        <div
          id="footer-list"
          className="flex flex-wrap justify-between w-full gap-11 sm:mt-6"
        >
          <div id="footer-item" className="mr-[52px]">
            <div id="partner-wrapper" className="flex flex-col gap-7">
              <div id="partner" className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-white">Mitra</h1>
                <img
                  src="/images/Footer/partner1.png"
                  alt=""
                  className="max-h-[82px] w-[200px]"
                />
              </div>
              <div id="payment-partner" className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-white">
                  Mitra Pembayaran
                </h1>
                <div
                  id="payment-partner-list"
                  className="grid grid-cols-4 gap-2"
                >
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/bca.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/bni.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/bri.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/cimb.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/mandiri.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/permata.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/briva.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/indomaret.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/alfamart.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/alfamidi.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/dana.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                  <div
                    id="payment-partner-item"
                    className="flex justify-center items-center w-[88px] h-10 sm:w-[66px] sm:h-[30px] sm:rounded-sm bg-white rounded-md"
                  >
                    <img
                      src="/images/Footer/gopay.png"
                      alt=""
                      className="scale-75"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="footer-item" className="flex flex-col flex-wrap gap-3">
            <h1 className="text-xl font-semibold text-white">
              Informasi kontak
            </h1>
            <div id="contact-list" className="flex flex-col gap-5">
              <div
                id="contact-item"
                className="flex items-center gap-5 opacity-40 hover:opacity-100"
              >
                <img
                  src="/images/Footer/telp.svg"
                  alt=""
                  className="max-w-9 max-h-9"
                />
                <div id="contact-text" className="flex flex-col gap-1">
                  <h1 className="text-base font-medium text-white">Telepon</h1>
                  <h1 className="text-base font-semibold text-white">
                    +62 2118 24322
                  </h1>
                </div>
              </div>
              <div
                id="contact-item"
                className="flex items-center gap-5 opacity-40 hover:opacity-100"
              >
                <img
                  src="/images/Footer/whatsapp.svg"
                  alt=""
                  className="max-w-9 max-h-9"
                />
                <div id="contact-text" className="flex flex-col gap-1">
                  <h1 className="text-base font-medium text-white">Whatsapp</h1>
                  <h1 className="text-base font-semibold text-white">
                    +62 813 2190 3281
                  </h1>
                </div>
              </div>
              <div
                id="contact-item"
                className="flex items-center gap-5 opacity-40 hover:opacity-100"
              >
                <img
                  src="/images/Footer/mail.svg"
                  alt=""
                  className="max-w-9 max-h-9"
                />
                <div id="contact-text" className="flex flex-col gap-1">
                  <h1 className="text-base font-medium text-white">E-mail</h1>
                  <h1 className="text-base font-semibold text-white">
                    trekku@gmail.com
                  </h1>
                </div>
              </div>
              <div
                id="contact-item"
                className="flex items-center gap-5 opacity-40 hover:opacity-100"
              >
                <img
                  src="/images/Footer/location.svg"
                  alt=""
                  className="max-w-9 max-h-9"
                />
                <div id="contact-text" className="flex flex-col gap-1">
                  <h1 className="text-base font-medium text-white">Lokasi</h1>
                  <h1 className="text-base font-semibold text-white">
                    Dolan Street. The Ngasal Avenue. <br />
                    Jakarta, Indonesia
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            id="footer-item"
            className="flex flex-col flex-wrap gap-3 sm:order-first"
          >
            <h1 className="text-xl font-semibold text-white">Menu</h1>
            <div id="link-list" className="flex flex-col gap-6">
              <Link to="/">
                <div
                  id="link-item"
                  className="flex items-center gap-3 opacity-40 group hover:opacity-100"
                >
                  {/* <img
                    src="/images/Footer/trip.svg"
                    alt=""
                    className="w-9 h-9"
                  /> */}
                  <FontAwesomeIcon icon={faHome} className="size-8" />
                  <h1 className="text-base font-medium text-white group-hover:underline">
                    Beranda
                  </h1>
                </div>
              </Link>
              <Link to="/open-trip">
                <div
                  id="link-item"
                  className="flex items-center gap-3 opacity-40 group hover:opacity-100"
                >
                  <img
                    src="/images/Footer/trip.svg"
                    alt=""
                    className="w-9 h-9"
                  />
                  <h1 className="text-base font-medium text-white group-hover:underline">
                    Open Trip
                  </h1>
                </div>
              </Link>
              {/* <Link to="/destination">
              <div
                id="link-item"
                className="flex items-center gap-3 opacity-40 group hover:opacity-100"
              >
                <img src="/images/Footer/loc2.svg" alt="" className='scale-75'className="w-9 h-9" />
                <h1 className="text-base font-medium text-white group-hover:underline">
                  Destinations
                </h1>
              </div>
            </Link> */}
              <Link to="/about-us">
                <div
                  id="link-item"
                  className="flex items-center gap-3 opacity-40 group hover:opacity-100"
                >
                  <img
                    src="/images/Footer/msg.svg"
                    alt=""
                    className="w-9 h-9"
                  />
                  <h1 className="text-base font-medium text-white group-hover:underline">
                    Tentang Kami
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          <div id="footer-item" className="flex flex-col flex-wrap gap-3">
            <h1 className="text-xl font-semibold text-white">Ikuti kami</h1>
            <div id="social-list" className="flex flex-col gap-6">
              <a href="#">
                <div id="social-item" className="flex items-center gap-3 group">
                  <img
                    src="/images/Footer/ig.png"
                    alt=""
                    className="w-9 h-9 grayscale group-hover:grayscale-0"
                  />
                  <h1 className="text-base font-medium text-white group-hover:underline opacity-40 group-hover:opacity-100">
                    Instagram
                  </h1>
                </div>
              </a>
              <a href="#">
                <div id="social-item" className="flex items-center gap-3 group">
                  <img
                    src="/images/Footer/fb.png"
                    alt=""
                    className="w-9 h-9 grayscale group-hover:grayscale-0"
                  />
                  <h1 className="text-base font-medium text-white group-hover:underline opacity-40 group-hover:opacity-100">
                    Facebook
                  </h1>
                </div>
              </a>
              <a href="#">
                <div id="social-item" className="flex items-center gap-3 group">
                  <img
                    src="/images/Footer/yt.png"
                    alt=""
                    className="w-9 h-9 grayscale group-hover:grayscale-0"
                  />
                  <h1 className="text-base font-medium text-white group-hover:underline opacity-40 group-hover:opacity-100">
                    Youtube
                  </h1>
                </div>
              </a>
              <a href="#">
                <div id="social-item" className="flex items-center gap-3 group">
                  <img
                    src="/images/Footer/twitter.png"
                    alt=""
                    className="w-9 h-9 opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                  <h1 className="text-base font-medium text-white group-hover:underline opacity-40 group-hover:opacity-100">
                    Twitter
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-16 sm:h-9 flex items-center justify-center bg-[#2B2B2B]">
        <h1 className="font-medium text-white sm:text-[8px]">
          Copyright © 2024 Trekku. Semua hak cipta.
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
