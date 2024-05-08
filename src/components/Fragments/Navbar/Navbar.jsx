import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';

const AvatarIcon = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="size-[46px] ring-2 ring-white/75 rounded-full bg-white flex items-center justify-center relative">
        <img
          src="images/AuthPage/guest-profile.png"
          alt=""
          className="size-[44px] absolute top-0 left-0"
        />
      </div>
      <h1 className="text-base font-semibold">Guest</h1>
    </div>
  );
};

function Navbar() {
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
          to="/opentrip"
          aria-current={currentPage.includes('opentrip') ? 'page' : undefined}
          className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
        >
          Open Trip
        </Link>
        <Link
          id="destination-link"
          aria-current={
            currentPage.includes('destination') ? 'page' : undefined
          }
          className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
        >
          Destinations
        </Link>
        <Link
          id="about-link"
          aria-current={currentPage.includes('about') ? 'page' : undefined}
          className="text-[20px] font-semibold aria-[current=page]:text-black aria-[current=page]:bg-white aria-[current=page]:opacity-90 aria-[current=page]:shadow-inset px-5 py-3 rounded-3xl hover:text-black hover:bg-white hover:opacity-90 hover:shadow-inset hover:shadow-dropbox transition duration-100 active:opacity-80 focus:text-black focus:bg-white focus:opacity-90 focus:shadow-inset focus:shadow-dropbox"
        >
          About Us
        </Link>
      </nav>
      <Dropdown
        label={<AvatarIcon className="" />}
        arrowIcon={false}
        inline
        className="group rounded-[12px] overflow-hidden"
      >
        <Dropdown.Item className="hover:text-primary text-[16px] font-semibold w-[179px] py-5">
          Log In
        </Dropdown.Item>
        <div className="w-full h-[1px] bg-black/40"></div>
        <Dropdown.Item className="hover:text-primary text-[16px] font-semibold w-[179px] py-5">
          Register
        </Dropdown.Item>
      </Dropdown>
    </header>
  );
}

export default Navbar;
