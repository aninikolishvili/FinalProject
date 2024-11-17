
import Discount from '../components/Discount';
import Header from '../components/Header';
import ViewCollection from '../components/ViewCollection';
import ShoppingPromise from '../components/ShoppingPromise';
import BestSelling from '../components/BestSelling';
import StartBrowsing from '../components/StartBrowsing';
import Featured from '../components/Featured';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import ProductSwiper from '../components/ProductSwiper';
import { Routes, Route } from 'react-router-dom';
import { store } from '../store/store';
import { Provider } from 'react-redux'


function Main() {
    return (
      <div>
        <Discount/>
        <Header/>
        <ViewCollection/>
        <ShoppingPromise/>
        <BestSelling/>
        <StartBrowsing/>
        <Featured/>
        <Subscribe/>
        <Footer bgWhite/>
      </div>
    );
  }
  
  export default Main;
  



   

    