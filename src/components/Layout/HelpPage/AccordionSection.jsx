import { Tabs } from 'flowbite-react';
import { Accordion } from 'flowbite-react';

const tabsTheme = {
  base: 'flex flex-col gap-2',
  tablist: {
    base: 'flex text-center',
    styles: {
      default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
      underline:
        '-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700',
      pills:
        'flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400',
      fullWidth:
        'grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400',
    },
    tabitem: {
      base:
        'flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
      styles: {
        default: {
          base: 'rounded-t-lg',
          active: {
            on: 'bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500',
            off:
              'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
          },
        },
        underline: {
          base: 'rounded-t-lg',
          active: {
            on:
              'active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500',
            off:
              'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
          },
        },
        pills: {
          base: '',
          active: {
            on: 'rounded-lg bg-cyan-600 text-white',
            off:
              'rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white',
          },
        },
        fullWidth: {
          base: 'ml-0 flex w-full rounded-none first:ml-0',
          active: {
            on:
              'active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white',
            off:
              'rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white',
          },
        },
      },
      icon: 'mr-2 h-5 w-5',
    },
  },
  tabitemcontainer: {
    base: '',
    styles: {
      default: '',
      underline: '',
      pills: '',
      fullWidth: '',
    },
  },
  tabpanel: 'py-3',
};

