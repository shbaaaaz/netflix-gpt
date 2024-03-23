import { useSelector } from 'react-redux'
import { addUser, removeUser } from '../store/slices/userSlice'

export const useUserSlice = () => {
  const user = useSelector((store) => store.user)
  return { user, addUser, removeUser }
}
