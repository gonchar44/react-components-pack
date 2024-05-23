import { FC, ReactNode } from 'react'
import { SWrapper, STabs, STab, SContent } from './tabsStyles.ts'
import { useTheme } from '@contexts'

export interface Tab {
  label: string
  index: string
  content: ReactNode
}

export interface TabsProps {
  /**
   * Represents the active tab
   */
  activeTab: string
  /**
   * The list of tabs
   */
  tabs: Tab[]
  /**
   * Tab click handler
   * @param tab
   */
  onClick: (tab: string) => void
  children: ReactNode
}

export const Tabs: FC<TabsProps> = ({ activeTab, tabs, children, onClick }) => {
  const theme = useTheme()

  return (
    <SWrapper>
      <STabs>
        {tabs.map((tab) => (
          <STab
            $isActive={tab.index === activeTab}
            $theme={theme}
            onClick={() => onClick(tab.index)}
            key={tab.index}
          >
            {tab.label}
          </STab>
        ))}
      </STabs>

      <SContent $theme={theme}>{children}</SContent>
    </SWrapper>
  )
}
