<script>
  import SavedShows from "../component/SavedShows.svelte"
</script>

<div class="w-full text-white">
  <img class="w-full h-[400px] object-cover" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/b8c36908-ef75-4f08-92cb-bfcf23f7db82/JP-ja-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/b8c36908-ef75-4f08-92cb-bfcf23f7db82/JP-ja-20221017-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/b8c36908-ef75-4f08-92cb-bfcf23f7db82/JP-ja-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="">
  <div class="bg-black/60 fixedd top-0 left-0 w-full h-[550]"></div>
  <div class="absolute top-[20%] p-4 md:p-8">
    <h1 class="text-3xl md:text-5xl font-bold">My Shows</h1>
  </div>
</div>
<SavedShows />
