import { Button } from './Button.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
    $variant: 'primary',
    type: 'button',
    disabled: false,
    $size: 'medium'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    $variant: 'secondary',
    type: 'button',
    disabled: false,
    $size: 'medium'
  }
}

export const Transparent: Story = {
  args: {
    children: 'Transparent',
    $variant: 'transparent',
    type: 'button',
    disabled: false,
    $size: 'medium'
  }
}

export const Small: Story = {
  args: {
    children: 'Small',
    $variant: 'secondary',
    type: 'button',
    disabled: false,
    $size: 'small'
  }
}

export const Medium: Story = {
  args: {
    children: 'Medium',
    $variant: 'secondary',
    type: 'button',
    disabled: false,
    $size: 'medium'
  }
}

export const Large: Story = {
  args: {
    children: 'Large',
    $variant: 'secondary',
    type: 'button',
    disabled: false,
    $size: 'large'
  }
}
