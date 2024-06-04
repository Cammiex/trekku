import { useState, useEffect } from 'react';
import { OpenTripItem } from './OpenTripItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../../redux/slices/products/getProducts';

function OpenTripList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const productData = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  const productList = productData.produk;

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  if (isLoading) return <div>Loading...</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList?.slice(indexOfFirstItem, indexOfLastItem);

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
        className="grid w-[1240px] grid-cols-3 gap-5"
      >
        {currentItems?.map((item, index) => (
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
            currentPage === Math.ceil(productList?.length / itemsPerPage)
          }
        >
          »
        </button>
      </div>
    </div>
  );
}

export default OpenTripList;
