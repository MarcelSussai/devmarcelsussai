<script lang='ts'>
  import PageTitle from '$components/pageTitle.svelte';
import Test01 from './../../lib/components/ideas_test/test01.svelte'
  

</script>


<div class="styled-01"> </div>
<section class="teste">
  <PageTitle appear={true}><span class="bold">Portfólio</span></PageTitle>
</section>
<p class="main-text">
  teste
</p>

<style>
  .teste {
    width: 100%;
    margin-top: 8px;
  }

  .styled-01 {
    position: fixed;
    /* top: 0;
    left: 0;
    width: 488px;
    height: 100dvh;
    background: var(--clr-grey-875);
    z-index: -9; */
  }

</style>