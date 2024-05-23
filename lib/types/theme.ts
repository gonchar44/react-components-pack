export interface ColorCategory {
  dark: string
  light: string
  error?: string
  [key: string]: string | undefined
}

export interface ThemeProps {
  colors: {
    primary: ColorCategory
    secondary: ColorCategory
  }
}
