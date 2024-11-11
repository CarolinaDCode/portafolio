
import './App.css'
import './scss/styles.css'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className=''>
      <NavBar/>
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App