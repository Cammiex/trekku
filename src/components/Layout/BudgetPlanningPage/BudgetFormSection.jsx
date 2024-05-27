import moment from 'moment';
import PropTypes from 'prop-types';
import { useState } from 'react';

const OutputBudgetPlanning = ({
  tripPrice,
  addPrice,
  allTotalPrice,
  month,
  monthlySave,
  week,
  weeklySave,
  day,
  daySave,
}) => {
  const [calculate, setCalculate] = useState('false');

  const handleCalculate = () => {
    setCalculate(!calculate);
  };

  if (!calculate) {
    return (
      <>
        <div className="w-full bg-neutral-20 h-[3px] mb-[56px] mt-[56px]"></div>
        <div className="flex gap-[46px]">
          <div className="flex flex-col gap-6 w-[535px]">
            <h1 className="text-neutral-80 font-semibold text-[32px]">
              Dana yang Harus Dikumpulkan
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] text-neutral-80 font-semibold">
                  Paket Open Trip
                </h1>
                <h1 className="text-[20px] font-semibold text-neutral-40">
                  Rp{tripPrice}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] text-neutral-80 font-semibold">
                  Pengeluaran Tambahan
                </h1>
                <h1 className="text-[20px] font-semibold text-neutral-40">
                  Rp{addPrice}
                </h1>
              </div>
            </div>
            <div className="w-full bg-neutral-20 h-[2px] -mt-3"></div>
            <div className="flex justify-between">
              <h1 className="text-neutral-80 font-bold text-[32px]">Total</h1>
              <h1 className="text-[32px] font-bold text-[#F96A01]">
                Rp{allTotalPrice}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[535px] text-black">
            <h1 className="text-neutral-80 font-semibold text-[32px]">
              Opsi Menabung
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] text-neutral-80 font-semibold">
                  ● Per Bulan ({month}x)
                </h1>
                <h1 className="text-[20px] font-semibold text-neutral-40">
                  Rp{monthlySave}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] text-neutral-80 font-semibold">
                  ● Per Minggu ({week}x)
                </h1>
                <h1 className="text-[20px] font-semibold text-neutral-40">
                  Rp{weeklySave}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] text-neutral-80 font-semibold">
                  ● Per Hari ({day}x)
                </h1>
                <h1 className="text-[20px] font-semibold text-neutral-40">
                  Rp{daySave}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <button
        onClick={handleCalculate}
        className="size-fit px-[54px] py-[17px] rounded-xl bg-primary-60 mt-[46px] self-center active:scale-95 transition-all"
      >
        Hitung Anggaran Anda!
      </button>
    );
  }
};

OutputBudgetPlanning.propTypes = {
  tripPrice: PropTypes.number,
  addPrice: PropTypes.number,
  allTotalPrice: PropTypes.number,
  month: PropTypes.number,
  monthlySave: PropTypes.number,
  week: PropTypes.number,
  weeklySave: PropTypes.number,
  day: PropTypes.number,
  daySave: PropTypes.number,
};

const BudgetFormSection = ({ price, date }) => {
  const fixedPrice = Number(price).toLocaleString('id-ID');
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

  // const timeDifference = moment(date, 'YYYYMMDD').fromNow(true);
  // const timeDifferenceInIndonesian = timeDifference
  //   .replace('a few seconds', 'beberapa detik')
  //   .replace('seconds', 'detik')
  //   .replace('a minute', 'semenit')
  //   .replace('minutes', 'menit')
  //   .replace('an hour', 'sejam')
  //   .replace('hours', 'jam')
  //   .replace('a day', 'sehari')
  //   .replace('days', 'hari')
  //   .replace('a month', 'sebulan')
  //   .replace('months', 'Bulan')
  //   .replace('a year', 'setahun')
  //   .replace('years', 'tahun');

  const now = moment();
  const targetDate = moment(date, 'YYYYMMDD');
  const duration = moment.duration(targetDate.diff(now));

  const months = Math.floor(duration.asMonths());
  const weeks = Math.floor(duration.asWeeks());
  const days = Math.floor(duration.asDays());

  const parseLocaleNumber = (str) => {
    return Number(str.replace(/\./g, ''));
  };

  const additionalPayment =
    (souvenir ? parseLocaleNumber(souvenir) : 0) +
    (eat ? parseLocaleNumber(eat) : 0) +
    (other ? parseLocaleNumber(other) : 0) +
    (shopping ? parseLocaleNumber(shopping) : 0) +
    (extraAct ? parseLocaleNumber(extraAct) : 0);

  const totalPrice = price + additionalPayment;

  const perMonth = totalPrice / months;
  const perWeek = totalPrice / weeks;
  const perDay = totalPrice / days;

  const convertedPerMonth = parseFloat(perMonth.toFixed(0));
  const convertedPerWeek = parseFloat(perWeek.toFixed(0));
  const convertedPerDay = parseFloat(perDay.toFixed(0));

  const fixedPerMonth = convertedPerMonth.toLocaleString('id-ID');
  const fixedPerWeek = convertedPerWeek.toLocaleString('id-ID');
  const fixedPerDay = convertedPerDay.toLocaleString('id-ID');

  const convertedAdditionalPayment = additionalPayment.toLocaleString('id-ID');

  const convertedTotalPrice = totalPrice.toLocaleString('id-ID');

  return (
    <section className="mt-[34px] rounded-2xl w-[1240px] min-h-[713px] h-fit shadow-cardShadow p-12 flex flex-col">
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
          *
          {months === 0
            ? weeks === 0
              ? `${days} Hari dari Sekarang`
              : `${weeks} Minggu dari Sekarang`
            : `${months} Bulan dari Sekarang`}
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
      <OutputBudgetPlanning
        tripPrice={fixedPrice}
        addPrice={convertedAdditionalPayment}
        allTotalPrice={convertedTotalPrice}
        month={months}
        monthlySave={fixedPerMonth}
        week={weeks}
        weeklySave={fixedPerWeek}
        day={days}
        daySave={fixedPerDay}
      />
    </section>
  );
};

BudgetFormSection.propTypes = {
  price: PropTypes.string,
  date: PropTypes.string,
};

export default BudgetFormSection;
