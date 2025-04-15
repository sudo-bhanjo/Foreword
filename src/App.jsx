import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AboutFounder from './pages/AboutFounder/AboutFounder'
import LogoCarousel from './pages/Carousel/LogoCarousel'
import Home from './pages/Home/Home'
import Methodology from './pages/methodology/Methodology'
import Testimonials from './pages/Testimonials/Testimonials'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <AboutFounder />
      <Methodology />
      <LogoCarousel />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
