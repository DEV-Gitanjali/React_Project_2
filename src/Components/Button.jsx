import React from 'react'
import { CgCornerDownRight } from "react-icons/cg";

function Button  ({title = "Get Started"}) {
  return (
    <div className='min-w-30 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
      <span className=' text-sm font-medium'>{title}</span>
      <CgCornerDownRight/>
    </div>
  )
}

export default Button
