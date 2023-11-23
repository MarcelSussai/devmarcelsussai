import {
  schemeColors as colors,
  make_clr_alphas,
  make_clr_tones,
} from './maker_colors'
import { mainColors } from './scheme_colors'
import { compress } from '$utils'



const grey_tones    = make_clr_tones(colors.grey,   'grey')
const main_tones    = make_clr_tones(colors.main,   'main')
const second_tones  = make_clr_tones(colors.second, 'second')
const gold_tones    = make_clr_tones(colors.gold,   'gold')



const grey_alphas = make_clr_alphas(colors.grey, [
  { tone: '025', vals: [
    ['01', '08'], ['02', '32'], ['03', '80'], ['04', '40'], ['05', 'D0']
  ] },
  { tone: '075', vals: [ ['01', '48'], ] },
  { tone: '150', vals: [ ['01', 'A0'], ] },
  { tone: '750', vals: [ ['01', '28'], ] },
  { tone: '800', vals: [ ['01', '32'], ] },
  { tone: '825', vals: [ ['01', '64'], ] },
  { tone: '850', vals: [ ['01', '16'], ] },
  { tone: '875', vals: [ ['01', '40'], ['02', 'E8'], ['03', '24'] ] },
  { tone: '900', vals: [ ['01', '80'], ['02', 'A0'], ] },
  { tone: '925', vals: [ ['01', 'E0'], ] },
  { tone: '950', vals: [ ['01', 'E0'], ] },
  { tone: '975', vals: [ ['01', 'E0'], ['02', 'F0'],] },
], 'grey')
const main_alphas = make_clr_alphas(colors.main, [
  { tone: '175', vals: [ ['01', '80'], ] },
], 'main')
const second_alphas = make_clr_alphas(colors.second, [
  { tone: '175', vals: [ ['01', '80'], ] },
], 'second')
const gold_alphas = make_clr_alphas(colors.gold, [
  { tone: '500', vals: [ ['01', 'FF'], ] },
], 'gold')



const css_global_static = compress`
  :root {
    ${grey_tones}
    ${grey_alphas}

    ${main_tones}
    ${main_alphas}

    ${second_tones}
    ${second_alphas}

    ${gold_tones}
    ${gold_alphas}

    --clr-red-500: ${colors.red?.c500};
  }
`



export {
  colors,
  mainColors,
  compress,
  css_global_static,
}