import { useMemo, useState } from 'react'
import { Tab, Tabs, TabsProps } from './Tabs.tsx'
import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Tabs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onClick: fn()
  },
  argTypes: {
    children: { table: { disable: true } }
  }
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabs: Tab[] = [
  { label: 'Tab 1', index: 'tab_1', content: <span>Tab 1 Content</span> },
  { label: 'Tab 2', index: 'tab_2', content: <span>Tab 2 Content</span> },
  { label: 'Tab 3', index: 'tab_3', content: <span>Tab 3 Content</span> }
]

const Template = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].index)

  const activeContent = useMemo(() => {
    const active = tabs.find((tab) => tab.index === activeTab)
    if (active && active.content) return active.content

    return null
  }, [activeTab])

  return (
    <div style={{ width: 450 }}>
      <Tabs tabs={tabs} activeTab={activeTab} onClick={setActiveTab}>
        {activeContent}
      </Tabs>
    </div>
  )
}

export const Default: Story = {
  render: (args: TabsProps) => <Template {...args}>...</Template>,
  args: {
    activeTab: tabs[0].index,
    tabs,
    children: ''
  }
}
