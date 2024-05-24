import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// const SplashScreen = React.lazy(() =>
//   import('../components/Pages/SplashScreen/SplashScreen')
// );
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
const HelpPage = React.lazy(() =>
  import('../components/Pages/HelpPage/HelpPage')
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/open-trip" element={<OpenTripPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trip/:id" element={<OpenTripDetail />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
