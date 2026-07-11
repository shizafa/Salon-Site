import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import GalleryPage from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import LocationsPage from './pages/Locations';
import ServiceDetail from './pages/ServiceDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/:slug" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;