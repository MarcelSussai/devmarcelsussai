import { mainColors, sizeTones } from "./scheme_colors"
import type {
  ColorsParams,
  ColorsListParams,
  ColorsListReturns,
  MakeColorTones,
  OptMakeColorTones,
  SchemeColors,
  I_alphas_values
} from "./types"
import Color from 'color'



const XL_intensityValues = [
  'c025', 'c050', 'c075', 'c100',
  'c125', 'c150', 'c175', 'c200',
  'c225', 'c250', 'c275', 'c300',
  'c325', 'c350', 'c400', 'c450',
  'c500',
  'c550', 'c600', 'c650', 'c675',
  'c700', 'c725', 'c750', 'c775',
  'c800', 'c825', 'c850', 'c875',
  'c900', 'c925', 'c950', 'c975',
]
const L_intensityValues = [
  'c025', 'c050', 'c075', 'c100',
  'c125', 'c150', 'c200', 'c250',
  'c300', 'c350', 'c400', 'c450',
  'c500',
  'c550', 'c600', 'c650', 'c700',
  'c750', 'c800', 'c850', 'c875',
  'c900', 'c925', 'c950', 'c975',
]
const B_intensityValues = [
  'c050', 'c100', 'c150',
  'c200', 'c250', 'c300',
  'c350', 'c400', 'c450',
  'c500',
  'c550', 'c600', 'c650',
  'c700', 'c750', 'c800',
  'c850', 'c900', 'c950',
]
const M_intensityValues = [
  'c100', 'c150', 'c200',
  'c300', 'c350', 'c400',
  'c500',
  'c550', 'c600', 'c700',
  'c750', 'c800', 'c900',
]
const S_intensityValues = [
  'c100', 'c200', 'c300', 'c400',
  'c500',
  'c600', 'c700', 'c800', 'c900',
]
const XS_intensityValues = [
  'c300', 'c400',
  'c500',
  'c600', 'c700',
]



const errorColor = '#FF0000'



const rawHexColorToHexColor = (raw: string) => (
  raw.substring(0, 1) !== '#' ? '#' + raw : raw
)



const hexColorToRawHexColor = (hex: string) => (
  hex.substring(0, 1) !== '#' ? hex :
  hex.substring(1, hex.length)
)



const isValidHex = (color: string) => {
  color = hexColorToRawHexColor(color)
  switch (color.length) {
    case 3: return /^[0-9A-F]{3}$/i.test(color)
    case 6: return /^[0-9A-F]{6}$/i.test(color)
    case 8: return /^[0-9A-F]{8}$/i.test(color)
    default: return false
  }
}



const getColorList = ({
  colorsAmount,
  colorsShiftAmount,
  mixColor,
  rotate,
  saturation,
  mainColor
}: ColorsParams): string[] => {
  let step: number
  // eslint-disable-next-line prefer-const
  let colorList: string[] = []
  const raw = rawHexColorToHexColor(mainColor)
  const isValid = isValidHex(raw)
  for (step = 0; step < colorsAmount; step++) {
    if(isValid) {
      colorList.push(
        Color(isValid ? raw : errorColor)
        .rotate((step + 1) / colorsAmount * -rotate)
        .saturate((step + 1) / colorsAmount * (saturation / 100))
        .mix(Color(mixColor), (colorsShiftAmount / 100) * (step + 1) / colorsAmount).hex()
      )
    } else { colorList.push(errorColor) }
  }
  return colorList
}



const makingDarkColors = ({
  colorsAmount,
  colorsShiftAmount,
  rotate,
  saturation,
  mainColor
}: ColorsParams): string[] => {
  return getColorList({
    colorsAmount,
    colorsShiftAmount,
    mixColor: 'black',
    rotate,
    saturation,
    mainColor
  }).map((color) => (color))
}



