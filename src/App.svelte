<script>
  import Router from 'svelte-spa-router'
  import { routes } from './router/index'
  import Navbar from './component/Navbar.svelte'
</script>

<main>
  <Navbar />
  <Router {routes} />
</main>
