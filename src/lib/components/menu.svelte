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
    {name: 'Habilidades', link: '/skills',    icon: icon_skills},
    {name: 'Sobre Mim',   link: '/aboutme',   icon: icon_aboutme},
    {name: 'Artigos',     link: '/articles',  icon: icon_articles},
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
  nav {
    --size-01: 8px;
    --size-02: 2px;
    --clr-01:  var(--clr-grey-875);
    --clr-02:  var(--clr-grey-900);
    --clr-03:  var(--clr-grey-875-01);
    --clr-04:  var(--clr-grey-025-02);
    --clr-05:  var(--clr-grey-025-01);
    --clr-06:  var(--clr-grey-800);
    --clr-07:  var(--clr-grey-075);
    --clr-08:  var(--clr-grey-850);
    --trs-01:  all .4s var(--cubic-easeInOutCubic);
    --trs-02:  all .3s var(--cubic-easeInOutCubic);
    --brd-01:  solid 8px var(--clr-01);
    --bg-01: linear-gradient(
      16deg, var(--clr-04) 24%, var(--clr-05) 50%, var(--clr-04) 76%
    );
    --bg-02: linear-gradient(
      32deg, var(--clr-01) 8%, var(--clr-06) 50%, var(--clr-01) 92%
    );
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
    backdrop-filter: blur(3px);
    border-left:     var(--brd-01);
    border-top:      var(--brd-01);
    border-bottom:   var(--brd-01);
    box-shadow:      0px 0px 4px 2px var(--clr-03);
    border-radius:   24px 16px 0px 64px;
  }
  nav.open {
    --trlt-01: 0 0 0;
  }
  ul {
    width:         100%;
    gap: 8px;
    /* border-right:  solid 4px var(--clr-grey-875); */
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
    --size-01:    24px;
    --size-02:    2px;
    --clr-02:     var(--clr-gold-500);
    --clr-07:     var(--clr-gold-500);
    --clr-08:     var(--clr-grey-850);
    border-right: solid 64px var(--clr-grey-925);
    border-left:  solid var(--size-01) var(--clr-grey-875);
  }
  a.act {
    --size-01:    20px;
    --clr-08:     var(--clr-grey-975);
    --clr-02:     var(--clr-grey-975);
    border-left:  solid var(--size-01) var(--clr-grey-975);
    border-right: solid 58px var(--clr-grey-975);
  }
  a.act:hover {
    --size-01:    24px;
    --size-02:    2px;
    --clr-02:     var(--clr-gold-500);
    --clr-07:     var(--clr-gold-500);
    border-right: solid 64px var(--clr-grey-925);
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

  @media screen and (min-width: 375px) {
    nav {
      padding: 104px 0 0 0;
    }
  }
  @media screen and (min-width: 424px) {
    nav {
      padding:    114px 0 0 0;
      max-width:  248px;
    }
  }

  @media screen and (min-width: 792px) {
    nav {
      --trlt-01: unset;
    }
    nav.open {
      --trlt-01: unset;
    }
  }
</style>