const makingLightColors = ({
  colorsAmount,
  colorsShiftAmount,
  rotate,
  saturation,
  mainColor
}: ColorsParams): string[] => {
  return getColorList({
    colorsAmount,
    colorsShiftAmount,
    mixColor: 'white',
    rotate,
    saturation,
    mainColor
  }).map((color) => (color))
}



const listOfColors = (
  { mainColor, amountD = 9, amountL = 9 }: ColorsListParams
): ColorsListReturns => {
  const dark_props: ColorsParams = {
    colorsAmount: amountD,
    colorsShiftAmount: 86.4,
    rotate: 0,
    saturation: 100,
    mainColor
  }
  const light_props: ColorsParams = {
    colorsAmount: amountL,
    colorsShiftAmount: 92,
    rotate: 0,
    saturation: 100,
    mainColor
  }
  const darkColors = makingDarkColors(dark_props)
  const lightColors = makingLightColors(light_props)
  const result = {lightColors, mainColor, darkColors}
  return result
}



const maker = (
  intensityValues: string[], amount: number, color: string
): MakeColorTones => {
  let result: MakeColorTones = {},
      count: number = 0
  const colorList: ColorsListReturns = listOfColors(
    { mainColor: color, amountD: amount, amountL: amount }
  )
  intensityValues.map((value, index) => {
    const numberValue = Number(value.substring(1))
    const state = numberValue < 500 ? 'light' :
          numberValue > 500 ? 'dark' : 'main'
    if(index === 0 ) count = (amount - 1)
    if(index === amount ) count = 0
    result = {
      ...result,
      [value]: (
        state === 'light' ? colorList.lightColors[count--] :
        state === 'dark' ? colorList.darkColors[count++] :
        colorList.mainColor
        )
      }
    }
  )
  return result
}



/**
 * ```size``` options:
 * ```markdown
 * XS = extra small
 * S = small
 * M = medium
 * B = big
 * L = large
 * XL = extra large
 * ```
*/
const makeTones = ({size = 'L', color}: OptMakeColorTones): MakeColorTones => {
  if(size === 'XL') { return maker(XL_intensityValues, 16, color) }
  if(size === 'L')  { return maker(L_intensityValues, 12, color) }
  if(size === 'B')  { return maker(B_intensityValues, 9, color) }
  if(size === 'M')  { return maker(M_intensityValues, 6, color) }
  if(size === 'S')  { return maker(S_intensityValues, 4, color) }
  if(size === 'XS') { return maker(XS_intensityValues, 2, color) }
  return {}
}



const colorValues = Object.entries(mainColors)



const raw_schemeColors = (): SchemeColors<MakeColorTones> => {
  let acc: SchemeColors<MakeColorTones> = {}
  colorValues.map((val) => {
    acc = {
      ...acc,
      [val[0]]: makeTones({color: val[1], size: sizeTones})
    }
  })
  return acc
}



export const schemeColors: SchemeColors<MakeColorTones> = raw_schemeColors()


export const make_clr_tones = (
  color_tones: MakeColorTones | undefined,
  color_name: string,
): string => {
  let results: string = ''
  if(color_tones) {
    const entries = Object.entries(color_tones)
    // console.log(entries);
    entries.map((v: string[]) => {
      results += `--clr-${color_name}-${v[0].substring(1)}: ${v[1]};`
    })
  }
  return results
}




export const make_clr_alphas = (
  color_tones: MakeColorTones | undefined,
  aphas_values: I_alphas_values[],
  color_name: string,
) => {
  let results: string = ''
  if(color_tones) {
    const entries = Object.entries(color_tones)
    entries.map((v1) => {
      aphas_values.map((v2) => {
        const tone    = v1[0].substring(1)
        const color   = v1[1]
        if (tone === v2.tone) {
          v2.vals.map((v3) => {
            results += `--clr-${color_name}-${tone}-${v3[0]}: ${color}${v3[1]};`
          })
        }
      })
    })
  }
  return results
}