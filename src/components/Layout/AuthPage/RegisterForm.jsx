import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
const apiUrl = import.meta.env.VITE_API_URL;

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const navigate = useNavigate();
  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfPassword = () => {
    setShowConfPassword(!showConfPassword);
  };

  const register = async (e) => {
    e.preventDefault();
    let isError = false;
    const errors = [];

    // Validasi input
    if (!name.trim()) {
      isError = true;
      errors.push('Full Name is required.');
    }

    if (!email.trim() || !validateEmail(email)) {
      isError = true;
      errors.push('Valid Email is required.');
    }

    if (!password.trim()) {
      isError = true;
      errors.push('Password is required.');
    } else if (password.length < 8) {
      isError = true;
      errors.push('Password must be at least 8 characters long.');
    }

    if (!confPassword.trim()) {
      isError = true;
      errors.push('Confirm Password is required.');
    }

    // Menampilkan toast jika ada error
    if (errors.length > 0) {
      isError = true;
      errors.reverse().map((error) => {
        toast.error(error);
      });
    }

    if (!isError) {
      try {
        await axios.post(`${apiUrl}/users`, {
          name: name,
          email: email,
          password: password,
          confPassword: confPassword,
        });
        toast.success('Pendaftaran berhasil, silakan masuk.');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
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
        onSubmit={register}
        className="w-[50%] px-[60px] py-[52px] flex flex-col items-center justify-center"
      >
        <h1 className="text-[32px] font-bold text-primary-70 mb-[10px]">
          Sign Up
        </h1>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-[20px] font-medium after:content-['*'] after:text-red-500 after:ml-1">
              Full Name
            </h1>
            <input
              type="text"
              id="fullname"
              className="w-full border-none rounded-md shadow-inputShadow border-neutral-40"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[20px] font-medium after:content-['*'] after:text-red-500 after:ml-1">
              Email
            </h1>
            <input
              type="text"
              id="email"
              className="w-full border-none rounded-md shadow-inputShadow border-neutral-40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="relative flex flex-col gap-1">
            <h1 className="text-[20px] font-medium after:content-['*'] after:text-red-500 after:ml-1">
              Password
            </h1>
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
          <div className="relative flex flex-col gap-1">
            <h1 className="text-[20px] font-medium after:content-['*'] after:text-red-500 after:ml-1">
              Confirm Password
            </h1>
            <input
              type={showConfPassword ? 'text' : 'password'}
              className="w-full border-none rounded-md shadow-inputShadow border-neutral-40"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showConfPassword ? faEyeSlash : faEye}
              onClick={handleShowConfPassword}
              className="absolute cursor-pointer right-4 bottom-3"
            />
          </div>
        </div>
        <button className="px-5 py-3 rounded-xl w-fit h-fit bg-primary-60 text-[20px] font-medium mt-[42px] text-white">
          Create your Account!
        </button>
        <div className="flex gap-3 mt-[42px]">
          <h1 className="font-medium">Already have an account?</h1>
          <Link to="/login" className="font-bold underline text-primary-70">
            {' '}
            Sign In.{' '}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
