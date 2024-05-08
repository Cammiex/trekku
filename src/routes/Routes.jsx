import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const SplashScreen = React.lazy(() =>
  import('../components/Pages/SplashScreen/SplashScreen')
);

const HomePage = React.lazy(() =>
  import('../components/Pages/HomePage/HomePage')
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
