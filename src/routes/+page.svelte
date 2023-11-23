<script lang='ts'>
  import { onMount } from 'svelte'
  import { cubicInOut, } from 'svelte/easing'
  import Globe from '$components/globe.svelte'
  import HomeMarquee from '$components/homeMarquee.svelte'
  import { appear_open } from '$utils/animations';
  import { scale } from 'svelte/transition';

// TODO: animações css 3d

  let init_all = false
  onMount(() => init_all = true)


</script>

<svelte:head>
  <title>Marcel Sussai - dev fullstack - Home</title>
</svelte:head>

<section class="all-01 flex-column-center">
  {#if init_all}
    <div class="all-globe flex-center" in:appear_open={{ delay: 300 }}> <Globe /> </div>
  {/if}
  <HomeMarquee />
</section>

{#if init_all}
  <h2 class="hello flex-center"> Olá, seja bem vind@ </h2>
  <section class="all-02" in:scale={{duration: 1000, delay: 900}}>
    <p class="p-01">
      Sou programador e <b class="b-01">desenvolvedor web fullstack,
      especialista em front-end</b>, com bons conhecimentos em back-end,
      tenho <b class="b-02">mais de 10 anos de experiência</b> como dev web,
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

<style>
  .all-01 {
    --rad-01: 0px;
    --pad-01: 0px 0px 0px 0px;
    --bef-r: 0;
    --bef-h: 80px;
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
      2px   -2px  1px var(--clr-grey-025)
    ;
    font-weight:  900;
    font-family:  var(--font-logo);
    font-size:    2.8rem;
    text-shadow:  var(--shd-01);
    line-height:  1;
    color:        var(--clr-grey-800);
    transition: all .4s var(--cubic-easeInBack);
  }
  .all-02 {
    padding:    16px;
    background: var(--clr-grey-125);
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



  @media screen and (min-width: 375px) {
    .p-01 { --siz-01: 1.68rem; } b { font-size: 1.76rem; }
    .hello { font-size: 3rem; }
  }
  @media screen and (min-width: 424px) {
    .p-01 { --siz-01: 1.92rem; } b { font-size: 2rem; }
  }
  @media screen and (min-width: 480px) {
    .all-01 {
      --bef-r: calc(-24px * 1dvw);
      --bef-h: 96px;
    }
    .all-02 { padding: 24px; }
    .p-01 { --siz-01: 2.16rem; } b { font-size: 2.24rem; }
    .hello { font-size: 4rem; }
  }
  @media screen and (min-width: 792px) {
    .all-01 {
      --pad-01: 88px 0px 0px 0px;
      --bef-h: 104px;
    }
    .p-01 { --siz-01: 2.24rem; } b { font-size: 2.32rem; }
  }
  @media screen and (min-width: 1024px) {
    .all-01 {
      --bef-r: calc(-98px * 1dvw);
    }
    .p-01 { --siz-01: 2.40rem; } b { font-size: 2.48rem; }
    .hello { font-size: 4.4rem; }
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
      left: 280px;
      font-size: 4.8rem;
    }
  }
</style>