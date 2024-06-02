const DetailPengunjungCard = () => {
  return (
    <div className="w-full h-[542px] bg-white rounded-2xl shadow-cardShadow p-10 flex flex-col">
      <h1 className="text-[24px] font-medium">Dewasa 1</h1>
      <div className="flex flex-col w-full mt-7 gap-7">
        <div className="flex flex-col gap-1">
          <h1 className="text-neutral-80 text-[20px] font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
            Titel
          </h1>
          <select
            name=""
            id=""
            className="w-[320px] h-12 bg-white border-none ring-0 focus:ring-0 shadow-inputShadow rounded-md"
          >
            <option value="" disabled selected>
              Pilih Panggilan Anda
            </option>
            <option value="">Tuan</option>
            <option value="">Nyonya</option>
          </select>
        </div>
        <div className="flex flex-col">
          <h1 className="text-neutral-80 text-[20px] font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
            Nama Lengkap
          </h1>
          <input
            type="text"
            name=""
            id=""
            className="w-full border-none rounded-md ring-0 shadow-inputShadow"
            placeholder="Ketik disini..."
          />
          <h1 className="text-neutral-40 text-[14px] mt-1">
            (tanpa gelar dan tanda baca)
          </h1>
        </div>
        <div className="flex w-full gap-3">
          <div className="flex flex-col">
            <h1 className="text-neutral-80 text-[20px] font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
              No. Handphone
            </h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Ketik disini..."
              className="w-[289px] border-none rounded-md ring-0 shadow-inputShadow"
            />
            <h1 className="text-neutral-40 text-[14px] mt-1">
              Contoh: +62812345678, untuk Kode Negara (+62) dan No. Handphone
              0812345678
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-neutral-80 text-[20px] font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
              Email
            </h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Ketik disini..."
              className="w-[289px] border-none rounded-md ring-0 shadow-inputShadow"
            />
            <h1 className="text-neutral-40 text-[14px] mt-1">
              Contoh: email@example.com
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftFormSection = () => {
  return (
    <div className="w-[654px] flex flex-col text-black mt-8 gap-8">
      <div className="flex flex-col">
        <h1 className="text-[40px] font-bold">Pemesanan Anda</h1>
        <h1 className="font-medium">Isi data Anda dan review pesanan Anda.</h1>
      </div>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-[32px] font-semibold">Data Pemesan</h1>
        <div className="w-full h-[416px] bg-white rounded-2xl shadow-cardShadow p-8 flex flex-col">
          <h1 className="text-[24px] font-medium">
            Data Pemesan (untuk E-tiket/Voucher)
          </h1>
          <div className="flex flex-col w-full mt-7 gap-7">
            <div className="flex flex-col">
              <h1 className="text-neutral-80 text-[20px] font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                Nama Lengkap
              </h1>
              <input
                type="text"
                name=""
                id=""
                className="w-full border-none rounded-md ring-0 shadow-inputShadow"
                placeholder="Ketik disini..."
              />
              <h1 className="text-neutral-40 text-[14px] mt-1">
                (tanpa gelar dan tanda baca)
              </h1>
            </div>
            <div className="flex w-full gap-3">
              <div className="flex flex-col">
                <h1 className="text-neutral-80 text-[20px] font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                  No. Handphone
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Ketik disini..."
                  className="w-[289px] border-none rounded-md ring-0 shadow-inputShadow"
                />
                <h1 className="text-neutral-40 text-[14px] mt-1">
                  Contoh: +62812345678, untuk Kode Negara (+62) dan No.
                  Handphone 0812345678
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-neutral-80 text-[20px] font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                  Email
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Ketik disini..."
                  className="w-[289px] border-none rounded-md ring-0 shadow-inputShadow"
                />
                <h1 className="text-neutral-40 text-[14px] mt-1">
                  Contoh: email@example.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-[32px] font-semibold">Detail Pengunjung</h1>
        <DetailPengunjungCard />
      </div>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-[32px] font-semibold">Detail Lokasi</h1>
        <div className="flex flex-col w-full gap-3 p-5 bg-white h-fit rounded-2xl shadow-cardShadow">
          <div className="w-full h-[160px] rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3983.116164114627!2d114.62029807503107!3d-3.3214609966533546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMTknMTcuMyJTIDExNMKwMzcnMjIuMyJF!5e0!3m2!1sen!2sid!4v1717337809878!5m2!1sen!2sid"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full rounded-xl"
            ></iframe>
          </div>
          <h1 className="font-medium text-neutral-60">Labuan Bajo</h1>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-[32px] font-semibold">Rincian Harga</h1>
        <div className="w-full h-[128px] bg-white rounded-2xl shadow-cardShadow"></div>
      </div>
      <button className="px-6 py-3 size-fit rounded-xl bg-primary-60 text-[20px] font-semibold self-end text-white">
        Lanjut ke Pembayaran
      </button>
    </div>
  );
};

export default LeftFormSection;
