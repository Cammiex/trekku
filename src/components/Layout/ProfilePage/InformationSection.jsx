import { useState } from 'react';

const InformationSection = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <section className="w-[797px] h-[630px] rounded-2xl bg-white shadow-cardShadow pl-10 pr-7 pt-8 text-black flex flex-col">
      <h1 className="text-[24px] font-semibold">Informasi Akun</h1>
      <div className="flex items-center gap-6 mt-10">
        <div className="size-[111px] rounded-full bg-neutral-40"></div>
        <div className="flex flex-col gap-[7px]">
          <button className="w-[112px] h-10 text-[14px] font-semibold text-neutral-30 flex items-center gap-[10px] px-[14px] py-2 border-2 border-neutral-40 rounded-lg active:scale-95 transition-all duration-300">
            <img
              src="/images/ProfilePage/pencil-icon.png"
              alt=""
              className="size-6"
            />
            <h1>Ganti</h1>
          </button>
          <button className="w-[112px] h-10 text-[14px] font-semibold text-neutral-30 flex items-center gap-[10px] px-[14px] py-2 border-2 border-neutral-40 rounded-lg active:scale-95 transition-all duration-300">
            <img
              src="/images/ProfilePage/trash-icon.png"
              alt=""
              className="size-6"
            />
            <h1>Hapus</h1>
          </button>
        </div>
      </div>
      <form action="" className="mt-[38px]">
        <div className="grid grid-cols-2 gap-x-[29px] gap-y-6">
          {' '}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="fullname"
              className="font-medium text-[20px] text-neutral-80"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name=""
              id="fullname"
              className="w-[350px] h-12 rounded-md shadow-inputShadow border-none"
              placeholder="Nama"
              autoComplete="off"
              disabled={isEdit ? false : true}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="telp"
              className="font-medium text-[20px] text-neutral-80"
            >
              No. Telpon
            </label>
            <input
              type="text"
              name=""
              id="telp"
              className="w-[350px] h-12 rounded-md shadow-inputShadow border-none"
              placeholder="0821"
              autoComplete="off"
              disabled={isEdit ? false : true}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-medium text-[20px] text-neutral-80"
            >
              Email
            </label>
            <input
              type="text"
              name=""
              id="email"
              className="w-[350px] h-12 rounded-md shadow-inputShadow border-none"
              placeholder="john@mail.com"
              autoComplete="off"
              disabled={isEdit ? false : true}
            />
          </div>
        </div>
        <div className="flex gap-[18px]">
          {isEdit ? (
            <>
              <div
                onClick={handleEdit}
                className="w-[161px] h-[54px] rounded-xl border border-primary-70 text-primary-70 text-[20px] font-medium mt-8 flex items-center justify-center active:scale-90 transition-all duration-300 cursor-pointer"
              >
                Batal
              </div>
              <button className="w-[161px] h-[54px] rounded-xl bg-primary-70 text-white text-[20px] font-medium mt-8 active:scale-90 transition-all duration-300 cursor-pointer">
                Perbarui
              </button>
            </>
          ) : (
            <div
              onClick={handleEdit}
              className="w-[161px] h-[54px] rounded-xl bg-primary-70 text-white text-[20px] font-medium mt-8 flex items-center justify-center active:scale-90 transition-all duration-300 cursor-pointer"
            >
              Edit Profil
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default InformationSection;
