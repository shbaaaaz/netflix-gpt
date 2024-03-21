import { configureStore } from '@reduxjs/toolkit'
import userReducer, { addUser, removeUser } from './userSlice'
import { useSelector } from 'react-redux'

const appStore = configureStore({
  reducer: { user: userReducer },
})

export default appStore

export const useUser = () => {
  const user = useSelector((store) => store.user)
  return { user, addUser, removeUser }
}
