import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// component
import Nav from "./Nav";
import Header from "./Header";
import Home from './Home';
import Footer from './Footer';

// Nav component
import Login from './Login'
import Post from './Post'
import Join from './Join'


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const auth = {
        isLoggedIn,
        isAdmin,
        setIsLoggedIn,
        setIsAdmin,
    };
    return (
        <BrowserRouter>
            <Nav {...auth}/>
            <Header />
            <Route exact path="/" component={Home} />
            <Route
                path="/login"
                render={(props) => <Login {...props} {...auth} />}
            />
            <Route path="/post/:id" component={Post} />
            <Route path="/join" component={Join} />
            <Footer />
        </BrowserRouter>
    )
}

export default App
