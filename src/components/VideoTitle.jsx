import React from 'react'
import { IconPlay } from './ui/icons'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' px-12 w-full aspect-video absolute bg-gradient-to-r from-black pt-60 text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg py-6 w-1/3'>{overview}</p>
      <div className='flex items-center gap-3'>
        <button className='text-black bg-white px-12 py-3 font-semibold rounded-lg text-lg flex items-center gap-1 hover:bg-opacity-80'>
          <IconPlay stroke='black' fill='black' /> Play
        </button>
        <button className='text-white bg-gray-500/40 px-12 py-3 font-semibold rounded-lg text-lg hover:bg-gray-300/10'>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
