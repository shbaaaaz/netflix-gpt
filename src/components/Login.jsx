import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-login-background'>
      <div className='px-6 bg-gradient-to-b from-black py-1'>
        <Header />
        <div className='flex justify-center py-10'>
          <div className='flex flex-col p-8 md:p-20 bg-black/90 md:bg-black/65 w-full md:w-1/3 rounded'>
            <h1 className='text-white text-4xl font-semibold'>Sign In</h1>
            <form className='flex flex-col gap-6 py-10 text-white'>
              <input
                type='text'
                placeholder='Email Address'
                className='rounded p-4 outline-none bg-gray-900'
              />
              <input
                type='password'
                placeholder='Password'
                className='rounded p-4 outline-none bg-gray-900'
              />
              <div className='flex flex-col gap-2 my-6'>
                <button className='bg-red-600 py-4 rounded text-lg font-semibold'>
                  Sign In
                </button>
                <div className='flex justify-between text-gray-400'>
                  <div className='flex gap-1'>
                    <input id='remember' type='checkbox' className='rounded' />
                    <label htmlFor='remember' className=''>
                      Remember me
                    </label>
                  </div>
                  <Link>Need help?</Link>
                </div>
              </div>
              <div></div>
            </form>
            <div className='flex flex-col text-gray-400 gap-4'>
              <p className='text-xl'>
                New to Netflix? <Link className='text-white'>Sign up now</Link>
              </p>
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
