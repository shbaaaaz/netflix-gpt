import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useConfigSlice } from '../hooks/useConfigSlice'
import openai from '../utils/openai'

const GPTSearchBar = () => {
  const inputRef = useRef(null)
  const { config } = useConfigSlice()
  const selectedLanguage = config.lang

  const handleGPTSearch = async (e) => {
    e.preventDefault()
    const gptQuery =
      'Act as a movie recomendation system and suggest some movies for the query:' +
      inputRef.current.value +
      '. Only give me names of five movies, comma separated like the example result given ahead. Example Result:  Kuch Kuch Hota Hai, Dilwale, No entry, War, Thor'
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    })
    console.log(gptResults)
  }

  return (
    <div className='flex justify-center bg-gradient-to-b from-black py-1'>
      <form
        onSubmit={handleGPTSearch}
        className='bg-black text-white mt-[100px] p-2 grid grid-cols-12 w-1/2 gap-2'
      >
        <input
          type='text'
          ref={inputRef}
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
