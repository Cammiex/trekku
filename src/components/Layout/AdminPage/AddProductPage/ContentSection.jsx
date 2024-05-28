import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const apiUrl = import.meta.env.VITE_API_URL;

const ContentSection = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [lokasi, setLokasi] = useState('');

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);

  const [informasi, setInformasi] = useState('');
  const [destinasi, setDestinasi] = useState('');
  const [jadwal, setJadwal] = useState('');
  const [fasilitas, setFasilitas] = useState('');
  const [akomodasi, setAkomodasi] = useState('');
  const [persiapan, setPersiapan] = useState('');

  const [harga, setHarga] = useState('');
  const [durasi, setDurasi] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [kuota, setKuota] = useState('');

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleHargaChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setHarga(Number(value).toLocaleString('id-ID'));
  };

  const handleKuotaChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setKuota(Number(value));
  };

  const countWords = (text) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const addProduct = async (e) => {
    e.preventDefault();

    if (
      !nama ||
      !lokasi ||
      !image1 ||
      !image2 ||
      !image3 ||
      !image4 ||
      !image5 ||
      !informasi ||
      !destinasi ||
      !jadwal ||
      !fasilitas ||
      !akomodasi ||
      !persiapan ||
      !harga ||
      !durasi ||
      !tanggal ||
      !kuota
    ) {
      Swal.fire('Semua harus diisi!', '', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('name', nama);
    formData.append('location', lokasi);
    formData.append('image1', image1);
    formData.append('image2', image2);
    formData.append('image3', image3);
    formData.append('image4', image4);
    formData.append('image5', image5);
    formData.append('desc_information', informasi);
    formData.append('desc_destination', destinasi);
    formData.append('desc_schedule', jadwal);
    formData.append('desc_facility', fasilitas);
    formData.append('desc_accommodation', akomodasi);
    formData.append('desc_preparation', persiapan);
    formData.append('price', harga.replace(/\D/g, ''));
    formData.append('duration', durasi);
    formData.append('date', tanggal);
    formData.append('quota', kuota);
    try {
      await axios.post(`${apiUrl}/products/add`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      Swal.fire('Produk berhasil ditambahkan.', '', 'success');
      navigate('/admin/products');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="flex flex-col w-full gap-3 overflow-y-hidden"
      onSubmit={addProduct}
    >
      <div className="flex items-center justify-between w-full px-3">
        <h1 className="text-[32px] font-semibold text-neutral-70">
          Tambahkan Open Trip
        </h1>
      </div>
      <div className="w-full rounded-[10px] h-fit border py-8 px-10 bg-white">
        <form action="" className="grid grid-cols-2 gap-3 text-neutral-80">
          {/* Nama dan Lokasi */}
          <label className="w-full max-w-[660px] form-control">
            <div className="label">
              <span className="label-text">Nama</span>
            </div>
            <input
              type="text"
              placeholder="Ketik disini..."
              className="w-full max-w-[660px] input input-bordered text-neutral-80"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <div className="label">
              <span className="label-text-alt">Masukkan nama open trip.</span>
            </div>
          </label>
          <label className="w-full max-w-[660px] form-control">
            <div className="label">
              <span className="label-text">Lokasi</span>
            </div>
            <input
              type="text"
              placeholder="Ketik disini..."
              className="w-full max-w-[660px] input input-bordered text-neutral-80"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
            />
            <div className="label">
              <span className="label-text-alt">Masukkan lokasi open trip.</span>
            </div>
          </label>

          {/* Input Gambar */}
          <div className="flex col-span-2 gap-3">
            {' '}
            <label className="w-full max-w-xs form-control">
              <div className="label">
                <span className="label-text">Pilih Gambar</span>
                <span className="label-text-alt">Gambar 1</span>
              </div>
              <input
                type="file"
                className="w-full max-w-xs file-input file-input-bordered"
                onChange={(e) => setImage1(e.target.files[0])}
              />
              <div className="label">
                <span className="label-text-alt">File maksimal 5MB.</span>
              </div>
            </label>
            <label className="w-full max-w-xs form-control">
              <div className="label">
                <span className="label-text">Pilih Gambar</span>
                <span className="label-text-alt">Gambar 2</span>
              </div>
              <input
                type="file"
                className="w-full max-w-xs file-input file-input-bordered"
                onChange={(e) => setImage2(e.target.files[0])}
              />
              <div className="label">
                <span className="label-text-alt">File maksimal 5MB.</span>
              </div>
            </label>
            <label className="w-full max-w-xs form-control">
              <div className="label">
                <span className="label-text">Pilih Gambar</span>
                <span className="label-text-alt">Gambar 3</span>
              </div>
              <input
                type="file"
                className="w-full max-w-xs file-input file-input-bordered"
                onChange={(e) => setImage3(e.target.files[0])}
              />
              <div className="label">
                <span className="label-text-alt">File maksimal 5MB.</span>
              </div>
            </label>
            <label className="w-full max-w-xs form-control">
              <div className="label">
                <span className="label-text">Pilih Gambar</span>
                <span className="label-text-alt">Gambar 4</span>
              </div>
              <input
                type="file"
                className="w-full max-w-xs file-input file-input-bordered"
                onChange={(e) => setImage4(e.target.files[0])}
              />
              <div className="label">
                <span className="label-text-alt">File maksimal 5MB.</span>
              </div>
            </label>
            <label className="w-full max-w-xs form-control">
              <div className="label">
                <span className="label-text">Pilih Gambar</span>
                <span className="label-text-alt">Gambar 5</span>
              </div>
              <input
                type="file"
                className="w-full max-w-xs file-input file-input-bordered"
                onChange={(e) => setImage5(e.target.files[0])}
              />
              <div className="label">
                <span className="label-text-alt">File maksimal 5MB.</span>
              </div>
            </label>
          </div>

          {/* Informasi dan Destinasi */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Deskripsi Informasi</span>
            </div>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Open trip ini merupakan..."
              value={informasi}
              onChange={handleChange(setInformasi)}
            ></textarea>
            <div className="label">
              <span className="label-text-alt">
                Masukkan informasi terkait open trip.
              </span>
              <span className="label-text-alt">
                {countWords(informasi)}/150
              </span>
            </div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Destinasi</span>
            </div>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Ketik disini..."
              value={destinasi}
              onChange={handleChange(setDestinasi)}
            ></textarea>
            <div className="label">
              <span className="label-text-alt">
                Masukkan detail destinasi yang akan dikunjungi.
              </span>
              <span className="label-text-alt">
                {countWords(destinasi)}/150
              </span>
            </div>
          </label>

          {/* Jadwal dan Fasilitas*/}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Jadwal</span>
            </div>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Ketik disini..."
              value={jadwal}
              onChange={handleChange(setJadwal)}
            ></textarea>
            <div className="label">
              <span className="label-text-alt">
                Masukkan detail jadwal open trip.
              </span>
              <span className="label-text-alt">{countWords(jadwal)}/150</span>
            </div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Fasilitas</span>
            </div>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Ketik disini..."
              value={fasilitas}
              onChange={handleChange(setFasilitas)}
            ></textarea>
            <div className="label">
              <span className="label-text-alt">
                Masukkan detail fasilitas yang disediakan.
              </span>
              <span className="label-text-alt">
                {countWords(fasilitas)}/150
              </span>
            </div>
          </label>

          {/*Akomodasi dan Persiapan */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Akomodasi</span>
            </div>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Ketik disini..."
              value={akomodasi}
              onChange={handleChange(setAkomodasi)}
            ></textarea>
            <div className="label">
              <span className="label-text-alt">
                Masukkan detail akomodasi yang disediakan.
              </span>
              <span className="label-text-alt">
                {countWords(akomodasi)}/150
              </span>
            </div>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Persiapan</span>
            </div>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Ketik disini..."
              value={persiapan}
              onChange={handleChange(setPersiapan)}
            ></textarea>
            <div className="label">
              <span className="label-text-alt">
                Masukkan perlengpan apa saja yang disarankan untuk dibawa.
              </span>
              <span className="label-text-alt">
                {countWords(persiapan)}/150
              </span>
            </div>
          </label>

          {/* Harga dan Durasi */}
          <label className="w-full max-w-[660px] form-control">
            <div className="label">
              <span className="label-text">Harga</span>
            </div>
            <input
              type="text"
              placeholder="Ketik disini..."
              className="w-full max-w-[660px] input input-bordered text-neutral-80"
              value={harga}
              onChange={handleHargaChange}
            />
            <div className="label">
              <span className="label-text-alt">
                Masukkan harga dari open trip.
              </span>
            </div>
          </label>
          <label className="w-full max-w-[660px] form-control">
            <div className="label">
              <span className="label-text">Durasi</span>
            </div>
            <input
              type="text"
              placeholder="Ketik disini..."
              className="w-full max-w-[660px] input input-bordered text-neutral-80"
              value={durasi}
              onChange={(e) => setDurasi(e.target.value)}
            />
            <div className="label">
              <span className="label-text-alt">
                Masukkan berapa lama open trip berlangsung.
              </span>
            </div>
          </label>

          {/* Tanggal dan Kouta */}
          <label className="w-full max-w-[660px] form-control">
            <div className="label">
              <span className="label-text">Tanggal</span>
            </div>
            <input
              type="date"
              placeholder="Ketik disini..."
              className="w-full max-w-[660px] input input-bordered text-neutral-80"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
            <div className="label">
              <span className="label-text-alt">
                Masukkan tanggal dimulainya open trip.
              </span>
            </div>
          </label>
          <label className="w-full max-w-[660px] form-control">
            <div className="label">
              <span className="label-text">Kuota</span>
            </div>
            <input
              type="text"
              placeholder="Ketik disini..."
              className="w-full max-w-[660px] input input-bordered text-neutral-80"
              value={kuota}
              onChange={handleKuotaChange}
            />
            <div className="label">
              <span className="label-text-alt">
                Masukkan maksimal orang untuk open trip.
              </span>
            </div>
          </label>
          <button className="col-span-2 rounded-[10px] bg-success h-fit py-3 text-white font-semibold btn hover:bg-success hover:text-white">
            Tambahkan
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContentSection;
