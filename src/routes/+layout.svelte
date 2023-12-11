<script lang='ts'>
  import { fly } from 'svelte/transition'
  import Header from '$components/header.svelte'

  export let data
</script>


<Header />

{#key data.url}
  <main
    class="flex-column-center"
    in:fly={{x: -100, duration: 300, delay: 300}}
    out:fly={{x: 100, duration: 300}}
  >
    <slot></slot>
  </main>
{/key}

<footer>
  test
</footer>

<style>
  main {
    /* transition: all .4s ease-in-out; */
    --pd-bottom: 64px;
    z-index: 0;
    min-height: 100dvh;
    padding: 96px 0 var(--pd-bottom) 0;
    gap: 32px;
  }
  footer {
    width: 100dvw;
    min-height: 248px;
    background: var(--clr-grey-875);
  }
  
  @media screen and (min-width: 375px) { main { padding: 104px 0 var(--pd-bottom) 0; } }
  @media screen and (min-width: 424px) { main { padding: 112px 0 var(--pd-bottom) 0; } }
  @media screen and (min-width: 792px) { main { padding: 112px 16px var(--pd-bottom) 288px; } }
  @media screen and (min-width: 1800px) { main {
    --max-increment: 216px;
    --pad-right: calc(16px + var(--max-increment));
    --pad-left: calc(280px + var(--max-increment));
    padding: 64px var(--pad-right) var(--pd-bottom) var(--pad-left);
  }}
</style>
