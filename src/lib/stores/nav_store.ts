import { writable } from 'svelte/store'



export const is_open_toggle = writable(false)
export const hand_is_open_tog = () => is_open_toggle.update(v => !v)