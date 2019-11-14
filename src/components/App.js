import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// component
import Nav from "./Nav";
import Header from "./Header";
import Home from './Home';
import Footer from './Footer';

// Nav component
import Login from './Login'
import Post from './Post'


const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/post/:id" component={Post} />
            <Footer />
        </BrowserRouter>
    )
}

export default App
