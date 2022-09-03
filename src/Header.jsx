import Nav from "./Nav"
import React, { Component } from 'react'
import Login from './login'
import Register from './register';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const Header = () =>
{

    return(
        <>
        <Router>
        <div>
      
          <Nav/ >

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
         
            <Route  exact path="/" element={ <Login /> } />
            <Route  exact path="/register" element={ <Register /> } />
           
            
        </Routes>   
          
        
          
          </div>
     
    </Router>
      
        </>
    )

}

export default Header