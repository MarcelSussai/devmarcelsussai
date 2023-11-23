<script lang='ts'>
  import { is_open_toggle as is_open, hand_is_open_tog } from "$stores/nav_store";

  $: class_bars_open = $is_open ? ' open ' : ' closed '
</script>



<div
  class="all flex-center"
>
  <button
    class="btn-menu flex-center"
    aria-label="menu"
    on:click={hand_is_open_tog}
  >
    <div class="bars { class_bars_open }"></div>
  </button>
</div>



<style>
  .all {
    --trs-01: all .6s var(--cubic-easeInOutBack);
    --trs-02: all .4s var(--cubic-easeInOutQuad);
    --bg-01:  linear-gradient( 32deg, var(--clr-main-175-01), var(--clr-second-175-01));
    --shd-01: 0px 0px 8px 2px var(--clr-grey-850-01),
              inset 0px 0px 8px 2px var(--clr-grey-975-02);
    --shd-02: 0px 0px 4px 2px var(--clr-grey-850-01);
    --pad-01: 0px 8px 0px 8px;
    --rad-01: 64px 0px 0px 64px;
    --brd-01: solid 7.2px var(--clr-grey-075);
    --brd-02: solid 1px var(--clr-grey-075);
    --brd-03: solid 2px var(--clr-grey-075);
    --siz-01: 48px;
  }
  .all {
    transition:       var(--trs-02);
    background:       var(--bg-01);
    position:         fixed;
    right:            0px;
    bottom:           24px;
    width:            80px;
    height:           64px;
    padding:          var(--pad-01);
    border-radius:    var(--rad-01);
    border-left:      var(--brd-01);
    border-top:       var(--brd-02);
    border-bottom:    var(--brd-02);
    box-shadow:       var(--shd-02);
    justify-content:  flex-start;
    backdrop-filter:  blur(2px);
    z-index: 99;
  }
  .all::after {
    content:      'menu';
    position:     absolute;
    rotate:       -90deg;
    right:        -13.2px;
    font-size:    1.54rem;
    font-weight:  300;
    color:        var(--clr-grey-875);
    text-shadow:  unset;
  }
  .btn-menu {
    width:          var(--siz-01);
    height:         var(--siz-01);
    background:     var(--clr-grey-825);
    border-radius:  50%;
    border:         var(--brd-03);
    cursor:         pointer;
    transition:     var(--trs-02);
    box-shadow:     var(--shd-01);
  }
  .btn-menu:hover {
    background: var(--clr-grey-925);
  }
  .bars {
    width:          24px;
    height:         3px;
    border-radius:  40px;
    background:     var(--clr-gold-500);
    position:       relative;
    transition:     var(--trs-01);
  }
  .bars.open {
    background: transparent;
  }
  .bars::before, .bars::after {
    content:          '';
    position:         absolute;
    width:            100%;
    height:           100%;
    left:             0;
    border-radius:    40px;
    background:       var(--clr-gold-500);
    transition:       var(--trs-01);
    transform-origin: center;
  }
  .bars.open::before, .bars.open::after {
    background: var(--clr-red-500);
  }
  .bars.open::before {
    rotate:     45deg;
    translate:  0px 8px;
  }
  .bars.open::after {
    rotate:     -45deg;
    translate:  0px -8px;
  }
  .bars::before { top: -8px; }
  .bars::after { top: 8px; }
  @media screen and (min-width: 792px) {
    .all {
      animation: unset;
      translate: 100% 0 0;
    }
  }
</style>