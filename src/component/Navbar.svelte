<script>
import { link, navigate } from 'svelte-routing'
import { user, logOut } from '../store/AuthStore'
import { isTrutyObject } from '../js/funcs'

$: isLogin = isTrutyObject($user)
const handleLogout = async () => {
  try {
    await logOut()
    user.set({})
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}
</script>

<div class="flex items-center justify-between p-4 z-[100] absolute w-full">
  <h1 class="text-red-600 text-4xl font-bold cursor-pointer">
    <a href="/" use:link>
      NETFLIX
    </a>
  </h1>
  {#if isLogin}
    <div>
      <button class="text-white pr-4"
        on:click={() => navigate('/account')}
      >Account</button>
      <button class="bg-red-600 px-6 py-2 rounded cursor-pointer"
        on:click={handleLogout}
      >Log Out</button>
    </div>
  {:else}
    <div>
      <button class="text-white pr-4"
        on:click={() => navigate('/login')}
      >Sign In</button>
      <button class="bg-red-600 px-6 py-2 rounded cursor-pointer"
        on:click={() => navigate('/signup')}
      >Sign Up</button>
    </div>
  {/if}
</div>

<style lang="scss">

</style>