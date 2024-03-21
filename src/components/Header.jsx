import React from 'react'
import ImgNetflixLogo from '../assets/netflix.png'
import { useUser } from '../store/appStore'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { user } = useUser()
  const { signout } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    signout()
    navigate('/')
  }

  return (
    <header className='flex justify-between items-center'>
      <img src={ImgNetflixLogo} alt='Netflix logo' className='w-36 md:w-64' />
      {user && (
        <div className='w-80 flex justify-start gap-2 items-center'>
          <span className='font-bold'>{user.displayName}</span>
          <img
            className='w-10'
            src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
            alt='user icon'
          />
          <button onClick={handleSignOut} className='text-black font-bold'>
            Sign out
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
