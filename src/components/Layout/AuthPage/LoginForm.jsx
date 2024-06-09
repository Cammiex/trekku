import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
const apiUrl = import.meta.env.VITE_API_URL;

const LoginForm = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = async (e) => {
    e.preventDefault();
    let isError = false;
    const errors = [];

    if (!email.trim()) {
      isError = true;
      errors.push('Masukkan email anda!');
    }

    if (!password.trim()) {
      isError = true;
      errors.push('Masukkan kata sandi anda!');
    }

    if (errors.length > 0) {
      isError = true;
      errors.reverse().map((error) => {
        toast.error(error);
      });
    }

    if (!isError) {
      try {
        await axios.post(`${apiUrl}/login`, {
          email: email,
          password: password,
        });
        setLoggedIn(true);
        navigate('/');
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.msg);
        }
      }
    }
  };

  return (
    <div className="w-[1031px] h-[724px] bg-white rounded-xl flex overflow-hidden">
      <Toaster position="top-right" />
      <div className="w-[50%]">
        <img
          src="/images/AuthPage/side-img.png"
          alt=""
          className="object-cover size-full"
        />
      </div>
      <form
        onSubmit={login}
        className="w-[50%] px-[60px] py-[52px] flex flex-col items-center justify-center"
      >
        <h1 className="text-[40px] font-bold text-primary-70 mb-[10px]">
          Masuk ke Trekku
        </h1>
        <h1 className="text-neutral-80 text-[20px] font-normal mb-[60px]">
          Selamat Datang Kembali, Petualang!
        </h1>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-[20px] font-medium">Email</h1>
            <input
              type="text"
              id="email"
              className="w-full border-none rounded-md shadow-inputShadow border-neutral-40 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="relative flex flex-col gap-1">
            <h1 className="text-[20px] font-medium">Kata Sandi</h1>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full border-none rounded-md shadow-inputShadow border-neutral-40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={handleShowPassword}
              className="absolute cursor-pointer right-4 bottom-3"
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="rounded-[5px] focus:ring-0 focus:outline-none focus:border-none"
              />
              <label
                htmlFor="remember"
                className="text-[20px] font-normal select-none"
              >
                Ingat Saya
              </label>
            </div>
            <Link className="text-primary-70 text-[20px] font-semibold underline">
              Lupa Kata Sandi?
            </Link>
          </div>
        </div>

        <button className="px-5 py-3 rounded-xl w-[208px] h-fit bg-primary-60 text-[20px] font-medium mt-[42px] text-white">
          Lanjutkan
        </button>

        <div className="flex gap-3 mt-[42px]">
          <h1 className="font-medium">Belum Punya Akun?</h1>
          <Link to="/register" className="font-bold underline text-primary-70">
            {' '}
            Daftar.{' '}
          </Link>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  setLoggedIn: PropTypes.func,
};

export default LoginForm;
