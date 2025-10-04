import React from 'react'
import Image from "../assets/cozycode_logo_resize.png"

const Header = () => {
  return (
    <>
      <div className="flex justify-between py-4 border-b-2 border-b-blue-500">
        <div className="flex justify-center gap-2 px-5 align-middle">
          <img className="max-w-14" src={Image} alt="logo" />
          <h2 className="my-auto">CozyCode</h2>
        </div>
        <div className="flex gap-5 px-5 align-middle">
          <a className="my-auto" href="#">About Me</a>
          <a className="my-auto" href="#">Portfolio</a>
          <a className="my-auto" href="#">Blog</a>
          <a className="my-auto" href="#">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Header