import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Navigation } from '@components'

const meta = {
  component: Navigation,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <header style={{ display: 'flex', justifyContent: 'center' }}>
          <Story />
        </header>
      </MemoryRouter>
    )
  ],
  tags: ['autodocs']
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    links: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/products' },
      { label: 'Contacts', path: '/contacts' },
      { label: 'About', path: '/about' }
    ]
  }
}
