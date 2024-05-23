import { FC } from 'react'
import { SLabel } from './labelStyles.ts'
import { useTheme } from '@contexts'

interface LabelProps {
  text: string
  name: string
  isError?: boolean | undefined
}

export const Label: FC<LabelProps> = ({ text, name, isError }) => {
  const theme = useTheme()

  return (
    <SLabel $isError={isError} $theme={theme} htmlFor={name}>
      {text}
    </SLabel>
  )
}
