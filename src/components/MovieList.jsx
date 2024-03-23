import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  if (!movies) return
  return (
    <div className='px-2 '>
      <h2 className='text-4xl font-semibold py-4 text-white'>{title}</h2>
      <div className='flex overflow-x-scroll scrollbar'>
        <div className='flex gap-2'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieName={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
