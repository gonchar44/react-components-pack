import { SvgIcon } from './SvgIcon.tsx'
import { Meta, StoryContext, StoryObj } from '@storybook/react'
import MockIcon from '@assets/icons/bookmark.svg'

const meta = {
  component: SvgIcon,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (_: string, context: StoryContext) => {
          const { $icon, ...rest } = context.args
          const restProps = Object.entries(rest)
            .map(([key, value]) => {
              return typeof value === 'string'
                ? `${key}="${value}"`
                : `${key}={${JSON.stringify(value)}}`
            })
            .join(' ')

          return `<SvgIcon $icon={MockIcon} ${restProps} />`
        }
      }
    }
  },
  argTypes: {
    $icon: { table: { disable: true } }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SvgIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    $icon: MockIcon,
    $color: '#000000',
    $css: {
      width: 21,
      height: 21
    }
  }
}

export const Colored: Story = {
  args: {
    $icon: MockIcon,
    $color: '#ff0000'
  }
}

export const Larger: Story = {
  args: {
    $icon: MockIcon,
    $color: '#000000',
    $css: {
      width: 30,
      height: 30
    }
  }
}
