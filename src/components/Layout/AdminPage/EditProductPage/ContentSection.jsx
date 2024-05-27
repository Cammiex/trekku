import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const apiUrl = import.meta.env.VITE_API_URL;

const ContentSection = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState('');

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

  const editProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (nama) formData.append('name', nama);
    if (lokasi) formData.append('location', lokasi);
    if (image1) formData.append('image1', image1);
    if (image2) formData.append('image2', image2);
    if (image3) formData.append('image3', image3);
    if (image4) formData.append('image4', image4);
    if (image5) formData.append('image5', image5);
    if (informasi) formData.append('desc_information', informasi);
    if (destinasi) formData.append('desc_destination', destinasi);
    if (jadwal) formData.append('desc_schedule', jadwal);
    if (fasilitas) formData.append('desc_facility', fasilitas);
    if (akomodasi) formData.append('desc_accommodation', akomodasi);
    if (persiapan) formData.append('desc_preparation', persiapan);
    if (harga) formData.append('price', harga.replace(/\D/g, '')); // remove formatting
    if (durasi) formData.append('duration', durasi);
    if (tanggal) formData.append('date', tanggal);
    if (kuota) formData.append('quota', kuota);
    if (
      !nama &&
      !lokasi &&
      !image1 &&
      !image2 &&
      !image3 &&
      !image4 &&
      !image5 &&
      !informasi &&
      !destinasi &&
      !jadwal &&
      !fasilitas &&
      !akomodasi &&
      !persiapan &&
      !harga &&
      !durasi &&
      !tanggal &&
      !kuota
    ) {
      await Swal.fire('Anda tidak mengubah apapun!', '', 'error');
      return;
    }

    try {
      await axios.patch(`${apiUrl}/products/update/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      Swal.fire('Produk berhasil diupdate.', '', 'success');
      navigate('/admin/products');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProductById = async () => {
      try {
        const result = await axios.get(`${apiUrl}/products/${id}`);
        setData(result.data.payload.datas);
      } catch (error) {
        console.log(error);
      }
    };

    getProductById();
  }, [id]);

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

  return (
    <section className="flex flex-col w-full gap-3 overflow-y-hidden">
      <div className="flex items-center justify-between w-full px-3">
        <h1 className="text-[32px] font-semibold text-neutral-70">
          Edit Open Trip
        </h1>
      </div>
      <div className="w-full rounded-[10px] h-fit border py-8 px-10 bg-white">
        <form
          onSubmit={editProduct}
          className="grid grid-cols-2 gap-3 text-neutral-80"
        >
          {/* Nama dan Lokasi */}
          <label className="w-full max-w-[660px] form-control">
            <div className="label">
              <span className="label-text">Nama</span>
            </div>
            <input
              type="text"
              placeholder={data.name}
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
              placeholder={data.location}
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
              placeholder={data.desc_information}
              value={informasi}
              onChange={(e) => setInformasi(e.target.value)}
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
              placeholder={data.desc_destination}
              value={destinasi}
              onChange={(e) => setDestinasi(e.target.value)}
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
              placeholder={data.desc_schedule}
              value={jadwal}
              onChange={(e) => setJadwal(e.target.value)}
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
              placeholder={data.desc_facility}
              value={fasilitas}
              onChange={(e) => setFasilitas(e.target.value)}
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
              placeholder={data.desc_accommodation}
              value={akomodasi}
              onChange={(e) => setAkomodasi(e.target.value)}
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
              placeholder={data.desc_preparation}
              value={persiapan}
              onChange={(e) => setPersiapan(e.target.value)}
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
              placeholder={Number(data.price).toLocaleString('id-ID')}
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
              placeholder={data.duration}
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
              placeholder={data.quota}
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
            Perbarui
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContentSection;
