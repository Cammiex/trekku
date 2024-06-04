import { useParams } from 'react-router-dom';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import RiwayatPembelianSection from '../../Layout/ProfilePage/RiwayatPembelian/RiwayatPembelianSection';
import SidebarSection from '../../Layout/ProfilePage/SidebarSection';

const RiwayatPembelianPage = () => {
  const { id } = useParams();
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
          <RiwayatPembelianSection id={id} />
        </div>{' '}
        <Footer />
      </div>
    </>
  );
};

export default RiwayatPembelianPage;
