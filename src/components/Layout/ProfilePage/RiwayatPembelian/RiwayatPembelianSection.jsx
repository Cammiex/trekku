import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Tabs } from 'flowbite-react';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const apiUrl = import.meta.env.VITE_API_URL;

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

const OrderCard = ({ img, name, date, id, status, idOrder }) => {
  const navigate = useNavigate();

  const handleCancelOrder = async () => {
    try {
      await axios.put(`${apiUrl}/order/user/cancel/${idOrder}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOrderAgain = async () => {
    navigate(`/order/${id}`);
  };

  const textStatus = () => {
    if (status === 'pending') {
      return (
        <h1 className="text-[12px] font-semibold text-[#FFB119]">
          Menunggu Pembayaran
        </h1>
      );
    } else if (status === 'success') {
      return (
        <h1 className="text-[12px] font-semibold text-[#2BC128]">
          Telah dibayar
        </h1>
      );
    } else if (status === 'cancel') {
      return (
        <h1 className="text-[12px] font-semibold text-[#FF0F0F]">Dibatalkan</h1>
      );
    }
  };
  const buttonStatus = () => {
    if (status === 'pending') {
      return (
        <>
          <li onClick={() => navigate(`/payment-confirm/${idOrder}`)}>
            <a>Bayar Pesanan</a>
          </li>
          <li onClick={handleCancelOrder}>
            <a>Batalkan Pesanan</a>
          </li>
        </>
      );
    } else if (status === 'success') {
      return (
        <li onClick={() => navigate(`/review/${idOrder}`)}>
          <a>Berikan Ulasan</a>
        </li>
      );
    } else if (status === 'cancel') {
      return (
        <li onClick={handleOrderAgain}>
          <a>Pesan Kembali</a>
        </li>
      );
    }
  };

  return (
    <div
      id="order-card"
      className="w-[578px] h-[110px] rounded-xl bg-white shadow-cardShadow pl-3 py-3 pr-5 flex"
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-4">
          <div className="w-[129px] h-[86px] rounded-lg overflow-hidden">
            <img
              src={img}
              alt=""
              className="object-cover object-center size-full"
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-[14px] font-semibold text-primary-90">
                {name}
              </h1>
              <h1 className="text-neutral-60 font-medium text-[12px] mt-1">
                {moment(date).format('DD MMMM YYYY')}
              </h1>
            </div>
            <Link
              to={`/open-trip/${id}`}
              className="text-primary-60 text-[12px] font-semibold"
            >
              Lihat detail...
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          {textStatus()}
          <div className="dropdown dropdown-top dropdown-end">
            <FontAwesomeIcon
              tabIndex={0}
              icon={faEllipsisV}
              className="h-6"
              role="button"
            />
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {buttonStatus()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  idOrder: PropTypes.number,
  status: PropTypes.string,
};

const AllOrder = ({ data }) => {
  return (
    <div className="w-fit h-[440px] p-3 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
      {data?.map((item, index) => (
        <OrderCard
          key={index}
          img={item.product.product_imgs[0].url_img}
          name={item.product.name}
          status={item.status}
          id={item.product.id}
          date={item.product.date}
          idOrder={item.id}
        />
      ))}
    </div>
  );
};

AllOrder.propTypes = {
  data: PropTypes.array,
};

const Success = ({ data }) => {
  return (
    <div className="w-[578px] flex flex-col gap-5">
      <div className="w-fit h-[440px] p-3 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
        {data?.map((item, index) => (
          <OrderCard
            key={index}
            img={item.product.product_imgs[0].url_img}
            name={item.product.name}
            status={item.status}
            id={item.product.id}
            date={item.product.date}
            idOrder={item.id}
          />
        ))}
      </div>
    </div>
  );
};

Success.propTypes = {
  data: PropTypes.array,
};

const Pending = ({ data }) => {
  return (
    <div className="w-[578px] flex flex-col gap-5">
      <div className="w-fit h-[440px] p-3 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
        {data?.map((item, index) => (
          <OrderCard
            key={index}
            img={item.product.product_imgs[0].url_img}
            name={item.product.name}
            status={item.status}
            id={item.product.id}
            date={item.product.date}
            idOrder={item.id}
          />
        ))}
      </div>
    </div>
  );
};

Pending.propTypes = {
  data: PropTypes.array,
};

const Cancel = ({ data }) => {
  return (
    <div className="w-[578px] flex flex-col gap-5">
      <div className="w-fit h-[440px] p-3 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
        {data?.map((item, index) => (
          <OrderCard
            key={index}
            img={item.product.product_imgs[0].url_img}
            name={item.product.name}
            status={item.status}
            id={item.product.id}
            date={item.product.date}
            idOrder={item.id}
          />
        ))}
      </div>
    </div>
  );
};

Cancel.propTypes = {
  data: PropTypes.array,
};

const RiwayatPembelianSection = ({ id }) => {
  const [data, setData] = useState();
  const [dataSuccess, setDataSuccess] = useState();
  const [dataPending, setDataPending] = useState();
  const [dataCancel, setDataCancel] = useState();

  useEffect(() => {
    const fetchDataOrder = async () => {
      try {
        const response = await axios.get(`${apiUrl}/order/user/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataOrderSuccess = async () => {
      try {
        const response = await axios.get(`${apiUrl}/order/user/success/${id}`);
        setDataSuccess(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataOrderPending = async () => {
      try {
        const response = await axios.get(`${apiUrl}/order/user/pending/${id}`);
        setDataPending(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataOrderCancel = async () => {
      try {
        const response = await axios.get(`${apiUrl}/order/user/cancel/${id}`);
        setDataCancel(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataOrder();
    fetchDataOrderSuccess();
    fetchDataOrderPending();
    fetchDataOrderCancel();
  }, [id]);

  return (
    <div className="w-[797px] h-[630px] rounded-2xl bg-white shadow-cardShadow pl-10 pr-7 pt-8 text-black flex flex-col">
      <h1 className="text-[24px] font-semibold">Riwayat pembelian</h1>
      <div className="flex flex-col self-center mb-6 w-fit">
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          theme={tabsTheme}
          className="w-[624px] h-fit"
        >
          <Tabs.Item active title="Semua">
            <AllOrder data={data} />
          </Tabs.Item>
          <Tabs.Item active title="Dibayar">
            <Success data={dataSuccess} />
          </Tabs.Item>
          <Tabs.Item active title="Menunggu Pembayaran">
            <Pending data={dataPending} />
          </Tabs.Item>
          <Tabs.Item active title="Dibatalkan">
            <Cancel data={dataCancel} />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

RiwayatPembelianSection.propTypes = {
  id: PropTypes.string,
};

export default RiwayatPembelianSection;
