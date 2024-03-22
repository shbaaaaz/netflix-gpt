import React, { useEffect } from 'react'
import ImgNetflixLogo from '../assets/netflix.png'
import { useUser } from '../store/appStore'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/slices/userSlice'

const Header = () => {
  const { user } = useUser()
  const { signout } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
  }, [])

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
          <button onClick={signout} className='text-black font-bold'>
            Sign out
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
