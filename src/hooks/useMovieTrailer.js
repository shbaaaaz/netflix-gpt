import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useMoviesSlice } from './useMoviesSlice'
import { API_OPTIONS } from '../utils/constants'
import { MOVIE_VIDEOS_API_BASE_URL } from '../utils/constants'

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()
  const { addTrailerVideo } = useMoviesSlice()
  const getMovieVideos = async () => {
    const response = await fetch(
      `${MOVIE_VIDEOS_API_BASE_URL + movieId}/videos`,
      API_OPTIONS
    )
    const movieVideos = await response.json()
    const trailer =
      movieVideos.results.find((video) => video.type === 'Trailer') ||
      movieVideos.results[0]
    if (trailer) {
      dispatch(addTrailerVideo(trailer))
    }
  }

  useEffect(() => {
    getMovieVideos()
  }, [])
}
