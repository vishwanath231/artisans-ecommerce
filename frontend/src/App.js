import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

import LoginScreen from './screens/common/LoginScreen';
import HomeScreen from './screens/common/HomeScreen';
import RegisterScreen from './screens/common/RegisterScreen';
import ContactScreen from './screens/common/ContactScreen';
import SearchScreen from './screens/common/SearchScreen';
import WishlistScreen from './screens/common/WishlistScreen';
import CartScreen from './screens/common/CartScreen';
import ProductScreen from './screens/common/ProductScreen';

import UserRegisterScreen from './screens/client/UserRegisterScreen';

import ArtisanRegisterScreen from './screens/artisan/ArtisanRegisterScreen';

import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import CodeVerificationScreen from './screens/artisan/CodeVerificationScreen';
import ArtisanFormScreen from './screens/artisan/ArtisanFormScreen';



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
                <Route path='/product/:id' element={ <ProductScreen /> } />


                <Route path='/user/register' element={<UserRegisterScreen /> } />

                <Route path='/artisan/register' element={<ArtisanRegisterScreen /> } />
                <Route path='/artisan/verification' element={<CodeVerificationScreen /> } />
                <Route path='/artisan/form' element={<ArtisanFormScreen /> } />


            </Routes>
            <Subscribe />
            <Footer />
        </BrowserRouter>
    )
}

export default App