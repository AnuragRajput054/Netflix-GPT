import React from 'react'
import { LOGO } from '../utils/constaint';

const Header = () => {
  return (
    <div className= 'absolute  px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src={LOGO} alt='logo' className='w-44'></img>
    </div>
  )
}

export default Header;
