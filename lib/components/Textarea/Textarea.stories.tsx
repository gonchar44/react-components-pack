import { Textarea, TextareaProps } from './Textarea.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

const meta = {
  component: Textarea,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onChange: fn()
  }
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

const Template = ({ value, $errorMessage, ...rest }: TextareaProps) => {
  const [newValue, setNewValue] = useState(value)

  useEffect(() => {
    setNewValue(value)
  }, [value])

  return (
    <div style={{ width: 350, padding: 10 }}>
      <Textarea
        {...rest}
        value={newValue}
        $errorMessage={newValue.length < 3 ? $errorMessage : ''}
        onChange={(e) => setNewValue(e.target.value)}
        name="comment"
      />
    </div>
  )
}

export const Default: Story = {
  render: (args: TextareaProps) => <Template {...args} />,
  args: {
    value: '',
    name: 'comment',
    placeholder: 'Enter you comment',
    rows: 7
  }
}

export const Limit: Story = {
  render: (args: TextareaProps) => <Template {...args} />,
  args: {
    value: '',
    name: 'comment',
    placeholder: 'Enter you comment',
    rows: 7,
    $max: 250
  }
}

export const Label: Story = {
  render: (args: TextareaProps) => <Template {...args} />,
  args: {
    value: '',
    name: 'comment',
    $label: 'Comment',
    rows: 7
  }
}

export const Error: Story = {
  render: (args: TextareaProps) => <Template {...args} />,
  args: {
    $label: 'Comment',
    value: '',
    name: 'comment',
    $errorMessage: 'Minimum length of value is 3',
    rows: 7
  }
}
