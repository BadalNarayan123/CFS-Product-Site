import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<home/>}/>
      <Route path='/' element={<Product/>}/>
      <Route path='/' element={<Blog/>}/>
      <Route path='/' element={<About/>}/>
      <Route path='/' element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
