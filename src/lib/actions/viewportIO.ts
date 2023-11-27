
interface I_view_io {
  top?:       number
  bottom?:    number
  left?:      number
  right?:     number
  steps?:     number
  percent?:   number
}



function stepsToThreshold(steps: number) {
  return [...Array(steps).keys()].map(n => n / steps)
}

export function view_io(
  node: HTMLElement, {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bottom, left, top, right, steps = 100, percent = 0
  }: I_view_io = {}
) {
  let observer: IntersectionObserver
  let unobserve = () => {}
  const intersectionObserverSupport =
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  const options = {
    rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
    threshold: stepsToThreshold(steps)
  };
  if (intersectionObserverSupport) {
    observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if( entry.rootBounds?.bottom &&
            entry.boundingClientRect.bottom > entry.rootBounds?.bottom
          ) {
            percent = Math.round(Math.ceil(entry.intersectionRatio * 100))
          } else { percent = 100 }
        })
      }, options)
    observer.observe(node)
    unobserve = () => observer.unobserve(node)
  }

  return {
    destroy() {
      unobserve()
    }
  }
}