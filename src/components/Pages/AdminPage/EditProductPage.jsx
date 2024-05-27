import AdminNavbar from '../../Fragments/Navbar/AdminNavbar';
import ContentSection from '../../Layout/AdminPage/EditProductPage/ContentSection';
import HeaderSection from '../../Layout/AdminPage/ProductPage/HeaderSection';

const EditProductPage = () => {
  return (
    <div className="flex">
      <AdminNavbar />
      <div className="flex flex-col w-full gap-3 px-6 pt-10 mb-20">
        {' '}
        <HeaderSection />
        <ContentSection />
      </div>
    </div>
  );
};

export default EditProductPage;
