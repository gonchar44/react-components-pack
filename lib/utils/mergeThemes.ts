import { ThemeProps } from '@types'

export const deepMergeThemes = (
  defaultTheme: ThemeProps,
  customTheme?: ThemeProps
): ThemeProps => {
  const merge = (defaultObj: any, customObj: any): any => {
    if (!customObj) {
      return defaultObj
    }
    const result: any = { ...defaultObj }

    for (const key in customObj) {
      if (customObj.hasOwnProperty(key)) {
        if (
          typeof customObj[key] === 'object' &&
          customObj[key] !== null &&
          !Array.isArray(customObj[key])
        ) {
          result[key] = merge(defaultObj[key], customObj[key])
        } else if (customObj[key] !== '') {
          result[key] = customObj[key]
        }
      }
    }

    return result
  }

  return merge(defaultTheme, customTheme)
}
