<script>
  import axios from 'axios'
  import Icon from '@iconify/svelte'

  export let title = ''
  export let fetchURL = ''
  const getMovies = async () => {
    const res = await axios.get(fetchURL)

    if (res.status === 200) return res.data.results
    else throw new Error(res.data.status_message)
  }
  let movies = getMovies()

  const like = false
</script>

<div>
  <h2 class="text-white font-bold md:text-xl p-4">
    {title}
  </h2>
  {#await movies}
    <h3>...Loading</h3>
  {:then movies}
    <div class="relative flex items-center">
      <div id={'slider'}>
        {#each movies as movie (movie.id)}
          <div class="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt={movie?.title}
            >
            <div class="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
              <p class="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                {movie?.title}
              </p>
              <p>
                {#if like}
                  <Icon icon='ant-design:heart-filled' class='absolute top-4 text-gray-300' />
                {:else}
                  <Icon icon='akar-icons:heart' class='absolute top-4 text-gray-300' />
                {/if}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {:catch error}
    <h3>
      {error}
    </h3>
  {/await}
</div>
