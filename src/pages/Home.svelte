<script>
  import Main from '../component/Main.svelte'
  import Row from '../component/Row.svelte'
  import requests from '../js/requests'
</script>

<div>
  <Main />
  <Row title='Trending' fetchURL={requests.requestTrending} />
</div>
