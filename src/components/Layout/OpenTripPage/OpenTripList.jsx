import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../../redux/slices/products/getProducts';
import PropType from 'prop-types';
import { OpenTripCard } from '../HomePage/OpenTripRecomendSection';

function OpenTripList({ setData, durasi, destinasi }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const productData = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  const productList = productData.produk;

  useEffect(() => {
    setData(productList);
  }, [productList, setData]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  if (isLoading) return <div>Loading...</div>;

  // Filter the productList based on durasi and destinasi
  const filteredProductList = productList?.filter((item) => {
    if (durasi && destinasi) {
      return item.duration === durasi && item.location === destinasi;
    }
    if (durasi) {
      return item.duration === durasi;
    }
    if (destinasi) {
      return item.location === destinasi;
    }
    return true;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductList?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
    setTimeout(() => {
      setCurrentPage(pageNumber);
    }, 500);
  };

  return (
    <div>
      <section
        id="open-trip-list"
        className="grid w-[1240px] grid-cols-3 gap-5 sm:w-full sm:flex sm:flex-col"
      >
        {/* {currentItems?.map((item, index) => (
          <OpenTripItem
            key={index}
            id={item.id}
            img={item.product_imgs[0].url_img}
            itemName={item.name}
            organizer={item.organizer}
            location={item.location}
            duration={item.duration}
            order={item.many_ordered}
            price={item.price}
          />
        ))} */}
        {currentItems?.map((item, index) => (
          <OpenTripCard
            key={index}
            id={item.id}
            img={item.product_imgs[0].url_img}
            name={item.name}
            organizer={item.organizer}
            location={item.location}
            duration={item.duration}
            order={item.many_ordered}
            price={item.price}
          />
        ))}
      </section>
      <div className="flex justify-center gap-4 mt-[52px]">
        <button
          className="btn"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>

        <button className="join-item btn">{`Halaman ${currentPage}`}</button>
        <button
          className="btn"
          onClick={() => {
            paginate(currentPage + 1);
          }}
          disabled={
            currentPage ===
            Math.ceil(filteredProductList?.length / itemsPerPage)
          }
        >
          »
        </button>
      </div>
    </div>
  );
}

OpenTripList.propTypes = {
  setData: PropType.func,
  durasi: PropType.string,
  destinasi: PropType.string,
};

export default OpenTripList;
