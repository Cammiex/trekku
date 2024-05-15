import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const SplashScreen = React.lazy(() =>
  import('../components/Pages/SplashScreen/SplashScreen')
);
const HomePage = React.lazy(() =>
  import('../components/Pages/HomePage/HomePage')
);
const OpenTripPage = React.lazy(() =>
  import('../components/Pages/OpenTripPage/OpenTripPage')
);
const DestinationPage = React.lazy(() =>
  import('../components/Pages/DestinationPage/DestinationPage')
);
const AboutPage = React.lazy(() =>
  import('../components/Pages/AboutPage/AboutPage')
);
const Register = React.lazy(() =>
  import('../components/Pages/AuthPage/Register')
);
const Login = React.lazy(() => import('../components/Pages/AuthPage/Login'));
const OpenTripDetail = React.lazy(() =>
  import('../components/Pages/DetailOpenTripPage/DetailOpenTripPage')
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/open-trip" element={<OpenTripPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trip/:id" element={<OpenTripDetail />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
