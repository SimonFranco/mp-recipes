import './App.css';
import AppNavbar from './components/NavBar';
import Home from './pages/Home';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorPage from './pages/404/404';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import { useContext } from 'react';
import { MyContext } from "./context";
import React from 'react';

function App() {
  return (
    <Router>
    <div className="Jumbo">
      <AppNavbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
          
        </Route>
        <Route exact path="/login" element={<Login/>}>
          
        </Route>
        <Route exact path="/signup" element={<Signup/>}>
        
          </Route>
        <Route path="*" element={<ErrorPage/>} >
          
        </Route>
        
      </Routes>
    </div>
    </Router>
  )
}

export default App;