import './App.js'
import './App.css'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Curriculum from './components/Curriculum'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Section from './components/Section'
import Skills from './components/Skills.jsx'
import ChatBox from './components/Chatbox.jsx'

function App() {


  return (
    <>
      <Header />
      <Section />
      <Portfolio />
      <AboutMe />
      <Skills />
      <Curriculum />
      <Contact />
      <Footer />
      <ChatBox />
    </>


  )
}

export default App
