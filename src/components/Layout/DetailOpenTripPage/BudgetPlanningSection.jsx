import { Link } from 'react-router-dom';

const BudgetPlanningSection = () => {
  return (
    <section className="w-[1240px] h-[340px] rounded-2xl shadow-cardShadow relative overflow-hidden select-none mt-6">
      <img
        src="/images/DetailOpenTripPage/budget-planning-hero.png"
        alt=""
        className="absolute inset-0 z-0 object-cover object-center size-full"
      />
      <Link className="size-fit px-[42px] py-5 rounded-xl bg-[#F0F2F6] z-20 text-[20px] font-medium text-primary-100 absolute right-[50px] bottom-[35px] active:scale-90 transition-all">
        COBA SEKARANG!
      </Link>
    </section>
  );
};

export default BudgetPlanningSection;
