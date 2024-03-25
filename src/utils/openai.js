import OpenAI from 'openai'

console.log(process.env.REACT_APP_OPENAI_API_KEY, 'key')
const openai = new OpenAI({
  apiKey: 'hdcjch',
  dangerouslyAllowBrowser: true,
})

export default openai
