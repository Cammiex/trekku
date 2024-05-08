import { useEffect, useState } from 'react';

function SplashScreen() {
  const bgImage = 'images/SplashScreen/bg-image.jpg';
  const iconImg = [
    'images/SplashScreen/packing.png',
    'images/SplashScreen/explore.png',
    'images/SplashScreen/travel.png',
  ];
  const [animate, setAnimate] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate('opacity-100');
    }, 10); // Penundaan selama 2 detik

    return () => clearTimeout(timer); // Bersihkan timer saat komponen dihancurkan
  }, []);

  return (
    <div className="h-[100vh] pt-[60px] pb-[52px] pl-[204px] pr-[100px] relative">
      <div className="absolute inset-0 size-full z-[-1] top-0 left-0 overflow-hidden">
        <img src={bgImage} alt="" />
      </div>
      <div
        className={`${animate} flex flex-col transition duration-[2000ms] opacity-0 size-full`}
      >
        <h1 className="text-[44px] font-extrabold leading-[44px] text-white self-end">
          Trekku
        </h1>
        <div className="flex flex-col gap-10">
          <p className="text-[60px] font-extrabold mt-[48px] leading-[78px]">
            Make A Journey <br /> Explore{' '}
            <span className="text-[#F9F871]">Indonesia</span> <br />
            With Trekku
          </p>
          <button className="rounded-[57px] size-fit px-[54px] py-3 bg-white text-black text-[24px] font-bold uppercase hover:bg-white/80 active:scale-95 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="mt-[37px] flex gap-[18px] self-center">
          {iconImg.map((element, index) => (
            <div
              key={index}
              className="w-[102px] h-[85px] bg-[rgb(200,200,200,0.5)] rounded-[38px] flex items-center justify-center"
            >
              <img src={element} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
