<script>
  import { Router, Route } from 'svelte-routing'

  import Navbar from './component/Navbar.svelte'

  import Home from './pages/Home.svelte'
  import Login from './pages/Login.svelte'
  import Signup from './pages/Signup.svelte'
  import Account from './pages/Account.svelte'
  import ProtectedRoute from './component/ProtectedRoute.svelte'
</script>

<main>
  <Router>
    <Navbar />
    <Route path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/account"><ProtectedRoute><Account /></ProtectedRoute></Route>
  </Router>
</main>
