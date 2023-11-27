<script lang='ts'>
  import { onMount } from 'svelte';

export let top = 0
export let bottom = 0
export let left = 0
export let right = 0
export let steps = 100
export let width = '100%'
export let height = '100%'
// export let threeshold = 1

let element: HTMLElement
let percent: number
let observer: IntersectionObserver
let unobserve = () => {}
let intersectionObserverSupport = false
let intersectBottom: boolean

function intersectPercent(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if(entry.rootBounds?.bottom && entry.boundingClientRect.bottom > entry.rootBounds?.bottom) {
      percent = Math.round(Math.ceil(entry.intersectionRatio * 100))
    } else { percent = 100 }
    // console.group()
    // console.log('obj - bottom:', entry.boundingClientRect.bottom)
    // console.log('obj - top:', entry.boundingClientRect.top)
    // console.log('root - bottom:', entry.rootBounds?.bottom)
    // console.log('obj_bottom > root - bottom', entry.rootBounds?.bottom ? entry.boundingClientRect.bottom > entry.rootBounds?.bottom : false);
    // console.log('obj_bottom < root - bottom', entry.rootBounds?.bottom ? entry.boundingClientRect.bottom < entry.rootBounds?.bottom : false);
    // console.groupEnd()

    // intersectBottom = entry.rootBounds?.bottom ? entry.boundingClientRect.bottom < entry.rootBounds?.bottom : false
  });
}

function stepsToThreshold(steps: number) {
  return [...Array(steps).keys()].map(n => n / steps)
}

onMount(() => {
  intersectionObserverSupport =
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype

  const options = {
    rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
    threshold: stepsToThreshold(steps)
    // threshold: threeshold
  };

  if (intersectionObserverSupport) {
    observer = new IntersectionObserver(intersectPercent, options)
    observer.observe(element)
    unobserve = () => observer.unobserve(element)
  }

  return unobserve
});

</script>


<div style={`--w: ${width}; --h: ${height}`} bind:this={element}>
  <slot {percent} {unobserve} {intersectBottom}></slot>
</div>



<style>
  div { width: var(--w, 100%); height: var(--h, 100%); }
</style>