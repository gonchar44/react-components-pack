import { FC, FocusEvent, useState } from 'react'
import { SvgIcon } from '../SvgIcon'
import SearchIcon from '@assets/icons/search.svg'
import EyeIcon from '@assets/icons/eye.svg'
import HiddenEyeIcon from '@assets/icons/hidden-eye.svg'
import { SInput, SInputWrapper, SWrapper, PasswordButton } from './fieldStyles.ts'
import { ErrorMessage, Label } from '@common'
import { useTheme } from '@contexts'

export interface FieldProps {
  /**
   * Shows field search icon
   */
  $isSearch?: boolean
  /**
   * 	Specifies the maximum number of characters
   */
  $max?: number
  /**
   * Input form name
   */
  name: string
  /**
   * Represents input label
   */
  $label?: string
  /**
   * Represents the current value
   */
  value: string
  /**
   * Provides a short hint to the user
   */
  placeholder?: string
  /**
   * Field type
   */
  type?:  'text' | 'password'
  /**
   * Mark field borders as error
   */
  $isError?: boolean
  /**
   * Shows validation error message
   */
  $errorMessage?: string
  /**
   * Makes a field non-interactive and visually distinct
   */
  disabled?: boolean
  /**
   * Input handler
   */
  onChange: (value: FocusEvent<HTMLInputElement>) => void
}

export const Field: FC<FieldProps> = ({
  $isSearch,
  $max,
  $label,
  name,
  value,
  type = 'text',
  $isError = false,
  $errorMessage,
  ...rest
}) => {
  const theme = useTheme()
  const [isHiddenPassword, setIsHiddenPassword] = useState(true)
  const fieldType = !isHiddenPassword ? 'text' : type

  const togglePasswordView = () => {
    setIsHiddenPassword(prevState => !prevState)
  }

  return (
    <SWrapper $isWrapperGap={!!$label?.length || !!$errorMessage?.length}>
      {!!$label && (
        <Label text={$label} name={name} isError={!!$errorMessage || $isError} />
      )}

      <SInputWrapper>
        {$isSearch && (
          <SvgIcon
            $icon={SearchIcon}
            $css={{
              position: 'absolute',
              top: '50%',
              left: '15px',
              transform: 'translateY(-50%)'
            }}
          />
        )}

        <SInput
          {...rest}
          id={name}
          name={name}
          type={fieldType}
          value={value}
          maxLength={$max}
          $isSearch={$isSearch}
          $isError={!!$errorMessage || $isError}
          $theme={theme}
        />

        {type === 'password' && (
          <PasswordButton onClick={togglePasswordView}>
            <SvgIcon $icon={isHiddenPassword ? EyeIcon : HiddenEyeIcon} />
          </PasswordButton>
        )}
      </SInputWrapper>

      {!!$errorMessage && <ErrorMessage errorMessage={$errorMessage} />}
    </SWrapper>
  )
}
