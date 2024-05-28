import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { Modal } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
const apiUrl = import.meta.env.VITE_API_URL;

const AvatarIcon = ({ name }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="size-[46px] ring-2 ring-white/75 rounded-full bg-white flex items-center justify-center relative">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="size-[44px] object-cover object-center text-[#5D5D5D]"
        />
      </div>
      <h1 className="text-base font-semibold">{name}</h1>
    </div>
  );
};

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [token, setToken] = useState('');
  // const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  const firstname =
    name.split(' ')[0].charAt(0).toUpperCase() + name.split(' ')[0].slice(1);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await axios.get(`${apiUrl}/token`);
        // setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setEmail(decoded.email);
        // setExpire(decoded.exp);
        return true;
      } catch (error) {
        if (error.response) {
          return false;
        }
      }
    };

    const isUserLoggedIn = async () => {
      const result = await refreshToken();
      setIsLogin(!!result);
    };

    isUserLoggedIn();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.delete(`${apiUrl}/logout`);
      setIsLogin(false);
      setName('');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 150) {
        header.classList.add(
          'backdrop-blur-sm',
          'backdrop-brightness-50',
          'top-0'
        );
      } else {
        header.classList.remove(
          'backdrop-blur-sm',
          'backdrop-brightness-50',
          'top-0'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const currentPage = location.pathname.split('/');

  return (
    <>
      <header className="px-[100px] py-2 flex items-center justify-between w-full fixed top-0 transition duration-300 z-40 select-none">
        <h1 className="text-[44px] font-extrabold text-white select-none">
          Trekku
        </h1>
        <nav className="flex items-center gap-10">
          <Link
            id="home-link"
            to="/"
            aria-current={currentPage.includes('home') ? 'page' : undefined}
            className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
          >
            Beranda
          </Link>
          <Link
            id="opentrip-link"
            to="/open-trip"
            aria-current={
              currentPage.includes('open-trip') ? 'page' : undefined
            }
            className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
          >
            Open Trip
          </Link>
          <Link
            id="about-link"
            to="/about-us"
            aria-current={currentPage.includes('about-us') ? 'page' : undefined}
            className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
          >
            Tentang Kami
          </Link>
        </nav>
        <Dropdown
          label={
            <AvatarIcon
              className=""
              name={isLogin ? `Hai, ${firstname}!` : 'Tamu'}
            />
          }
          arrowIcon={false}
          inline
          className="group rounded-[12px] overflow-hidden"
          placement="bottom"
        >
          {isLogin ? (
            <>
              <Dropdown.Header className="pl-8">
                <span className="block text-base font-semibold select-text">
                  {name}
                </span>
                <span className="block text-base font-medium truncate select-text">
                  {email}
                </span>
              </Dropdown.Header>
              <div className="w-[240px] h-[0.5px] bg-black/40"></div>
              <Dropdown.Item className="hover:text-primary-60 text-[16px] font-semibold w-full p-0">
                <Link to="/profile" className="py-4 pl-8 text-left size-full">
                  {' '}
                  Profil{' '}
                </Link>
              </Dropdown.Item>
              <div className="w-full h-[1px] bg-black/40"></div>
              <Dropdown.Item
                onClick={() => setOpenModal(true)}
                className="hover:text-red-700 text-red-600 text-[16px] font-semibold w-full py-4 pl-8"
              >
                Keluar
              </Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Item className="hover:text-primary-60 text-[16px] font-semibold w-[174px]">
                <Link to="/login" className="block py-2 text-left size-full">
                  {' '}
                  Masuk{' '}
                </Link>
              </Dropdown.Item>
              <div className="w-full h-[1px] bg-black/40"></div>
              <Dropdown.Item className="hover:text-primary-60 text-[16px] font-semibold w-[174px] ">
                <Link to="/register" className="block py-2 text-left size-full">
                  {' '}
                  Daftar{' '}
                </Link>
              </Dropdown.Item>
            </>
          )}
        </Dropdown>
      </header>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div id="popup-logout" className="z-[51]">
            <div
              id="pop-up-box"
              className="w-[459px] h-[359px] bg-white rounded-lg py-9 px-[42px] flex flex-col gap-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
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
                  onClick={() => setOpenModal(false)}
                  className="w-[144px] py-3 px-5 h-fit rounded-xl text-secondary text-xl font-medium hover:text-secondary/70 active:scale-90 transition"
                >
                  Batalkan
                </button>
                <button
                  onClick={handleLogout}
                  className="w-[144px] py-3 px-5 h-fit rounded-xl text-white text-xl font-medium bg-red-700 hover:bg-red-800 active:scale-90 transition"
                >
                  Ya, Logout
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

AvatarIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
