import Navbar from '../../Fragments/Navbar/Navbar';
import RegisterForm from '../../Layout/AuthPage/RegisterForm';

const Register = () => {
  const bgImage = 'images/AuthPage/bg-image-blur.png';

  return (
    <>
      <Navbar />
      <main
        className="flex flex-wrap justify-center text-black h-fit"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          id="register-wrapper"
          className="flex flex-wrap justify-center mt-[80px] gap-28"
        >
          <RegisterForm />
        </div>
      </main>
    </>
  );
};

export default Register;
