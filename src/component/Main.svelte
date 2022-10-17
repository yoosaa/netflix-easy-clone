<script>
  import axios from 'axios'
  import requests from '../js/requests'

  const getMovies = async () => {
    const res = await axios.get(requests.requestTrending)

    if (res.status === 200) return res.data.results
    else throw new Error(res.data.status_message)
  }
  let movies = getMovies()
</script>

<div>
  {#await movies}
    <h1>...Loading</h1>
  {:then movies}
    <ul class="text-white">
      {#each movies as movie (movie.id)}
        <li>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </li>
      {/each}
    </ul>
  {:catch error}
    <p>{error}</p>
  {/await}
</div>