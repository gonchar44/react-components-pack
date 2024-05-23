import { FC } from 'react'
import { SWrapper, SLabel, SInputRadio, STick } from './colorsSelectorStyles.ts'

export interface Color {
  label: string
  hex: string
}

export interface ColorsSelectorProps {
  /**
   * Represents the current value
   */
  value: Color
  /**
   * The list of colors
   */
  colors: Color[]
  /**
   * Select handler
   */
  onChange: (color: Color) => void
}

export const ColorsSelector: FC<ColorsSelectorProps> = ({
  value,
  colors = [],
  onChange
}) => (
  <SWrapper>
    {colors.map((color, colorIndex) => {
      const isChecked = value?.hex === color.hex

      return (
        <SLabel title={color.label} key={colorIndex}>
          <SInputRadio
            type="radio"
            name={color.label}
            value={value.label}
            checked={isChecked}
            onChange={() => onChange(color)}
          />
          <STick $color={color.hex} $isChecked={isChecked} />
        </SLabel>
      )
    })}
  </SWrapper>
)
