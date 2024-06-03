import { Link } from 'react-router-dom';

const LeftPaymentSection = () => {
  return (
    <section className="w-[602px] flex flex-col text-black">
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
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Transfer BCA
                  </h1>
                </div>
                <div className="w-[37px] h-3 bg-red-400"></div>
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
                    className="size-[18px] radio radio-primary peer peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Transfer Mandiri
                  </h1>
                </div>
                <div className="w-[37px] h-3 bg-red-400"></div>
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
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Transfer BRI
                  </h1>
                </div>
                <div className="w-[37px] h-3 bg-red-400"></div>
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
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Transfer BNI
                  </h1>
                </div>
                <div className="w-[37px] h-3 bg-red-400"></div>
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
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Alfamart
                  </h1>
                </div>
                <div className="w-[37px] h-3 bg-red-400"></div>
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
                    className="size-[18px] radio radio-primary peer peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Alfamidi
                  </h1>
                </div>
                <div className="w-[37px] h-3 bg-red-400"></div>
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
                    className="size-[18px] radio radio-primary peer"
                  />
                  <h1 className="ml-3 text-gray-700 peer-checked:font-medium">
                    Indomaret
                  </h1>
                </div>
                <div className="w-[37px] h-3 bg-red-400"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-[550px] h-[136px] p-10 gap-2 rounded-2xl bg-white shadow-cardShadow">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[20px] font-semibold">Pakai Kupon</h1>
            <h1 className="text-primary-70 text-[20px] font-semibold">Pakai</h1>
          </div>
          <h1 className="text-[12px] text-neutral-40">Masukkan kode kupon</h1>
        </div>
        <div className="w-[550px] h-[198px] p-10 gap-7 rounded-2xl bg-white shadow-cardShadow flex flex-col">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[24px] font-semibold text-neutral-70">
              Rincian Harga
            </h1>
            <h1 className="text-[24px] font-semibold text-neutral-60">
              Rp500.000
            </h1>
          </div>
          <Link
            to="/payment-confirm"
            className="w-full flex justify-center py-3 rounded-xl h-fit bg-primary-60 text-[20px] font-semibold text-white active:scale-95 transition-all duration-150"
          >
            Bayar dengan Bank BCA
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeftPaymentSection;
