import { sineInOut, } from 'svelte/easing'
import type { EasingFunction } from 'svelte/transition'




interface I_appear_open {
  delay?: number
  duration?: number
  open?: boolean
  easing?: EasingFunction
}
export function appear_open(node: HTMLElement, {
  duration      = 1000,
  delay         = 0,
  open          = true,
  easing        = sineInOut,
}: I_appear_open) {
  return {
    duration, delay, easing,
    css: (t: number, u: number) => {
        if (open) {
          return `
            width: ${t * 100}%;
            opacity: ${t};
          `
        } else {
          return `
            width: ${u * 100};
            opacity: ${u};
          `
        }
    }
  }
}
