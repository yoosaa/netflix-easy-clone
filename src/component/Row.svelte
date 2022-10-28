<script>
  import axios from 'axios'
  import Icon from '@iconify/svelte'

  import Movie from '../component/Movie.svelte'

  export let title = ''
  export let fetchURL = ''
  export let rowId = ''
  const getMovies = async url => {
    const res = await axios.get(url)

    if (res.status === 200) return res.data.results
    else throw new Error(res.data.status_message)
  }
  $: movies = getMovies(fetchURL)

  const slideLeft = () => {
    const slider = document.getElementById(`slider${rowId}`)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    const slider = document.getElementById(`slider${rowId}`)
    slider.scrollLeft = slider.scrollLeft + 500
  }
</script>

<h2 class="text-white font-bold md:text-xl p-4">
  {title}
</h2>
{#await movies}
  <h3 class="text-white w-full h-full text-center">...Loading</h3>
{:then movies}
  <div class="relative flex items-center group">
    <button class='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
      on:click|preventDefault={slideLeft}
    >
      <Icon icon='akar-icons:chevron-left' />
    </button>
    <div id={`slider${rowId}`} class="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
      {#each movies as movie (movie.id)}
        <Movie movie={movie}/>
      {/each}
    </div>
    <button class='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
      on:click|preventDefault={slideRight}
    >
      <Icon icon='akar-icons:chevron-right' />
    </button>
  </div>
{:catch error}
  <h3>
    {error}
  </h3>
{/await}
