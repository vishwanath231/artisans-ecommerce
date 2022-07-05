import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginScreen from '../screens/common/auth/LoginScreen';
import RegisterScreen from '../screens/common/auth/RegisterScreen';
import HomeScreen from '../screens/common/HomeScreen';
import ContactScreen from '../screens/common/ContactScreen';
import SearchScreen from '../screens/common/SearchScreen';
import WishlistScreen from '../screens/common/WishlistScreen';
import CartScreen from '../screens/common/CartScreen';
import ProductScreen from '../screens/common/ProductScreen';
import CopyRights from '../components/CopyRights';
import AdminDashboard from '../screens/admin/AdminDashboard';
import ProductsListScreen from '../screens/admin/ProductsListScreen';
import UserListScreen from '../screens/admin/UserListScreen';
import MakerListScreen from '../screens/admin/MakerListScreen';
import AdminProfileUpdateScreen from '../screens/admin/AdminProfileUpdateScreen';
import AdminOrderListScreen from '../screens/admin/AdminOrderListScreen';
import MakerDashboard from '../screens/maker/MakerDashboard';
import NotFoundPage from './pages/NotFoundPage';
import UnAuthorizedPage from './pages/UnAuthorizedPage';
import RouterLayout from './auth/RouterLayout';
import RequireAuth from './auth/RequireAuth';



const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={ <RouterLayout /> } >

                    <Route path='/' element={<HomeScreen /> } />
                    <Route path='login' element={<LoginScreen /> } />
                    <Route path='register' element={<RegisterScreen /> } />
                    <Route path='contact' element={<ContactScreen /> } />
                    <Route path='search' element={<SearchScreen /> } />
                    <Route path='wishlist' element={<WishlistScreen /> } />
                    <Route path='cart' element={<CartScreen /> } />
                    <Route path='product/:id' element={ <ProductScreen /> } />

                    <Route path='unAuth' element={<UnAuthorizedPage /> } />

                    
                    <Route element={ <RequireAuth allowRoles={'admin'} /> } >
                        <Route path='admin/dashboard' element={ <AdminDashboard /> } /> 
                        <Route path='admin/userList' element={ <UserListScreen /> } />
                        <Route path='admin/productList' element={ <ProductsListScreen /> } />
                        <Route path='admin/makerList' element={ <MakerListScreen /> } />
                        <Route path='admin/profile' element={ <AdminProfileUpdateScreen /> } />
                        <Route path='admin/order' element={ <AdminOrderListScreen /> } />
                    </Route>

                    <Route element={ <RequireAuth allowRoles={'maker'} /> }>
                        <Route path='maker/dashboard' element={ <MakerDashboard /> } />
                    </Route>

                    <Route path='*' element={ <NotFoundPage /> } />
                </Route>
            </Routes>
            <CopyRights />
        </BrowserRouter>
    )
}

export default Router;