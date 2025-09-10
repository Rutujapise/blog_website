import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetails from './Pages/BlogDetails'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import AddBlog from './Pages/AddBlog'
import UpdateBlog from './Pages/UpdateBlog'
import About from './Pages/About'

function App() {

  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<Dashboard />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/create" element={<AddBlog />} />
        <Route path="/edit-blog/:id" element={<UpdateBlog />} />
        <Route path ="/about"element={<About/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App