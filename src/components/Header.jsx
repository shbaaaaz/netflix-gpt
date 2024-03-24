import React, { useEffect } from 'react'
import ImgNetflixLogo from '../assets/netflix.png'
import { useUserSlice } from '../hooks/useUserSlice'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { SUPPORTED_LANGUAGES, USER_LOGO } from '../utils/constants'
import { useGPT, useGPTSlice } from '../hooks/useGPTSlice'
import { useConfigSlice } from '../hooks/useConfigSlice'

const Header = () => {
  const { user, addUser, removeUser } = useUserSlice()
  const { toggleGPTSearchView } = useGPTSlice()
  const { config, changeLanguage } = useConfigSlice()
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

  const handleLanguageChange = ({ target }) => {
    dispatch(changeLanguage(target.value))
  }

  return (
    <header className='flex justify-between items-center absolute w-full z-10 px-6'>
      <img src={ImgNetflixLogo} alt='Netflix logo' className='w-36 md:w-64' />
      {user && (
        <div className=' flex justify-start gap-3 items-center text-white'>
          <select
            onChange={handleLanguageChange}
            className='bg-transparent outline-none'
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option
                className='bg-black'
                key={language.identifier}
                value={language.identifier}
              >
                {language.language}
              </option>
            ))}
          </select>
          <button
            onClick={() => dispatch(toggleGPTSearchView())}
            className='font-bold bg-green-500 rounded px-5 py-2'
          >
            GPT Search
          </button>
          <img className='w-10' src={USER_LOGO} alt='user icon' />
          <button onClick={signout} className='text-white font-bold'>
            Sign out
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
