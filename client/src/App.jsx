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
import HomeAdmin from './admin/pages/Dashboard'
import AdminProtected from './admin/components/AdminProtected'
import AddProduct from './admin/pages/AddProduct'
import ShopSingle from './public/pages/ShopSingle'
import Cart from './public/components/Cart'
import PaymentSuccess from './public/pages/PaymentSuccess'
import Justforfun from './public/components/Justforfun'
import OrderPlaced from './public/components/orderPlaced'
import MyOrders from './public/components/MyOrders'
import Users from './admin/pages/Users'
import Dashboard from './admin/pages/Dashboard'
import PageNotFound from './public/pages/PageNotFound'
import Messages from './admin/pages/Messages'

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
          {/* <Route path='cart' element={<Justforfun />} /> */}
          <Route path='paymentsuccess' element={<PaymentSuccess />} />
          <Route path='orderplaced' element={<OrderPlaced />} />
          <Route path='myorders' element={<MyOrders />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path='/admin' element={<AdminProtected compo={<AdminLayout />} />}>
          <Route index element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='add-pro' element={<AddProduct />} />
          <Route path='messages' element={<Messages />} />
        </Route>

        {/* <Route path="*" element={<PageNotFound />} /> */}

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </>
}

export default App