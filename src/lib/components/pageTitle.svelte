<script lang='ts'>
  



  export let appear: boolean = false

</script>



<h1 style={ appear ? '--trs: 0 0 0; --opc: 1;' : '--trs: 100% 0 0; --opc: 0;' }>
  <slot></slot>
</h1>



<style>
  /* .all-03 {
    overflow:       hidden;
  } */

  h1 {
    width:          calc(100% - 8px * 2);
    display:        grid;
    place-items:    center;
    padding:        8px 16px;
    margin:         0 8px 0 8px;
    text-wrap:      balance;
    border-left:    solid 12px var(--clr-grey-875);
    border-right:   solid 12px var(--clr-grey-875);
    font-size:      6.64dvw;
    font-weight:    300;
    background:     var(--clr-grey-125);
    color:          var(--clr-grey-800);
    border-radius:  8px;
    padding:        16px;
    transition:     all .6s var(--cubic-easeInOutExpo);
    translate:      var(--trs, 100% 0 0);
    opacity:        var(--opc, 0);
  }

  @media screen and (min-width: 480px) { h1 { font-size: 3.4rem; } }
</style>