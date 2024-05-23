import { FC } from 'react'
import { SErrorMessage } from './errorMessageStyles.ts'
import { useTheme } from '@contexts'

interface ErrorMessageProps {
  errorMessage: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage }) => {
  const theme = useTheme()

  return <SErrorMessage $theme={theme}>{errorMessage}</SErrorMessage>
}
