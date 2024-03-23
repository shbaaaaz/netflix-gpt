import { useDispatch } from 'react-redux'
import { useMoviesSlice } from './useMoviesSlice'
import { API_OPTIONS, TOP_RATED_MOVIES_API_URL } from '../utils/constants'
import { useEffect } from 'react'

export const useTopRatedMovies = () => {
  const { addTopRatedMovies } = useMoviesSlice()
  const dispatch = useDispatch()

  const getTopRatedMovies = async () => {
    const response = await fetch(TOP_RATED_MOVIES_API_URL, API_OPTIONS)
    const movies = await response.json()
    dispatch(addTopRatedMovies(movies.results))
  }

  useEffect(() => {
    getTopRatedMovies()
  }, [])
}
