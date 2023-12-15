<script lang='ts'>
  import IconTargetBlank from "./iconTargetBlank.svelte";

  



  export let img: string = '/'
  export let img_label: string = 'Uma imagem desconhecida não categorizada'
  export let text: string = 'Texto não fornecido'
  export let links: string[] = ['']
</script>



<article class="bord-01 flex-column-center">
  <figure class="">
    <img width="100%" height="100%" src={img} alt={img_label}>
    <figcaption>{img_label}</figcaption>
  </figure>
  <p class="main-text">{text}</p>
  {#each links as link}
    <a href={link} target="_blank">{link}
    <div class="icon"><IconTargetBlank /></div></a>
  {/each}
</article>



<style>
  article {
    background: var(--clr-grey-150);
    gap: 8px;
    padding: 16px;
    width: calc(100% - 32px);
  }
  @media screen and (min-width: 375px) {article {width: calc(100% - 16px);}}
  @media screen and (min-width: 792px) {article {width: 100%;}}
  figure {
    padding: 12px 12px 8px 12px;
    background: var(--clr-grey-100);
    overflow: hidden;
  }
  img {
    max-height: 256px;
  }
  p {
    padding: 0;
    margin: 0;
    font-size: clamp(1.56rem, 1.56rem + .2dvw, 2.4rem);
  }
  @media screen and (min-width: 792px) {p {padding: 8px;}}
  figcaption {
    padding: 8px 0 0 0;
    font-size: clamp(1.2rem, 1.4rem + .1dvw, 2rem);
  }
  a {
    width: calc(100% - 16px);
    padding: 8px 8px 8px 16px;
    background: var(--clr-grey-050);
    border: solid 1px var(--clr-grey-050);
    border-radius: 12px 0;
    color: var(--clr-grey-750);
    font-weight: 900;
    line-height: 1;
    display: flex; flex-flow: row nowrap;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    transition: all .3s var(--cubic-easeInOutSine);
  }
  a:hover {border: solid 1px var(--clr-grey-500); background: var(--clr-purple-025);}
  .icon {
    width: 16px;
    min-width: 16px;
    height: 16px;
    min-height: 16px;
    padding: 0px;
    background: var(--clr-grey-050);
  }
</style>