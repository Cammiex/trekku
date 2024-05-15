import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const apiUrl = import.meta.env.VITE_API_URL;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    let isError = false;
    const errors = [];

    if (!email.trim()) {
      isError = true;
      errors.push('Email is required.');
    }

    if (!password.trim()) {
      isError = true;
      errors.push('Password is required.');
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
        navigate('/home');
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.msg);
        }
      }
    }
  };

  return (
    <div
      id="login-wrapper"
      className="flex flex-wrap flex-col items-center w-[544px] h-fit bg-white mt-11 mx-auto rounded-xl py-[75px] px-[68px] shadow-inset shadow-dropbox gap-8"
    >
      <Toaster position="top-right" />
      <h1 className="text-5xl font-bold text-primary">Sign In</h1>
      <form
        onSubmit={login}
        className="w-full flex flex-col gap-[22px] mt-[40px]"
      >
        <label htmlFor="email" className="flex flex-col w-full gap-2">
          <span className="text-xl font-semibold text-primary">Email</span>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full font-medium border-2 rounded-xl border-primary text-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="flex flex-col w-full gap-2">
          <span className="text-xl font-semibold text-primary">Password</span>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full font-medium border-2 rounded-xl border-primary text-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="flex justify-center items-center text-xl font-medium py-3 px-[70px] w-fit bg-primary hover:bg-primaryDark active:bg-primaryDarker rounded-xl text-white self-center mt-[42px]">
          Sign In
        </button>
      </form>
      <div className="flex justify-between w-full mt-8">
        <Link
          to="/register"
          className="text-xl font-semibold underline text-primary hover:text-primaryDark active:text-primaryDarker"
        >
          Sign Up
        </Link>
        <Link className="text-xl font-semibold underline text-primary hover:text-primaryDark active:text-primaryDarker">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
