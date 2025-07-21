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
import MissionAndVision from './pages/MissionandVision/MissionAndVision'
import Blog from './pages/Blogs/blogs'
// import IndividualModule from './pages/Individual/Individual'
// import Error from "./pages/InternalServer/InternalServerError"

function App() {

  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Home />
        <About />
        <MissionAndVision />
        {/* <Methodology /> */}
        {/* <Programs /> */}
        <Section />
        <Testimonials />
        <LogoCarousel />
        <AboutFounder />
        {/* <IndividualModule /> */}
        <Blog />
        <Footer />
        {/* <Error /> */}
      </div>
    </>
  )
}

export default App
