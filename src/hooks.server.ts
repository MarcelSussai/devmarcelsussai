import { css_global_static } from '$theme-scheme'
import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'



const seq_func_01: Handle = async ({ event, resolve }) => {
  return await resolve(event, {
    transformPageChunk: ({ html }) => html.replace(
      '/*--css_global_static--*/',
      css_global_static
    )
  })
}



export const handle = sequence(seq_func_01,)