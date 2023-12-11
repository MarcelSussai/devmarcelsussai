<script lang='ts'>
  import { onMount } from 'svelte'
  import { appear_open } from '$utils/animations'





  let init_home_marquee = false
  onMount(() => init_home_marquee = true)

</script>


{#if init_home_marquee}
  <div class="all-marquee" in:appear_open={{ delay: 600, }}>
    <h2 class="marquee">
      <span class="main">Explore </span> as possibilidades
      <span class="second"> além dos limites! </span> Esteja
      <span class="main"> conectado </span> com o
      <span class="second"> mundo todo </span> e
      <span class="main"> gere valor </span> da
      <span class="second"> tecnologia!</span>
    </h2>
  </div>
{/if}




<style>
  :root {
    --marquee-x: calc(100dvw);
  }
  @keyframes marquee {
    0% { translate: var(--marquee-x) 0px 0px; }
    100% { translate: -100% 0px 0px; }
  }
  .all-marquee {
    --shd-01: inset 0px 0px 12px 8px var(--clr-grey-025-04),
              /* 0px 0px 10px 2px var(--clr-grey-825-01), */
              inset 0px 0px 4px 2px var(--clr-grey-800-01)
    ;
    --shd-02:
      2px   2px   1px var(--clr-grey-025),
      -2px  -2px  1px var(--clr-grey-025),
      -2px  2px   1px var(--clr-grey-025),
      2px   -2px  1px var(--clr-grey-025)
    ;
    --clr-01: var(--clr-grey-025);
    --brd-01: solid 30px var(--clr-01);
    --brd-02: solid 2px var(--clr-grey-100);
    --top-01: calc(50% - 32px);
    --siz-01: 64px;
    --siz-02: 3.2rem;
    --trs-01: all .4s ease-in-out;
  }
  .all-marquee {
    width:            var(--marquee-x);
    height:           var(--siz-01);
    border-left:      var(--brd-01);
    border-right:     var(--brd-01);
    border-top:       var(--brd-02);
    border-bottom:    var(--brd-02);
    background:       var(--clr-grey-025-03);
    z-index:          2;
    backdrop-filter:  blur(2px);
    position:         absolute;
    top:              var(--top-01);
    box-shadow:       var(--shd-01);
    display:          flex;
    align-items:      center;
    overflow:         hidden;
    transition:       var(--trs-01);
    text-shadow:      var(--shd-02);
  }
  .marquee {
    width: fit-content;
    line-height: 1;
    display: inline-block;
    white-space: nowrap;
    animation: marquee 24s linear infinite;
    font-size: var(--siz-02);
    font-weight: 900;
  }
  .main { color: var(--clr-main-800); }
  .second { color: var(--clr-second-850); }

  /* @media screen and (min-width: 375px) {
    .all-marquee { --top-01: calc(50% - 32px); }
  }
  @media screen and (min-width: 424px) {
    .all-marquee { --top-01: calc(50% - 32px); }
  } */
  @media screen and (min-width: 480px) {
    :root { --marquee-x: 480px; }
    .all-marquee {
      --siz-01: 80px;
      --siz-02: 4rem;
      --top-01: calc(50% - 40px);
      --brd-01: solid 40px transparent;
      max-width: 480px;
    }
  }
/*  */
  @media screen and (min-width: 792px) {
    :root { --marquee-x: 432px; }
    .all-marquee {
      --top-01: calc(50% + 4px);
      --brd-01: solid 16px transparent;
      max-width: 432px;
    }
  }
  @media screen and (min-width: 1024px) {
    :root { --marquee-x: 512px; }
    .all-marquee { max-width: 512px; }
}
  @media screen and (min-width: 1360px) {
    :root { --marquee-x: 520px; }
    .all-marquee {
      max-width: 520px;
      --top-01: calc(50% + 5px);
    }
  }
  @media screen and (min-width: 1800px) {
    .all-marquee {max-width: 552px; }
    :root { --marquee-x: 552px; }
  }
</style>