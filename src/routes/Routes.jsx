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
const BudgetPlanningPage = React.lazy(() =>
  import('../components/Pages/BudgetPlanningPage/BudgetPlanningPage')
);
const ArticleDetailPage = React.lazy(() =>
  import('../components/Pages/ArticleDetailPage/ArticleDetailPage')
);
const AdminPage = React.lazy(() =>
  import('../components/Pages/AdminPage/AdminPage')
);
const ProductPage = React.lazy(() =>
  import('../components/Pages/AdminPage/ProductPage')
);
const AddProductPage = React.lazy(() =>
  import('../components/Pages/AdminPage/AddProductPage')
);
const EditProductPage = React.lazy(() =>
  import('../components/Pages/AdminPage/EditProductPage')
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
          <Route path="/open-trip/:id" element={<OpenTripDetail />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/budget-planning/:id" element={<BudgetPlanningPage />} />
          <Route path="/article" element={<ArticleDetailPage />} />

          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/admin/dashboard" element={<AdminPage />} />
          <Route path="/admin/products" element={<ProductPage />} />
          <Route path="/admin/products/add" element={<AddProductPage />} />
          <Route
            path="/admin/products/edit/:id"
            element={<EditProductPage />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
