// import Footer from '../../Fragments/Footer/Footer';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import InformationSection from '../../Layout/ProfilePage/InformationSection';
import SidebarSection from '../../Layout/ProfilePage/SidebarSection';

const ProfilePage = () => {
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
          <InformationSection />
        </div>{' '}
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
