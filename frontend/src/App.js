import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import LoginScreen from './screens/client/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/client/RegisterScreen';
import ContactScreen from './screens/client/ContactScreen';
import SearchScreen from './screens/client/SearchScreen';
import WishlistScreen from './screens/client/WishlistScreen';
import CartScreen from './screens/client/CartScreen';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';



const App = () => {
    return (
        <BrowserRouter>
            
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={<HomeScreen /> } />
                <Route path='/login' element={<LoginScreen /> } />
                <Route path='/register' element={<RegisterScreen /> } />
                <Route path='/contact' element={<ContactScreen /> } />
                <Route path='/search' element={<SearchScreen /> } />
                <Route path='/wishlist' element={<WishlistScreen /> } />
                <Route path='/cart' element={<CartScreen /> } />
                
            </Routes>
            <Subscribe />
            <Footer />
        </BrowserRouter>
    )
}

export default App