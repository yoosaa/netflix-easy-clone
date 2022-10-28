<script>
  import axios from 'axios'
  import requests from '../js/requests'
  import { truncateString } from '../js/funcs'

  const getMovies = async () => {
    const res = await axios.get(requests.requestLatest)

    if (res.status === 200) return res.data.results[0]
    else throw new Error(res.data.status_message)
  }
  let movie = getMovies()
</script>

<div>
  {#await movie}
    <h1>...Loading</h1>
  {:then movie}
    <div class="w-full h-[550px] text-white">
      <div class="w-full h-full">
        <div class="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt={movie?.title}
        class="w-full h-full object-cover">
        <div class="absolute w-full top-[20%] p-4 md:p-8">
          <h1 class="text-3xl md:text-5xl font-bold">
            {movie?.title}
          </h1>
          <div class="my-4">
            <button class="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
            <button class="border text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
          </div>
          <p class="text-gray-400 text-sm">
            {movie?.release_date}
          </p>
          <p class="w-full md:max-w-[70%] lg-max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 20)}
          </p>
        </div>
      </div>
    </div>
  {:catch error}
    <h1>
      {error}
    </h1>
  {/await}
</div>