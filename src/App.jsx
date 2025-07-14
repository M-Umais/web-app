import React, { useState } from 'react'
import Counter from './Counter/counter'
import Form from './Component/form'
import Display from './Component/display'
import axios from 'axios'
import Homepage from '../homepage'
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Navbar from './navbar'
import Contact from './contact'
import Shop from './shop'
import Page from './page'
import Blog from './blog'


function App() {
  return (
    
   <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/page" element={<Page />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
   
  )
}

export default App
