import moment from 'moment';

const HeaderSection = () => {
  const today = moment().format('DD MMMM YYYY').replace('May', 'Mei');

  return (
    <div className="flex items-center justify-between w-full px-3">
      <div className="flex items-center gap-2">
        <h1 className="font-medium text-neutral-60 text-[14px]">
          Hari ini adalah {today}
        </h1>
      </div>
    </div>
  );
};

export default HeaderSection;
