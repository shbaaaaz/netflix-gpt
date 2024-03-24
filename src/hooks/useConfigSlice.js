import { useSelector } from 'react-redux'
import { changeLanguage } from '../store/slices/configSlice'

export const useConfigSlice = () => {
  const config = useSelector((store) => store.config)
  return { config, changeLanguage }
}
