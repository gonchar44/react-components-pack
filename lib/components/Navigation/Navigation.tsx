import { FC } from 'react'
import { SLink, SNavigation, SNotificationAmount, SNotification } from './navigationStyles.ts'
import { useTheme } from '@contexts'

export interface Link {
  label: string
  path: string
  isNotification?: boolean
  notificationsAmount?: number
}

interface NavigationProps {
  /**
   * List of navigation links
   */
  links: Link[]
}

export const Navigation: FC<NavigationProps> = ({ links }) => {
  const theme = useTheme()

  return (
    <SNavigation $theme={theme}>
      {links.map((link, linkIndex) => (
        <SLink to={link.path} $theme={theme} key={linkIndex}>
          {!!link.notificationsAmount && (
            <SNotificationAmount $theme={theme}>
              {link.notificationsAmount}
            </SNotificationAmount>
          )}

          {!link.notificationsAmount && link.isNotification && (
            <SNotification $theme={theme}/>
          )}

          <span>{link.label}</span>
        </SLink>
      ))}
    </SNavigation>
  )
}
