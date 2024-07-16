import { FC, MouseEvent, ReactNode } from 'react'
import { useTheme } from '@contexts'
import { SButton } from './buttonStyles.ts'

export interface ButtonProps {
  /**
   * Button style
   */
  $isFullWidth?: boolean
  $variant?: 'primary' | 'secondary' | 'transparent'
  /**
   * Button size
   */
  $size?: 'small' | 'medium' | 'large'
  /**
   * Button type
   */
  type?: 'submit' | 'button'
  /**
   * Makes a button non-interactive and visually distinct
   */
  disabled?: boolean
  /**
   * Click handler
   */
  onClick?: (e: MouseEvent<HTMLElement>) => void
  /**
   * Button contents
   */
  children?: string | ReactNode
}

export const Button: FC<ButtonProps> = ({
  $isFullWidth = false,
  $variant = 'primary',
  $size = 'medium',
  type = 'button',
  children,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <SButton
      $isFullWidth={$isFullWidth}
      $variant={$variant}
      $size={$size}
      $theme={theme}
      type={type}
      {...rest}
    >
      {children}
    </SButton>
  )
}
