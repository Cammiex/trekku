import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const SplashScreen = React.lazy(() =>
  import('../components/Pages/SplashScreen/SplashScreen')
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
