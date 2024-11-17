import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductsDetails';
import ProductsDetails from './pages/ProductsDetails';
import ProductsReviews from './pages/ProductsReviews';
import Reviewsfunct from './components/Reviewsfunct';
// import Counter from './store/app/Counter';
import { store } from './store/store'
import { Provider } from 'react-redux'
import Counter from './pages/Counter'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SuccessfulOrder from './pages/SuccessfulOrder';
import FailedOrder from './pages/FailedOrder';
import Profile_Menu from './pages/Profile_Menu';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';
import ShippingAddress from './pages/ShippingAddress';
import AccountDetails from './pages/AccountDetails';
import ChangePassword from './pages/ChangePassword';
import EmptyState from './pages/EmptyState';
import Admin_Menu from './pages/Admin_Menu';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import OrdersList from './pages/OrdersList';
import Costumers from './pages/Customers';
import CostumersReviews from './pages/CustomersReviews';
import Settings from './pages/Settings';
import ProductSwiper from './components/ProductSwiper';
import LogIn from './pages/LogIn';




function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:id" element={<ProductSwiper/>} />
          <Route path="/ProductsDetails" element={<ProductsDetails />} />
          <Route path="/ProductsReviews" element={<ProductsReviews />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/SuccessfulOrder" element={<SuccessfulOrder/>}/>
          <Route path="/FailedOrder" element={<FailedOrder/>}/>
          <Route path="/Profile_Menu" element={<Profile_Menu/>}/>
          <Route path="/Orders" element={<Orders/>}/>
          <Route path="/Wishlist" element={<Wishlist/>}/>
          <Route path="/ShippingAddress" element={<ShippingAddress/>}/>
          <Route path="/ChangePassword" element={<ChangePassword/>}/>
          <Route path="/EmptyState" element={<EmptyState/>}/>
          <Route path="/Admin_Menu" element={<Admin_Menu/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/AddProduct" element={<AddProduct/>}/>
          <Route path="/OrdersList" element={<OrdersList/>}/>
          <Route path="/Costumers" element={<Costumers/>}/>
          <Route path="/CostumersReviews" element={<CostumersReviews/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Login" element={<LogIn/>}/>
          
        </Routes>
      </div >
    </Provider>
  );
}

export default App;
