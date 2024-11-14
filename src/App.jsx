
import './App.css'
import './scss/styles.css'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialIcons from './components/SocialNetworks'
import Switch from './components/objects/Switch'
import { useState } from 'react'

function App() {

  const [context, setContextTheme] = useState('Light');

  const sendContextThemeToParent = (theme) => {
    console.log(theme);
    setContextTheme(theme);
  }

  return (
    <div className='' id={context} >
      <NavBar/>
      <div className='container'>
        <SocialIcons/>
        <div>
          <Home sendContextThemeToParent={sendContextThemeToParent}/>
          <Aboutme />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App