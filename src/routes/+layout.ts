import '$styles/global.css'
import '$styles/utils.css'

export function load({ url }) {
  return {
    url: url.pathname,
  }
}