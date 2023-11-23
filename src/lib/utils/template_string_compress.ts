export default function template_string_compress(
    strings: TemplateStringsArray, ...vars: unknown[]
  ) {
  let result: string = ''
  strings.forEach((str: string, i: number) => {
    result += `${str}${i === strings.length - 1 ? '' : vars[i]}`
  })
  return result.replace(/[\r\n\s]/gm, '').trim()
}