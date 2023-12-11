<script lang='ts'>
  



  export let appear: boolean = false

</script>



<h1 style={ appear ? '--trs: 0 0 0; --opc: 1;' : '--trs: 0 200% 0; --opc: 0;' }>
  <slot></slot>
</h1>



<style>
  h1 {
    --margin-01: 8px;
    --linhei-01: 1.3;
    --paddng-01: 8px;
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
  }
  @media screen and (min-width: 480px)  { h1 { font-size: 3.44rem; }}
  @media screen and (min-width: 792px)  { h1 {
    font-size: 3.44rem;
    --margin-01: unset; }}
  @media screen and (min-width: 1688px) { h1 { font-size: 4.8rem; }}

  h1 :global(.bold) { display: contents; font-weight: 900; }
</style>


<!--
    /\_/\
  =( *.* )=
-->