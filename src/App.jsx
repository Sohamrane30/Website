import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
