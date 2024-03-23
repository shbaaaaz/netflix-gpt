import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath, movieName }) => {
  return (
    <div className='w-48'>
      <img src={IMG_CDN_URL + posterPath} alt={movieName} />
    </div>
  )
}

export default MovieCard
