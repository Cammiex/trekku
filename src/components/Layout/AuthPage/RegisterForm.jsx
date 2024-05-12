import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const navigate = useNavigate();
  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
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
        await axios.post('http://localhost:5000/users', {
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
    <div
      id="register-form"
      className="flex flex-col px-[60px] py-[52px] bg-white xl:w-[548px] xl:h-[724px] max-h-[95%] rounded-xl items-start gap-[10px]"
    >
      <Toaster position="top-right" />
      <h1 className="text-[32px] font-bold text-primary self-center">
        Sign Up
      </h1>
      <form onSubmit={register} className="flex flex-col flex-wrap gap-[22px]">
        <div id="input-wrapper" className="flex flex-col">
          <label
            htmlFor="fullname"
            className="flex flex-col gap-2 text-xl font-semibold text-primary"
          >
            <span className="after:content-['*'] after:text-red-500 after:ml-1">
              Full Name
            </span>
            <input
              id="fullname"
              type="text"
              className="max-w-[428px] h-11 border-2 border-primary rounded-xl w-[428px] px-3 py-3 text-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div id="input-wrapper" className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="flex flex-col gap-2 text-xl font-semibold text-primary"
          >
            <span className="after:content-['*'] after:text-red-500 after:ml-1">
              Email
            </span>
            <input
              id="email"
              type="text"
              className="max-w-[428px] h-11 border-2 border-primary rounded-xl w-[428px] px-3 py-3 text-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div id="input-wrapper" className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="flex flex-col gap-2 text-xl font-semibold text-primary"
          >
            <span className="after:content-['*'] after:text-red-500 after:ml-1">
              Password
            </span>
            <input
              id="password"
              type="password"
              className="max-w-[428px] h-11 border-2 border-primary rounded-xl w-[428px] px-3 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div id="input-wrapper" className="flex flex-col gap-2">
          <label className="flex flex-col gap-2 text-xl font-semibold text-primary">
            <span className="after:content-['*'] after:text-red-500 after:ml-1">
              Confirm Password
            </span>
            <input
              type="password"
              className="max-w-[428px] h-11 border-2 border-primary rounded-xl w-[428px] px-3 py-3"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </label>
        </div>
        <button className="min-h-[54px] w-[243px] bg-primary rounded-xl font-medium text-xl text-white hover:bg-primaryDark active:bg-primaryDarker self-center mt-5">
          Create!
        </button>
      </form>
      <div className="flex self-center gap-3 text-[20px] font-semibold mt-[22px]">
        <h1 className="text-blackui">Already have an account?</h1>
        <Link
          to="/login"
          className="underline text-primary hover:text-primaryDark active:text-primaryDarker"
        >
          Sign In.{' '}
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
