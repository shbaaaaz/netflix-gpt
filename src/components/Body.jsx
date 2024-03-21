import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useEffect } from 'react'
import { useUser } from '../store/appStore'
import { useDispatch } from 'react-redux'

const Body = () => {
  const dispath = useDispatch()
  const { addUser, removeUser } = useUser()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispath(addUser({ uid: uid, email: email, displayName: displayName }))
      } else {
        dispath(removeUser())
      }
    })
  }, [])
  const appRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/browse', element: <Browse /> },
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
