import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// COMPONENTS
// import CopyRights from '../components/CopyRights';

// COMMON
import LoginScreen from '../screens/common/auth/LoginScreen';
import RegisterScreen from '../screens/common/auth/RegisterScreen';
import HomeScreen from '../screens/common/HomeScreen';
import CartScreen from '../screens/common/CartScreen';
import ProductScreen from '../screens/common/ProductScreen';
import ShippingScreen from '../screens/common/ShippingScreen';
import PaymentScreen from '../screens/common/PaymentScreen';
import PlaceOrderScreen from '../screens/common/PlaceOrderScreen';
import OrderScreen from '../screens/common/OrderScreen';

// USER 
import UserOrderListScreen from '../screens/client/UserOrderListScreen';
import UserProfileUpdateScreen from '../screens/client/UserProfileUpdateScreen';

// ADMIN
import AdminDashboard from '../screens/admin/AdminDashboard';
import ProductsListScreen from '../screens/admin/ProductsListScreen';
import UserListScreen from '../screens/admin/UserListScreen';
import MakerListScreen from '../screens/admin/MakerListScreen';
import OrderListScreen from '../screens/admin/OrderListScreen';
import AdminProfileScreen from '../screens/admin/AdminProfileScreen';
import AdminOrderScreen from '../screens/admin/AdminOrderScreen';

// MAKER -> ARTISAN
import MakerDashboard from '../screens/maker/MakerDashboard';

// AUTH 
import RouterLayout from './auth/RouterLayout';
import RequireAuth from './auth/RequireAuth';

// PAGES
import NotFoundPage from './pages/NotFoundPage';
import UnAuthorizedPage from './pages/UnAuthorizedPage';





const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <RouterLayout /> } >

                    {/* COMMON */}
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
                    <Route path='/profile' element={<UserProfileUpdateScreen /> } />
                
                
                    {/* AUTH */}
                    <Route path='unAuth' element={<UnAuthorizedPage /> } />


                    {/* ADMIN */}
                    <Route element={ <RequireAuth allowRoles={'admin'} /> } >
                        <Route path='admin/dashboard' element={ <AdminDashboard /> } /> 
                        <Route path='admin/userList' element={ <UserListScreen /> } />
                        <Route path='admin/productList' element={ <ProductsListScreen /> } />
                        <Route path='admin/makerList' element={ <MakerListScreen /> } />
                        <Route path='admin/profile' element={ <AdminProfileScreen /> } />
                        <Route path='admin/order' element={ <AdminOrderScreen /> } />
                        <Route path='admin/orderList' element={ <OrderListScreen /> } />
                    </Route>


                    {/* MAKER  */}
                    <Route element={ <RequireAuth allowRoles={'maker'} /> }>
                        <Route path='maker/dashboard' element={ <MakerDashboard /> } />
                    </Route>


                    {/* NOT FOUND PAGE */}
                    <Route path='*' element={ <NotFoundPage /> } />

                </Route>
            </Routes>
            {/* <CopyRights /> */}
        </BrowserRouter>
    )
}

export default Router;