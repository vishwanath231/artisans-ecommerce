import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginScreen from './screens/common/LoginScreen';
import HomeScreen from './screens/common/HomeScreen';
import RegisterScreen from './screens/common/RegisterScreen';
import ContactScreen from './screens/common/ContactScreen';
import SearchScreen from './screens/common/SearchScreen';
import WishlistScreen from './screens/common/WishlistScreen';
import CartScreen from './screens/common/CartScreen';
import ProductScreen from './screens/common/ProductScreen';
import CopyRights from './components/CopyRights';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen /> } />
                <Route path='/login' element={<LoginScreen /> } />
                <Route path='/register' element={<RegisterScreen /> } />
                <Route path='/contact' element={<ContactScreen /> } />
                <Route path='/search' element={<SearchScreen /> } />
                <Route path='/wishlist' element={<WishlistScreen /> } />
                <Route path='/cart' element={<CartScreen /> } />
                <Route path='/product/:id' element={ <ProductScreen /> } />
            </Routes>
            <CopyRights />
        </BrowserRouter>
    )
}

export default App