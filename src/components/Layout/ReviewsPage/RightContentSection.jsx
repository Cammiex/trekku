import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const apiUrl = import.meta.env.VITE_API_URL;
import PropTypes from 'prop-types';

const RightContentSection = ({ userID, productID }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [charCount, setCharCount] = useState(0);

  const sendReview = async () => {
    try {
      if (!name && !comment && !rating) {
        Swal.fire('Semua harus diisi!', '', 'error');
        return;
      }
      await axios.post(`${apiUrl}/review`, {
        name: name,
        comment: comment,
        rating: rating,
        idUser: userID,
        idProduct: productID,
      });
      Swal.fire('Ulasan berhasil dikirim!', '', 'success');
      navigate(`/profile/order/${userID}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setComment(value);
      setCharCount(value.length);
    }
  };

  return (
    <div className="flex flex-col p-14 w-[540px] items-center">
      <div className="flex flex-col items-center gap-1 max-w-[324px]">
        <h1 className="text-[32px] font-bold text-primary-70">
          Berikan Ulasan mu!
        </h1>
        <h2 className="font-medium text-center text-neutral-80">
          Berikan ulasan terhadap perjalanan yang baru saja anda ikuti!
        </h2>
      </div>
      <div className="flex flex-col w-full gap-6 mt-12">
        <div className="flex flex-col w-full gap-1">
          <label className="w-full form-control">
            <div className="label">
              <span className="label-text text-neutral-80 font-medium text-[20px]">
                Nama Lengkap
              </span>
            </div>
            <input
              type="text"
              placeholder="Ketik disini..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full max-w-xl input input-bordered text-neutral-80"
            />
          </label>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className="form-control">
            <div className="label">
              <span className="label-text text-neutral-80 font-medium text-[20px]">
                Ulasan
              </span>
            </div>
            <textarea
              className="h-24 textarea textarea-bordered text-neutral-80"
              placeholder="Tulis Sesuatu..."
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <div className="label">
              <span className="label-text-alt">
                Berikan ulasan anda terhadap open trip ini.
              </span>
              <span className="label-text-alt">{charCount}/200</span>
            </div>
          </label>
        </div>
        <div className="flex flex-col items-center w-full gap-3">
          <h1 className="text-[20px] font-medium text-neutral-80">
            Tolong beri penilaian pengalaman Anda!
          </h1>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              value={1}
              onChange={(e) => setRating(e.target.value)}
              className="bg-primary-60 mask mask-star-2 size-[35px]"
            />
            <input
              type="radio"
              name="rating-2"
              value={2}
              onChange={(e) => setRating(e.target.value)}
              className="bg-primary-60 mask mask-star-2 size-[35px]"
            />
            <input
              type="radio"
              name="rating-2"
              value={3}
              onChange={(e) => setRating(e.target.value)}
              className="bg-primary-60 mask mask-star-2 size-[35px]"
            />
            <input
              type="radio"
              name="rating-2"
              value={4}
              onChange={(e) => setRating(e.target.value)}
              className="bg-primary-60 mask mask-star-2 size-[35px]"
            />
            <input
              type="radio"
              name="rating-2"
              value={5}
              onChange={(e) => setRating(e.target.value)}
              className="bg-primary-60 mask mask-star-2 size-[35px]"
            />
          </div>
        </div>
        <button
          onClick={sendReview}
          className="text-[20px] font-medium rounded-xl size-fit px-5 py-3 bg-primary-60 active:scale-95 transition-all duration-75 self-center mt-[18px]"
        >
          Unggah Penilaian
        </button>
      </div>
    </div>
  );
};

RightContentSection.propTypes = {
  userID: PropTypes.number,
  productID: PropTypes.number,
};

export default RightContentSection;
