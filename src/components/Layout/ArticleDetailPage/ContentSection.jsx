import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContentSection = ({
  title,
  writter,
  img1,
  img2,
  text_head,
  text_footer,
  text_body,
}) => {
  return (
    <div
      id="content"
      className="w-full mt-[71px] flex flex-col gap-10 items-center text-black"
    >
      <div id="title" className="w-[1244px]">
        <Link
          to={`/`}
          className="flex items-center gap-5 w-fit h-[30px] select-none self-start"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-neutral-80" />
          <h1 className="text-[20px] font-medium text-neutral-80">Kembali</h1>
        </Link>
        <h1 className="text-[50px] font-bold text-black">{title}</h1>
        <p className="text-base font-medium text-black">Penulis: {writter}</p>
      </div>
      <div
        id="main-content"
        className="flex flex-col items-center gap-[60px] w-full"
      >
        <div id="content-wrapper" className="flex max-w-[1244px] gap-10 group">
          <div
            id="image"
            className="w-[53%] h-[336px] overflow-hidden shadow-cardShadow group-hover:scale-95 transition duration-500"
          >
            <img
              src={img1}
              alt=""
              className="object-cover object-center transition duration-500 size-full group-hover:scale-110"
            />
          </div>
          <p className="text-base font-medium w-[47%] text-justify">
            {text_head}
          </p>
        </div>
        <div
          id="content-wrapper"
          className="flex flex-row-reverse max-w-[1244px] gap-10 group"
        >
          <div
            id="image"
            className="w-[47%] h-[384px] overflow-hidden shadow-cardShadow group-hover:scale-95 transition duration-500"
          >
            <img
              src={img2}
              alt=""
              className="object-cover object-center transition duration-500 size-full group-hover:scale-110"
            />
          </div>
          <div id="text" className="w-[53%]">
            <p className="text-base font-medium text-justify">{text_body}</p>
          </div>
        </div>
        <div className="max-w-[1244px]">
          <p className="text-base font-medium text-justify">{text_footer}</p>
        </div>
      </div>
    </div>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string,
  writter: PropTypes.string,
  img1: PropTypes.string,
  img2: PropTypes.string,
  text_head: PropTypes.string,
  text_footer: PropTypes.string,
  text_body: PropTypes.string,
};

export default ContentSection;
