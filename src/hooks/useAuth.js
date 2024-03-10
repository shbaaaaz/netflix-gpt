import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth'
import { auth } from '../utils/firebase'

export const useAuth = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const signup = async (name, email, password) => {
    setError(null)
    setLoading(true)
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      if (!result) throw new Error('Could not complete signup')
      await updateProfile(auth.currentUser, {
        displayName: name,
      })
      await sendEmailVerification(auth.currentUser)
      setLoading(false)
      setError(null)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  const signin = async (email, password) => {
    setError(null)
    setLoading(true)
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      if (!result) throw new Error('Could sign in')
      setLoading(false)
      setError(null)
      console.log(result.user, 'signed in')
      return result.user
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return { error, loading, signup, signin }
}
