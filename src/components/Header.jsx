import React from 'react'
import ImgNetflixLogo from '../assets/netflix.png'

const Header = () => {
  return (
    <header className='flex justify-start items-center'>
      <img src={ImgNetflixLogo} alt='Netflix logo' className='w-36 md:w-64' />
    </header>
  )
}

export default Header
