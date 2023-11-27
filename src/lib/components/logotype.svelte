<script lang='ts'>
  import LogoSymbol from '$components/logoSymbol.svelte'



  
</script>



<div class="all-logotype transiiton-item flex-row-nowrap">
  <div class="logo-container transiiton-item"> <LogoSymbol /> </div>
  <div class="types transiiton-item flex-column">
    <div class="marcel-sussai transiiton-item flex-row-nowrap">
      <span class="marcel">Marcel</span>
      <span class="sussai">Sussai</span>
    </div>
    <div class="desc transiiton-item">
      Desenvolvedor web full-stack
    </div>
  </div>
</div>



<style>
  @keyframes ani-logotype-01 { 0% {
    width: 0%;
    padding: 0;
    opacity: .2;
    translate: 0 -200% 0;
  } 32% {
    translate: 0 0 0;
  } 100% {
    width: 100%;
    padding:        8px 10px 8px 8px;
    opacity: 1;
    translate: 0 0 0;
  } }
  .transiiton-item { transition: all .4s ease-in-out; }
  .all-logotype {
    --siz-01: 12px;
    --siz-02: 2px;
    --siz-03: 48.8px;
    --siz-04: 3.12rem;
    --siz-05: 1.496rem;
    --siz-06: 4px;
    --siz-07: 6px;
    --siz-08: 16px;
    --brd-01: solid var(--siz-01) var(--clr-grey-975);
    --brd-02: solid var(--siz-02) var(--clr-grey-975);
    --grd-01: linear-gradient(
      24deg,
      var(--clr-grey-900) 32%,
      var(--clr-grey-850),
      var(--clr-grey-900) 68%
    );
    --grd-02: linear-gradient(
      45deg, var(--clr-main-500), var(--clr-second-500)
    );
    --shd-01:
      0 0 12px 2px var(--clr-grey-900-01),
      inset 0 0 8px 2px var(--clr-grey-950-01)
    ;

  }
  .all-logotype {
    background:     var(--grd-01);
    box-shadow:     var(--shd-01);
    width:          0;
    max-width:      fit-content;
    min-height:     64px;
    height:         64px;
    position:       absolute;
    gap:            var(--siz-07);
    top:            var(--siz-08);
    left:     5px;
    padding:        0;
    border-right:   var(--brd-01);
    border-left:    var(--brd-01);
    border-top:     var(--brd-02);
    border-bottom:  var(--brd-02);
    border-radius:  12px;
    z-index:        99;
    overflow:       hidden;
    opacity:        .2;
    translate: 0 -200% 0;
    animation: ani-logotype-01 1s .2s var(--cubic-easeInOutQuad) forwards;
  }
  .logo-container {
    width:         var(--siz-03);
    min-width:     var(--siz-03);
    height:        var(--siz-03);
    min-height:    var(--siz-03);
    border-radius: 50%;
  }
  .types {
    line-height:  1;
    text-shadow:  3px 3px 2px var(--clr-grey-950-01);
    position:     relative;
  }
  .marcel-sussai {
    font-family:  var(--font-logo);
    font-weight:  900;
    font-size:    var(--siz-04);
    gap:          var(--siz-06);
  }
  .marcel { color: var(--clr-main-500); }
  .sussai { color: var(--clr-second-500); }
  .desc {
    font-size:    var(--siz-05);
    font-weight:  300;
    color:        var(--clr-gold-500);
    white-space:  nowrap;
  }
  @media screen and (min-width: 375px) {
    .all-logotype {
      --siz-03: 56px;
      --siz-04: 3.6rem;
      --siz-05: 1.72rem;
      --siz-01: 14.4px;
      --siz-02: 3.2px;
      left:     10px;
    height:     72px;
    }
  }
  @media screen and (min-width: 424px) {
    .all-logotype {
      --siz-03: 64px;
      --siz-04: 4rem;
      --siz-05: 1.904rem;
      --siz-01: 16px;
      --siz-02: 4px;
      left:     16px;
      height:         80px;
    }
  }
</style>