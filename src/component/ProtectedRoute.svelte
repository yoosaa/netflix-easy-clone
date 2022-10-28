<script>
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import { auth } from '../firebase'
  import { user } from '../store/AuthStore'

  onMount(() => {
    auth.onAuthStateChanged(res => user?.set(res))
    if (Object.keys($user).length === 0) navigate('/')
  })
</script>

{#if Object.keys($user).length !== 0}
  <slot />
{/if}
