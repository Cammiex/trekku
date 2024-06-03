import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const LogoutPopUp = ({ handlePopUpLogout, isPop }) => {
  return (
    <div
      id="popup-logout"
      className={
        isPop
          ? 'fixed inset-0 z-40 flex items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
          : 'fixed inset-0 z-40 hidden items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
      }
    >
      <div
        id="pop-up-box"
        className="w-[459px] h-[359px] bg-white rounded-lg py-9 px-[42px] flex flex-col gap-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
      >
        <div className="flex flex-col gap-[18px] items-center">
          <img
            src="/images/HomePage/logout-img.png"
            alt=""
            className="w-[77px] h-[77px]"
          />
          <h1 className="text-secondary font-semibold text-[28px] text-center">
            Sampai bertemu kembali!
          </h1>
          <p className="mt-2 text-base font-semibold text-center text-black">
            Apakah Anda yakin ingin keluar dari akun Anda?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <button
            onClick={handlePopUpLogout}
            className="w-[144px] py-3 px-5 h-fit rounded-xl text-secondary text-xl font-medium hover:text-secondary/70 active:scale-90 transition"
          >
            Batalkan
          </button>
          <button className="w-[144px] py-3 px-5 h-fit rounded-xl text-white text-xl font-medium bg-red-700 hover:bg-red-800 active:scale-90 transition">
            Ya, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

LogoutPopUp.propTypes = {
  handlePopUpLogout: PropTypes.func,
  isPop: PropTypes.bool,
};

const SidebarSection = () => {
  const { id } = useParams();

  const location = useLocation();
  const currentPage = location.pathname;

  const [popUpLogout, setPopUpLogout] = useState(false);

  const handlePopUpLogout = () => {
    setPopUpLogout(!popUpLogout);
  };

  return (
    <div className="w-[336px] min-h-[630px] max-h-fit bg-white rounded-2xl text-black py-8 shadow-cardShadow ">
      <LogoutPopUp handlePopUpLogout={handlePopUpLogout} isPop={popUpLogout} />
      <div className="px-9">
        <h1 className="font-semibold text-[24px]">Profil</h1>
      </div>
      <div className="flex flex-col mt-5">
        <Link
          to={`/profile/information/${id}`}
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
          aria-current={
            currentPage.includes('information') ? 'page' : undefined
          }
        >
          <img
            src="/images/ProfilePage/user-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Informasi Akun</h1>
        </Link>
        <div
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
          aria-current={currentPage.includes('purchased') ? 'page' : undefined}
        >
          <img
            src="/images/ProfilePage/cart-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Riwayat Pembelian</h1>
        </div>
        <Link
          to={`/profile/wishlist/${id}`}
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
          aria-current={currentPage.includes('wishlist') ? 'page' : undefined}
        >
          <img
            src="/images/ProfilePage/wishlist-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Favorit</h1>
        </Link>
        <Link
          to={`/profile/help/${id}`}
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
          aria-current={currentPage.includes('help') ? 'page' : undefined}
        >
          <img
            src="/images/ProfilePage/help-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Bantuan</h1>
        </Link>
        <div
          onClick={handlePopUpLogout}
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-red-300 aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
        >
          <img
            src="/images/ProfilePage/logout-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Keluar dari Akun</h1>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
