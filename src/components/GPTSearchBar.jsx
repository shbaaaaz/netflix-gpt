import React from 'react'
import lang from '../utils/languageConstant'
import { useConfigSlice } from '../hooks/useConfigSlice'

const GPTSearchBar = () => {
  const { config } = useConfigSlice()
  const selectedLanguage = config.lang
  return (
    <div className='flex justify-center bg-gradient-to-b from-black py-1'>
      <form className='bg-black text-white mt-[100px] p-2 grid grid-cols-12 w-1/2 gap-2'>
        <input
          type='text'
          className='col-span-9 pl-3 text-black'
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button className='col-span-3 bg-red-600 w-full py-2 px-4 font-semibold'>
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  )
}

export default GPTSearchBar
