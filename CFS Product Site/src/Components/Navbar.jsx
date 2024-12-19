import React from 'react'
import logo1 from '../assets/logo1.png'
import search1 from '../assets/search1.jpg'
import login1 from '../assets/login1.jpg'
import cart1 from '../assets/cart1.jpg'
const Navbar = () => {
  return (
   <>
    <header>
        <div className="nav-bar">
            <div className="logo">
                <img src={logo1} style={{width:'70px'}}/>
            </div>
            <div className="hero">
            <div className="pages">
                <ul>
                  <a href="Home">Home</a>
                  <a href="Product">Product</a>
                  <a href="Blog">Blog</a>
                  <a href="Contact">Contact</a>
                  <a href="About">About</a>
                </ul>
            </div>
            <div className="search-login-cart">
                <img src={search1} style={{width:'20px'}} className="search"/>
                <img src={login1} style={{width:'20px'}} className="login"/>
                <img src={cart1} style={{width:'20px'}} className="cart"/>
            </div>
            </div>
        </div>
    </header>
   </>
  )
}

export default Navbar
