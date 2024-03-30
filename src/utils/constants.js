export const USER_LOGO =
  'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
export const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/'
export const NOW_PLAYING_API_URL =
  'https://api.themoviedb.org/3/movie/now_playing'
export const POPULAR_MOVIES_API_URL =
  'https://api.themoviedb.org/3/movie/popular'
export const TOP_RATED_MOVIES_API_URL =
  'https://api.themoviedb.org/3/movie/top_rated'
export const MOVIE_VIDEOS_API_BASE_URL = 'https://api.themoviedb.org/3/movie/'
export const MOVIE_SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?query='
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
  },
}

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w780/'

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', language: 'English' },
  { identifier: 'de', language: 'German' },
  { identifier: 'hindi', language: 'Hindi' },
]
