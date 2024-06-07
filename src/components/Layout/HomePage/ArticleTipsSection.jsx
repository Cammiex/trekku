import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const apiUrl = import.meta.env.VITE_API_URL;

const truncateText = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

const ArticleCard = ({ writter, title, desc, date, img, id }) => {
  const navigate = useNavigate();

  const truncatedDesc = truncateText(desc, 18);

  return (
    <div
      onClick={() => navigate(`/article/${id}`)}
      id="article-item"
      className="w-[400px] h-[465px] shadow-cardShadow2 rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <div className="absolute z-10 flex items-center justify-center w-full h-full transition duration-300 bg-black/0 group-hover:bg-black/60 group-active:bg-black/80">
          <h1 className="text-white font-semibold text-lg shadow-2xl translate-x-[999px] group-hover:translate-x-0 transition duration-300">
            Read this article
          </h1>
        </div>
        <img
          src={img}
          alt=""
          className="w-full max-h-[200px] group-hover:scale-125 transition-transform duration-300 object-cover"
        />
      </div>
      <div id="article-body" className="flex flex-col gap-3 p-5">
        <div id="article-title" className="flex flex-col">
          <h2 className="text-[14px] font-medium text-neutral-80">{writter}</h2>
          <h1 className="text-[20px] font-semibold text-secondary">{title}</h1>
        </div>
        <p id="article-text" className="text-xs font-normal text-neutral-500">
          {truncatedDesc}
        </p>
        <a href="blog-detail.html" className="flex items-center gap-4 mt-5">
          <span className="text-[14px] font-normal text-black">
            {date} Agustus 2024
          </span>
        </a>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  writter: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.number,
  img: PropTypes.string,
  id: PropTypes.number,
};

function ArticleTipsSection() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/article`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      id="article&tips"
      className="flex flex-col mt-[100px] gap-10 items-center"
    >
      <h1 className="text-secondary text-[32px] font-bold">Artikel</h1>
      <div id="article-list" className="flex flex-wrap gap-10">
        {data?.map((item) => (
          <ArticleCard
            key={item.id}
            title={item.title}
            writter={item.writter_name}
            desc={item.text_head}
            date={item.id}
            img={item.article_imgs[0].url_img}
            id={item.id}
          />
        ))}
      </div>
      <Link
        to="https://www.hipwee.com/tag/destinasi-wisata/"
        className="h-[54px] px-9 bg-primary-60 rounded-xl text-xl font-medium text-white flex items-center hover:bg-primaryDark active:bg-primaryDarker"
      >
        Baca Artikel Lain
      </Link>
    </section>
  );
}

export default ArticleTipsSection;
