<script lang='ts'>
  import { onMount } from 'svelte'

  export let top    = 0
  export let bottom = 0
  export let left   = 0
  export let right  = 0
  export let steps  = 100
  // export let width  = '100%'
  // export let height = '100%'
  export let tag    = 'div'
  export let style  = ''
  export let classNames  = ''
  let classy = `flex-center ${classNames}`

  let element:                      HTMLElement
  let percent:                      number
  let observer:                     IntersectionObserver
  let unobserve:                    () => void            = () => {}
  let intersectionObserverSupport:  boolean               = false
  let intersectBottom:              boolean

  function intersectPercent(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if(entry.rootBounds?.bottom && entry.boundingClientRect.bottom > entry.rootBounds?.bottom) {
        percent = Math.round(Math.ceil(entry.intersectionRatio * 100))
        intersectBottom = true
      } else {
        percent = 100,
        intersectBottom = false
      }
    });
  }

  function stepsToThreshold(steps: number) { return [...Array(steps).keys()].map(n => n / steps) }

  onMount(() => {
    intersectionObserverSupport =
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype

    const options = {
      rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
      threshold: stepsToThreshold(steps)
    };

    if (intersectionObserverSupport) {
      observer = new IntersectionObserver(intersectPercent, options)
      observer.observe(element)
      unobserve = () => observer.unobserve(element)
    }

    return unobserve
  });
</script>



<svelte:element this={tag} style={style} class={classy} bind:this={element}>
  <slot {percent} {unobserve} {intersectBottom}></slot>
</svelte:element>



<style>
  div { width: var(--w, 100%); height: var(--h, 100%); }
</style>