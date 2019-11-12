import React from 'react';
import ReactDOM from 'react-dom';
// style - module
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// style - file
import "./static/css/clean-blog.min.css";
// components
import App from './components/App';

ReactDOM.render(<App />, document.querySelector("#root"));