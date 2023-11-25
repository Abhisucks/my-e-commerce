import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './public/pages/Home'
import About from './public/pages/About'
import PublicLayout from './public/PublicLayout'
import Shop from './public/pages/Shop'
import Contact from './public/pages/Contact'
import Register from './public/components/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './public/components/Login'
import AdminLayout from './admin/AdminLayout'
import HomeAdmin from './admin/pages/HomeAdmin'
import AdminProtected from './admin/components/AdminProtected'
import Dashboard from './admin/pages/Dashboard'
import AddProduct from './admin/pages/AddProduct'
import ShopSingle from './public/pages/ShopSingle'
import Cart from './public/components/Cart'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='Shop' element={<Shop />} />
          <Route path='ShopSingle' element={<ShopSingle />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='cart' element={<Cart />} />
        </Route>

        <Route path='/admin' element={<AdminProtected compo={<AdminLayout />} />}>
          <Route index element={<HomeAdmin />} />
          <Route path='dash' element={<Dashboard />} />
          <Route path='add-pro' element={<AddProduct />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </>
}

export default App