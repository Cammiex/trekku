import { useEffect, useState } from 'react';
import FloatButton from '../../Fragments/FloatButton/FloatButton';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import OpenTripHeroSection from '../../Layout/OpenTripPage/OpenTripHeroSection';
import OpenTripList from '../../Layout/OpenTripPage/OpenTripList';

function OpenTripPage() {
  const [destinasi, setDestinasi] = useState('');
  const [durasi, setDurasi] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    console.log(destinasi);
    console.log(durasi);
  }, [destinasi, durasi]);

  return (
    <>
      <Navbar />
      <FloatButton />
      <OpenTripHeroSection
        destinasi={destinasi}
        setDestinasi={setDestinasi}
        setDurasi={setDurasi}
        durasi={durasi}
        data={data}
      />
      <div className="flex justify-center w-full mt-[170px]">
        <OpenTripList setData={setData} destinasi={destinasi} durasi={durasi} />
      </div>
      <Footer />
    </>
  );
}

export default OpenTripPage;
