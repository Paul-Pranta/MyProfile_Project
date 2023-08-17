import axios from "axios"
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"

import Signup from './components/Signup'
import ErrorPage from "./components/ErrorPage"

axios.defaults.baseURL = 'http://localhost:3000';

function App() {


  return (
    <>

      <Navbar />
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<ErrorPage />} />
        

      </Routes>


      {/* all switch is being changed to Routes in latest version */}

    </>
  )
}

export default App
