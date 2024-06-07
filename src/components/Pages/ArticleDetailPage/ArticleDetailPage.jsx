import { useEffect, useState } from 'react';
import FloatButton from '../../Fragments/FloatButton/FloatButton';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import ContentSection from '../../Layout/ArticleDetailPage/ContentSection';
import HeroSection from '../../Layout/ArticleDetailPage/HeroSection';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

const ArticleDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/article/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <FloatButton />
      <HeroSection />
      <main className="flex flex-col items-center w-full">
        <ContentSection
          title={data?.title}
          writter={data?.writter_name}
          img1={data?.article_imgs[0].url_img}
          img2={data?.article_imgs[1].url_img}
          text_head={data?.text_head}
          text_body={data?.text_body}
          text_footer={data?.text_footer}
        />
      </main>
      <Footer />
    </>
  );
};

export default ArticleDetailPage;
