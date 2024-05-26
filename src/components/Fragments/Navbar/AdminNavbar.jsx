import {
  faUser,
  faBarChart,
  faCreditCard,
  faFolder,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faXmark,
  faChartBar,
  faUser as faUserBold,
  faCreditCard as faCreditCardBold,
  faFolder as faFolderBold,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const currentPage = location.pathname;
  // const currentPage = location.pathname.split('/').pop();

  return (
    <header
      className={
        isOpen
          ? 'w-[320px] flex flex-col py-5 pl-5 pr-4 gap-11 h-[100vh] shadow-cardShadow transition-all duration-300 bg-white sticky top-0'
          : 'w-[78px] flex flex-col py-5 pl-5 pr-4 gap-11 h-[100vh] shadow-cardShadow transition-all duration-300 bg-white sticky top-0'
      }
    >
      <div className="flex items-center justify-between">
        {isOpen ? (
          <h1 className="text-[22px] font-extrabold text-secondary select-none">
            Trekku<span className="text-primary-60">Admin</span>
          </h1>
        ) : (
          ''
        )}

        <button
          onClick={handleOpen}
          className="flex items-center justify-center transition-all rounded-full size-10 hover:bg-neutral-40/20 active:scale-95"
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="transition-all text-neutral-80 size-6"
          />
        </button>
      </div>
      <div className="flex flex-col flex-grow w-full gap-2">
        {isOpen ? (
          <>
            <Link
              to="/admin"
              className="flex items-center gap-6 hover:bg-secondary hover:text-white text-neutral-60 size-full rounded-[4px] h-fit py-3 px-3 cursor-pointer aria-[current=page]:bg-secondary aria-[current=page]:text-white"
              aria-current={
                currentPage.includes('dashboard') ? 'page' : undefined
              }
            >
              <FontAwesomeIcon icon={faBarChart} className="size-[20px]" />
              <h1 className="text-[18px] font-semibold">Dashboard</h1>
            </Link>
            <div
              className="flex items-center gap-6 hover:bg-secondary hover:text-white text-neutral-60 size-full rounded-[4px] h-fit py-3 px-3 cursor-pointer aria-[current=page]:bg-secondary aria-[current=page]:text-white"
              aria-current={currentPage.includes('users') ? 'page' : undefined}
            >
              <FontAwesomeIcon icon={faUser} className="size-[20px]" />
              <h1 className="text-[18px] font-semibold">Users</h1>
            </div>
            <div
              className="flex items-center gap-6 hover:bg-secondary hover:text-white text-neutral-60 size-full rounded-[4px] h-fit py-3 px-3 cursor-pointer aria-[current=page]:bg-secondary aria-[current=page]:text-white"
              aria-current={currentPage.includes('orders') ? 'page' : undefined}
            >
              <FontAwesomeIcon icon={faCreditCard} className="size-[20px]" />
              <h1 className="text-[18px] font-semibold">Orders</h1>
            </div>
            <Link
              to="/admin/products"
              className="flex items-center gap-6 hover:bg-secondary hover:text-white text-neutral-60 size-full rounded-[4px] h-fit py-3 px-3 cursor-pointer aria-[current=page]:bg-secondary aria-[current=page]:text-white"
              aria-current={
                currentPage.includes('products') ? 'page' : undefined
              }
            >
              <FontAwesomeIcon icon={faFolder} className="size-[20px]" />
              <h1 className="text-[18px] font-semibold">Products</h1>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/admin"
              className="flex items-center self-end justify-center px-3 py-3 transition-all duration-300 rounded-full cursor-pointer size-fit hover:bg-secondary hover:text-white text-neutral-60 aria-[current=page]:bg-secondary aria-[current=page]:text-white"
              aria-current={
                currentPage.includes('dashboard') ? 'page' : undefined
              }
            >
              <FontAwesomeIcon icon={faChartBar} className="size-[20px]" />
            </Link>
            <div
              className="flex items-center self-end justify-center px-3 py-3 transition-all duration-300 rounded-full cursor-pointer size-fit hover:bg-secondary hover:text-white text-neutral-60 aria-[current=page]:bg-secondary aria-[current=page]:text-white"
              aria-current={currentPage.includes('users') ? 'page' : undefined}
            >
              <FontAwesomeIcon icon={faUserBold} className="size-[20px]" />
            </div>
            <div
              className="flex items-center self-end justify-center px-3 py-3 transition-all duration-300 rounded-full cursor-pointer size-fit hover:bg-secondary hover:text-white text-neutral-60 aria-[current=page]:bg-secondary aria-[current=page]:text-white"
              aria-current={currentPage.includes('orders') ? 'page' : undefined}
            >
              <FontAwesomeIcon
                icon={faCreditCardBold}
                className="size-[20px]"
              />
            </div>
            <Link
              to="/admin/products"
              className="flex items-center self-end justify-center px-3 py-3 transition-all duration-300 rounded-full cursor-pointer size-fit hover:bg-secondary hover:text-white text-neutral-60 aria-[current=page]:bg-secondary aria-[current=page]:text-white"
              aria-current={
                currentPage.includes('products') ? 'page' : undefined
              }
            >
              <FontAwesomeIcon icon={faFolderBold} className="size-[20px]" />
            </Link>
          </>
        )}
      </div>
      {isOpen ? (
        <Link
          to="/"
          className="flex items-center gap-6 hover:bg-secondary hover:text-white text-neutral-60 size-full rounded-[4px] h-fit py-3 px-3 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="size-[20px]"
          />
          <h1 className="text-[18px] font-semibold">Back to Home</h1>
        </Link>
      ) : (
        <Link
          to="/"
          className="flex items-center self-end justify-center px-3 py-3 transition-all duration-300 rounded-full cursor-pointer size-fit hover:bg-secondary hover:text-white text-neutral-60"
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="size-[20px]"
          />
        </Link>
      )}
      {isOpen ? (
        <div className="self-center">
          <h1 className="text-neutral-80 text-[10px]">
            Copyright © 2024 Trekku. All rights reserved.
          </h1>
        </div>
      ) : (
        ''
      )}
    </header>
  );
};

export default AdminNavbar;
