import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import LeftContentSection from '../../Layout/ReviewsPage/LeftContentSection';
import RightContentSection from '../../Layout/ReviewsPage/RightContentSection';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

const ReviewsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/order/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const bgImage = '/images/ProfilePage/bg-profile.png';

  return (
    <>
      <Navbar />{' '}
      <div
        className="relative w-full h-fit bg-center bg-no-repeat bg-cover pt-[136px] flex flex-col items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-[1023px] h-[724px] rounded-xl bg-white flex overflow-hidden">
          <LeftContentSection
            name={data?.product.name}
            date={data?.product.date}
            img={data?.product.product_imgs[0].url_img}
            location={data?.product.location}
          />
          <RightContentSection
            userID={data?.user_id}
            productID={data?.product_id}
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ReviewsPage;
