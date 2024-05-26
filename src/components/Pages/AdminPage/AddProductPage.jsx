import AdminNavbar from '../../Fragments/Navbar/AdminNavbar';
import ContentSection from '../../Layout/AdminPage/AddProductPage/ContentSection';
import HeaderSection from '../../Layout/AdminPage/ProductPage/HeaderSection';

const AddProductPage = () => {
  return (
    <div className="flex">
      <AdminNavbar />
      <div className="flex flex-col w-full gap-3 px-6 pt-10 mb-20">
        <HeaderSection />
        <ContentSection />
      </div>
    </div>
  );
};

export default AddProductPage;
