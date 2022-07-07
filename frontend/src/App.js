import React,{ useEffect } from 'react';
import Router from './routes/Router';
import { userLoaded } from './redux/actions/AuthActions';
import { useDispatch, connect } from 'react-redux'
import store from './redux/store';

const App = ({ userLoaded }) => {

    // const dispatch = useDispatch();

    useEffect(() => {
       userLoaded()
    },[])

    return (
        <Router />
    )
}



export default connect(null, { userLoaded })(App);