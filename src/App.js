import Navbar from './components/Navbar'
import Header from './components/Header'
import Section from './components/Section'
import {Route , Routes} from 'react-router-dom'
import React from 'react';
import About from './pages/About'
import Main from './pages/main'
import Testimonials from './pages/Testimionals';
import OurMasters from './pages/Our masters'
import Contact from './pages/Contact'
import Map from './components/Map'
import CardGroup from './components/Card-group'


function App() {
  return (
    <div className="App">
    <Navbar />
  
    <Section />
     <Routes>
      <Route path='about' element={<About />} />
      <Route path='header' element={<Header />} />
      <Route path="card-group" element={<CardGroup/>} />
      <Route path='map' element={<Map />} />
      <Route path='main' element={<Main />} />
      <Route path="testimionals" element={<Testimonials/>} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="our maters" element={<OurMasters/>}/>
     </Routes>


    </div>
  );
}

export default App;












