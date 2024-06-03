const LeftPaymentConfirmSection = () => {
  return (
    <section className="w-[654px] h-fit rounded-2xl bg-white shadow-cardShadow flex flex-col overflow-hidden text-black">
      <div className="w-full h-[64px] flex gap-2 items-center justify-center bg-primary-20">
        <h1 className="font-medium text-neutral-40">
          Yuk selesaikan pembayaran dalam
        </h1>
        <h1 className="font-semibold text-primary-90">00:59:45</h1>
      </div>
      <div className="w-full h-[652px] flex flex-col p-8 gap-7">
        <h1 className="text-[24px] font-medium">Mohon Transfer ke</h1>
        <div className="flex flex-col w-full overflow-hidden rounded-t-xl">
          <div className="flex items-center w-full h-10 px-5 font-medium bg-primary-10">
            Bank Central Asia (BCA)
          </div>
          <div className="flex flex-col w-full px-5 mt-2">
            <h1 className="text-neutral-40 font-medium text-[14px]">
              Mohon pilih Online Transfer sebagai tipe transfer Anda.
            </h1>
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center justify-between">
                <h1 className="font-medium text-[14px] w-[121px]">
                  Nomor Rekening:
                </h1>
                <h1 className="font-medium text-[14px] w-[143px]">
                  084 123 1234
                </h1>
                <h1 className="text-[14px] w-9 font-semibold text-primary-60">
                  Salin
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-medium text-[14px] w-[121px]">
                  Nama Penerima:
                </h1>
                <h1 className="font-medium text-[14px] w-[143px]">
                  PT. Trekku Indonesia
                </h1>
                <h1 className="text-[14px] w-9 font-semibold text-primary-60"></h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-medium text-[14px] w-[121px]">
                  Jumlah Transfer:
                </h1>
                <h1 className="font-medium text-[14px] w-[143px]">505.123</h1>
                <h1 className="text-[14px] w-9 font-semibold text-primary-60">
                  Salin
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <h1 className="text-[#FFB119] text-[14px] font-semibold">
                Penting!
              </h1>
              <h1 className="text-[12px] font-medium text-[#5D5D5D]">
                Mohon transfer sampai 3 digit terakhir
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-[24px] font-medium">Sudah selesai bayar?</h1>
        <div className="w-full rounded-lg h-[163px] border-2 border-neutral-10 px-7 py-5 gap-7 flex flex-col">
          <h1 className="text-neutral-40 text-[14px] font-medium">
            Kalau pembayaranmu sudah dikonfirmasi, kami akan mengirimkan
            e-ticket dan bukti pembayaran ke emailmu.
          </h1>
          <button className="w-full py-2 rounded-lg h-fit bg-primary-60 text-white text-[14px] font-semibold active:scale-95 transition-all duration-150">
            Ya, Saya Sudah Bayar
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeftPaymentConfirmSection;
