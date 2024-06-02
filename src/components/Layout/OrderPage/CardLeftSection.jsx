const CardLeftSection = () => {
  return (
    <div className="w-[300px] h-[421px] rounded-2xl bg-white shadow-cardShadow flex flex-col overflow-hidden items-center text-black">
      <div className="w-full h-[186px] bg-red-500"></div>
      <div className="w-[268px] h-[203px] flex flex-col mt-3">
        <h1 className="mb-6 font-semibold">Explore NTT - Labuan Bajo</h1>
        <div className="flex flex-col gap-2 pb-5 border-b-2 border-dashed border-neutral-20">
          <div className="w-full h-fit rounded-lg py-2 px-4 text-primary-100 text-[14px] font-medium bg-neutral-10">
            Tidak Bisa Reschedule
          </div>
          <div className="w-full h-fit rounded-lg py-2 px-4 text-primary-100 text-[14px] font-medium bg-neutral-10">
            Tidak Bisa Refund
          </div>
        </div>
        <button className="w-full py-2 mt-4 rounded-lg h-fit bg-neutral-10 text-neutral-40 text-[14px] font-medium">
          Lihat Detail Open Trip
        </button>
      </div>
    </div>
  );
};

export default CardLeftSection;
