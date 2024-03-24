import React from 'react'
import MovieList from './MovieList'
import { useMoviesSlice } from '../hooks/useMoviesSlice'

const SecondaryContainer = () => {
  const { movies } = useMoviesSlice()
  if (!movies) return
  const { nowPlayingMovies, popularMovies, topRatedMovies } = movies
  return (
    <div className='bg-black'>
      <div className='-mt-32 pl-12 relative z-30'>
        <MovieList title='Now Playing' movies={nowPlayingMovies} />
        <MovieList title='Popular' movies={popularMovies} />
        <MovieList title='Top Rated' movies={topRatedMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
