import { Field, FieldProps } from './Field.tsx'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useEffect, useState } from 'react'

const meta = {
  component: Field,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onChange: fn()
  }
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

const Template = ({ value, $errorMessage, ...rest }: FieldProps) => {
  const [newValue, setNewValue] = useState(value)

  useEffect(() => {
    setNewValue(value)
  }, [value])

  return (
    <div style={{ width: 350, padding: 10 }}>
      <Field
        {...rest}
        value={newValue}
        $errorMessage={newValue.length < 3 ? $errorMessage : ''}
        onChange={(e) => setNewValue(e.target.value)}
        name="firstName"
      />
    </div>
  )
}

export const Default: Story = {
  render: (args: FieldProps) => <Template {...args} />,
  args: {
    value: '',
    name: 'firstName',
    placeholder: 'Enter your first name'
  }
}

export const Label: Story = {
  render: (args: FieldProps) => <Template {...args} />,
  args: {
    value: '',
    name: 'firstName',
    $label: 'First name'
  }
}

export const Error: Story = {
  render: (args: FieldProps) => <Template {...args} />,
  args: {
    $label: 'First name',
    value: '',
    name: 'firstName',
    $errorMessage: 'Minimum length of value is 3'
  }
}

export const Search: Story = {
  render: (args: FieldProps) => <Template {...args} />,
  args: {
    $isSearch: true,
    value: '',
    name: 'search',
    placeholder: 'Search'
  }
}
