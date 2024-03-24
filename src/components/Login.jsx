import React, { useState, useRef } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { checkValidData } from '../utils/validation'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const [isSignupForm, setIsSignupForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const { error, signup, signin } = useAuth()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const nameRef = useRef(null)

  const toggleSignUpForm = () => {
    setIsSignupForm((prev) => !prev)
  }

  const handleButtonClick = (e) => {
    // validate the form data
    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    )
    if (message) {
      setErrorMessage(message)
      return
    }
    // Sign up / Sign in
    if (isSignupForm) {
      signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      )
      if (error) setErrorMessage(error)
    } else {
      signin(emailRef.current.value, passwordRef.current.value)
      if (error) setErrorMessage(error)
    }
  }

  return (
    <div className='bg-nf-background'>
      <div className='bg-gradient-to-b from-black py-1'>
        <Header />
        <div className='flex justify-center py-10'>
          <div className='flex flex-col p-8 md:p-20 bg-black/90 md:bg-black/65 w-full md:w-1/3 rounded'>
            <h1 className='text-white text-4xl font-semibold'>
              {isSignupForm ? 'Sign up' : 'Sign In'}
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className='flex flex-col gap-6 py-10 text-white'
            >
              {isSignupForm && (
                <input
                  type='text'
                  ref={nameRef}
                  placeholder='Full Name'
                  className='rounded p-4 outline-none bg-gray-900'
                />
              )}
              <input
                type='text'
                ref={emailRef}
                placeholder='Email Address'
                className='rounded p-4 outline-none bg-gray-900'
              />
              <input
                type='password'
                ref={passwordRef}
                placeholder='Password'
                className='rounded p-4 outline-none bg-gray-900'
              />
              <div className='flex flex-col gap-2 my-6'>
                {errorMessage && (
                  <p className='text-red-500 text-lg'>{errorMessage}</p>
                )}
                <button
                  className='bg-red-600 py-4 rounded text-lg font-semibold'
                  onClick={handleButtonClick}
                >
                  {isSignupForm ? 'Sign Up' : 'Sign In'}
                </button>
                {!isSignupForm && (
                  <div className='flex justify-between text-gray-400'>
                    <div className='flex gap-1'>
                      <input
                        id='remember'
                        type='checkbox'
                        className='rounded'
                      />
                      <label htmlFor='remember' className=''>
                        Remember me
                      </label>
                    </div>
                    <Link>Need help?</Link>
                  </div>
                )}
              </div>
              <div></div>
            </form>
            <div className='flex flex-col text-gray-400 gap-4'>
              {isSignupForm ? (
                <p className='text-xl'>
                  Already a user?{' '}
                  <button className='text-white' onClick={toggleSignUpForm}>
                    Sign in
                  </button>
                </p>
              ) : (
                <p className='text-xl'>
                  New to Netflix?{' '}
                  <button className='text-white' onClick={toggleSignUpForm}>
                    Sign up now
                  </button>
                </p>
              )}
              <p className='text-md'>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot{' '}
                <Link className='text-blue-600 hover:underline'>
                  Learn more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
