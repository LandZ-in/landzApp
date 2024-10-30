import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./style.css"
import PropertyListings from "./pages/PropertyListings";
import AdminDashboard from "./pages/admin/pages/AdminDashboard";
import Footer from './components/Footer';
import LandProfile from './pages/LandProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoginForm from './login/LoginForm';
import ForgotPassword from './login/ForgotPassword';
import OTPVerification from './login/OTPVerification';
import ResetPassword from './login/ResetPassword';
import UserDashboard from "./pages/User/pages/UserDashboard";
import SubmitFeedback from "./components/LandProfile/SubmitFeedback";
import Blog from "./pages/Blog";
function App() {
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith('/admin-dashboard') || location.pathname.startsWith('/user-dashboard');
  return (
    <>  
  
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/property-listings" element={<PropertyListings />} />
        <Route path="/land-profile" element={<LandProfile />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
        <Route path="/user-dashboard/*" element={<UserDashboard />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/blog" element={<Blog />} />
        <Route element={<Login />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Route>
    </Routes>
      {!isDashboardRoute && (<Footer />)}

    </>
  );
}

export default App;
