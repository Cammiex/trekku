const VoucherSection = ({ name, code, img, discount }) => {
  const formattedDisc = discount * 100;

  return (
    <div className="w-full h-fit rounded-2xl bg-white shadow-cardShadow3 mt-10 px-[56px] py-10 flex flex-col text-black">
      <div className="w-full rounded-2xl h-[370px] cursor-pointer active:scale-95 transition duration-300 shadow-cardShadow overflow-hidden">
        <img
          src={img}
          alt=""
          className="object-cover object-center size-full"
        />
      </div>
      <div className="flex flex-col w-full gap-4 px-6 py-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-90 font-semibold text-[20px]">
            1. Periode Promo
          </h1>
          <ul className="font-medium list-disc pl-9 text-neutral-80">
            <li>Promo berlaku hanya sampai tanggal 11 Juli 2024.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-90 font-semibold text-[20px]">
            2. Ketentuan Umum
          </h1>
          <ul className="font-medium list-disc pl-9 text-neutral-80">
            <li>Promo ini berlaku untuk semua pengguna aplikasi Trekku.</li>
            <li>
              Pengguna akan mendapatkan diskon sebesar {formattedDisc}% dari
              total transaksi.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-90 font-semibold text-[20px]">
            3. Cara Mendapatkan Promo
          </h1>
          <ul className="font-medium list-disc pl-9 text-neutral-80">
            <li>
              Buka aplikasi Trekku dan pilih produk atau layanan yang ingin
              dibeli.
            </li>
            <li>
              Pada halaman pembayaran, masukkan kode voucher &quot;{code}&quot;.
            </li>
            <li>
              Diskon akan otomatis diterapkan pada total transaksi setelah kode
              voucher dimasukkan.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-90 font-semibold text-[20px]">
            4. Kelayakan Promo
          </h1>
          <ul className="font-medium list-disc pl-9 text-neutral-80">
            <li>
              Promo berlaku untuk semua jenis transaksi di aplikasi Trekku,
              kecuali untuk produk atau layanan yang secara khusus dikecualikan
              dari promo ini.
            </li>
            <li>
              Promo hanya berlaku untuk satu kali penggunaan per pengguna selama
              periode promo berlangsung.
            </li>
            <li>
              Promo tidak berlaku untuk transaksi yang dibatalkan atau
              di-refund.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-90 font-semibold text-[20px]">
            5. Ketentuan Tambahan
          </h1>
          <ul className="font-medium list-disc pl-9 text-neutral-80">
            <li>
              Promo tidak dapat digabungkan dengan promo lain yang sedang
              berlangsung di aplikasi Trekku.
            </li>
            <li>
              Promo ini tidak dapat diuangkan atau ditukar dengan barang lain.
            </li>
            <li>
              Trekku berhak untuk mengubah syarat dan ketentuan promo ini tanpa
              pemberitahuan terlebih dahulu.
            </li>
            <li>
              Trekku berhak membatalkan transaksi yang dianggap melanggar syarat
              dan ketentuan atau terindikasi kecurangan.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-90 font-semibold text-[20px]">
            6. Pembatasan Tanggung Jawab
          </h1>
          <ul className="font-medium list-disc pl-9 text-neutral-80">
            <li>
              Trekku tidak bertanggung jawab atas kesalahan transaksi yang
              disebabkan oleh kesalahan pengguna atau gangguan teknis di luar
              kendali Trekku.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary-90 font-semibold text-[20px]">
            7. Kontak dan Bantuan
          </h1>
          <ul className="font-medium list-disc pl-9 text-neutral-80">
            <li>
              Untuk informasi lebih lanjut atau bantuan, pengguna dapat
              menghubungi layanan pelanggan Trekku melalui email di
              support@trekku.com atau melalui fitur live chat di aplikasi
              Trekku.
            </li>
          </ul>
        </div>
        <p className="font-medium text-justify pl-[20px] text-neutral-80">
          Dengan menggunakan voucher {name}, pengguna dianggap telah membaca,
          mengerti, dan setuju dengan semua syarat dan ketentuan yang berlaku.
        </p>
      </div>
      <div className="w-[186px] flex flex-col items-center self-center mt-6">
        <h1 className="text-[24px] font-medium text-neutral-80">Kode Promo</h1>
        <h1 className="text-[40px] font-bold text-primary-90">{code}</h1>
      </div>
    </div>
  );
};

export default VoucherSection;
