import FloatButton from '../../Fragments/FloatButton/FloatButton';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import ContentSection from '../../Layout/ArticleDetailPage/ContentSection';
import HeroSection from '../../Layout/ArticleDetailPage/HeroSection';

const ArticleDetailPage = () => {
  return (
    <>
      <Navbar />
      <FloatButton />
      <HeroSection />
      <main className="flex flex-col items-center w-full">
        <ContentSection />
      </main>
      <Footer />
    </>
  );
};

export default ArticleDetailPage;