const AccordionUmum = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apa itu Trekku?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Trekku adalah platform yang menyediakan informasi lengkap dan
            layanan pemesanan untuk berbagai jenis perjalanan, termasuk open
            trip dan paket wisata khusus untuk backpacker.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Bagaimana cara Trekku bekerja?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Trekku bekerja dengan menghubungkan pengguna dengan penyedia layanan
            perjalanan. Kami menyediakan informasi lengkap tentang destinasi,
            paket perjalanan, dan layanan tambahan untuk membantu Anda
            merencanakan perjalanan dengan mudah.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah Trekku hanya untuk backpacker?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Tidak, meskipun Trekku banyak melayani backpacker, kami juga
            menawarkan paket perjalanan untuk berbagai jenis wisatawan, termasuk
            keluarga, kelompok, dan individu yang mencari pengalaman perjalanan
            khusus.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah informasi di Trekku dapat dipercaya?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Ya, kami berusaha menyediakan informasi yang akurat dan terbaru.
            Semua penyedia layanan yang bermitra dengan kami telah melalui
            proses verifikasi untuk memastikan kualitas dan keandalan layanan
            mereka.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah Trekku menyediakan layanan dukungan pelanggan?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Ya, kami menyediakan layanan dukungan pelanggan melalui email,
            telepon, dan chat langsung di website kami untuk membantu menjawab
            pertanyaan dan menangani masalah yang mungkin Anda hadapi.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const AccordionAkun = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Bagaimana cara membuat akun di Trekku?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Anda dapat membuat akun dengan mengklik tombol &quot;Sign Up&quot;
            di halaman utama dan mengisi formulir pendaftaran dengan informasi
            yang diperlukan, seperti email, nama pengguna, dan kata sandi.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Saya lupa kata sandi akun saya. Bagaimana cara meresetnya?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Anda dapat mereset kata sandi dengan mengklik &quot;Forgot
            Password&quot; di halaman login dan mengikuti instruksi untuk
            mengatur ulang kata sandi Anda.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah saya bisa mengubah informasi akun saya setelah mendaftar?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Ya, Anda dapat mengubah informasi akun Anda dengan masuk ke akun
            Anda dan mengakses halaman profil.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah informasi pribadi saya aman di Trekku?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Ya, kami menggunakan teknologi enkripsi terbaru untuk melindungi
            informasi pribadi Anda dan menjaga kerahasiaan data Anda.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const AccordionPemesanan = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Bagaimana cara memesan perjalanan di Trekku?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Anda dapat memesan perjalanan dengan memilih destinasi atau paket
            yang Anda inginkan dan mengikuti langkah-langkah pemesanan yang
            ditampilkan di halaman checkout.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah saya bisa memesan perjalanan untuk grup?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Ya, Anda bisa memesan perjalanan untuk grup. Pastikan untuk
            mencantumkan jumlah peserta yang benar saat melakukan pemesanan.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah saya bisa melihat rincian perjalanan sebelum memesan?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Tentu, setiap paket perjalanan dilengkapi dengan rincian lengkap
            termasuk jadwal perjalanan, fasilitas, dan biaya.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah saya akan menerima konfirmasi setelah memesan?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Ya, Anda akan menerima email konfirmasi setelah pemesanan Anda
            berhasil. Email ini akan berisi rincian perjalanan dan informasi
            kontak penyedia layanan.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Bagaimana cara mengetahui status pemesanan saya?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Anda dapat melihat status pemesanan Anda dengan masuk ke akun Anda
            dan mengakses halaman riwayat pemesanan pada halaman profil.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const AccordionPembayaran = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Metode pembayaran apa saja yang diterima di Trekku?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Kami menerima berbagai metode pembayaran termasuk kartu kredit,
            transfer bank, dan pembayaran melalui dompet digital.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah pembayaran saya aman?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Ya, kami menggunakan sistem pembayaran yang aman dan terenkripsi
            untuk memastikan transaksi Anda terlindungi.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah ada biaya tambahan saat melakukan pembayaran?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Biaya tambahan mungkin berlaku tergantung pada metode pembayaran
            yang Anda pilih. Informasi tentang biaya tambahan akan ditampilkan
            sebelum Anda menyelesaikan pembayaran.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Bagaimana cara mendapatkan kuitansi pembayaran?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Kuitansi pembayaran akan dikirimkan ke email Anda setelah pembayaran
            berhasil. Anda juga bisa mengunduhnya dari halaman riwayat pemesanan
            di akun Anda.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const AccordionPerubahan = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Bagaimana cara mengubah rincian pemesanan saya?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Untuk mengubah rincian pemesanan, hubungi layanan dukungan pelanggan
            kami dengan nomor pemesanan Anda. Perubahan mungkin dikenakan biaya
            tambahan.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apa yang harus saya lakukan jika ingin membatalkan pemesanan?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Anda dapat membatalkan pemesanan dengan masuk ke akun Anda dan
            mengikuti instruksi pembatalan pada halaman riwayat pemesanan.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah saya akan dikenakan biaya jika membatalkan pemesanan?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Tidak, meskipun Trekku banyak melayani backpacker, kami juga
            menawarkan paket perjalanan untuk berbagai jenis wisatawan, termasuk
            keluarga, kelompok, dan individu yang mencari pengalaman perjalanan
            khusus.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Berapa lama proses pengembalian dana jika saya membatalkan pemesanan?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Proses pengembalian dana biasanya memakan waktu 7-14 hari kerja,
            tergantung pada metode pembayaran yang digunakan.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-neutral-60 text-[14px] font-semibold">
          Apakah saya bisa mengubah tanggal perjalanan setelah memesan?
        </Accordion.Title>
        <Accordion.Content className="text-neutral-60 text-[14px]">
          <p className="mb-2 text-gray-500">
            Mengubah tanggal perjalanan tergantung pada ketersediaan dan
            kebijakan penyedia layanan. Hubungi layanan dukungan pelanggan kami
            untuk bantuan lebih lanjut.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const AccordionSection = () => {
  return (
    <div className="w-[797px] min-h-[461px] max-h-fit pb-8 pt-4 bg-white flex flex-col items-center rounded-2xl shadow-cardShadow text-black mt-10">
      {' '}
      <Tabs
        aria-label="Tabs with underline"
        style="underline"
        theme={tabsTheme}
        className="w-[716px] h-fit"
      >
        <Tabs.Item active title="Umum">
          <AccordionUmum />
        </Tabs.Item>
        <Tabs.Item active title="Akun">
          <AccordionAkun />
        </Tabs.Item>
        <Tabs.Item active title="Pemesanan">
          <AccordionPemesanan />
        </Tabs.Item>
        <Tabs.Item active title="Pembayaran">
          <AccordionPembayaran />
        </Tabs.Item>
        <Tabs.Item active title="Perubahan & Pembatalan">
          <AccordionPerubahan />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default AccordionSection;
