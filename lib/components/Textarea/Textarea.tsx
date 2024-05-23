import { FC, FocusEvent } from 'react'
import {
  SAreaWrapper,
  SLimitLabel,
  STextarea,
  SWrapper
} from './textareaStyles.ts'
import { ErrorMessage, Label } from '@common'
import { useTheme } from '@contexts'

export interface TextareaProps {
  /**
   * 	Specifies the amount of rows in the field
   */
  rows?: number
  /**
   * 	Specifies the maximum number of characters
   */
  $max?: number
  /**
   * Textarea form name
   */
  name: string
  /**
   * Represents textarea label
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
   * Shows validation error message
   */
  $errorMessage?: string
  /**
   * Responsible for resizing of the field
   */
  $isResize?: boolean
  /**
   * Textarea handler
   */
  onChange: (value: FocusEvent<HTMLTextAreaElement>) => void
}

export const Textarea: FC<TextareaProps> = ({
  $isResize = true,
  $max,
  $label,
  name,
  value,
  $errorMessage,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <SWrapper>
      {!!$label && (
        <Label text={$label} name={name} isError={!!$errorMessage} />
      )}

      <SAreaWrapper>
        <STextarea
          {...rest}
          id={name}
          name={name}
          value={value}
          maxLength={$max}
          $max={$max}
          $isResize={$isResize}
          $isError={!!$errorMessage}
          $theme={theme}
        />

        {!!$max && (
          <SLimitLabel $isError={!!$errorMessage} $theme={theme}>
            {value.length}/{$max}
          </SLimitLabel>
        )}
      </SAreaWrapper>

      {!!$errorMessage && <ErrorMessage errorMessage={$errorMessage} />}
    </SWrapper>
  )
}
