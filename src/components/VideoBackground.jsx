import React from 'react'
import { useMoviesSlice } from '../hooks/useMoviesSlice'
import { useMovieTrailer } from '../hooks/useMovieTrailer'
import { YOUTUBE_BASE_URL } from '../utils/constants'

const VideoBackground = ({ movieId }) => {
  const { movies } = useMoviesSlice()
  useMovieTrailer(movieId)

  return (
    <div
      className='overflow-x-hidden'
      style={{ width: '100vw', maxWidth: '100%' }}
    >
      {movies?.trailerVideo?.key && (
        <iframe
          className='w-screen aspect-video '
          src={`${
            YOUTUBE_BASE_URL + movies.trailerVideo.key
          }?autoplay=1&mute=1&cc_load_policy=0`}
          title='YouTube video player'
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}

export default VideoBackground
