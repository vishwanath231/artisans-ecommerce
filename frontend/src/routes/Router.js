import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginScreen from '../screens/common/auth/LoginScreen';
import RegisterScreen from '../screens/common/auth/RegisterScreen';
import HomeScreen from '../screens/common/HomeScreen';
import CartScreen from '../screens/common/CartScreen';
import ProductScreen from '../screens/common/ProductScreen';
// import CopyRights from '../components/CopyRights';
import AdminDashboard from '../screens/admin/AdminDashboard';
import ProductsListScreen from '../screens/admin/ProductsListScreen';
import UserListScreen from '../screens/admin/UserListScreen';
import UserOrderListScreen from '../screens/client/UserOrderListScreen';
import MakerListScreen from '../screens/admin/MakerListScreen';
import AdminProfileScreen from '../screens/admin/AdminProfileScreen';
import AdminOrderScreen from '../screens/admin/AdminOrderScreen';
import MakerDashboard from '../screens/maker/MakerDashboard';
import NotFoundPage from './pages/NotFoundPage';
import UnAuthorizedPage from './pages/UnAuthorizedPage';
import RouterLayout from './auth/RouterLayout';
import RequireAuth from './auth/RequireAuth';
import ShippingScreen from '../screens/common/ShippingScreen';
import PaymentScreen from '../screens/common/PaymentScreen';
import PlaceOrderScreen from '../screens/common/PlaceOrderScreen';
import OrderScreen from '../screens/common/OrderScreen';




const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={ <RouterLayout /> } >

                    <Route path='/' element={<HomeScreen /> } />
                    <Route path='login' element={<LoginScreen /> } />
                    <Route path='register' element={<RegisterScreen /> } />
                    <Route path='product/:id' element={ <ProductScreen /> } />
                    <Route path='cart' element={<CartScreen /> } />
                    <Route path='cart/:productId' element={<CartScreen /> } />
                    <Route path='/shipping' element={<ShippingScreen /> } />
                    <Route path='/payment' element={<PaymentScreen /> } />
                    <Route path='/placeorder' element={<PlaceOrderScreen /> } />
                    <Route path='/orderList' element={<UserOrderListScreen /> } />
                    
                    <Route path='/order/:orderId' element={<OrderScreen /> } />
                

                    <Route path='unAuth' element={<UnAuthorizedPage /> } />

                    
                    <Route element={ <RequireAuth allowRoles={'admin'} /> } >
                        <Route path='admin/dashboard' element={ <AdminDashboard /> } /> 
                        <Route path='admin/userList' element={ <UserListScreen /> } />
                        <Route path='admin/productList' element={ <ProductsListScreen /> } />
                        <Route path='admin/makerList' element={ <MakerListScreen /> } />
                        <Route path='admin/profile' element={ <AdminProfileScreen /> } />
                        <Route path='admin/order' element={ <AdminOrderScreen /> } />
                    </Route>

                    <Route element={ <RequireAuth allowRoles={'maker'} /> }>
                        <Route path='maker/dashboard' element={ <MakerDashboard /> } />
                    </Route>

                    <Route path='*' element={ <NotFoundPage /> } />
                </Route>
            </Routes>
            {/* <CopyRights /> */}
        </BrowserRouter>
    )
}

export default Router;