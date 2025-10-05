import React from 'react'
import ProfileImg from '../assets/profile.jpg'

const AboutMe = () => {
  return (
    <>
      <div className="flex bg-cyan-50">
        <div className="p-50 w-50/100">
          <img className="rounded-xl" src={ProfileImg} alt="profile image" />
        </div>
        <div className="w-50/100">
          <h3>About Me</h3>
        </div>
      </div>
      
    </>
  )
}

export default AboutMe