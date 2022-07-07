import React,{ useEffect } from 'react';
import Router from './routes/Router';
import { userLoaded } from './redux/actions/AuthActions';
import { connect } from 'react-redux';

const App = ({ userLoaded }) => {

    useEffect(() => {
       userLoaded()
    },[userLoaded])

    return (
        <Router />
    )
}

export default connect(null, { userLoaded })(App);