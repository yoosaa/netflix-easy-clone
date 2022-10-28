<script>
  import Icon from '@iconify/svelte'
  import { user } from '../store/AuthStore'
  import { db } from '../firebase'
  import { arrayUnion, arrayRemove, doc, updateDoc } from 'firebase/firestore'
  import { isTrutyObject, truncateString } from '../js/funcs'

  let like = false
  let saved = false
  export let movie = {}
  let isLogin = false
  const toggleShow = async () => {
    if (!isLogin) {
      alert('ログインしてください')
      return
    }
    like ? await removeShow() : await saveShow()
  }

  let movieID = {}
  // ref: $user
  $: if (isTrutyObject($user)) {
    isLogin = true
    movieID = doc(db, 'user', `${$user.email}`)
  }

  const saveShow = async () => {
    like = !like
    saved = false
    await updateDoc(movieID, {
      savedShows: arrayUnion({
        id: movie.id,
        title: movie.title,
        img: movie.backdrop_path
      })
    })
  }
  const removeShow = async () => {
    like = !like
    saved = false
    await updateDoc(movieID, {
      savedShows: arrayRemove({
        id: movie.id,
        title: movie.title,
        img: movie.backdrop_path
      })
    })
  }
</script>

<div class="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2">
  <img
    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
    alt={movie?.title}
  >
  <div class="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
    <p class="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
      {truncateString(movie?.title, 10)}
    </p>
    <button
      on:click|preventDefault={toggleShow}
    >
      {#if like}
        <Icon icon='ant-design:heart-filled' class='absolute top-4 left-4 text-gray-300' />
      {:else}
        <Icon icon='akar-icons:heart' class='absolute top-4 left-4 text-gray-300' />
      {/if}
    </button>
  </div>
</div>
