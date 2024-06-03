import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardRightSection = () => {
  const [ticket, setTicket] = useState(0);

  const handleAddTicket = () => {
    setTicket(ticket + 1);
  };
  const handleReduceTicket = () => {
    setTicket(ticket - 1);
  };

  return (
    <div className="w-[868px] rounded-2xl bg-white h-fit pb-10 shadow-cardShadow flex flex-col overflow-hidden items-center">
      <div className="w-full h-[94px] bg-primary-10 border-b-2 border-neutral-10 flex flex-col items-center justify-center py-4 gap-2">
        <h1 className="font-semibold text-neutral-30">
          Tanggal Kunjungan 22 - 24 Maret 2024
        </h1>
        <h1 className="text-[20px] font-semibold text-neutral-70">
          22 - 24 Maret 2024
        </h1>
      </div>
      <div className="w-[788px] flex flex-col mt-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <h1 className="font-medium text-neutral-40">Dewasa</h1>
            <h1 className="text-neutral-70 font-semibold text-[24px] mt-1">
              Rp500.000
            </h1>
            <h2 className="text-neutral-40 text-[12px] font-medium mt-2">
              (Usia 18 tahun ke atas)
            </h2>
          </div>
          <div className="w-[91px] h-[26.76px] flex">
            <button
              onClick={handleReduceTicket}
              className="size-[26.76px] rounded-l-[5.35px] bg-primary-70 flex justify-center items-center active:scale-90 transition-all duration-150 disabled:bg-neutral-20"
              disabled={ticket == 0 ? true : false}
            >
              <FontAwesomeIcon icon={faMinus} className="w-[10px]" />
            </button>
            <div className="w-[37.47px] h-full flex justify-center items-center bg-white text-black font-bold">
              {ticket}
            </div>
            <button
              onClick={handleAddTicket}
              className="size-[26.76px] rounded-r-[5.35px] bg-primary-70 flex justify-center items-center active:scale-90 transition-all duration-150"
            >
              <FontAwesomeIcon icon={faPlus} className="w-[10px]" />
            </button>
          </div>
        </div>
        <div className="w-full h-[3px] bg-neutral-20 my-10"></div>
        <div className="flex flex-col">
          <h1 className="text-neutral-40 font-semibold text-[20px]">
            Harga Total
          </h1>
          <h2 className="text-[#F96A01] text-[32px] font-semibold mt-2">
            Rp500.000
          </h2>
        </div>
        <div className="flex items-center justify-between w-full mt-1">
          <div className="flex gap-[190px] items-center">
            <h1 className="font-medium text-neutral-40">Dewasa (1x)</h1>
            <h1 className="font-semibold text-neutral-70">Rp500.000</h1>
          </div>
          <Link
            to="/order-summary"
            className="px-6 py-3 size-fit bg-primary-60 rounded-xl text-[20px] font-semibold"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardRightSection;
