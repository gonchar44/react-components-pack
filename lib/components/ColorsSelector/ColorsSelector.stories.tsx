import { Color, ColorsSelector, ColorsSelectorProps } from '@components'
import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta = {
  component: ColorsSelector,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onChange: fn()
  }
} satisfies Meta<typeof ColorsSelector>

export default meta
type Story = StoryObj<ColorsSelectorProps>

const Template = ({ colors }: ColorsSelectorProps) => {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0])

  return (
    <ColorsSelector
      value={selectedColor}
      colors={colors}
      onChange={(color) => setSelectedColor(color)}
    />
  )
}

export const Default: Story = {
  render: (args: ColorsSelectorProps) => <Template {...args} />,
  args: {
    colors: [
      { label: 'Orange', hex: '#ffa500' },
      { label: 'Blue', hex: '#61a9ff' },
      { label: 'Green', hex: '#80a872' }
    ]
  }
}
