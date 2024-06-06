import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const apiUrl = import.meta.env.VITE_API_URL;

const PopUpVoucher = ({ isOpen, handleOpen, setter, setPopUp }) => {
  const [code, setCode] = useState('');

  const handleMatchVoucher = async () => {
    if (!code) {
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/voucher`, {
        code: code,
      });

      if (response.data === null) {
        Swal.fire('Voucher tidak cocok!', '', 'error');
        return;
      }

      setter(response.data.discount);
      Swal.fire('Voucher berhasil dipakai!', '', 'success');
      setPopUp(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
        isOpen
          ? 'fixed inset-0 z-40 flex items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
          : 'fixed inset-0 z-40 hidden items-center justify-center backdrop-filter backdrop-brightness-50 backdrop-blur-sm'
      }
    >
      <div className="w-[450px] h-[200px] bg-white rounded-2xl shadow-inset py-6 px-6 flex flex-col items-center relative justify-center">
        <FontAwesomeIcon
          onClick={handleOpen}
          icon={faClose}
          className="absolute top-[14px] right-[18px] size-6 text-neutral-70 cursor-pointer"
        />
        <h1 className="text-primary-60 font-bold text-[24px]">
          Masukkan Kode Voucher
        </h1>
        <input
          type="text"
          name=""
          id=""
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-[320px] h-[40px] border ring-0 rounded-lg shadow-inputShadow font-semibold mt-3"
        />
        <button
          onClick={handleMatchVoucher}
          className="w-[144px] h-fit py-2 bg-primary-60 text-white rounded-lg mt-3 active:scale-95 transition-all duration-75"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

PopUpVoucher.propTypes = {
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
  setter: PropTypes.func,
  setPopUp: PropTypes.func,
};

const LeftPaymentSection = ({ price, quantity, idProduct }) => {
  const [popUpVoucher, setPopUpVoucher] = useState(false);
  const [discount, setDiscount] = useState('');
  const [totalHarga, setTotalHarga] = useState();

  const handlePopUpVoucher = () => {
    setPopUpVoucher(!popUpVoucher);
  };

  const navigate = useNavigate();

  const [paymentType, setPaymentType] = useState('');

  const handlePaymentType = (e) => {
    setPaymentType(e.target.value);
  };

  const idUser = localStorage.getItem('userId');

  useEffect(() => {
    if (discount) {
      const total = price * quantity - price * quantity * discount;
      setTotalHarga(total);
    } else {
      const total = price * quantity;
      setTotalHarga(total);
    }
  }, [discount, price, quantity]);

  const formattedTotalHarga = Number(totalHarga).toLocaleString('id-ID');

  const dataOrderer = localStorage.getItem('ordererData');
  const jsonDataOrderer = JSON.parse(dataOrderer);

  const dataVisitor = localStorage.getItem('visitorData');
  const jsonDataVisitor = JSON.parse(dataVisitor);

  const createOrder = async () => {
    try {
      if (
        !quantity ||
        !price ||
        !idProduct ||
        !idUser ||
        !paymentType ||
        !jsonDataOrderer ||
        !jsonDataVisitor
      ) {
        Swal.fire('Semua data harus diisi!', '', 'error');
        return;
      }

      const response = await axios.post(`${apiUrl}/order/add`, {
        quantity: quantity,
        total_price: totalHarga,
        idUser: idUser,
        idProduct: idProduct,
        idPayment: paymentType,
        nameOrderer: jsonDataOrderer.nameOrderer,
        phoneOrderer: jsonDataOrderer.phoneOrderer,
        emailOrderer: jsonDataOrderer.emailOrderer,
        titleVisitor: jsonDataVisitor.titleVisitor,
        nameVisitor: jsonDataVisitor.nameVisitor,
        phoneVisitor: jsonDataVisitor.phoneVisitor,
        emailVisitor: jsonDataVisitor.emailVisitor,
      });
      Swal.fire('Pesanan berhasil dibuat!', '', 'success');
      await localStorage.removeItem('ordererData');
      await localStorage.removeItem('visitorData');
      await localStorage.removeItem('ticket_quantity');
      navigate(`/payment-confirm/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-[602px] flex flex-col text-black">
      <PopUpVoucher
        isOpen={popUpVoucher}
        handleOpen={handlePopUpVoucher}
        setter={setDiscount}
        setPopUp={setPopUpVoucher}
      />
      <div className="flex flex-col gap-8">
        <h1 className="font-medium">Isi data Anda dan review pesanan Anda.</h1>
        <h1 className="font-semibold text-[32px]">
          Mau bayar pakai metode apa?
        </h1>
      </div>
      <div className="flex flex-col self-end gap-10 mt-6">
        <div
          id="transfer-bank-card"
          className="w-[550px] h-fit rounded-xl bg-white shadow-cardShadow px-10 py-6 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 py-6 size-fit peer">
            <input
              type="radio"
              name="payment-type"
              id="bank-transfer"
              className="radio radio-primary peer"
              defaultChecked
            />
            <label
              htmlFor="bank-transfer"
              className="text-[20px] peer-checked:font-semibold font-medium text-blackui"
            >
              Transfer Bank
            </label>
          </div>
          <div className="h-0 flex-col self-end peer-has-[:checked]:h-[328px] flex overflow-hidden transition-all duration-500">
            <h1 className="font-medium text-neutral-40">
              Pilih rekening tujuan
            </h1>
            <div className="flex flex-col gap-3 mt-4">
              <label
                htmlFor="bca"
                className="w-[440px] h-12 rounded-xl border border-black/50 px-5 flex items-center has-[:checked]:border-[#4A00FF] justify-between"
              >
                <div className="flex items-center">
                  {' '}
                  <input
                    type="radio"
                    name="bank-name"
                    id="bca"
                    value={1}
                    onChange={handlePaymentType}
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Transfer BCA
                  </h1>
                </div>
                <div className="w-[37px] h-3">
                  <img
                    src="/images/Footer/bca.png"
                    alt=""
                    className="object-contain size-full"
                  />
                </div>
              </label>
              <label
                htmlFor="mandiri"
                className="w-[440px] h-12 rounded-xl border border-black/50 px-5 flex items-center has-[:checked]:border-[#4A00FF] justify-between"
              >
                <div className="flex items-center">
                  {' '}
                  <input
                    type="radio"
                    name="bank-name"
                    id="mandiri"
                    value={2}
                    onChange={handlePaymentType}
                    className="size-[18px] radio radio-primary peer peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Transfer Mandiri
                  </h1>
                </div>
                <div className="w-[37px] h-3">
                  <img
                    src="/images/Footer/mandiri.png"
                    alt=""
                    className="object-contain size-full"
                  />
                </div>
              </label>
              <label
                htmlFor="bri"
                className="w-[440px] h-12 rounded-xl border border-black/50 px-5 flex items-center has-[:checked]:border-[#4A00FF] justify-between"
              >
                <div className="flex items-center">
                  {' '}
                  <input
                    type="radio"
                    name="bank-name"
                    id="bri"
                    value={3}
                    onChange={handlePaymentType}
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Transfer BRI
                  </h1>
                </div>
                <div className="w-[37px] h-3">
                  <img
                    src="/images/Footer/bri.png"
                    alt=""
                    className="object-contain size-full"
                  />
                </div>
              </label>
              <label
                htmlFor="bni"
                className="w-[440px] h-12 rounded-xl border border-black/50 px-5 flex items-center has-[:checked]:border-[#4A00FF] justify-between"
              >
                <div className="flex items-center">
                  {' '}
                  <input
                    type="radio"
                    name="bank-name"
                    id="bni"
                    value={4}
                    onChange={handlePaymentType}
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Transfer BNI
                  </h1>
                </div>
                <div className="w-[37px] h-3">
                  <img
                    src="/images/Footer/bni.png"
                    alt=""
                    className="object-contain size-full"
                  />
                </div>
              </label>
              <label
                htmlFor="other"
                className="w-[440px] h-12 rounded-xl border border-black/50 px-5 flex items-center has-[:checked]:border-[#4A00FF] justify-between"
              >
                <div className="flex items-center">
                  {' '}
                  <input
                    type="radio"
                    name="bank-name"
                    id="other"
                    value={5}
                    onChange={handlePaymentType}
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    ATM/Bank lainnya
                  </h1>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div
          id="transfer-minimarket-card"
          className="w-[550px] h-fit rounded-xl bg-white shadow-cardShadow px-10 py-6 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 py-6 size-fit peer">
            <input
              type="radio"
              name="payment-type"
              id="minimarket-transfer"
              className="radio radio-primary peer"
            />
            <label
              htmlFor="minimarket-transfer"
              className="text-[20px] peer-checked:font-semibold font-medium text-blackui"
            >
              Minimarket
            </label>
          </div>
          <div className="h-0 flex-col self-end peer-has-[:checked]:h-[212px] flex overflow-hidden transition-all duration-500">
            <h1 className="font-medium text-neutral-40">
              Pilih jenis minimarket
            </h1>
            <div className="flex flex-col gap-3 mt-4">
              <label
                htmlFor="alfamart"
                className="w-[440px] h-12 rounded-xl border border-black/50 px-5 flex items-center has-[:checked]:border-[#4A00FF] justify-between"
              >
                <div className="flex items-center">
                  {' '}
                  <input
                    type="radio"
                    name="bank-name"
                    id="alfamart"
                    value={6}
                    onChange={handlePaymentType}
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Alfamart
                  </h1>
                </div>
                <div className="w-[37px] h-3">
                  <img
                    src="/images/Footer/alfamart.png"
                    alt=""
                    className="object-contain size-full"
                  />
                </div>
              </label>
              <label
                htmlFor="alfamidi"
                className="w-[440px] h-12 rounded-xl border border-black/50 px-5 flex items-center has-[:checked]:border-[#4A00FF] justify-between"
              >
                <div className="flex items-center">
                  {' '}
                  <input
                    type="radio"
                    name="bank-name"
                    id="alfamidi"
                    value={7}
                    onChange={handlePaymentType}
                    className="size-[18px] radio radio-primary peer peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Alfamidi
                  </h1>
                </div>
                <div className="w-[37px] h-3">
                  <img
                    src="/images/Footer/alfamidi.png"
                    alt=""
                    className="object-contain size-full"
                  />
                </div>
              </label>
              <label
                htmlFor="indomaret"
                className="w-[440px] h-12 rounded-xl border border-black/50 px-5 flex items-center has-[:checked]:border-[#4A00FF] justify-between"
              >
                <div className="flex items-center">
                  {' '}
                  <input
                    type="radio"
                    name="bank-name"
                    id="indomaret"
                    value={8}
                    onChange={handlePaymentType}
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Indomaret
                  </h1>
                </div>
                <div className="w-[37px] h-3">
                  <img
                    src="/images/Footer/indomaret.png"
                    alt=""
                    className="object-contain size-full"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-[550px] h-[136px] p-10 gap-2 rounded-2xl bg-white shadow-cardShadow">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[20px] font-semibold">Pakai Kupon</h1>
            <h1
              onClick={handlePopUpVoucher}
              className="text-primary-70 text-[20px] font-semibold cursor-pointer"
            >
              Pakai
            </h1>
          </div>
          <h1 className="text-[12px] text-neutral-40">Masukkan kode kupon</h1>
        </div>
        <div className="w-[550px] h-[198px] p-10 gap-7 rounded-2xl bg-white shadow-cardShadow flex flex-col">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[24px] font-semibold text-neutral-70">
              Rincian Harga
            </h1>
            <h1 className="text-[24px] font-semibold text-neutral-60">
              Rp{formattedTotalHarga}
            </h1>
          </div>
          <button
            onClick={createOrder}
            className="w-full flex justify-center py-3 rounded-xl h-fit bg-primary-60 text-[20px] font-semibold text-white active:scale-95 transition-all duration-150"
          >
            Proses Pembayaran
          </button>
        </div>
      </div>
    </section>
  );
};

LeftPaymentSection.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.string,
  idProduct: PropTypes.string,
};

export default LeftPaymentSection;
