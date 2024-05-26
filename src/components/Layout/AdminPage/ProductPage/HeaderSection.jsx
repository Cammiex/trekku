import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

const HeaderSection = () => {
  const today = moment().format('ll');

  return (
    <div className="flex items-center justify-between w-full px-3">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faCalendar} className="text-neutral-60 size-6" />
        <h1 className="font-medium text-neutral-60 text-[14px]">{today}</h1>
      </div>
    </div>
  );
};

export default HeaderSection;
