import React from 'react'
import { useGPTSlice } from '../hooks/useGPTSlice'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {
  const { gpt } = useGPTSlice()
  const { movieResults, movieNames } = gpt
  if (!movieNames) return null
  return (
    <div className='bg-black px-6 my-20 overflow-x-hidden'>
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  )
}

export default GPTMovieSuggestions
