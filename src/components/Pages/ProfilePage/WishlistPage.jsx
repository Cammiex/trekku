import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import SidebarSection from '../../Layout/ProfilePage/SidebarSection';
import Wishlist from '../../Layout/ProfilePage/Wishlist/Wishlist';

const WishlistPage = () => {
  const bgImage = '/images/ProfilePage/bg-profile.png';

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-fit bg-center bg-no-repeat bg-cover pt-[136px] flex flex-col items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div id="profile-wrapper" className="flex items-center gap-5">
          <SidebarSection />
          <Wishlist />
        </div>{' '}
        <Footer />
      </div>
    </>
  );
};

export default WishlistPage;
