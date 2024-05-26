import AdminNavbar from '../../Fragments/Navbar/AdminNavbar';
import ContentSection from '../../Layout/AdminPage/ProductPage/ContentSection';
import HeaderSection from '../../Layout/AdminPage/ProductPage/HeaderSection';

const ProductPage = () => {
  return (
    <div className="flex">
      <AdminNavbar />
      <div className="flex flex-col w-full gap-3 px-6 pt-10">
        {' '}
        <HeaderSection />
        <ContentSection />
      </div>
    </div>
  );
};

export default ProductPage;
