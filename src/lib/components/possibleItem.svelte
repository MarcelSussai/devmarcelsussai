<script lang='ts'>
	import { blur } from 'svelte/transition';
  import IconSites from '$components/iconSites.svelte'
  import IconAplications from './iconAplications.svelte'
  import IconApps from './iconApps.svelte'
  import ViewportIo from './viewportIO.svelte';


    const helper_ = (value: boolean) => value ? '--opc: 1; --deg: 0;' : '--opc: 0; --deg: 90deg;'
</script>


<section class="container-possible">
  <ViewportIo let:percent>
    <div class="product-item bord-01 flex-column-center" style={helper_(percent > 40) + ' --delay: .2s;'}>
      <div class="possible-icon"> <IconSites /> </div>
      <h2 class="title-product grad-bold-02"> <span class="styled" /> Criação de Sites </h2>
      <p class="text-product main-text"> Criação de <span class="grad-bold-01">sites responsivos</span>, rápidos e otimizados para motores de busca (SEO) e para o marketing digital conforme sua necessidade, e se não tiver um design eu também posso criar um com boas práticas de UI/UX ... </p>
    </div>
  </ViewportIo>
  <ViewportIo let:percent>
    <div class="product-item bord-01 flex-column-center" style={helper_(percent > 40) + ' --delay: .4s;'}>
      <div class="possible-icon"> <IconAplications /> </div>
      <h2 class="title-product grad-bold-02"> <span class="styled" /> Aplicações Web </h2>
      <p class="text-product main-text"> Criação de aplicações na internet robustas, podendo ter um site, um app e um sistema back-end fornecendo <span class="grad-bold-01">uma aplicação completa na web</span>, criando a solução que seja a ideal para sua necessidade! </p>
    </div>
  </ViewportIo>
  <ViewportIo let:percent>
    <div class="product-item bord-01 flex-column-center" style={helper_(percent > 40) + ' --delay: .6s;'}>
      <div class="possible-icon"> <IconApps /> </div>
      <h2 class="title-product grad-bold-02"> <span class="styled" /> Aplicativos Mobile </h2>
      <p class="text-product main-text"> Criação de apps de <span class="grad-bold-01">experiência nativa</span>, utilizando recursos dos dispositivos mobile, e sendo bem desenvolvido, rápido e eficiente para diversas aplicações disponibilizando-as nas lojas como o Play Store, etc. </p>
    </div>
  </ViewportIo>
</section>



<style>
  .container-possible {
    margin: 0 8px;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    gap: 16px;
    perspective: 800px;
  }
  @media screen and (min-width: 792px) { .container-possible { margin: 0px; } }
  @media screen and (min-width: 1120px) { .container-possible { grid-template-columns: 1fr 1fr 1fr; } }
  .product-item {
    --rotate:         1, 1, 0, var(--deg, 90deg);
    /* border:           solid 1px var(--clr-grey-025); */
    transform:        rotate3d(var(--rotate)) scale(var(--opc));
    opacity:          var(--opc);
    transform-style:  preserve-3d;
    transition:       all .4s var(--cubic-easeInOutSine);
    padding: 0px 0px;
    background: var(--clr-grey-150);
    /* max-width: 344px; */
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 1120px) { .product-item {transition: all .8s var(--delay, 0s) var(--cubic-easeInOutSine);}}
  .possible-icon {
    width: 100%;
    max-height: 280px;
    height: 100%;
    perspective: inherit;
    padding: 16px;
  }
  .title-product {
    font-family: var(--font-logo);
    font-weight: 900;
    line-height: 1;
    font-size: clamp(2.16rem, 2.16rem + 1dvw, 4rem);
    padding: 8px 8px;
    color: var(--clr-grey-100);
    width: 100%;
    text-align: center;
    position: relative;
  }
  .styled {
    position: absolute;
    top: 0; right: 0px; bottom: 0; left: 0px;
    z-index: -1;
    background: var(--clr-grey-950);
    border-radius: 0px 0;
  }
  .text-product {
    perspective: inherit;
    background: none;

    font-size: clamp(1.4rem, 1.2rem + .48dvw, 2rem);
    /* padding: 8px 16px; */
    /* transform: translate3d(0, 0, 100px); */
  }
  .grad-bold-01 { font-size: clamp(1.4rem + .16rem, 1.2rem + .16rem + .48dvw, 2rem + .16rem); }
</style>