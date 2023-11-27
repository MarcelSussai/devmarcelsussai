<script lang='ts'>
  import Logotype from '$components/logotype.svelte'
  import Menu from '$components/menu.svelte'



  
</script>



<header>
  <Logotype />
  <Menu />
</header>

<div class="styled" />

<style>
  @keyframes detail-appear-header { 0% {
    translate: 0 -100% 0;
  } 100% {
    translate: 0 0 0;
  }}
  @keyframes details-appear-nav {
    0% {
      border-left: 0px solid var(--clr-grey-875);
      border-right: 0px solid var(--clr-grey-875);
      width: 0px;
    }
    100% {
      border-left: 64px solid var(--clr-grey-875);
      border-right: 16px solid var(--clr-grey-500);
      width: 200px;
    }
  }
  /* header {
    
  } */
  header {
    width:            100%;
    display:          flex;
    justify-content:  center;
    position:         fixed;
    z-index:          99;
    justify-items:    center;
  }
  header::before {
    content:    '';
    position:   absolute;
    top:        0;
    width:      100%;
    height:     32px;
    background: var(--clr-grey-875);
    z-index:    -2;
    translate: 0 -100% 0;
    animation: detail-appear-header .8s .16s var(--cubic-easeInSine) forwards;
  }
  .styled {
    content:    '';
    transition: all .4s ease-in-out;
    position:   absolute;
    left: 0; top: 0;
    border-left: 0px solid var(--clr-grey-875);
    border-right: 0px solid var(--clr-grey-875);
    width: 0px;
    height: 100%;
    z-index: 8;
    background: linear-gradient(
      90deg, var(--clr-main-250), var(--clr-second-250)
    );
  }
  @media screen and (min-width: 792px) {
    .styled {
      animation: details-appear-nav .4s var(--cubic-easeInOutSine) forwards;
    }
  }
</style>