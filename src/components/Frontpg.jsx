import React from 'react'
import Heropg from './Heropg'
import Navbar from './Navbar'

const Frontpg = () => {
  return (
    <div className="h-1/2 lg:h-90 bg-gradient-to-b from-[#1d2615] relative">
      <Navbar />
      <Heropg />
    </div>
  );
}

export default Frontpg