const key = import.meta.env.VITE_THEMOVIEID

const requests = {
  requestLatest: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ja&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ja`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=ja`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=ja`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ja`,
}

export default requests