import './App.css'
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Courses from './Pages/Courses';
import ScrollToTop from './Components/ScrollToTop';
import ContactUs from './Pages/ContactUs';
function App() {
  return (
    <ScrollToTop >
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/contact" element={<ContactUs/>} />
       </Routes>
    </ScrollToTop>
  )
}

export default App
