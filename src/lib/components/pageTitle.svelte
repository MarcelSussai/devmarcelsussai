<script lang='ts'>
  



  export let appear: boolean = false
  export let image: string = ''

</script>



<h1 style={ appear ? '--trs: 0 0 0; --opc: 1;' : '--trs: 0 200% 0; --opc: 0;' }>
  <slot></slot>
  {#if image !== ''}
    <img src={image} alt="">
  {/if}
</h1>



<style>
  h1 {
    --margin-01: 8px;
    --linhei-01: 1.3;
    --paddng-01: 8px 8px 8px 32px;
    --sizbor-01: 8px;
    --sizbor-02: 2px;
    --bordlr-01: solid var(--sizbor-01) var(--clr-grey-800);
    --bordtb-01: solid var(--sizbor-02) var(--clr-grey-100);
    --fonsiz-01: 6.64dvw;
  }
  h1 {
    width:          calc(100% - var(--margin-01) * 2);
    display:        grid;
    place-items:    center;
    line-height:    var(--linhei-01);
    margin:         0 var(--margin-01) 0 var(--margin-01);
    text-wrap:      balance;
    text-align:     center;
    border-left:    var(--bordlr-01, unset);
    border-right:   var(--bordlr-01, unset);
    border-top:     var(--bordtb-01, unset);
    border-bottom:  var(--bordtb-01, unset);
    font-size:      clamp(6.4dvw, 6.4dvw, 3.44rem);
    font-weight:    300;
    background:     var(--clr-grey-125);
    color:          var(--clr-grey-800);
    padding:        var(--paddng-01);
    transition:     all .8s var(--cubic-easeInOutQuad);
    translate:      var(--trs, 0 0 0);
    opacity:        var(--opc, 1);
    max-width:      var(--max-w, 100%);
    position:       relative;
  }
  @media screen and (min-width: 480px)  { h1 { font-size: 3.44rem; }}
  @media screen and (min-width: 792px)  { h1 {
    --margin-01: unset;
    --paddng-01: 8px 16px 8px 64px;
    font-size: 3.44rem;
  }}
  @media screen and (min-width: 1688px) { h1 { font-size: 4.8rem; }}

  h1 :global(.bold) { display: contents; font-weight: 900; }

  h1 img {
    position: absolute;
    max-width: 12dvw;
    border-radius: 0 800px 800px 0;
    /* border-radius: 800px; */
    left: -8px;
    background: var(--clr-grey-800);
    padding: 8px;
  }
  @media screen and (min-width: 480px) {h1 img {max-width: 48px;}}
</style>


<!--
    /\_/\
  =( *.* )=
-->