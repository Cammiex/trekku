import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';
import PropTypes from 'prop-types';

const LeftContentSection = ({ name, img, location, date }) => {
  return (
    <div
      className="w-[483px] h-full p-10 relative bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-between h-full p-10">
        {' '}
        <h1 className="text-white font-semibold text-[40px] text-pretty">
          {name}
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} />
            <h1 className="text-white font-medium text-[19px]">{location}</h1>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faCalendarDays} />
            <h1 className="text-white font-medium text-[19px]">
              {moment(date).format('DD MM YYYY')}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

LeftContentSection.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
};

export default LeftContentSection;
