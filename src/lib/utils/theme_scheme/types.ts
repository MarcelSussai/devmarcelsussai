
type typeOfColor = string | undefined
export interface MakeColorTones {
  c025?: typeOfColor,
  c050?: typeOfColor,
  c075?: typeOfColor,
  c100?: typeOfColor,
  c125?: typeOfColor,
  c150?: typeOfColor,
  c175?: typeOfColor,
  c200?: typeOfColor,
  c225?: typeOfColor,
  c250?: typeOfColor,
  c275?: typeOfColor,
  c300?: typeOfColor,
  c325?: typeOfColor,
  c350?: typeOfColor,
  c400?: typeOfColor,
  c450?: typeOfColor,
  c500?: typeOfColor,
  c550?: typeOfColor,
  c600?: typeOfColor,
  c650?: typeOfColor,
  c675?: typeOfColor,
  c700?: typeOfColor,
  c725?: typeOfColor,
  c750?: typeOfColor,
  c775?: typeOfColor,
  c800?: typeOfColor,
  c825?: typeOfColor,
  c850?: typeOfColor,
  c875?: typeOfColor,
  c900?: typeOfColor,
  c925?: typeOfColor,
  c950?: typeOfColor,
  c975?: typeOfColor,
}

export interface SchemeColors<T> {
  default?: T
  grey?: T
  main?: T
  second?: T
  limeGreen?: T
  green?: T
  leaf?: T
  strongGreen?: T
  aqua?: T
  teal?: T
  cyan?: T
  blue?: T
  purple?: T
  pink?: T
  wine?: T
  paleRed?: T
  red?: T
  strongRed?: T
  brown?: T
  orange?: T
  strongYellow?: T
  yellow?: T
  gold?: T
  cream?: T
}

export interface ColorsParams {
  colorsAmount: number
  colorsShiftAmount: number
  mixColor?: string
  rotate: number
  saturation: number
  mainColor: string
}

export interface ColorsListParams {
  mainColor: string
  amountD?: number
  amountL?: number
}

export interface ColorsListReturns {
  lightColors: string[]
  mainColor: string
  darkColors: string[]
}

export type SizeTones = 'XS' | 'S' | 'M' | 'B' | 'L' | 'XL'
export interface OptMakeColorTones { size?: SizeTones, color: string }

export interface I_alphas_values {
  tone: string
  vals: string[][]
}