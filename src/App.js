import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './client/layout/layout/Layout';
import Home from './client/pages/home/Home';
import Websites from './client/pages/websites/Websites';
import JavaScript from './client/pages/javascript/JavaScript';
import Emails from './client/pages/emails/Emails';
import Videos from './client/pages/videos/Videos';
import Banners from './client/pages/banners/Banners';
import Logos from './client/pages/logos/Logos';
import Contact from './client/pages/contact/Contact';
import { useAuth } from './context/AuthContext';
import Login from './dashboard/pages/login/Login';
import Dashboard from './dashboard/pages/dashboard/Dashboard';


function App() {
  const { currentUser } = useAuth();
  
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="web-design-and-frontend-development" element={<Websites />} />
          <Route path="javascript-small-games" element={<JavaScript />} />
          <Route path="email-newsletter-design-development" element={<Emails />} />
          <Route path="video-editing-effects" element={<Videos />} />
          <Route path="web-banners" element={<Banners />} />
          <Route path="logo-design" element={<Logos />} />
          <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>  
        } />
    </Routes>
  );
}

export default App;
