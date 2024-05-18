import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommenting,
  faTimesCircle,
  faCircleQuestion,
} from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={
          isOpen
            ? 'size-[84px] rounded-full bg-white flex items-center z-[19] justify-center fixed bottom-[202px] right-[24px] transition-all duration-500 scale-100 opacity-100 cursor-pointer shadow-cardShadow'
            : 'size-[84px] rounded-full bg-white flex items-center z-[19] justify-center fixed bottom-4 right-[24px] transition-all duration-500 scale-75 opacity-70'
        }
      >
        <FontAwesomeIcon
          icon={faCircleQuestion}
          className="size-[32px] text-black"
        />
      </div>
      <div
        className={
          isOpen
            ? 'size-[84px] rounded-full bg-[#25D366] flex items-center z-[19] justify-center fixed bottom-[110px] right-[24px] transition-all duration-500 scale-100 opacity-100 cursor-pointer shadow-cardShadow'
            : 'size-[84px] rounded-full bg-[#25D366] flex items-center z-[19] justify-center fixed bottom-4 right-[24px] transition-all duration-500 scale-75 opacity-70'
        }
      >
        <FontAwesomeIcon icon={faWhatsapp} className="size-[32px]" />
      </div>
      <div
        className={
          isOpen
            ? 'size-[84px] rounded-full bg-primary-60 flex items-center z-20 justify-center fixed bottom-4 right-[24px] cursor-pointer transition-all duration-100 active:scale-95 shadow-cardShadow'
            : 'size-[84px] rounded-full bg-primary-60 flex items-center z-20 justify-center fixed bottom-4 right-[24px] cursor-pointer transition-all duration-100 hover:bg-primaryDark active:scale-95 shadow-cardShadow peer'
        }
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimesCircle : faCommenting}
          className="size-[32px] transition-all duration-300"
        />
      </div>
      <div
        className={
          isOpen
            ? 'w-[400px] h-[62px] bg-white text-black text-[20px] font-medium text-left pl-6 py-4 fixed bottom-[27px] right-[76px] z-[19] rounded-l-full rounded-r-2xl transition-all duration-500 shadow-cardShadow'
            : 'w-[0px] h-[62px] bg-white text-transparent text-[20px] font-medium text-left pl-6 py-4 fixed bottom-[27px] right-[76px] z-[19] rounded-l-full rounded-r-2xl transition-all duration-500 shadow-cardShadow peer-hover:w-[400px] peer-hover:text-black'
        }
      >
        <h1
          className={
            isOpen
              ? 'transition-all duration-100 select-none h-7 overflow-hidden'
              : 'transition-all duration-100 select-none h-7 overflow-hidden'
          }
        >
          Halo! Ada yang bisa kami bantu?
        </h1>
      </div>
    </>
  );
};

export default FloatButton;
