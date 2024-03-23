import React, { useEffect } from 'react'
import ImgNetflixLogo from '../assets/netflix.png'
import { useUserSlice } from '../hooks/useUserSlice'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { USER_LOGO } from '../utils/constants'

const Header = () => {
  const { user, addUser, removeUser } = useUserSlice()
  const { signout } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <header className='flex justify-between items-center absolute w-full z-10 px-6'>
      <img src={ImgNetflixLogo} alt='Netflix logo' className='w-36 md:w-64' />
      {user && (
        <div className='w-80 flex justify-start gap-2 items-center'>
          <span className='font-bold'>{user.displayName}</span>
          <img className='w-10' src={USER_LOGO} alt='user icon' />
          <button onClick={signout} className='text-black font-bold'>
            Sign out
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
