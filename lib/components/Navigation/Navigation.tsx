import { FC } from 'react'
import { SLink, SNavigation } from './navigationStyles.ts'
import { useTheme } from '@contexts'

export interface Link {
  label: string
  path: string
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
          {link.label}
        </SLink>
      ))}
    </SNavigation>
  )
}
