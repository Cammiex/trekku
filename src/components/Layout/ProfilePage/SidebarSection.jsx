import { useLocation } from 'react-router-dom';

const SidebarSection = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className="w-[336px] min-h-[630px] max-h-fit bg-white rounded-2xl text-black py-8 shadow-cardShadow ">
      <div className="px-9">
        <h1 className="font-semibold text-[24px]">Profil</h1>
      </div>
      <div className="flex flex-col mt-5">
        <div
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
          aria-current={
            currentPage.includes('information') ? 'page' : undefined
          }
        >
          <img
            src="/images/ProfilePage/user-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Informasi Akun</h1>
        </div>
        <div
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
          aria-current={currentPage.includes('purchased') ? 'page' : undefined}
        >
          <img
            src="/images/ProfilePage/cart-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Riwayat Pembelian</h1>
        </div>
        <div
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
          aria-current={currentPage.includes('wishlist') ? 'page' : undefined}
        >
          <img
            src="/images/ProfilePage/wishlist-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="text-medium">Wishlist</h1>
        </div>
        <div
          className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]"
          aria-current={currentPage.includes('help') ? 'page' : undefined}
        >
          <img
            src="/images/ProfilePage/help-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Bantuan</h1>
        </div>
        <div className="w-full h-[56px] px-12 flex gap-3 items-center cursor-pointer hover:bg-[#E3F4FF] aria-[current=page]:bg-[#E3F4FF] aria-[current=page]:border-primary-40 aria-[current=page]:border-b-[4px]">
          <img
            src="/images/ProfilePage/logout-icon.png"
            alt=""
            className="size-6"
          />
          <h1 className="font-medium">Keluar dari Akun</h1>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
