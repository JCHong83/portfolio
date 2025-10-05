import React from 'react'
import Header from './Header'
import Image from '../assets/heroimg.jpg'

const Hero = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex justify-center items-center h-screen w-50/100">
          <h1 className="text-8xl/40 font-bold uppercase">JC Hong<br/>Web Developer</h1>
        </div>
        <div className="p-20 w-50/100">
          <img className="h-full object-cover rounded-xl" src={Image} alt="hero image" />
        </div>
      </div>
    </>
  )
}

export default Hero