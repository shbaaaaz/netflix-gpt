import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearch = () => {
  return (
    <div className='bg-nf-background w-screen min-h-screen'>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearch
