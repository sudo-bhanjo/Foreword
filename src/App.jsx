import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AboutFounder from './pages/AboutFounder/AboutFounder'
import LogoCarousel from './pages/Carousel/LogoCarousel'
import Home from './pages/Home/Home'
// import Programs from './pages/Programs/Programs'
// import Methodology from './pages/methodology/Methodology'
import Testimonials from './pages/Testimonials/Testimonials'
import Section from './pages/Sections/Sections'
import About from './pages/About/About'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Methodology /> */}
      {/* <Programs /> */}
      <Section />
      <AboutFounder />
      <LogoCarousel />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
