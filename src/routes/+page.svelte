<script lang="ts">
  import { onMount } from 'svelte'
  import { blur, scale } from 'svelte/transition'
  import Globe from '$components/globe.svelte'
  import HomeMarquee from '$components/homeMarquee.svelte'
  import { appear_open } from '$utils/animations'
  import ViewportIo from '$components/viewportIO.svelte';

// TODO: animações css 3d

  let init_all = false
  let isVisible_h1: boolean = true
  let h1_el: HTMLElement


  onMount(() => init_all = true)

  $: style_h1 = isVisible_h1 ? '--trs: 0 0 0; --opc: 1;' : '--trs: 100% 0 0; --opc: 0;'

</script>

<svelte:head>
  <title>Marcel Sussai - dev fullstack - Home</title>
</svelte:head>

<section class="all-01 flex-column-center">
  {#if init_all}
    <div
      class="all-globe flex-center"
      in:appear_open={{ duration: 1000, delay: 300 }}
    > <Globe /> </div>
  {/if}
  <HomeMarquee />
</section>

{#if init_all}
  <h2 class="hello flex-center" in:blur={{duration: 1200, delay: 600}}> Olá, seja bem vind@ </h2>
  <section class="all-02" in:scale={{duration: 1000, delay: 900}}>
    <p class="p-01">
      Sou programador e <b class="b-01">desenvolvedor web fullstack,
      especialista em front-end</b>, com bons conhecimentos em back-end,
      banco de dados, APIs REST, etc.
      Tenho <b class="b-02">mais de 10 anos de experiência</b> como dev web,
      e sou apaixonado pelo desenvolvimento web, pois sempre me reinvento,
      sempre estudando e inovando para estar pronto para conquistar a
      excelência nas mais variadas ambições digitais na web.
      Crio soluções personalizadas de qualidade e criatividade que impulsionam
      seus negócios e o conecta com o mundo todo, além de poder
      criar soluções para automação de tarefas, sistemas personalizados,
      como também <b class="b-01">muitas outras possibilidades</b>.
    </p>
  </section>
{/if}


<ViewportIo let:percent >
  <h1 style={ percent >= 80 ? '--trs: 0 0 0; --opc: 1;' : '--trs: 100% 0 0; --opc: 0;' }>
    Como desenvolvedor fullstack <span class="b-03">posso fazer o projeto todo</span> se necessário, <span class="b-03">mas sou especialista front-end!</span>
  </h1>
</ViewportIo>



<style>
  .all-01 {
    --rad-01: 0px;
    --pad-01: 0px 0px 0px 0px;
    --bef-r:  0;
    --bef-h:  80px;
  }
  .all-01 {
    width:    fit-content;
    padding:  var(--pad-01);
    position: relative;
  }
  .all-globe {
    width:          fit-content;
    height:         fit-content;
    overflow:       hidden;
    border-radius:  var(--rad-01);
    background:     var(--clr-grey-150);
  }
  .all-globe::before {
    content:    '';
    width:      calc(100dvw);
    height:     var(--bef-h);
    position:   absolute;
    right:      var(--bef-r);
    z-index:    -0;
    background: var(--clr-grey-025);
  }
  .hello {
    --shd-01:
      2px   2px   1px var(--clr-grey-025),
      -2px  -2px  1px var(--clr-grey-025),
      -2px  2px   1px var(--clr-grey-025),
      2px   -2px  1px var(--clr-grey-025),
      4px 4px 6px var(--clr-grey-875-04)
    ;
    font-weight:  900;
    font-family:  var(--font-logo);
    font-size:    2.8rem;
    text-shadow:  var(--shd-01);
    line-height:  1;
    color:        var(--clr-grey-800);
    transition:   all .4s var(--cubic-easeInBack);
  }
  .all-02 {
    --siz-01:   4px;
    padding:    12px;
    /* border:     solid var(--siz-01) var(--clr-grey-175); */
    /* border-top: none;
    border-bottom: none; */
    border-radius: 16px;
    /* box-shadow:
      inset  4px  4px 6px 1px var(--clr-grey-875-03),
      inset -4px -4px 6px 1px var(--clr-grey-025-06)
    ; */
  }
  .p-01 {
    --siz-01:     1.46rem;
    font-size:    var(--siz-01);
    line-height:  1.52;
    text-align:   start;
    font-weight:  300;
  }
  b { font-weight: 800; font-size: 1.6rem; }
  .b-01 {
    background-image: linear-gradient(
      90deg, var(--clr-main-700), var(--clr-second-700)
    );
    background-clip:          text;
    -webkit-background-clip:  text;
    background-size:          100%;
    -webkit-text-fill-color:  transparent;
  }
  .b-02 { color: var(--clr-gold-775); }
  .b-03 {
    display:      contents;
    font-weight:  700;
  }
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


  @media screen and (min-width: 375px) {
    .p-01   { --siz-01: 1.68rem; } b { font-size: 1.76rem; }
    .all-02 { --siz-01: 6px; } .hello { font-size: 3rem; }
  }
  @media screen and (min-width: 424px) {
    .p-01 { --siz-01: 1.92rem; } b { font-size: 2rem; }
  }
  @media screen and (min-width: 480px) {
    .all-01 {
      --bef-r: calc(-24px * 1dvw);
      --bef-h: 96px;
    }
    .p-01 { --siz-01: 2.16rem; } b { font-size: 2.24rem; }
    .all-02 { --siz-01: 8px; padding: 24px;}
    .hello { font-size: 4rem; }
    h1 { font-size: 3.4rem; }
  }
  @media screen and (min-width: 792px) {
    .all-01 {
      --pad-01: 88px 0px 0px 0px;
      --bef-h: 104px;
    }
    .p-01 { --siz-01: 2.24rem; } b { font-size: 2.32rem; }
    .all-02 { --siz-01: 12px; padding: 32px; }
  }
  @media screen and (min-width: 1024px) {
    .all-01 {
      --bef-r: calc(-98px * 1dvw);
    }
    .p-01 { --siz-01: 2.40rem; } b { font-size: 2.48rem; }
    .hello { font-size: 4.4rem; } .all-02 { --siz-01: 16px; }
  }
  @media screen and (min-width: 1360px) {
    .all-01 {
      --bef-r: calc(-16px);
      align-self: flex-end;
    }
    .hello {
      position: absolute;
      z-index: 12;
      /* top: calc(50% + 24px); */
      top: 380px;
      left: 296px;
      font-size: 4.8rem;
    }
  }
</style>