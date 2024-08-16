import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){

  return (
    <>

        <nav style={{ 

            padding: '10px', 
            background: '#333',
            color: '#fff'
             }}>
            <div style={{ 
                margin: '0 10px', 
                color: '#fff', 
                textDecoration: 'none' 
                }}>
            <Link to= "/">Home</Link> 
            <Link to="/about" >About</Link> 
            <Link to="/services">Services</Link> 
            <Link to="/contact">Contact</Link> 
            </div>
        </nav> 

    </>
  );
}

export default Navbar;