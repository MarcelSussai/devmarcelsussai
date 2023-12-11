<script lang='ts'>
  import { page } from '$app/stores'
  import BtnOpenMenu from '$components/btnOpenMenu.svelte'
  import { is_open_toggle as is_open } from '$stores/nav_store'
  import icon_home from '$lib/assets/icon_home.svg'
  import icon_port from '$lib/assets/icon_port.svg'
  import icon_skills from '$lib/assets/icon_skills.svg'
  import icon_aboutme from '$lib/assets/icon_aboutme.svg'
  import icon_articles from '$lib/assets/icon_articles.svg'
  import icon_contact from '$lib/assets/icon_contact.svg'



  const list_menu = [
    {name: 'Home',        link: '/',          icon: icon_home},
    {name: 'Portfólio',  link: '/portfolio', icon: icon_port},
    {name: 'Sobre Mim',   link: '/aboutme',   icon: icon_aboutme},
    {name: 'Habilidades', link: '/skills',    icon: icon_skills},
    // {name: 'Artigos',     link: '/articles',  icon: icon_articles},
    {name: 'Contato',     link: '/contact',   icon: icon_contact},
  ]

  $: clss_toggle_menu = $is_open ? 'open' : 'closed'


  console.log($page.url.pathname)
</script>



<BtnOpenMenu />
<nav class={clss_toggle_menu}>
  <ul class="flex-column-center">
    {#each list_menu as item}
      <li>
        <a
          href={item.link}
          class={$page.url.pathname == item.link ? ' act ' : ' '}
          on:click={() => is_open.set(false)}
        >
          {item.name}
          <img src={item.icon} alt="Icone de home" />
        </a>
      </li>
    {/each}
  </ul>
</nav>



<style>
  @keyframes appear-menu {
    0% { translate: -110% 0 0; }
    100% { translate: 0 0 0; }
  }
  nav {
    --size-01: 8px;
    --size-02: 3px;
    --grainy:  url(data:image/png;base64,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);
    --clr-01:  var(--clr-grey-875);
    /* --clr-02:  var(--clr-grey-650); */
    --clr-02:  transparent;
    --clr-03:  var(--clr-grey-875-01);
    --clr-04:  var(--clr-grey-025-02);
    --clr-05:  var(--clr-grey-025-04);
    --clr-06:  var(--clr-grey-800);
    --clr-07:  var(--clr-grey-075);
    --clr-08:  var(--clr-grey-850);
    --trs-01:  all .5s var(--cubic-easeInOutSine);
    --trs-02:  all .3s var(--cubic-easeInOutCubic);
    --brd-01:  solid 8px var(--clr-01);
    --bg-01: linear-gradient( 16deg, var(--clr-04) 24%, var(--clr-05) 50%, var(--clr-04) 76% ), var(--grainy);
    --bg-02: linear-gradient( 32deg, var(--clr-01) 8%, var(--clr-06) 50%, var(--clr-01) 92% );
    --trlt-01: -110% 0 0;
  }
  nav {
    padding:         96px 0 0 0;
    position:        fixed;
    bottom:          0px;
    left:            0px;
    width:           80dvw;
    max-width:       264px;
    height:          100dvh;
    z-index:         -1;
    background:      var(--bg-01);
    translate:       var(--trlt-01);
    transition:      var(--trs-01);
    backdrop-filter: blur(2px);
    border-left:     var(--brd-01);
    border-top:      var(--brd-01);
    border-bottom:   var(--brd-01);
    box-shadow:      0px 0px 4px 2px var(--clr-03);
    border-radius:   24px 16px 0px 0px;
  }
  @media screen and (min-width: 375px) { nav { padding: 104px 0 0 0; } }
  @media screen and (min-width: 424px) { nav { padding: 114px 0 0 0; max-width:  248px; } }
  @media screen and (min-width: 792px) { nav { animation: appear-menu .5s .3s var(--cubic-easeInOutSine) forwards; } }

  nav.open { --trlt-01: 0 0 0; }
  @media screen and (min-width: 792px) { nav.open { --trlt-01: unset; } }

  ul {
    width:  100%;
    gap:    8px;
  }
  li {
    width: 100%;
  }
  a {
    width:            calc(100% - 0px);
    background:       var(--bg-02);
    padding:          6px 16px 6px 16px;
    color:            var(--clr-07);
    transition:       var(--trs-02);
    font-size:        1.72rem;
    white-space:      nowrap;
    font-weight:      300;
    min-height:       42px;
    letter-spacing:   .1rem;
    border-left:      solid var(--size-01) var(--clr-grey-900);
    border-right:     solid 48px var(--clr-grey-875);
    border-top:       solid var(--size-02) var(--clr-02);
    border-bottom:    solid var(--size-02) var(--clr-02);
    text-shadow:      2px 2px 0px var(--clr-grey-975);
    display:          flex;
    flex-flow:        row nowrap;
    justify-content:  space-between;
    align-items:      center;
    position:         relative;
    line-height:      1;
    border-radius:    0 12px 12px 0;
  }
  a:hover   {
    --size-01:    20px;
    /* --size-02:    2px; */
    --clr-02:     var(--clr-gold-500);
    --clr-07:     var(--clr-gold-500);
    --clr-08:     var(--clr-grey-850);
    border-right: solid 58px var(--clr-grey-925);
    border-left:  solid var(--size-01) var(--clr-grey-875);
  }
  a.act {
    --size-01:    20px;
    --clr-08:     var(--clr-grey-975);
    --clr-02:     transparent;
    border-left:  solid var(--size-01) var(--clr-grey-975);
    border-right: solid 58px var(--clr-grey-975);
  }
  a.act:hover {
    --size-01:    20px;
    /* --size-02:    2px; */
    --clr-02:     var(--clr-gold-500);
    --clr-07:     var(--clr-gold-500);
    border-right: solid 58px var(--clr-grey-925);
    border-left:  solid var(--size-01) var(--clr-grey-975);
  }

  img {
    padding:          6px;
    width:            46px;
    min-height:       46px;
    transition:       var(--trs-02);
    position:         absolute;
    right:            calc(-22px - 48px);
    border-radius:    24px;
    background:       var(--clr-08);
    display:          flex;
    justify-content:  center;
    align-items:      center;
    box-shadow:       0px 0px 4px 0px var(--clr-grey-975-01);
  }

</style>