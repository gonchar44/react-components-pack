import { createContext, ReactNode, useContext } from 'react'
import { defaultTheme } from './defaultTheme.ts'
import { ThemeProps } from '@types'
import { deepMergeThemes } from '@utils'

interface ThemeProviderProps {
  theme?: ThemeProps
  children: ReactNode
}

const ThemeContext = createContext<ThemeProps>(defaultTheme)

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const mergedThemes = deepMergeThemes(defaultTheme, theme)

  return (
    <ThemeContext.Provider value={mergedThemes}>
      {children}
    </ThemeContext.Provider>
  )
}
