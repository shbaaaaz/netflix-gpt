import { useSelector } from 'react-redux'
import {
  toggleGPTSearchView,
  addGptMovieResult,
} from '../store/slices/gptSlice'

export const useGPTSlice = () => {
  const gpt = useSelector((store) => store.gpt)
  return { gpt, toggleGPTSearchView, addGptMovieResult }
}
