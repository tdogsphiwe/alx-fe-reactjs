import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){

  return (
    <>

        <nav  style={{
                backgroundColor: "hsl(0, 0%, 11%)",
                padding: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "20px",
                alignItems: "center" 
              }}>
            <div>
            <Link to= "/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none'}}>Home</Link> 
            <Link to="/about" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none'}}>About</Link> 
            <Link to="/services"style={{ margin: '0 10px', color: '#fff', textDecoration: 'none'}}>Services</Link> 
            <Link to="/contact"style={{ margin: '0 10px', color: '#fff', textDecoration: 'none'}}>Contact</Link> 
            </div>
        </nav> 

    </>
  );
}

export default Navbar;