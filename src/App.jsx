import React from 'react'
import Navbar from "./Components/Navbar"
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Cards from './Components/Cards'



function App  () {
  return (
    <div className='w-full bg-zinc-900 text-white  font -["satoshi_variable"]'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Cards/>
      
      </div>
  )
}

export default App
