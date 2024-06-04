import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const DetailPengunjungCard = ({
  nameVisitor,
  changeHandler,
  setNameVisitor,
  phoneVisitor,
  setPhoneVisitor,
  emailVisitor,
  setEmailVisitor,
  titleVisitor,
  setTitleVisitor,
}) => {
  return (
    <div className="w-full h-[542px] bg-white rounded-2xl shadow-cardShadow p-10 flex flex-col">
      <h1 className="text-[24px] font-medium">Pengunjung 1</h1>
      <div className="flex flex-col w-full mt-7 gap-7">
        <div className="flex flex-col gap-1">
          <h1 className="text-neutral-80 text-[20px] font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
            Titel
          </h1>
          <select
            name=""
            id=""
            value={titleVisitor}
            onChange={(e) => changeHandler(e, setTitleVisitor)}
            className="w-[320px] h-12 bg-white border-none ring-0 focus:ring-0 shadow-inputShadow rounded-md"
          >
            <option value="tuan">Tuan</option>
            <option value="nyonya">Nyonya</option>
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
            value={nameVisitor}
            onChange={(e) => changeHandler(e, setNameVisitor)}
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
              value={phoneVisitor}
              onChange={(e) => changeHandler(e, setPhoneVisitor)}
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
              value={emailVisitor}
              onChange={(e) => changeHandler(e, setEmailVisitor)}
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

DetailPengunjungCard.propTypes = {
  nameVisitor: PropTypes.string,
  changeHandler: PropTypes.func,
  setNameVisitor: PropTypes.func,
  phoneVisitor: PropTypes.string,
  setPhoneVisitor: PropTypes.func,
  emailVisitor: PropTypes.string,
  setEmailVisitor: PropTypes.func,
  titleVisitor: PropTypes.string,
  setTitleVisitor: PropTypes.func,
};

const PopUpNextPage = ({ handlePopUp, isOpen, onClickNext }) => {
  return (
    <div
      className={
        isOpen
          ? 'fixed inset-0 z-40 flex items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
          : 'fixed inset-0 z-40 hidden items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
      }
    >
      <div className="w-[504px] h-[290px] p-8 flex flex-col items-center rounded-2xl shadow-inset bg-white">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[20px] font-medium">
            Apakah pesanan Anda benar?
          </h1>
          <p className="font-medium text-center text-neutral-40">
            Anda tidak akan bisa mengubah detail pesanan setelah melanjutkan ke
            halaman pembayaran.
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <button
            onClick={handlePopUp}
            className="w-[272px] h-fit rounded-xl bg-neutral-10 text-neutral-30 py-3 text-[20px] font-medium active:scale-95 transition-all duration-150"
          >
            Periksa Kembali
          </button>
          <button
            onClick={onClickNext}
            className="w-[272px] h-fit rounded-xl bg-primary-60 text-white py-3 text-[20px] font-medium active:scale-95 transition-all duration-150 flex items-center justify-center"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};

PopUpNextPage.propTypes = {
  handlePopUp: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickNext: PropTypes.func,
};

const LeftFormSection = ({ price, quantity, location, id }) => {
  const navigate = useNavigate();
  const totalHarga = price * quantity;
  const formattedTotalHarga = Number(totalHarga).toLocaleString('id-ID');
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const handlePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const [nameOrderer, setNameOrderer] = useState('');
  const [phoneOrderer, setPhoneOrderer] = useState('');
  const [emailOrderer, setEmailOrderer] = useState('');

  const [titleVisitor, setTitleVisitor] = useState('tuan');
  const [nameVisitor, setNameVisitor] = useState('');
  const [phoneVisitor, setPhoneVisitor] = useState('');
  const [emailVisitor, setEmailVisitor] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSendDataToLocal = async () => {
    if (
      !nameOrderer ||
      !phoneOrderer ||
      !emailOrderer ||
      !nameVisitor ||
      !phoneVisitor ||
      !emailVisitor
    ) {
      Swal.fire(
        'Pengisian form belum selesai!',
        'Isi kolom untuk melanjutkan.',
        'warning'
      );
      setIsPopUpOpen(false);
      return;
    }

    try {
      const dataOrderer = {
        nameOrderer: nameOrderer,
        phoneOrderer: phoneOrderer,
        emailOrderer: emailOrderer,
      };

      const dataVisitor = {
        titleVisitor: titleVisitor,
        nameVisitor: nameVisitor,
        phoneVisitor: phoneVisitor,
        emailVisitor: emailVisitor,
      };

      const jsonDataOrderer = JSON.stringify(dataOrderer);
      const jsonDataVisitor = JSON.stringify(dataVisitor);
      await localStorage.setItem('ordererData', jsonDataOrderer);
      await localStorage.setItem('visitorData', jsonDataVisitor);
      navigate(`/payment/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[654px] flex flex-col text-black mt-8 gap-8">
      <PopUpNextPage
        isOpen={isPopUpOpen}
        handlePopUp={handlePopUp}
        onClickNext={handleSendDataToLocal}
      />
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
                value={nameOrderer}
                onChange={(e) => handleInputChange(e, setNameOrderer)}
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
                  value={phoneOrderer}
                  onChange={(e) => handleInputChange(e, setPhoneOrderer)}
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
                  value={emailOrderer}
                  onChange={(e) => handleInputChange(e, setEmailOrderer)}
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
        <DetailPengunjungCard
          changeHandler={handleInputChange}
          nameVisitor={nameVisitor}
          setNameVisitor={setNameVisitor}
          phoneVisitor={phoneVisitor}
          setPhoneVisitor={setPhoneVisitor}
          emailVisitor={emailVisitor}
          setEmailVisitor={setEmailVisitor}
          titleVisitor={titleVisitor}
          setTitleVisitor={setTitleVisitor}
        />
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
          <h1 className="font-medium text-neutral-60">{location}</h1>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-[32px] font-semibold">Rincian Harga</h1>
        <div className="w-full h-[128px] bg-white rounded-2xl shadow-cardShadow p-10 flex items-center">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-neutral-60 text-[20px] font-medium">
              Harga yang anda bayar
            </h1>
            <h1 className="text-[#F96A01] text-[32px] font-semibold">
              Rp{formattedTotalHarga}
            </h1>
          </div>
        </div>
      </div>
      <button
        onClick={handlePopUp}
        className="px-6 py-3 size-fit rounded-xl bg-primary-60 text-[20px] font-semibold self-end text-white"
      >
        Lanjut ke Pembayaran
      </button>
    </div>
  );
};

LeftFormSection.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string,
};

export default LeftFormSection;
