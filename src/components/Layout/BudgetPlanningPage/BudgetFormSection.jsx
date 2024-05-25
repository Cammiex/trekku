import PropTypes from 'prop-types';
import { useState } from 'react';

const BudgetFormSection = ({ price }) => {
  const fixedPrice = price.toLocaleString('id-ID');
  const [souvenir, setSouvenir] = useState('');
  const [eat, setEat] = useState('');
  const [other, setOther] = useState('');
  const [shopping, setShopping] = useState('');
  const [extraAct, setExtraAct] = useState('');

  const handleSouvenirChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setSouvenir(Number(value).toLocaleString('id-ID'));
  };
  const handleEatChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setEat(Number(value).toLocaleString('id-ID'));
  };
  const handleOtherChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setOther(Number(value).toLocaleString('id-ID'));
  };
  const handleShoppingChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setShopping(Number(value).toLocaleString('id-ID'));
  };
  const handleExtraActChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setExtraAct(Number(value).toLocaleString('id-ID'));
  };

  return (
    <section className="mt-[34px] rounded-2xl w-[1240px] h-[713px] shadow-cardShadow p-12 flex flex-col">
      <h1 className="text-neutral-80 text-[40px] font-bold">
        Rencanakan Anggaran Anda dengan Mudah!
      </h1>
      <div className="flex flex-col mt-[24px]">
        <h1 className="text-[#595959] text-[24px] font-semibold">
          Harga Paket Open Trip
        </h1>
        <h1 className="text-primary-70 text-[40px] font-bold mt-5">
          Rp{fixedPrice}
        </h1>
        <h1 className="text-[#FF0F0F] text-[20px] font-medium">
          *3 Bulan dari Sekarang
        </h1>
      </div>
      <div className="flex flex-col mt-6">
        <h1 className="text-[24px] font-semibold text-[#595959]">
          Pengeluaran Tambahan
        </h1>
        <div
          id="budget-form"
          className="grid grid-cols-3 gap-y-4 max-w-[754px] mt-6"
        >
          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="souvenir"
              className="text-neutral-80 text-[20px] font-medium"
            >
              Souvenir
            </label>
            <input
              type="text"
              name="souvenir"
              id="souvenir"
              value={souvenir}
              onChange={handleSouvenirChange}
              className="w-[215px] h-12 py-3 pr-3 pl-14 rounded-[6px] text-neutral-80 focus:ring-0 focus:border-none border-none focus:shadow-fieldFocus shadow-inputShadow"
              placeholder="0.00"
            />
            <h1 className="absolute bottom-3 left-3 text-neutral-80">Rp</h1>
            <div className="absolute w-[1px] h-[39px] bg-black/50 bottom-1 left-[42px]"></div>
          </div>
          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="eat"
              className="text-neutral-80 text-[20px] font-medium"
            >
              Makan & Minum
            </label>
            <input
              type="text"
              name="eat"
              id="eat"
              value={eat}
              onChange={handleEatChange}
              className="w-[215px] h-12 py-3 pr-3 pl-14 rounded-[6px] text-neutral-80 focus:ring-0 focus:border-none border-none focus:shadow-fieldFocus shadow-inputShadow"
              placeholder="0.00"
            />
            <h1 className="absolute bottom-3 left-3 text-neutral-80">Rp</h1>
            <div className="absolute w-[1px] h-[39px] bg-black/50 bottom-1 left-[42px]"></div>
          </div>
          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="other"
              className="text-neutral-80 text-[20px] font-medium"
            >
              Lain-lain
            </label>
            <input
              type="text"
              name="other"
              id="other"
              value={other}
              onChange={handleOtherChange}
              className="w-[215px] h-12 py-3 pr-3 pl-14 rounded-[6px] text-neutral-80 focus:ring-0 focus:border-none border-none focus:shadow-fieldFocus shadow-inputShadow"
              placeholder="0.00"
            />
            <h1 className="absolute bottom-3 left-3 text-neutral-80">Rp</h1>
            <div className="absolute w-[1px] h-[39px] bg-black/50 bottom-1 left-[42px]"></div>
          </div>
          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="shopping"
              className="text-neutral-80 text-[20px] font-medium"
            >
              Belanja
            </label>
            <input
              type="text"
              name="shopping"
              id="shopping"
              value={shopping}
              onChange={handleShoppingChange}
              className="w-[215px] h-12 py-3 pr-3 pl-14 rounded-[6px] text-neutral-80 focus:ring-0 focus:border-none border-none focus:shadow-fieldFocus shadow-inputShadow"
              placeholder="0.00"
            />
            <h1 className="absolute bottom-3 left-3 text-neutral-80">Rp</h1>
            <div className="absolute w-[1px] h-[39px] bg-black/50 bottom-1 left-[42px]"></div>
          </div>
          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="extra"
              className="text-neutral-80 text-[20px] font-medium"
            >
              Aktivitas Ekstra
            </label>
            <input
              type="text"
              name="extra"
              id="extra"
              value={extraAct}
              onChange={handleExtraActChange}
              className="w-[215px] h-12 py-3 pr-3 pl-14 rounded-[6px] text-neutral-80 focus:ring-0 focus:border-none border-none focus:shadow-fieldFocus shadow-inputShadow"
              placeholder="0.00"
            />
            <h1 className="absolute bottom-3 left-3 text-neutral-80">Rp</h1>
            <div className="absolute w-[1px] h-[39px] bg-black/50 bottom-1 left-[42px]"></div>
          </div>
        </div>
      </div>
      <button className="size-fit px-[54px] py-[17px] rounded-xl bg-primary-60 mt-[46px] self-center active:scale-95 transition-all">
        Hitung Anggaran Anda!
      </button>
    </section>
  );
};

BudgetFormSection.propTypes = {
  price: PropTypes.string,
};

export default BudgetFormSection;
