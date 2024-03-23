import { useDispatch } from 'react-redux'
import { useMoviesSlice } from './useMoviesSlice'
import { NOW_PLAYING_API_URL, API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'

export const useNowPlayingMovies = () => {
  const { addNowPlayigMovies } = useMoviesSlice()
  const dispatch = useDispatch()

  const getNowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING_API_URL, API_OPTIONS)
    const movies = await response.json()
    dispatch(addNowPlayigMovies(movies.results))
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])
}
