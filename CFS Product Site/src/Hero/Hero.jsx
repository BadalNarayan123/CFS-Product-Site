import React from 'react'
import './Hero.css'
import Gadget from '../assets/Gadget.png'
const Hero = () => {
  return (
    <>
    <div className="hero1">
        <div className="left-hero">
            <p className="p1">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="p2">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="p3">Lorem ipsum dolor sit amet consectetur.</p>
        <button className="btn">Shop Now</button>
        </div>
        <div className="right-hero">
          <img src={Gadget} alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero
