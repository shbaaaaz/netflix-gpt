import { useSelector } from 'react-redux'
import { toggleGPTSearchView } from '../store/slices/gptSlice'

export const useGPTSlice = () => {
  const gpt = useSelector((store) => store.gpt)
  return { gpt, toggleGPTSearchView }
}
