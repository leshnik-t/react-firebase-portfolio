import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Websites from './pages/Websites';
import JavaScript from './pages/JavaScript';
import Emails from './pages/Emails';
import Videos from './pages/Videos';
import Banners from './pages/Banners';
import Logos from './pages/Logos';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default App;
