import React, { useEffect } from 'react'
import Header from './Header'
import { useUser } from '../store/appStore'
import { useNavigate } from 'react-router-dom'

const Browse = () => {
  const { user } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/')
  }, [user])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse
