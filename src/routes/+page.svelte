<script lang="ts">
  import { onMount } from 'svelte'
  import { blur, scale } from 'svelte/transition'
	import PossibleItem from '$components/possibleItem.svelte'
  import Globe from '$components/globe.svelte'
  import HomeMarquee from '$components/homeMarquee.svelte'
  import { anime_01, appear_open } from '$utils/animations'
  import ViewportIo from '$components/viewportIO.svelte'
  import PageTitle from '$components/pageTitle.svelte'
  import icon_contact from '$lib/assets/icon_contact.svg'
  import icon_home from '$lib/assets/icon_home.svg'
  import IconArrowDown from '$components/iconArrowDown.svelte';


  let init_all = false
  onMount(() => init_all = true)


</script>

<svelte:head>
  <title>Marcel Sussai - dev fullstack - Home</title>
</svelte:head>

<section class="all-01 flex-column-center">
  {#if init_all}
    <div
      class="globe flex-center"
      in:appear_open={{ duration: 400, delay: 200 }}
    > <Globe /> </div>
  {/if}
  <HomeMarquee />
</section>

{#if init_all}
  <h2 class="hello flex-center bord-01" in:blur={{duration: 400, delay: 100}} > Olá, seja bem vind@ </h2>
{/if}


<ViewportIo let:percent>
  {@const number = 20}
  {#if percent < number}
    <div class="bf-scroll" transition:blur={{duration: 200}}><IconArrowDown /></div>
  {/if}
  <section class="anime-01" style={anime_01(percent >= number) + ' --vel: .4s;'}>
    <p class="main-text bord-01">
      Sou programador e <span class="grad-bold-01">desenvolvedor web fullstack,
      especialista em front-end</span>, com bons conhecimentos em back-end,
      banco de dados, APIs REST, etc.
      Tenho <span class="purple-bold-01">mais de 10 anos de experiência</span> como dev web,
      e sou apaixonado pelo desenvolvimento web, pois sempre me reinvento,
      sempre estudando e inovando para estar pronto para conquistar a
      excelência nas mais variadas ambições digitais na web.
      Crio produtos digitais de qualidade e criatividade que impulsionam
      seus negócios, iniciativas e projetos, e o conecta com o mundo todo, além de poder
      criar soluções para automação de tarefas, sistemas personalizados,
      como também <span class="grad-bold-01">muitas outras possibilidades</span>.
      Me preocupo com tudo para que os resultados gerem valor e que forneçam a solução ideal para o que você precisa, analisando as demandas e criando soluções digitais viáveis para essas demandas!
    </p>
  </section>
</ViewportIo>

<ViewportIo let:percent>
  <PageTitle appear={percent >= 80 } image={icon_home}>
    Como desenvolvedor fullstack <span class="bold">posso fazer o projeto todo</span> se necessário, <span class="bold">mas sou especialista front-end!</span>
  </PageTitle>
</ViewportIo>

<ViewportIo let:percent>
  <section style={anime_01(percent >= 100)} class="all-02 anime-01">
    <p class="main-text bord-01">
      Eis <span class="grad-bold-01">algumas</span> das possibilidades ...
    </p>
  </section>
</ViewportIo>

<PossibleItem />



<section class="all-03 flex-column-center">
  <div class="content-points bord-01">
    <ViewportIo let:percent><h2 class="basic-title anime-01" style={anime_01(percent >= 100)}>
      Objetivos Profissionais
    </h2></ViewportIo>
    <ViewportIo let:percent>
      <p class="main-text explain-text anime-01" style={anime_01(percent >= 96)}>
        <span class="grad-bold-01">Não possuo apenas um objetivo</span> como apenas ganhar dinheiro, claro que isso também, porém tenho outros objetivos claros como:
      </p>
    </ViewportIo>
    <article>
      <ol class="flex-column-center ol-01">
        <ViewportIo let:percent tag="li" classNames="li-01">
          <span class="anime-01" style={anime_01(percent >= 96)}>
            Trabalhar em uma empresa que valoriza o trabalho feito, e que eu possa trabalhar totalmente remoto.
          </span>
      </ViewportIo>
        <ViewportIo let:percent tag="li" classNames="li-01">
          <span class="anime-01" style={anime_01(percent >= 96)}>
          Quero dar uma vida melhor para minha familia e para mim mesmo com meu trabalho desenvolvendo softwares de qualidade que impactam de alguma forma o mundo!
        </span>
      </ViewportIo>
        <ViewportIo let:percent tag="li" classNames="li-01">
          <span class="anime-01" style={anime_01(percent >= 96)}>
          Poder aprender sempre mais, e com conhecimento atualizado poder compartilhar o que sei.
        </span>
      </ViewportIo>
        <ViewportIo let:percent tag="li" classNames="li-01">
          <span class="anime-01" style={anime_01(percent >= 96)}>
          Aprender outras linguagens de programação.
        </span>
      </ViewportIo>
        <ViewportIo let:percent tag="li" classNames="li-01">
          <span class="anime-01" style={anime_01(percent >= 96)}>
          Liderar o desenvolvimento front end de um projeto importante.
        </span>
      </ViewportIo>
        <ViewportIo let:percent tag="li" classNames="li-01">
          <span class="anime-01" style={anime_01(percent >= 96)}>
          Desenvolver uma solução lucrativa para um problema ou necessidade.
        </span>
      </ViewportIo>
        <ViewportIo let:percent tag="li" classNames="li-01">
          <span class="anime-01" style={anime_01(percent >= 96)}>
          Evoluir sempre como profissional e como pessoa desenvolvedora, não apenas técnicamente e com conhecimentos de especialista, mas de forma geral também, para integrar mais avanço e tecnologia aos projetos que trabalho.
        </span>
      </ViewportIo>
      </ol>
    </article>
  </div>
  <div class="content-points bord-01">

    <ViewportIo let:percent><h2 class="basic-title anime-01" style={anime_01(percent >= 100)}>
      O poder de ser autodidata
    </h2></ViewportIo>
    <ViewportIo let:percent>
      <p class="main-text explain-text anime-01" style={anime_01(percent >= 32) + ' --vel: .6s;'}>
        Autodidata <span class="grad-bold-01">não é apenas aprender sozinho</span>, é ser curioso e aprender com tudo que estiver a disposição, dito isso, também é aprender com a experiência alheia, com a vasta informação disponível na internet, com experimentações próprias, com cursos, com documentações, com os próprios erros, etc. Ainda mais nessa área de tecnologia, onde tudo evolui muito rápido, e para acompanhar isso de maneira satisfatória é preciso ser autodidata. A vontade, o gostar e a curiosidade em aprender sempre mais e da melhor forma, é uma característa de ser autodidata que apesar das óbvias dificuldades, me faz superar desafios e encontrar melhores soluções para as necessidades apresentadas. <span class="grad-bold-01">Não é preciso saber tudo, mas saber como aprender a resolver tudo que precisar</span>, encontrando a melhor solução.
      </p>
    </ViewportIo>
  </div>
  <article class="cta-contact bord-01 flex-column-center">
    <ViewportIo let:percent>
      <p class="main-text anime-01" style={anime_01(percent >= 100)}>
        <span class="grad-bold-01">Explore este site</span> e descubra mais sobre mim, ou entre em contato para podermos conversar sobre sua necessidade digital!
      </p>
    </ViewportIo>
    <ViewportIo let:percent>
      <a href="/contact" class="contact-btn flex-center anime-01" style={anime_01(percent >= 100)}>
        <img src={icon_contact} alt="Envelope simbolizando contato" class="img">
        Contato
      </a>
    </ViewportIo>
  </article>
</section>

<style>
  .all-01 {
    --rad-01: 50%;
    --pad-01: 0px 0px 0px 0px;
    --bef-r:  0;
    --bef-h:  80px;
  }
  .all-01 {
    width:    fit-content;
    max-width: var(--max-w, 100%);
    padding:  var(--pad-01);
    position: relative;
  }
  @media screen and (min-width: 480px)  { .all-01 { --bef-r: calc(-24px * 1dvw); --bef-h: 96px; } }
  @media screen and (min-width: 792px)  { .all-01 { --pad-01: 88px 0px 0px 0px; --bef-h: 104px; } }
  @media screen and (min-width: 1024px) { .all-01 { --bef-r: calc(-98px * 1dvw); } }
  .all-02 {
    width: 100%;
  }
  .globe {
    width:          fit-content;
    height:         fit-content;
    overflow:       hidden;
    border-radius:  var(--rad-01, 50%);
    background:     var(--clr-grey-150);
    border: solid 1px var(--clr-grey-175);
  }
  .globe::before {
    content:    '';
    width:      calc(100dvw);
    height:     var(--bef-h);
    position:   absolute;
    right:      var(--bef-r);
    z-index:    -0;
    background: var(--clr-grey-025-06);
  }
  .hello {
    --med-01:  2px;
    --med-02: -2px;
    --med-03:  0px;
    --shd-01:
      var(--med-01) var(--med-01) var(--med-03) var(--clr-grey-025),
      var(--med-02) var(--med-02) var(--med-03) var(--clr-grey-025),
      var(--med-02) var(--med-01) var(--med-03) var(--clr-grey-025),
      var(--med-01) var(--med-02) var(--med-03) var(--clr-grey-025),
      3px 3px 6px var(--clr-grey-875-02)
    ;
    font-weight:    900;
    font-family:    var(--font-logo);
    font-size:      clamp(2.40rem, 2.40rem + .64dvw, 6.4rem);
    text-shadow:    var(--shd-01);
    line-height:    1;
    color:          var(--clr-grey-800);
    transition:     all .4s var(--cubic-easeInBack);
    background:     var(--clr-grey-150);
    padding:        16px;
    width:          calc(100% - 16px);
  }
  @media screen and (min-width: 375px) {.hello {font-size: clamp(2.80rem, 2.80rem + 1dvw, 6.4rem);}}
  @media screen and (min-width: 792px) {.hello {width: 100%;}}

  .all-03 { gap: 32px; }
  .content-points {
    width: calc(100% - 16px);
    padding: 8px;
    background: var(--clr-grey-150);
  }
  @media screen and (min-width: 792px) {.content-points { width: 100%;}}
  article {
    padding: 0 8px;
    background: var(--clr-grey-150);
  }
  ol { gap: 8px;}
  .explain-text {
    margin: 0;
  }
  @keyframes up-down {
    0% {translate: 0 -4px 0;}
    100% {translate: 0 4px 0;}
  }
  .bf-scroll {
    position: fixed;
    bottom: 16px;
    width: 16px;
    animation: up-down .4s var(--cubic-easeInOutSine) alternate infinite;
  }
  .cta-contact {
    width: calc(100% - 16px);
    padding: 12px 8px 24px 8px;
    gap: 8px;
  }
  @media screen and (min-width: 792px) {.cta-contact {width: 100%;}}
  .contact-btn {
    width: calc(100% - 32px);
    padding: 6px 16px;
    font-size: 2.24rem;
    background: var(--clr-grey-800);
    border-radius: 8px;
    color: var(--clr-grey-025);
    font-weight: 300;
    position: relative;
    transition: all .4s var(--cubic-easeInOutSine);
    gap: 4px;
  }
  .contact-btn:hover {
    background: var(--clr-grey-875);
  }
  @media screen and (min-width: 792px) {.contact-btn {
    width: fit-content;
    padding: 6px 16px 6px 52px;
  }}
  .img {
    width: 24px;
    position: absolute;
    left: 16px;
  }
</style>