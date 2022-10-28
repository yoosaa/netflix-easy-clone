<script>
  import Main from '../component/Main.svelte'
  import Row from '../component/Row.svelte'
  import requests from '../js/requests'
</script>

<div>
  <Main />
  <Row rowId='0' title='Top Rated' fetchURL={requests.requestTopRated} />
  <Row rowId='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
  <Row rowId='2' title='Trending' fetchURL={requests.requestTrending} />
  <Row rowId='3' title='Popular' fetchURL={requests.requestPopular} />
</div>
