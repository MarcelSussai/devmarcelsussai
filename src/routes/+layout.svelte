<script lang='ts'>
  import Header from '$components/header.svelte';
  import { fly } from 'svelte/transition'

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
    z-index: 0;
    min-height: 100dvh;
    padding: 96px 0 2048px 0;
    gap: 32px;
  }
  footer {
    width: 100dvw;
    min-height: 248px;
    background: var(--clr-grey-875);
  }
  
  @media screen and (min-width: 375px) {
    main { padding: 104px 0 2048px 0; }
  }
  @media screen and (min-width: 424px) {
    main { padding: 112px 0 2048px 0; }
  }
  @media screen and (min-width: 792px) {
    main { padding: 40px 16px 2048px 280px; }
  }
</style>