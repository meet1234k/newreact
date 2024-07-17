import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header' 
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'

import './stylesheets/header.scss'
import './stylesheets/App.scss'
import './stylesheets/home.scss'
import './stylesheets/footer.scss'
import './stylesheets/contact.scss'
import './stylesheets/services.scss'
import './stylesheets/meadiaquery.scss'
function App() {
    return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
