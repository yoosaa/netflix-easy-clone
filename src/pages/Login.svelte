<script>
  import { link, navigate } from 'svelte-routing'
  import { user, logIn } from '../store/AuthStore'

  let email = ''
  let password = ''
  let error = ''
  const handleSubmit = async () => {
    try {
      const res = await logIn(email, password)
      user.set(res)
      navigate('/')
    } catch (error) {
      console.warn(error)
      error = error.message
    }
  }
</script>

<div class="w-full h-screen">
  <img class="hidden sm:block absolute w-full h-full object-cover" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/b8c36908-ef75-4f08-92cb-bfcf23f7db82/JP-ja-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/b8c36908-ef75-4f08-92cb-bfcf23f7db82/JP-ja-20221017-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/b8c36908-ef75-4f08-92cb-bfcf23f7db82/JP-ja-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="">
  <div class="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
  <div class="fixed w-full px-4 py-24 z-50">
    <div class="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
      <div class="max-w-[320px] mx-auto py-16">
        <h1 class="text-3xl font-bold">Sign In</h1>
        {#if error}
          <p class="p-3 bg-red-400 my-2">{error}</p>
        {/if}
        <form class="w-full flex flex-col py-4">
          <input class="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autocomplete="email"
            bind:value={email}
          >
          <input class="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autocomplete="current-password"
            bind:value={password}
          >
          <button class="bg-red-600 py-3 my-6 rounded font-bold"
            on:click|preventDefault={handleSubmit}
          >Sign In</button>
          <div class="flex justify-between items-center text-sm text-gray-600">
            <p><input class="mr-2" type="checkbox">Remember me</p>
            <p>Need Help?</p>
          </div>
          <p class="py-8">
            <span class="text-gray-600">New to Netflix?</span>
            <a href="/signup" use:link>Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>
