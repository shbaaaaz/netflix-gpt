import { useDispatch } from 'react-redux'
import { useMoviesSlice } from './useMoviesSlice'
import { API_OPTIONS, POPULAR_MOVIES_API_URL } from '../utils/constants'
import { useEffect } from 'react'

export const usePopularMovies = () => {
  const { addPopularMovies } = useMoviesSlice()
  const dispatch = useDispatch()

  const getPopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES_API_URL, API_OPTIONS)
    const movies = await response.json()
    dispatch(addPopularMovies(movies.results))
  }

  useEffect(() => {
    getPopularMovies()
  }, [])
}
