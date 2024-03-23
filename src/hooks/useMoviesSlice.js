import { useSelector } from 'react-redux'
import {
  addNowPlayigMovies,
  addTrailerVideo,
} from '../store/slices/moviesSlice'

export const useMoviesSlice = () => {
  const movies = useSelector((store) => store.movies)
  return { movies, addNowPlayigMovies, addTrailerVideo }
}
