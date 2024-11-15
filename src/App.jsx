import Navbar from './components/Navbar'
import './index.css'
// import './App.css'
import HeroSection from './Sections/HeroSection'
import ProjectSection from './Sections/ProjectSection'
import Lines from './components/Lines'
import ClientsSection from './Sections/ClientsSection'
import AboutmeSection from './Sections/AboutmeSection'
import ContactSection from './Sections/ContactSection'
import FooterSection from './Sections/FooterSection'

function App() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection/>
      <Lines/>
      <ClientsSection/>
      <AboutmeSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default App
