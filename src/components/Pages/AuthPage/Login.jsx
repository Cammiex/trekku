import Navbar from '../../Fragments/Navbar/Navbar';
// import LoginForm from '../../Layout/AuthPage/LoginForm';
import LoginForm from '../../Layout/AuthPage/LoginForm';
import PropTypes from 'prop-types';

const Login = ({ setLoggedIn }) => {
  const bgImage = 'images/AuthPage/bg-image-blur.png';

  return (
    <>
      <Navbar />
      <main
        className="flex flex-wrap justify-center text-black h-fit"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div id="login-wrapper" className="flex mt-[80px] mb-[40px]">
          <LoginForm setLoggedIn={setLoggedIn} />
        </div>
      </main>
    </>
  );
};

Login.propTypes = {
  setLoggedIn: PropTypes.func,
};

export default Login;
