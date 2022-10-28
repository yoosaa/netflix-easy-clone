<script>
  import Icon from '@iconify/svelte'
  import { updateDoc, doc, onSnapshot, arrayRemove } from 'firebase/firestore'
  import { db } from '../firebase'
  import { user } from '../store/AuthStore'
  import { truncateString } from '../js/funcs'

  export let rowId = ''
  const slideLeft = () => {
    const slider = document.getElementById(`slider${rowId}`)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    const slider = document.getElementById(`slider${rowId}`)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  let movies = []
  let movieDoc = doc(db, 'user', `${$user.email}`)
  onSnapshot(movieDoc, doc=>{
    movies = doc.data().savedShows
  })

  const removeShow = async target => {
    await updateDoc(movieDoc, {
      savedShows: arrayRemove({
        id: target.id,
        title: target.title,
        img: target.backdrop_path
      })
    })
  }
</script>

<h2 class="text-white font-bold md:text-xl p-4">My Shows</h2>
<div class="relative flex items-center group">
  <button class='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
    on:click|preventDefault={slideLeft}
  >
    <Icon icon='akar-icons:chevron-left' />
  </button>
  <div id={`slider${rowId}`} class="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
    {#each movies as movie (movie.id)}
      <div class="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.img}`}
          alt={movie?.title}
        >
        <div class="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p class="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center overflow-hyphens">
            {truncateString(movie?.title, 10)}
          </p>
          <button
            on:click|preventDefault={() => removeShow(movie)}
          >
            <Icon icon='ant-design:close-outlined' class='absolute top-4 left-4 text-gray-300' />
          </button>
        </div>
      </div>
    {/each}
  </div>
  <button class='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
    on:click|preventDefault={slideRight}
  >
    <Icon icon='akar-icons:chevron-right' />
  </button>
</div>
