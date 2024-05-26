import { Table } from 'flowbite-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const ContentSection = () => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${apiUrl}/products/delete/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const alert = (name, id) => {
    Swal.fire({
      title: `Hapus produk dengan nama ${name}`,
      text: 'Apa anda yakin ingin melanjutkan?',
      icon: 'warning',
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Batalkan',
      denyButtonText: 'Hapus',
      customClass: {
        denyButton: 'order-1',
        confirmButton: 'order-2',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        return;
      } else if (result.isDenied) {
        Swal.fire('Produk berhasil dihapus.', '', 'success');
        deleteProduct(id);
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="flex flex-col w-full overflow-hidden">
      <div className="flex items-center justify-between w-full px-3">
        <h1 className="text-[32px] font-semibold text-neutral-70">Open Trip</h1>
        <Link
          to="/admin/products/add"
          className="w-fit px-8 h-[44px] rounded-[6px] bg-secondary btn text-white hover:bg-secondary hover:text-white"
        >
          Tambahkan Produk
        </Link>
      </div>
      <div className="mt-3 overflow-hidden overflow-x-auto border rounded-xl">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Nama Produk</Table.HeadCell>
            <Table.HeadCell>Jadwal Open Trip</Table.HeadCell>
            <Table.HeadCell>Kuota Orang</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Aksi</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </Table.Cell>
                <Table.Cell>
                  {moment(item.date).format('D MMMM YYYY')}
                </Table.Cell>
                <Table.Cell>{item.quota} Orang</Table.Cell>
                <Table.Cell>{`Rp${item.price.toLocaleString(
                  'id-ID'
                )}`}</Table.Cell>
                <Table.Cell className="flex gap-3">
                  <button className="font-medium text-white rounded-[4px] bg-primary-60 hover:underline w-8 h-fit pb-1 pt-[6px] hover:bg-primary-70">
                    <FontAwesomeIcon icon={faEdit} className="size-[18px]" />
                  </button>
                  <button
                    onClick={() => alert(item.name, item.id)}
                    className="font-medium text-white rounded-[4px] bg-red-600 hover:underline w-8 h-fit pb-1 pt-[6px] hover:bg-red-700"
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="size-[18px]"
                    />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

export default ContentSection;
