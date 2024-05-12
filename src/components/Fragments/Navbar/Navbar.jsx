import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

const AvatarIcon = ({ name }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="size-[46px] ring-2 ring-white/75 rounded-full bg-white flex items-center justify-center relative">
        <img
          src="images/AuthPage/guest-profile.png"
          alt=""
          className="size-[44px] absolute top-0 left-0"
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

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
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
    result ? setIsLogin(true) : setIsLogin(false);
  };

  const handleLogout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      setIsLogin(false);
      setName('');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      refreshToken();
      isUserLoggedIn();
    };

    fetchData();
  }, []);

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
  const currentPage = location.pathname.split('/').pop();

  return (
    <header className="px-[100px] py-2 flex items-center justify-between w-full fixed top-0 transition duration-300 z-40">
      <h1 className="text-[44px] font-extrabold text-white">Trekku</h1>
      <nav className="flex items-center gap-10">
        <Link
          id="home-link"
          to="/home"
          aria-current={currentPage.includes('home') ? 'page' : undefined}
          className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
        >
          Home
        </Link>
        <Link
          id="opentrip-link"
          to="/open-trip"
          aria-current={currentPage.includes('open-trip') ? 'page' : undefined}
          className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
        >
          Open Trip
        </Link>
        <Link
          id="destination-link"
          to="/destination"
          aria-current={
            currentPage.includes('destination') ? 'page' : undefined
          }
          className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
        >
          Destinations
        </Link>
        <Link
          id="about-link"
          to="/about-us"
          aria-current={currentPage.includes('about') ? 'page' : undefined}
          className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
        >
          About Us
        </Link>
      </nav>
      <Dropdown
        label={
          <AvatarIcon
            className=""
            name={isLogin ? `Hai, ${firstname}!` : 'Hai, Guest!'}
          />
        }
        arrowIcon={false}
        inline
        className="group rounded-[12px] overflow-hidden"
        placement="bottom"
      >
        {isLogin ? (
          <>
            <Dropdown.Header>
              <span className="block text-base font-semibold">{name}</span>
              <span className="block text-base font-medium truncate">
                {email}
              </span>
            </Dropdown.Header>
            <div className="w-[240px] h-[1px] bg-black/40"></div>
            <Dropdown.Item className="hover:text-primary text-[16px] font-semibold w-full">
              <Link to="/profile" className="py-2">
                {' '}
                Profile{' '}
              </Link>
            </Dropdown.Item>
            <div className="w-full h-[1px] bg-black/40"></div>
            <Dropdown.Item className="hover:text-red-700 text-red-600 text-[16px] font-semibold w-full">
              <Link onClick={handleLogout} className="py-2">
                {' '}
                Logout{' '}
              </Link>
            </Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item className="hover:text-primary text-[16px] font-semibold w-[174px]">
              <Link to="/login" className="block py-2 text-left size-full">
                {' '}
                Log In{' '}
              </Link>
            </Dropdown.Item>
            <div className="w-full h-[1px] bg-black/40"></div>
            <Dropdown.Item className="hover:text-primary text-[16px] font-semibold w-[174px] ">
              <Link to="/register" className="block py-2 text-left size-full">
                {' '}
                Register{' '}
              </Link>
            </Dropdown.Item>
          </>
        )}
      </Dropdown>
    </header>
  );
}

AvatarIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
