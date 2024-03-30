import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import GPTSearch from './GPTSearch'
import { useGPTSlice } from '../hooks/useGPTSlice'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  const { gpt } = useGPTSlice()
  return (
    <div className='w-full overflow-x-hidden'>
      <Header />
      <div>
        {gpt.showGPTSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  )
}

export default Browse
