import React from 'react'
import { useBusinessCardTheme } from './hooks/useBusinessCardTheme'
import type { Theme } from './types'

interface BusinessCardDividerProps {
  theme: Theme
}

export const BusinessCardDivider: React.FC<BusinessCardDividerProps> = ({
  theme,
}) => {
  const { dividerClassName } = useBusinessCardTheme(theme)

  return <div className={dividerClassName} />
}
