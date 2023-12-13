<script lang='ts'>
  import PageTitle from '$components/pageTitle.svelte'
  import icon_port from '$lib/assets/icon_port.svg'
  
  /*
  TODO: portifólio
  */

</script>


<div class="styled-01"> </div>
<section class="teste">
  <PageTitle appear={true} image={icon_port}><span class="bold">Portfólio</span></PageTitle>
</section>
<p class="main-text bord-01">
  Alguns dos <span class="grad-bold-01">ultimos</span>  projetos trabalhados que posso compartilhar ...
</p>
<section class="projects">
  
</section>


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